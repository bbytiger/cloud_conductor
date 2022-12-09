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
from optimizer import *


CLI_COLORS = {'b':"\033[0;30m",
              'r': "\033[0;31m",
              'g': "\033[0;32m",
              'y': "\033[0;33m",
              'w': "\033[0;37m",
              'none': "\033[0m"}


def linebreak():
    print("*"*80)

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


# helper functions for assertions
input_path = args.Files
scripts = check_files(input_path, verbose=args.verbose)
linebreak()

input_path = args.Credentials
credentials = check_credentials(input_path, verbose=args.verbose)
linebreak()

steps, estimated_cost = find_optimal_path(scripts, credentials, verbose=args.verbose)

print('Execution plan: \n')
for step in steps:
    print(CLI_COLORS['y'] + step[0] + " --> " + CLI_COLORS['g'] + step[1])
print(CLI_COLORS['none'])
print("Total estimated cost: " + str(estimated_cost))
print('\n')
linebreak()

args.confirmation = input('Please confirm execution plan.\nY/n: ')

if args.confirmation != 'Y' and args.confirmation != 'y':
    print('Execution plan terminated')
    sys.exit()
    
linebreak()
print('Initializing execution... ')
