import os
import sys


def check_files(input_path, verbose):
    if not os.path.exists(input_path):
        print(input_path)
        print('The path specified to files does not exist')
        sys.exit()

    files = open(input_path, 'r')
    scripts = []
    while True:
        line = files.readline().strip()
        if not line:
            break
        if not os.path.exists(line):
            print('One of the files specified in [' + input_path + '] does not exist. ')
            sys.exit()
        scripts.append(line)
        if verbose:
            print("Script {}: {}".format(len(scripts), line.strip()))
    files.close()

    return scripts 


def check_credentials(input_path, verbose):
    pass
