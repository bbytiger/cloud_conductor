import numpy as np

"""
This Python script optimization algorithm takes in as input:
- a COST_MATRIX of shape (NUM_TASKS, NUM_CLOUD_PROVIDERS), where COST_MATRIX[i][j] represents the cost
    of running task i on cloud provider j per unit time
- a TIME_MATRIX of shape (NUM_TASKS, NUM_CLOUD_PROVIDERS), where TIME_MATRIX[i][j] represents the time
    required to run task i on cloud provider j
- a 1d array TRANSFER_TIME_VALUES, where TRANSFER_TIME_VALUES[i] represents the egress price per unit data for
    transfers out of cloud provider i
- a 1d array TRANSFER_COST_VALUES, where TRANSFER_COST_VALUES[i] represents the egress time per unit data for
    transfers out of cloud provider i
- a 1d array DATA_SIZE_PER_STAGE, where DATA_SIZE_PER_STAGE[i] represents the estimated amount of data at the end of
    task i in the full pipeline
- a scalar, INITIAL_DATA_SIZE, representing the initial amount of data on the local computer
- a scalar, INITIAL_DATA_TRANSFER_COST, representing the cost per unit data to transfer to the initial cloud provider
- two scalars which must add up to 1, CUSTOM_OBJECTIVE_TIME_WEIGHT, and CUSTOM_OBJECTIVE_COST_WEIGHT.
    If the CUSTOM_OBJECTIVE is used in the main function, the program will optimize to balance between cost and weight objectives
"""

"""
Due to the restrictions of linear and integer programming in Python packages, this optimization problem is
modeled as a Constraint Satisfaction Problem. The algorithm below performs an exhaustive search on the state space, requiring
a worst case runtime of O(N^M), depending on the number of tasks and cloud providers to choose from. A simple heuristic is used
to truncate operations if the objective value is worse than one already found. We assume this algorithm is will useful because in most cases
we would expect that the number of tasks and number of cloud providers are relatively small.
"""

# CONSTANTS
NUM_TASKS = 3
NUM_CLOUD_PROVIDERS = 2
CUSTOM_OBJECTIVE_TIME_WEIGHT = 0.5
CUSTOM_OBJECTIVE_COST_WEIGHT = 0.5


# full pipeline estimated constants
COST_MATRIX = np.array([[5, 500], [800000, 3], [59, 209]])
TIME_MATRIX = np.array([[5, 500], [200, 3], [59, 209]])
TRANSFER_COST_VALUES = np.array([0.09, 0.15])
TRANSFER_TIME_VALUES = np.array([0.001, 0.002])
DATA_SIZE_PER_STAGE = np.array([1000, 10000, 10])
INITIAL_DATA_SIZE = 1000
INITIAL_DATA_TRANSFER_COST = 0.10


assert (CUSTOM_OBJECTIVE_COST_WEIGHT + CUSTOM_OBJECTIVE_TIME_WEIGHT == 1)
best_objective = float('inf')
best_combination = []


def sky_compute_optimization_CSP_SEARCH(global_objective='value'):
    state = np.zeros((NUM_TASKS, NUM_CLOUD_PROVIDERS))
    def check_possibility(cost, time):
        global best_objective
        global best_combination
        if global_objective == "cost":
            if cost > best_objective:
                return False

        elif global_objective == "time":
            if time > best_objective:
                return False

        elif global_objective == "custom":
            if CUSTOM_OBJECTIVE_TIME_WEIGHT * time + CUSTOM_OBJECTIVE_COST_WEIGHT * cost > best_objective:
                return False

        elif global_objective == "value":
            if time * cost > best_objective:
                return False
        return True


    def search_helper_recursive(state, task, time, cost):
        # print(state, cost)
        global best_combination
        global best_objective
        if task == NUM_TASKS:
            s = state.copy()
            if global_objective == "cost":
                if cost < best_objective:
                    best_combination = s
                    best_objective = cost

            elif global_objective == "time":
                if time < best_objective:
                    best_combination = s
                    best_objective = time

            elif global_objective == "custom":
                if CUSTOM_OBJECTIVE_TIME_WEIGHT * time + CUSTOM_OBJECTIVE_COST_WEIGHT * cost < best_objective:
                    best_combination = s
                    best_objective = CUSTOM_OBJECTIVE_TIME_WEIGHT * time + CUSTOM_OBJECTIVE_COST_WEIGHT * cost

            elif global_objective == "value":
                if time * cost < best_objective:
                    best_objective = time * cost
                    best_combination = s
            return

        s = state.copy()
        for i in range(NUM_CLOUD_PROVIDERS):
            s[task][i] = 1

            if task != 0:
                itemindex = np.where(s[task - 1] == 1)[0][0]
                if s[task - 1][i] != s[task][i]:
                    cost += TRANSFER_COST_VALUES[itemindex] * DATA_SIZE_PER_STAGE[task - 1]
                    time += TRANSFER_TIME_VALUES[itemindex] * DATA_SIZE_PER_STAGE[task - 1]
            cost += COST_MATRIX[task][i]
            time += TIME_MATRIX[task][i]

            if not check_possibility(cost, time):
                if task != 0:
                    itemindex = np.where(s[task - 1] == 1)[0][0]
                    if s[task - 1][i] != s[task][i]:
                        cost -= TRANSFER_COST_VALUES[itemindex] * DATA_SIZE_PER_STAGE[task - 1]
                        time -= TRANSFER_TIME_VALUES[itemindex] * DATA_SIZE_PER_STAGE[task - 1]
                cost -= COST_MATRIX[task][i]
                time -= TIME_MATRIX[task][i]
                s[task][i] = 0
                continue

            search_helper_recursive(s, task + 1, time, cost)
            if task != 0:
                itemindex = np.where(s[task - 1] == 1)[0][0]
                if s[task - 1][i] != s[task][i]:
                    cost -= TRANSFER_COST_VALUES[itemindex] * DATA_SIZE_PER_STAGE[task - 1]
                    time -= TRANSFER_TIME_VALUES[itemindex] * DATA_SIZE_PER_STAGE[task - 1]
            cost -= COST_MATRIX[task][i]
            time -= TIME_MATRIX[task][i]
            s[task][i] = 0

    search_helper_recursive(state, 0, 0, 0)
    global best_objective
    if global_objective == 'value':
        best_objective =  1 / best_objective
    print(best_objective, best_combination)


sky_compute_optimization_CSP_SEARCH()
