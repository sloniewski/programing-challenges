def bubbleSort(list):
    counter = len(list)
    while counter > 0:
        for i in range(len(list)):
            if (i-1) < 0:
                continue
            x = (list[len(list)-i])
            y = (list[len(list)-i-1])
            if x < y:
                list[len(list)-i] = y
                list[len(list)-i-1] = x
                counter += i
        counter -=1
    return list
