from itertools import chain


def print_puzzle(puzzle):
    for row in puzzle:
        print(row)


def get_square_missing(x, y, puzzle):
    base = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    if x <= 2:
        row_1, row_2, row_3 = 0, 1, 2
    elif x <= 5:
        row_1, row_2, row_3 = 3, 4, 5
    else:
        row_1, row_2, row_3 = 6, 7, 8

    if y <= 2:
        start, end = 0, 3
    elif y <= 5:
        start, end = 3, 6
    else:
        start, end = 6, 9
    given = puzzle[row_1][start:end] + puzzle[row_2][start:end] + puzzle[row_3][start:end]
    square = set(base) - set(given)
    return square


def sudoku(puzzle):
    rows_missing = []
    columns_missing = []
    base = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    for row in puzzle:
        rows_missing.append(set(base) - set(row))

    for column in list(zip(*puzzle)):
        columns_missing.append(set(base) - set(column))

    for x in range(9):
        for y in range(9):
            square_missing = get_square_missing(x, y, puzzle)
            common = rows_missing[x] & columns_missing[y] & square_missing
            if len(common) == 1 and puzzle[x][y] == 0:
                puzzle[x][y] = list(common)[0]

    if 0 in list(chain.from_iterable(puzzle)):
        sudoku(puzzle)
    return(puzzle)


puzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
]


puzzle = sudoku(puzzle)

print_puzzle(puzzle)

# puzzle_solution =[
#  [5,3,4,6,7,8,9,1,2],
#  [6,7,2,1,9,5,3,4,8],
#  [1,9,8,3,4,2,5,6,7],
#  [8,5,9,7,6,1,4,2,3],
#  [4,2,6,8,5,3,7,9,1],
#  [7,1,3,9,2,4,8,5,6],
#  [9,6,1,5,3,7,2,8,4],
#  [2,8,7,4,1,9,6,3,5],
#  [3,4,5,2,8,6,1,7,9]
#  ]
