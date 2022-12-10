import boto3
import uuid

regionname = "us-east-1"
keyname = 'tmp_cloud_conduct_{}'.format(uuid.uuid4())
imageid = 'ami-0574da719dca65348' # default set to ubuntu
instancetype = 't2.micro'

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

def create_instance(ec2, imageid, instancetype, keyname):
    ec2_config = {
        'ImageId': imageid,
        'InstanceType': instancetype,
        'KeyName': keyname,
        'MinCount': 1,
        'MaxCount': 1
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





