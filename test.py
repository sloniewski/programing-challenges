# class Snail:
#     def __init__(self):
#         self.x = 0
#         self.y = 0
#         self.direction = ['right', 'down', 'left', 'up']
#         self.distance = 0
#
#     def turn(self):
#         temp = self.direction.pop(0)
#         self.direction.append(temp)
#         self.distance = 0
#
#     def move(self):
#         self.distance += 1
#         if self.direction[0] == 'right':
#             self.y += 1
#         elif self.direction[0] == 'down':
#             self.x += 1
#         elif self.direction[0] == 'left':
#             self.y -= 1
#         elif self.direction[0] == 'up':
#             self.x -= 1
#
#
# def snail(array):
#     result = []
#     turn_point = len(array[0]) - 1
#     snail = Snail()
#
#     for i in range(len(array)*len(array[0])):
#         next_item = array[snail.x][snail.y]
#         result.append(next_item)
#         snail.move()
#
#         if snail.distance == turn_point:
#             snail.turn()
#             if snail.direction[0] == 'up':
#                 turn_point -= 1
#             elif snail.direction[0] == 'down' and i >= (2*len(array[0])):
#                 turn_point -= 1
#     return result


# array = [
#     [0, 1, 2, 3, 5],
#     [16, 17, 18, 19, 6],
#     [15, 24, 25, 20, 7],
#     [14, 23, 22, 21, 8],
#     [13, 12, 11, 10, 9],
# ]

# array = [
#     [0, 1, 2, 3, 4, 6],
#     [20, 21, 22, 23, 24, 7],
#     [19, 32, 33, 34, 25, 8],
#     [18, 31, 36, 35, 26, 9],
#     [17, 30, 29, 28, 27, 10],
#     [16, 15, 14, 13, 12, 11],
# ]


def snail(array):
    return list(array[0]) + snail(list(zip(*array[1:]))[::-1]) if array else []

array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(list(zip(*array)))

#
# array1 = [
#     [1, 2, 3],
#     [8, 9, 4],
#     [7, 6, 5]
# ]
#
# print(snail(array))
# print(snail(array1))
