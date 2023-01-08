import os
import sys
from typing import List
import uuid

import requests
from google.cloud import compute_v1
from google.api_core.extended_operation import ExtendedOperation

from cloud_conductor.serverutils import ServerRSAKeyManager
from cloud_conductor.typelayer import CloudConductorEnum


class GCPInstanceDriver:
    class DiskType(CloudConductorEnum):
        STANDARD = "pd-standard"
        SSD = "pd-ssd"
        BALANCED = "pd-balanced"
        EXTREME = "pd-extreme"

    def __init__(
        self,
        project_id: str,
        api_key: str,
        rsaKeyManager: ServerRSAKeyManager,
        zone: str = "us-east1-b",
        family: str = "ubuntu-2204-lts",
        image_project: str = "ubuntu-os-cloud",
    ):
        self.family = family
        self.image_project = image_project
        self.project_id = project_id
        self.api_key = api_key
        self.zone = zone
        self.rsa_key_manager = rsaKeyManager

        self.os_image = GCPInstanceDriver.get_image_from_family(
            project=image_project, family=family
        )
        self.disks = []
        self.instances = {}
        self.instance_client = compute_v1.InstancesClient()

    @classmethod
    def get_image_from_family(project: str, family: str) -> compute_v1.Image:
        """
        Retrieve newest image part of a given family in a project.
        Args:
            project: project ID or project number
            family: name of the image family you want to get image from.
        Returns:
            An Image object.
        """
        image_client = compute_v1.ImagesClient()
        # List of public operating system (OS) images:
        # https://cloud.google.com/compute/docs/images/os-details
        newest_image = image_client.get_from_family(
            project=project,
            family=family,
        )
        return newest_image

    @classmethod
    def wait_for_extended_operation(
        operation: ExtendedOperation,
        verbose_name: str = "operation",
        timeout: int = 300,
    ):
        """
        This method will wait for the extended (long-running) operation to
        complete. If the operation is successful, it will return its result.
        If the operation ends with an error, an exception will be raised.
        If there were any warnings during the execution of the operation
        they will be printed to sys.stderr.
        Args:
            operation: a long-running operation you want to wait on.
            verbose_name: (optional) a more verbose name of the operation,
                used only during error and warning reporting.
            timeout: how long (in seconds) to wait for operation to finish.
                If None, wait indefinitely.
        Returns:
            Whatever the operation.result() returns.
        Raises:
            This method will raise the exception received from `operation.exception()`
            or RuntimeError if there is no exception set, but there is an `error_code`
            set for the `operation`.
            In case of an operation taking longer than `timeout` seconds to complete,
            a `concurrent.futures.TimeoutError` will be raised.
        """
        result = operation.result(timeout=timeout)
        if operation.error_code:
            print(
                (
                    f"Error during {verbose_name}: [Code: {operation.error_code}]:"
                    + f"{operation.error_message}"
                ),
                file=sys.stderr,
                flush=True,
            )
            print(f"Operation ID: {operation.name}", file=sys.stderr, flush=True)
            raise operation.exception() or RuntimeError(operation.error_message)
        if operation.warnings:
            print(f"Warnings during {verbose_name}:\n", file=sys.stderr, flush=True)
            for warning in operation.warnings:
                print(
                    f" - {warning.code}: {warning.message}", file=sys.stderr, flush=True
                )
        return result

    def attach_disk_from_size(
        self,
        disk_size_gb: int,
        disk_type: str = "pd-standard",
        boot: bool = True,
        auto_delete: bool = True,
    ) -> compute_v1.AttachedDisk:
        """
        Create an AttachedDisk object to be used in VM instance creation. Uses image as
        source for the new disk.
        Args:
            disk_type: the type of disk you want to create. uses the following format:
                "zones/{zone}/diskTypes/(pd-standard|pd-ssd|pd-balanced|pd-extreme)".
                For example: "zones/us-west3-b/diskTypes/pd-ssd"
            disk_size_gb: size of the new disk in gigabytes
            boot: boolean indicating whether disk used as boot disk of instance
            source_image: source image to use when creating this disk.
                must have read access to this disk. can be publicly available image or
                image from project. uses the following format:
                "projects/{project_name}/global/images/{image_name}"
            auto_delete: boolean indicating whether disk should be deleted with VM
        Returns:
            AttachedDisk object configured to be created using the specified image.
        """
        boot_disk = compute_v1.AttachedDisk()
        initialize_params = compute_v1.AttachedDiskInitializeParams()
        initialize_params.source_image = self.os_image.self_link
        initialize_params.disk_size_gb = disk_size_gb
        initialize_params.disk_type = f"zones/{self.zone}/diskTypes/{disk_type}"

        boot_disk.initialize_params = initialize_params
        boot_disk.boot = boot
        # Remember to set auto_delete to True if you want the disk to be
        # deleted when you delete your VM instance.
        boot_disk.auto_delete = auto_delete
        self.disks.append(boot_disk)
        return boot_disk

    def create_instance(
        self,
        instance_name: str = "",
        machine_type: str = "n1-standard-1",
        network_link: str = "global/networks/default",
        external_access: bool = True,
        accelerators: List[compute_v1.AcceleratorConfig] = None,
    ) -> compute_v1.Instance:
        if instance_name == "":
            instance_name = uuid.uuid4()

        # init network
        network_interface = compute_v1.NetworkInterface()
        network_interface.name = network_link
        if external_access:
            access = compute_v1.AccessConfig()
            access.type_ = compute_v1.AccessConfig.Type.ONE_TO_ONE_NAT.name
            access.name = "External NAT"
            access.network_tier = access.NetworkTier.PREMIUM.name
            network_interface.access_configs = [access]

        # create instance
        instance = compute_v1.Instance()
        instance.network_interfaces = [network_interface]
        instance.name = instance_name
        instance.disks = self.disks
        instance.machine_type = f"zones/{self.zone}/machineTypes/{machine_type}"
        if accelerators:
            instance.guest_accelerators = accelerators

        # create request
        request = compute_v1.InsertInstanceRequest()
        request.zone = self.zone
        request.project = self.project_id
        request.instance_resource = instance

        # verify request and return
        print(f"Requesting {instance_name} instance in {self.zone}...")
        operation = self.instance_client.insert(request=request)
        GCPInstanceDriver.wait_for_extended_operation(operation, "instance creation")
        print(f"Instance {instance_name} created.")
        self.instances.append(instance_name)
        return self.instance_client.get(
            project=self.project_id, zone=self.zone, instance=instance_name
        )

    def get_instance_ip(
        self,
        instance_name,
    ):
        instance = self.instance_client.get(
            project=self.project_id, zone=self.zone, instance=instance_name
        )
        return instance.network_interfaces[0].access_configs[0].nat_i_p

    def add_ssh_key(
        self,
        instance_name,
        username: str = "gcpuser",
        pubkey: str = None,
    ):
        # check instance exists
        if instance_name not in self.instances:
            print(f"Instance {instance_name} does not exist.")
            return

        # find pubkey or create is none specified
        if pubkey is None:
            pubkey, privkey = self.rsa_key_manager.create_key()
        else:
            pubkey, privkey = self.rsa_key_manager.find_key(pubkey)

        # update instance metadata and return privkey for ssh
        auth = {"Authorization": "Bearer {}".format(self.api_key)}
        instance = self.instance_client.get(
            project=self.project_id, zone=self.zone, instance=instance_name
        )
        metadata_fingerprint = instance.metadata.fingerprint
        setMetadataAction = "{}/setMetadata".format(instance.self_link)
        metadata = {
            "items": [{"key": "ssh-keys", "value": "{}:{}".format(username, pubkey)}],
            "fingerprint": metadata_fingerprint,
        }
        res = requests.post(setMetadataAction, headers=auth, json=metadata)
        assert res.status_code == 200
        return privkey

    def create_instance_ready_for_ssh(
        self,
        instance_name: str = "",
        machine_type: str = "n1-standard-1",
        network_link: str = "global/networks/default",
        external_access: bool = True,
        accelerators: List[compute_v1.AcceleratorConfig] = None,
    ) -> compute_v1.Instance:
        self.create_instance(
            instance_name,
            machine_type,
            network_link,
            external_access,
            accelerators,
        )
        privkey = self.add_ssh_key(instance_name)
        return privkey, self.get_instance_ip(instance_name)


if __name__ == "__main__":
    # load api key
    from dotenv import load_dotenv

    load_dotenv()
    apikey = os.getenv("GCP_COMPUTE_API_KEY")

    # set metadata
    zone = "us-east1-b"
    family = "ubuntu-2204-lts"
    image_project = "ubuntu-os-cloud"
    project_id = "grounded-datum-367811"
    instance_name = "cs243-test-instance"
    username = "cs243test"
    disk_type = "pd-standard"
    mmachine_type = "n1-standard-1"

    # init key manager, create instance, and get ip
    rsaKeyManager = ServerRSAKeyManager()
    gcpDriver = GCPInstanceDriver(
        family=family,
        image_project=image_project,
        project_id=project_id,
        apikey=apikey,
        zone=zone,
        rsaKeyManager=rsaKeyManager,
    )
    gcpDriver.attach_disk_from_size(10)
    instance = gcpDriver.create_instance(instance_name=instance_name)
    privkey = gcpDriver.add_ssh_key(instance_name=instance_name, username=username)
    print(privkey)
    hostip = gcpDriver.get_instance_ip(instance_name)
    print(hostip)
