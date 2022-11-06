from google.cloud import storage

if __name__ == '__main__':
    src_bucket = 'cs243-src-bucket'
    project_name = 'grounded-datum-367811'

    storage_client = storage.Client(project=project_name)
    buckets = storage_client.list_buckets()
    for bucket in buckets:
        print(bucket.name)
    bucket = storage_client.create_bucket(src_bucket)