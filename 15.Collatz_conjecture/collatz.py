def collatz(n):
    print(n)
    if n == 1:
        return
    if n % 2 == 0:
        n = n/2
    else:
        n = 1.5*n + 0.5

    collatz(n)
