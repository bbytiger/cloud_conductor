import boto3

# for pricing, reference: https://aws.amazon.com/s3/pricing/?p=pm&c=s3&z=4

def create_bucket(name, region, bucket_config):
    if region is None or name is None:
        raise Exception('incorrect params')

    s3_client = boto3.client('s3', region_name=region)
    bucket_config['LocationConstraint'] = region
    print(bucket_config)
    s3_client.create_bucket(
        Bucket=name, CreateBucketConfiguration=bucket_config)
    
if __name__ == '__main__':
    src_bucket = 'cs243-src-bucket'
    dst_bucket = 'cs243-dst-bucket'
    source_region = 'us-west-2'
    destination_region = 'eu-west-1'

    # determined by the destination region
    perGBtransfercost = 0.02

    s3 = boto3.client('s3')
    response = s3.list_buckets()
    print(response)

    # create bucket in source region
    create_bucket(name=src_bucket, region=source_region, bucket_config={})

    # upload to source bucket (ingress)

    # create bucket in destination region
    create_bucket(name=dst_bucket, region=destination_region, bucket_config={})

    # transfer to destination bucket (egress)