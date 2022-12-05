"""
Parser for the Cloud Conductor CLI
--------------------------------------------------------------------------------

Required Inputs:
    --f[]: path to text file containing ordered names of files to transfer to
           cloud

Optional Inputs:
    --cc[]: cost ceiling (float value, in dollars)
       --v: verbose

"""
import argparse
import os
import sys

from cli_helpers import *

# Create the parser
my_parser = argparse.ArgumentParser(prog='cloud-conductor',
                                    description="Specify a list of files to run on GCP or AWS; cloud-conductor will optimize for cost. ")

# Add positional arguments
my_parser.add_argument('Files',
                       metavar='files',
                       type=str,
                       help='path to a text file containing the names of files to run. ')
my_parser.add_argument('Credentials',
                       metavar='credentials',
                       type=str,
                       help='path to a text file containing the credentials for AWS and GCP (in this order, each on a new line)')


# Add optional arguments
my_parser.add_argument('-cc',
                       metavar='--cost-ceiling',
                       type=float,
                       help=' cost ceiling (float value, in dollars) ')
my_parser.add_argument('-v',
                       '--verbose',
                       action='store_true',
                       help='verbose, an optional argument')

# Execute the parse_args() method
args = my_parser.parse_args()

input_path = args.Files

check_files(input_path, verbose=args.verbose)

input_path = args.Credentials

check_credentials(input_path, verbose=args.verbose)
