import boto3
import uuid
import time
import paramiko
import json
from botocore.exceptions import ClientError


def get_ec2_client(regionname):
    ec2 = boto3.client('ec2', region_name=regionname)
    print(ec2.describe_key_pairs())
    return ec2

def create_RSA_key_pair(ec2, keyname):
    response = ec2.create_key_pair(KeyName=keyname)
    print(response)
    return response

def delete_RSA_key_pair(ec2, keyname):
    response = ec2.delete_key_pair(KeyName=keyname)
    print(response)
    return response

def create_instance(ec2, imageid, instancetype, keyname, security_group_id):
    print(security_group_id)
    ec2_config = {
        'ImageId': imageid,
        'InstanceType': instancetype,
        'KeyName': keyname,
        'MinCount': 1,
        'MaxCount': 1,
        'SecurityGroupIds': [security_group_id]
    }
    response = ec2.run_instances(**ec2_config)
    print(response)
    instanceId = response["Instances"][0]["InstanceId"]
    return instanceId


def terminate_instance(ec2, instanceId):
    response = ec2.terminate_instances(
        InstanceIds=[instanceId]
    )
    print(response)
    return response


def create_security_group(ec2):
    vpcs = ec2.describe_vpcs()
    vpc_id = vpcs.get('Vpcs', [{}])[0].get('VpcId', '')
    try:
        response = ec2.create_security_group(GroupName='TEMP_SECURITY_GROUP',
                                             Description='DESCRIPTION',
                                             VpcId=vpc_id)
        security_group_id = response['GroupId']
        print_line()
        print('Security Group Created %s in vpc %s.' % (security_group_id, vpc_id))

        data = ec2.authorize_security_group_ingress(
            GroupId=security_group_id,
            IpPermissions=[
                {'IpProtocol': 'tcp',
                 'FromPort': 80,
                 'ToPort': 80,
                 'IpRanges': [{'CidrIp': '0.0.0.0/0'}]},
                {'IpProtocol': 'tcp',
                 'FromPort': 22,
                 'ToPort': 22,
                 'IpRanges': [{'CidrIp': '0.0.0.0/0'}]}
            ])
        print('Ingress Successfully Set %s' % data)
        return security_group_id
    except ClientError as e:
        print(e)


def delete_security_group(ec2, security_group_id):
    try:
        response = ec2.delete_security_group(GroupId=security_group_id)
        print('Security Group Deleted')
    except ClientError as e:
        print(e)


def ssh_connect_with_retry(ssh, ip_address, retries, commands):
    if retries > 3:
        return False
    privkey = paramiko.RSAKey.from_private_key_file(
        './bruh.pem')
    interval = 5
    try:
        retries += 1
        print('SSH into the instance: {}'.format(ip_address))
        ssh.connect(hostname=ip_address,
                    username='ubuntu', pkey=privkey)

        print('successfully connected, executing commands... ')
    except Exception as e:
        print(e)
        time.sleep(interval)
        print('Retrying SSH connection to {}'.format(ip_address))
        ssh_connect_with_retry(ssh, ip_address, retries, commands)

    for command in commands:
        stdin, stdout, stderr = ssh.exec_command(command)
        # for testing purposes
        print('stdout:', stdout.read())
        print('stderr:', stderr.read())


def print_line():
    print("*"*80)


if __name__ == '__main__':

    regionname = "us-east-1"
    keyname = 'tmp_cloud_conduct_{}'.format(uuid.uuid4())
    imageid = 'ami-0574da719dca65348' # default set to ubuntu
    instancetype = 't2.micro'

    ec2 = get_ec2_client(regionname)
    print_line()
    security_group_id = create_security_group(ec2)
    print_line()
    delete_RSA_key_pair(ec2, keyname)
    print_line()
    keypair = create_RSA_key_pair(ec2, keyname)
    # save to temporary pem file
    with open('bruh.pem', 'w') as f:
        f.write(keypair["KeyMaterial"])
    print_line()

    instanceId = create_instance(ec2, imageid, instancetype, keyname, security_group_id)
    ec3 = boto3.resource('ec2', region_name='us-east-1')
    instance = ec3.Instance(id=instanceId)
    instance.wait_until_running()

    current_instance = list(ec3.instances.filter(InstanceIds=[instanceId]))
    ip_address = current_instance[0].public_ip_address
    print("instance public ip address: " + str(ip_address))

    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())

    # set of ssh commands to run
    commands = ['echo hello']

    ssh_connect_with_retry(ssh, ip_address, 0, commands)

    print_line()
    terminate_instance(ec2, instanceId)
    print_line()
    # sleep to make sure instance is fully terminated before deleting security group
    print("Waiting for instance to terminate before deleting security group...")
    time.sleep(120)
    delete_security_group(ec2, security_group_id)
