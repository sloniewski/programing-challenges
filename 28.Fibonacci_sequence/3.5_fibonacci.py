def fibonacci_loop(n):
    a, b, c = 0, 1, 0
    print(a, '\n', b)
    while c < n:
        c = a + b
        print(c)
        a = b
        b = c


def fibonacci_recursion(n,a=0, b=1):
    result = a + b
    print(result)
    if result < n:
        fibonacci_recursion(n, b, result)
