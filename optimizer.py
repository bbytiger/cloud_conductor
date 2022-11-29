import cvxpy as cp
import numpy as np

"""
This Python optimization script is not able to take into account data transfer time and cost. For this added utility,
please see csp_search.py.
"""

# CONSTANTS
NUM_TASKS = 2
NUM_CLOUD_PROVIDERS = 2
CUSTOM_OBJECTIVE_TIME_WEIGHT = 0.5
CUSTOM_OBJECTIVE_COST_WEIGHT = 0.5


# full pipeline estimated constants
COST_MATRIX = np.array([[5, 10], [8, 3]])
TIME_MATRIX = np.array([[50,100], [200, 300]])
TRANSFER_COST_MATRIX = np.array([0.09, 0.15])
TRANSFER_TIME_MATRIX = np.array([[50,100], [200, 300]])
DATA_SIZE_PER_STAGE = np.array([1000,10000])
INITIAL_DATA_SIZE = 1000
INITIAL_DATA_TRANSFER_COST = 0.10


assert (CUSTOM_OBJECTIVE_COST_WEIGHT + CUSTOM_OBJECTIVE_TIME_WEIGHT == 1)

def sky_compute_optimization(data_transfer=False):
    decision_variables = cp.Variable(shape=(NUM_TASKS, NUM_CLOUD_PROVIDERS), boolean=True)
    constraints = []

    for i in range(NUM_TASKS):
        constraints.append(cp.sum(decision_variables[i]) == 1)


    COST_OBJECTIVE = None
    C = sum([cp.matmul(np.multiply(COST_MATRIX[i], TIME_MATRIX[i]), row) for i, row in enumerate(decision_variables)])
    COST_OBJECTIVE = cp.Minimize(C)


    TIME_OBJECTIVE = None
    T = sum([cp.matmul(TIME_MATRIX[i], row) for i, row in enumerate(decision_variables)])
    TIME_OBJECTIVE = cp.Minimize(T)

    # IMPLEMENT LATER !!!
    # VALUE_OBJECTIVE = cp.Minimize(T * C)

    CUSTOM_OBJECTIVE = cp.Minimize(CUSTOM_OBJECTIVE_COST_WEIGHT * C + CUSTOM_OBJECTIVE_TIME_WEIGHT * T)

    problem = cp.Problem(COST_OBJECTIVE, constraints)
    solution = problem.solve()
    return solution, [i.value for row in decision_variables for i in row]


print(sky_compute_optimization())
