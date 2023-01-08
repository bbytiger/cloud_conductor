import os
import pathlib
import pickle

import click


class CliUtils:
    @classmethod
    def prompt_until_success(message, process_f):
        while 1:
            try:
                user_input = click.prompt(message)
                return process_f(user_input)
            except Exception as e:
                click.echo(e)
                click.echo("Please try again.")

    @classmethod
    def validate_path(path):
        if pathlib.Path(path).exists():
            return path
        else:
            raise Exception("Path does not exist.")

    @classmethod
    def write_pyobj(obj, objpath):
        if not os.path.exists(objpath):
            os.makedirs(os.path.dirname(objpath), exist_ok=True)
        with open(objpath, "wb") as f:
            pickle.dump(obj, f)

    @classmethod
    def read_pyobj(objpath):
        if not os.path.exists(objpath):
            raise Exception("Failed to read serialized obj: path does not exist.")
        with open(objpath, "rb") as f:
            return pickle.load(f)

    @classmethod
    def remove_pyobj(objpath):
        if os.path.exists(objpath):
            os.remove(objpath)
