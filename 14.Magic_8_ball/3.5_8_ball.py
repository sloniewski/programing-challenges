import random

anwsers = {
    1:'It is certain',
    2:'It is decidedly so',
    3:'Without a doubt',
    4:'Yes definitely',
    5:'You may rely on it',
    6:'As I see it, yes',
    7:'Most likely',
    8:'Outlook good',
    9:'Yes',
    10:'Signs point to yes',
    11:'Reply hazy try again',
    12:'Ask again later',
    13:'Better not tell you now',
    14:'Cannot predict now',
    15:'Concentrate and ask again',
    16:'Don\'t count on it',
    17:'My reply is no',
    18:'My sources say no',
    19:'Outlook not so good',
    20:'Very doubtful'
}

def predict_future():
    global anwsers
    number = random.randrange(1,20,1)
    print ('---->',anwsers[number])

# function that gets allows the user to choose anwser and terminating the program
# unless the user decision is to terminate it calls itself recursively
def eight_ball():
    decision = input('Ask a question and eneter "a" to get anwser, or enter "q" to quit: ')
    if (decision == 'a'):
        predict_future()
        eight_ball()
    elif (decision == 'q'):
        exit()
    elif (decision):
        print ('You must enter "a" or "q"')
        eight_ball()
    else:
        print ('Something went wront - terminating program')
        exit()

eight_ball()
