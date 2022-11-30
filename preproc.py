import tensorflow as tf
from tensorflow.keras.datasets import mnist
(x_train, y_train), (x_test, y_test) = mnist.load_data()
import numpy as np
from scipy.ndimage.interpolation import shift
import time

def shift_image(image, dx, dy):
    image = image.reshape((28, 28))
    shifted_image = shift(image, [dy, dx], cval=0, mode="constant")
    return shifted_image

X_train_augmented = [image for image in x_train]
y_train_augmented = [image for image in y_train]

# for dx, dy in ((1,0), (-1,0), (0,1), (0,-1)):
#      for image, label in zip(x_train, y_train):
#              X_train_augmented.append(shift_image(image, dx, dy))
#              y_train_augmented.append(label)


# run above for loop in parallel

X_train_augmented = np.array(X_train_augmented)
y_train_augmented = np.array(y_train_augmented)

import multiprocessing as mp

# apply shift image function to each image in x_train in parallel


if __name__ == '__main__':
    pool = mp.Pool(4)
    # start timer
    start = time.time()
    # with mp.Pool() as pool:
    X_train_augmented += pool.starmap(shift_image, zip(x_train, [1]*x_train.shape[0], [0]*x_train.shape[0]))
    X_train_augmented += pool.starmap(shift_image, zip(x_train, [-1]*x_train.shape[0], [0]*x_train.shape[0]))
    X_train_augmented += pool.starmap(shift_image, zip(x_train, [0]*x_train.shape[0], [1]*x_train.shape[0]))
    X_train_augmented += pool.starmap(shift_image, zip(x_train, [0]*x_train.shape[0], [-1]*x_train.shape[0]))
    

    X_train_augmented += pool.starmap(shift_image, zip(x_train, [2]*x_train.shape[0], [0]*x_train.shape[0]))
    X_train_augmented += pool.starmap(shift_image, zip(x_train, [-2]*x_train.shape[0], [0]*x_train.shape[0]))
    X_train_augmented += pool.starmap(shift_image, zip(x_train, [0]*x_train.shape[0], [2]*x_train.shape[0]))
    X_train_augmented += pool.starmap(shift_image, zip(x_train, [0]*x_train.shape[0], [-2]*x_train.shape[0]))
    # end timer
    end = time.time()
    print(end - start)