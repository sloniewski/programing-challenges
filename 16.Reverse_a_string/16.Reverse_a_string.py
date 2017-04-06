def reverseString(string):
    string_reversed = ''
    length = len(string)
    while 0 < length:
        string_reversed += string[length-1:length]
        length = length - 1
    return string_reversed
