import requests
import json
import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv('GCP_API_KEY')

skus = []
nextPageToken = ""
while 1:
    r = requests.get(
        "https://cloudbilling.googleapis.com/v1/services/6F81-5844-456A/skus?key={}&pageToken={}".format(
            API_KEY,
            nextPageToken
        )
    )
    js = r.json()
    skus.extend(js["skus"])
    if js["nextPageToken"] == "":
        break
    nextPageToken = js["nextPageToken"]

with open("gcp_compute_engine.json", "w") as f:
    json.dump(skus, f, indent=4)
