import boto3
import uuid

from cloud_conductor.serverutils import ServerRSAKeyManager


class AWSInstanceDriver:
    def __init__(
        self,
        rsaKeyManager: ServerRSAKeyManager,
        zone: str = "us-east-1",
    ):
        self.zone = zone
        self.rsa_key_manager = rsaKeyManager
        self.ec2_client = boto3.client("ec2", region_name=zone)
        self.instances = {}
        self.security_groups = {}

    def add_ssh_key(self, keyname: str = ""):
        if keyname == "":
            keyname = f"tmp-key-{uuid.uuid4()}"
        if self.rsaKeyManager.find(keyname) is None:
            key_pair = self.ec2_client.create_key_pair(KeyName=keyname)
            self.rsaKeyManager.add_key(keyname, key_pair["KeyMaterial"])
        return keyname

    def remove_ssh_key(self, keyname: str):
        self.ec2_client.delete_key_pair(KeyName=keyname)
        self.rsaKeyManager.remove_key(keyname)

    def list_ssh_keys(self):
        return self.ec2_client.describe_key_pairs()

    def create_security_group(self, groupname: str = ""):
        vpcs = self.ec2_client.describe_vpcs()
        vpc_id = vpcs.get("Vpcs", [{}])[0].get("VpcId", "")
        if groupname == "":
            groupname = f"tmp_group_{uuid.uuid4()}"
        tmp_descr = f"tmp_descr_{uuid.uuid4()}"
        response = self.ec2_client.create_security_group(
            GroupName=groupname, Description=tmp_descr, VpcId=vpc_id
        )
        security_group_id = response["GroupId"]
        self.ec2_client.authorize_security_group_ingress(
            GroupId=security_group_id,
            IpPermissions=[
                {
                    "IpProtocol": "tcp",
                    "FromPort": 80,
                    "ToPort": 80,
                    "IpRanges": [{"CidrIp": "0.0.0.0/0"}],
                },
                {
                    "IpProtocol": "tcp",
                    "FromPort": 22,
                    "ToPort": 22,
                    "IpRanges": [{"CidrIp": "0.0.0.0/0"}],
                },
            ],
        )
        self.security_groups[security_group_id] = groupname
        return security_group_id, groupname

    def remove_security_group(self, security_group_id: str):
        if security_group_id in self.security_groups:
            self.ec2_client.delete_security_group(GroupId=security_group_id)
            del self.security_groups[security_group_id]

    def create_instance_ready_for_ssh(
        self,
        keyname: str,
        instancetype: str,
        security_group_id: str,
        imageid: str = "ami-0574da719dca65348",
    ):
        # raise exception if security group not found
        if security_group_id not in self.security_groups:
            raise Exception("Unknown security group id.")

        # init config and create instance
        ec2_config = {
            "ImageId": imageid,
            "InstanceType": instancetype,
            "KeyName": keyname,
            "MinCount": 1,
            "MaxCount": 1,
            "SecurityGroupIds": [security_group_id],
        }
        response = self.ec2_client.run_instances(**ec2_config)
        instanceId = response["Instances"][0]["InstanceId"]
        self.instances[instanceId] = keyname

        # wait until instance is running
        self.ec2_client.Instance(id=instanceId).wait_until_running()
        return instanceId

    def terminate_instance(self, instance_id: str):
        if instance_id in self.instances:
            self.ec2_client.terminate_instances(InstanceIds=[instance_id])
            del self.instances[instance_id]

    def get_instance_ip(self, instance_id: str):
        if instance_id not in self.instances:
            current_instance = list(
                self.ec2_client.instances.filter(InstanceIds=[instance_id])
            )
            ip_address = str(current_instance[0].public_ip_address)
            return ip_address
        return None


if __name__ == "__main__":
    # setup metadata
    regionname = "us-east-1"
    keyname = "tmp_cloud_conduct_{}".format(uuid.uuid4())
    imageid = "ami-0574da719dca65348"  # default set to ubuntu
    instancetype = "t2.micro"
    username = "ubuntu"

    # init key manager, create instance, get ip and privkey
    rsaKeyManager = ServerRSAKeyManager()
    driver = AWSInstanceDriver(rsaKeyManager=rsaKeyManager, zone=regionname)
    security_group_id, groupname = driver.create_security_group()
    driver.remove_ssh_key(keyname)
    driver.add_ssh_key(keyname)

    instanceId = driver.create_instance_ready_for_ssh(
        imageid=imageid,
        instancetype=instancetype,
        keyname=keyname,
        security_group_id=security_group_id,
    )
    ip_address = driver.get_instance_ip(instanceId)
    print(ip_address)
    privkey = rsaKeyManager.find_key(keyname)[1]
    print(privkey)

    # terminate instance
    driver.terminate_instance(instanceId)
