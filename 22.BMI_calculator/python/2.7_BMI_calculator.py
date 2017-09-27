from __future__ import division
import re
print('Please eneter your:')


def validateInput(text):
    match = re.match('[a-zA-Z]*$', text)
    if match is None:
        return True
    elif match:
        return False


def inputWeight():
    weight = raw_input('weight in kilograms: ')
    if validateInput(weight) is True:
        return weight
    else:
        print('Sorry, only numbers allowed')
        return inputWeight()


def inputHeight():
    height = raw_input('height in centimiters: ')
    if validateInput(height) is True:
        return height
    else:
        print('Sorry, only numbers allowed')
        return inputHeight()


weight = inputWeight()
height = inputHeight()
weight = int(weight)
height = int(height)
BMI = weight / ((height/100)**2)
print('Your BMI is: ' + str(BMI))

if BMI < 15.0:
    print('You are very severly underwieght, get help.')
elif BMI <= 16.0:
    print('You are severly underweight,seriously eat more.')
elif BMI <= 18.5:
    print('You are underweight, eat more')
elif BMI <= 25:
    print('You have normal weight, keep it up!')
elif BMI <= 30:
    print('You are overweight or too short, consider diet.')
elif BMI <= 35:
    print('You are moderatley obese, eat less.')
elif BMI <= 40:
    print('You are severly obese, quit eating!')
else:
    print('You are very severly obese, get help, skip the wafer-thin mint')
