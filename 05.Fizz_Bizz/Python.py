def FizzBizz(n):
    x = 0
    while x < n:
        x = x + 1
        if x % 3 != 0 and x % 5 != 0:
            print(x)
        if x % 3 == 0:
            print('Fizz')
        if x % 5 == 0:
            print('Bizz')
