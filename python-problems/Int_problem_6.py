# Write a program that automatically converts English text to Morse code and vice versa.

# Characteristics of Morse Code: 
# 1. no distinction between upper and lower case letters

# 2. Each Morse code symbol is formed by a sequence of dots and dashes

# 3. The dot duration is the basic unit of time measurement in Morse code transmission.

# 4. The duration of a dash is three times the duration of a dot. 
# Each dot or dash within a character is followed by period of signal absence, 
# called a space, equal to the dot duration.

# 5.The letters of a word are separated by a space of duration equal to three dots, 
# and the words are separated by a space equal to seven dots.

# 6. Morse code was designed so that the length of each symbol is approximately 
# inverse to the frequency of occurrence in text of the English language character that it represents

MorseDict = {'A':'.-', 'B':'-...',
'C':'-.-.', 'D':'-..', 'E':'.',
'F':'..-.', 'G':'--.', 'H':'....',
'I':'..', 'J':'.---', 'K':'-.-',
'L':'.-..', 'M':'--', 'N':'-.',
'O':'---', 'P':'.--.', 'Q':'--.-',
'R':'.-.', 'S':'...', 'T':'-',
'U':'..-', 'V':'...-', 'W':'.--',
'X':'-..-', 'Y':'-.--', 'Z':'--..',
'1':'.----', '2':'..---', '3':'...--',
'4':'....-', '5':'.....', '6':'-....',
'7':'--...', '8':'---..', '9':'----.',
'0':'-----', ', ':'--..--', '.':'.-.-.-',
'?':'..--..', '/':'-..-.', '-':'-....-',
'(':'-.--.', ')':'-.--.-'}

def engToMorse(text):

    # split the string 
    new_list = numToList(text)
    
    lower_list=[]
    for w in new_list:
        lower_list.append(w.upper())
    
    morse_list = []
    for i in lower_list:
        morse_list.append(MorseDict[i])
    s=''
    return s.join(morse_list)
    # analyze each alphabet 


def numToList(n):
    # turn n to string 
  
    return [str(i) for i in n]
    #split string
    

print(engToMorse('Hello'))

