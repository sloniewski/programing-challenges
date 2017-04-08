import re
print ('Please eneter your:')
weight = input('weight in kilograms: ')
height = input('height in centimiters: ')
match = re.match('[a-zA-Z]*$',weight)
if match:
    print ('Numbers only allowed')
    weight = input('weight in kilograms: ')
weight = int(weight)
height = int(height)
BMI = weight / ((height/100)**2)
print (BMI)
