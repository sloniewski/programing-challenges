def fibonacci_loop(n):
    a, b, c = 0, 1, 0
    print (a,'\n',b)
    while c < n:
        c = a + b
        print (c)
        a = b
        b = c
