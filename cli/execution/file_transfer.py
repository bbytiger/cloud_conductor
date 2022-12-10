import pysftp

def upload_file(localpath, path, privkey_path, host, username):
    with pysftp.Connection(host=host, username=username, private_key=privkey_path) as sftp:
        sftp.put(localpath, path)

def download_file(localpath, path, privkey_path, host, username):
    with pysftp.Connection(host=host, username=username, private_key=privkey_path) as sftp:
        sftp.get(localpath, path, preserve_mtime=True)