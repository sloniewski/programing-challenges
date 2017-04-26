
def factorial(n):
    if n <= 1:
        return 1
    return (n * factorial(n - 1))

#factorial with step larger than 1
def multi_factorial(n,step = 1):
    if n <= 1:
        return 1
    print (n)
    return (n * multi_factorial(n - step,step))

#factorial of factorials (recursive inception)
def super_factorial(n):
    factorials_temp = []
    for x in range(n+1):  #create an array of n leght
        factorials_temp.append(x)
    for y in factorials_temp:  #apply factorial function to each element
        factorials_temp[y] = factorial(factorials_temp[y])
    total = 1
    for result in factorials_temp:  #have each element of array multiplied by each other
        total = total * result
    return total
