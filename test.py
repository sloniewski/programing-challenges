def check_palindrome(text):
    letters = text.replace(' ', '').lower()
    return (letters == letters[::-1])


print(check_palindrome('Kobyła      ma mAły bok'))  # true
print(check_palindrome('gadaw'))
