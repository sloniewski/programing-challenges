def insertSort(list):
    list_sorted = []
    while len(list) > 0:
        x = min(list)
        list_sorted.append(x)
        list.remove(x)
    return list_sorted
