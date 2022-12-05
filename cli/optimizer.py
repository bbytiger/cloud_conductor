import os
import sys


def find_optimal_path(scripts, credentials):
    steps = []
    for script in scripts:
        steps.append((script, 'AWS m6in.16xlarge'))


    # eventually will return an estimated cost, 5 is a placeholder 
    return steps, 5
