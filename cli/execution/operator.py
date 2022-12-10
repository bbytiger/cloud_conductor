import pysftp
from pathlib import Path
from cryptography.hazmat.primitives import serialization as crypto_serialization
from cryptography.hazmat.primitives.asymmetric import rsa
from cryptography.hazmat.backends import default_backend as crypto_default_backend

def create_key():
    key = rsa.generate_private_key(
        backend=crypto_default_backend(),
        public_exponent=65537,
        key_size=2048
    )
    private_key = key.private_bytes(
        crypto_serialization.Encoding.PEM,
        crypto_serialization.PrivateFormat.PKCS8,
        crypto_serialization.NoEncryption()
    )
    public_key = key.public_key().public_bytes(
        crypto_serialization.Encoding.OpenSSH,
        crypto_serialization.PublicFormat.OpenSSH
    )
    return str(public_key, 'utf-8'), str(private_key, 'utf-8')

class ServerSSHOperator:

    def __init__(self, host, username, privkey_path):
        self.host = host
        self.username = username
        self.privkey_path = privkey_path
        cnopts = pysftp.CnOpts()
        cnopts.hostkeys = None
        self.sftp = pysftp.Connection(
            host=host, username=username, private_key=privkey_path, cnopts=cnopts
        )

    def upload_file(self, localpath, remotepath):
        self.sftp.put(localpath, remotepath)

    def download_file(self, remotepath, localpath):
        self.sftp.get(remotepath, localpath, preserve_mtime=True)

    def pull_scripts(self):
        return self.execute_script("pull_scripts_dir.sh")

    def execute_script(self, scriptname):
        script = open(Path("./scripts") / scriptname).read()
        return self.execute_command(script)

    def execute_command(self, command):
        return self.sftp.execute(command)