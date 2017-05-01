
import math


def is_prime(number):
    basic_primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
                    43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
    if number in basic_primes:
        return True
    if number % 10 in [2, 4, 6, 8]:
        return False
    for prime in basic_primes:
        if (number % prime == 0):
            return False
    break_point = int(number/basic_primes[-1]) + 1
    for divider in range(basic_primes[-1], break_point):
        if (number % divider == 0):
            return False
    return True


def print_primes(number):
    for inspected_number in range(0, number):
        if is_prime(inspected_number):
            print(inspected_number)


# TODO: gather user input
max_numbers_in_spiral = 121


def create_spiral(max_numbers_in_spiral):
    '''
    TODO: increaste list_dimensions
    to the nearest odd number that has a sqrt == int
    '''
    list_dimensions = int(math.sqrt(max_numbers_in_spiral)) + 1
    spiral = []
    for y in range(1, list_dimensions):
        spiral.append([x for x in range(1, list_dimensions)])
    return spiral


spiral = create_spiral(max_numbers_in_spiral)


def move_pointer(direction, pointer):
    x = pointer[0]
    y = pointer[1]
    if direction == 'right':
        pointer = [x, y + 1]
        return pointer
    elif direction == 'up':
        pointer = [x - 1, y]
        return pointer
    elif direction == 'left':
        pointer = [x, y - 1]
        return pointer
    elif direction == 'down':
        pointer = [x + 1, y]
        return pointer
    else:
        print('unknown direction')


def fill_spiral(spiral, max_numbers_in_spiral):
    # TODO: set a middle of the spiral, basing on the dimensions
    pointer = [5, 5]
    spiral[pointer[0]][pointer[1]] = 1
    step_conter = 1
    step1 = ['right', 'up']
    step2 = ['left', 'down']
    fill_number = 2
    move = 1

    while fill_number < max_numbers_in_spiral:
        for direction in step1:
            for i in range(move):
                pointer = move_pointer(direction, pointer)
                if fill_number <= max_numbers_in_spiral:
                    if (is_prime(fill_number)):
                        spiral[pointer[0]][pointer[1]] = fill_number
                    else:
                        spiral[pointer[0]][pointer[1]] = '_'
                fill_number += 1
        move += 1

        for direction in step2:
            for i in range(move):
                pointer = move_pointer(direction, pointer)
                if fill_number <= max_numbers_in_spiral:
                    if (is_prime(fill_number)):
                        spiral[pointer[0]][pointer[1]] = fill_number
                    else:
                        spiral[pointer[0]][pointer[1]] = '_'
                fill_number += 1
        move += 1

    return spiral


ulam = fill_spiral(spiral, max_numbers_in_spiral)

for array in ulam:
    print(array)
