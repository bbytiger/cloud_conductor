import json

def estimate_training(scriptname, system_type, datasize, epoch_count=None):
    # executed on GPU or TPU hardware
    # TODO (Sayak): maybe we can do a similar estimation of IO with the bigtrain script
    # make sure to account for both read and write
    
    # read in time_estimation/example_benchmark.json
    json.load(open("time_estimation/example_benchmark.json", "r"))

    # read in estimates field from json
    estimates = json["Estimates"]
    flops = 0
    # loop through estimates and find the field where system_type matches the hardware field in the json
    for estimate in estimates:
        if estimate["hardware"] == system_type:
            flops=estimate["value"]


    return datasize / (8.01 * flops)



def estimate_preprocessing(scriptname, datasize, epoch_count=None):
    # executed on CPU hardware
    # based on preprocessing script, roughly 800MB processed
    # roughly 10s execution time with 10 CPUs --> 100s with 1 CPU --> 8MB of IO /s with 1 CPU
    # epoch_count is the number of times the data is iterated over
    new_datasize = datasize * epoch_count 
    return new_datasize / 8


if __name__ == "__main__":
    # in practice, compute does not scale linearly because of scheduling overhead
    # here, we assume linear scaling based on benchmarks

    # for completeness, the final storage time will need to be provided by the user
    pass