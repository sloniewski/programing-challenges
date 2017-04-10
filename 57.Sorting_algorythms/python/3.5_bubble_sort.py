list = [34, 67 ,987, 23, 56, 786]
print (list)

def bubbleSort(list):
    counter = True
    while counter == True:
        for i in range(len(list)):
            x = (list[len(list)-i-1])
            y = (list[len(list)-i-2])
            counter = False
            if x > y:
                list[len(list)-i-1] = y
                list[len(list)-i-2] = x
                counter = True
        print (counter)
    return list

#sorted = bubbleSort(list)
print( list [-2:-1])
