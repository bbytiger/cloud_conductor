
def estimate_training(scriptname, datasize, epoch_count=None):
    # executed on GPU or TPU hardware
    # TODO (Sayak): maybe we can do a similar estimation of IO with the bigtrain script
    # make sure to account for both read and write
    pass

def estimate_preprocessing(scriptname, datasize, epoch_count=None):
    # executed on CPU hardware
    # based on preprocessing script, roughly 800MB processed
    # roughly 10s execution time with 10 CPUs --> 100s with 1 CPU --> 8MB of IO /s with 1 CPU
    pass

if __name__ == "__main__":
    # in practice, compute does not scale linearly because of scheduling overhead
    # here, we assume linear scaling based on benchmarks

    # for completeness, the final storage time will need to be provided by the user