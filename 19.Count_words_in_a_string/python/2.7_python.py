import re

text = raw_input('Please type some text: ')

match = re.findall('[a-zA-Z]+', text)
letters = 0
for i in range(len(match)):
    letters = letters + len(match[i])
print ('Letters:' + str(letters))
print ('Words: ' + str(len(match)))
