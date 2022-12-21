import os
import pickle

class Serializer:

    @classmethod
    def write_pyobj(obj, objpath):
        if not os.path.exists(objpath):
            os.makedirs(
                os.path.dirname(objpath), exist_ok=True
            )
        with open(objpath, 'wb') as f:
            pickle.dump(obj, f)

    @classmethod
    def read_pyobj(objpath):
        if not os.path.exists(objpath):
            raise Exception("Failed to read serialized obj: path does not exist.")
        with open(objpath, 'rb') as f:
            return pickle.load(f)

    @classmethod
    def remove_pyobj(objpath):
        if os.path.exists(objpath):
            os.remove(objpath)
