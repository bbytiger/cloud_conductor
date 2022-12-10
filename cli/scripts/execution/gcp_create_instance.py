import sys, os
from typing import List

import requests
from google.cloud import compute_v1
from google.api_core.extended_operation import ExtendedOperation

import keygen

def disk_from_image(
    disk_type: str,
    disk_size_gb: int,
    boot: bool,
    source_image: str,
    auto_delete: bool = True,
) -> compute_v1.AttachedDisk:
    """
    Create an AttachedDisk object to be used in VM instance creation. Uses an image as the
    source for the new disk.
    Args:
         disk_type: the type of disk you want to create. This value uses the following format:
            "zones/{zone}/diskTypes/(pd-standard|pd-ssd|pd-balanced|pd-extreme)".
            For example: "zones/us-west3-b/diskTypes/pd-ssd"
        disk_size_gb: size of the new disk in gigabytes
        boot: boolean flag indicating whether this disk should be used as a boot disk of an instance
        source_image: source image to use when creating this disk. You must have read access to this disk. This can be one
            of the publicly available images or an image from one of your projects.
            This value uses the following format: "projects/{project_name}/global/images/{image_name}"
        auto_delete: boolean flag indicating whether this disk should be deleted with the VM that uses it
    Returns:
        AttachedDisk object configured to be created using the specified image.
    """
    boot_disk = compute_v1.AttachedDisk()
    initialize_params = compute_v1.AttachedDiskInitializeParams()
    initialize_params.source_image = source_image
    initialize_params.disk_size_gb = disk_size_gb
    initialize_params.disk_type = disk_type
    boot_disk.initialize_params = initialize_params
    # Remember to set auto_delete to True if you want the disk to be deleted when you delete
    # your VM instance.
    boot_disk.auto_delete = auto_delete
    boot_disk.boot = boot
    return boot_disk


def get_image_from_family(project: str, family: str) -> compute_v1.Image:
    """
    Retrieve the newest image that is part of a given family in a project.

    Args:
        project: project ID or project number of the Cloud project you want to get image from.
        family: name of the image family you want to get image from.

    Returns:
        An Image object.
    """
    image_client = compute_v1.ImagesClient()
    # List of public operating system (OS) images: https://cloud.google.com/compute/docs/images/os-details
    newest_image = image_client.get_from_family(project=project, family=family)
    return newest_image

def wait_for_extended_operation(
    operation: ExtendedOperation, verbose_name: str = "operation", timeout: int = 300
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
            f"Error during {verbose_name}: [Code: {operation.error_code}]: {operation.error_message}",
            file=sys.stderr,
            flush=True,
        )
        print(f"Operation ID: {operation.name}", file=sys.stderr, flush=True)
        raise operation.exception() or RuntimeError(operation.error_message)

    if operation.warnings:
        print(f"Warnings during {verbose_name}:\n", file=sys.stderr, flush=True)
        for warning in operation.warnings:
            print(f" - {warning.code}: {warning.message}", file=sys.stderr, flush=True)

    return result

def create_instance(
    project_id: str,
    zone: str,
    instance_name: str,
    disks: List[compute_v1.AttachedDisk],
    machine_type: str = "n1-standard-1",
    network_link: str = "global/networks/default",
    external_access: bool = True,
    accelerators: List[compute_v1.AcceleratorConfig] = None,
) -> compute_v1.Instance:

    # init client
    instance_client = compute_v1.InstancesClient()

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
    instance.disks = disks
    instance.machine_type = f"zones/{zone}/machineTypes/{machine_type}"
    if accelerators:
        instance.guest_accelerators = accelerators

    # create request
    request = compute_v1.InsertInstanceRequest()
    request.zone = zone
    request.project = project_id
    request.instance_resource = instance

    
    # verify request and return
    print(f"Creating the {instance_name} instance in {zone}...")
    operation = instance_client.insert(request=request)
    wait_for_extended_operation(operation, "instance creation")
    print(f"Instance {instance_name} created.")
    return instance_client.get(project=project_id, zone=zone, instance=instance_name)

def add_ssh_key(instance, gcpkey, username, pubkey=None):
    privkey = None
    if pubkey is None:
        pubkey, privkey = keygen.create_key()
    auth = { 
        "Authorization": "Bearer {}".format(gcpkey)
    }
    metadata_fingerprint = instance.metadata.fingerprint
    setMetadataAction = "{}/setMetadata".format(instance.self_link)
    metadata = {
        "items": [
            {
                "key": "ssh-keys",
                "value": "{}:{}".format(username, pubkey)
            }
        ],
        "fingerprint": metadata_fingerprint
    }
    res = requests.post(setMetadataAction, headers=auth, json=metadata)
    print(res.status_code)
    print(res.content)
    return privkey

if __name__ == "__main__":
    zone = 'us-east1-b'
    family = 'ubuntu-2204-lts'
    image_project = 'ubuntu-os-cloud'
    project_id = 'grounded-datum-367811' 
    instance_name = 'cs243-test-instance'  
    username = 'cs243test'

    newest_ubuntu = get_image_from_family(
        project=image_project, family=family
    )
    disk_type = f"zones/{zone}/diskTypes/pd-standard"
    disks = [disk_from_image(disk_type, 10, True, newest_ubuntu.self_link)]
    instance = create_instance(project_id, zone, instance_name, disks)
    
    from dotenv import load_dotenv
    load_dotenv()
    API_KEY = os.getenv('GCP_COMPUTE_API_KEY')
    privkey = add_ssh_key(instance, API_KEY)
    print(privkey)
    hostip = instance.network_interfaces[0].access_configs[0].nat_i_p
    print(hostip)