import boto3
import uuid

regionname = "us-east1"
keyname = 'tmp_cloud_conduct_{}'.format(uuid.uuid4())
imageid = 'ami-0574da719dca65348' # default set to ubuntu
instancetype = 't2.micro'

ec2 = boto3.client('ec2', region_name=regionname)
print(ec2.describe_key_pairs())

response = ec2.create_key_pair(KeyName=keyname)
print(response)

ec2_config = {
    'ImageId': imageid,
    'InstanceType': instancetype,
    'KeyName': keyname,
    'MinCount': 1,
    'MaxCount': 1
}

response = ec2.run_instances(**ec2_config)
print(response)

# response = ec2.delete_key_pair(KeyName=keyname)
# print(response)

