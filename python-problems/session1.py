import random
import datetime 
from datetime import date
import math
#Write a program that prints ‘Hello World’ to the screen.
'''
def hello():
    print('Hello World') 
'''


#Write a program that asks the user for their name and greets them with their name.

'''
def greetings():
    ans = input('What is your name? ')
    if ans.lower()=='alice' or ans.lower() =='bob':
        print(f'Hello {ans}!')
'''   

# greetings()

#4 Write a program that asks the user 
#for a number n and prints the sum of the numbers 1 to n

'''
def inputNumber(message):
    while True:
        try:
            userInput = int(input(message))    
            sum = 0 
            for i in range(1, userInput+1): 
                sum += i 
            
            print(sum)
        except ValueError:
            print("Not an integer! Try again.")
            continue
        else:
            return userInput 
            break 
     
    
 
#MAIN PROGRAM STARTS HERE:
check = inputNumber("Input a number: ")
'''

#5 Modify the previous program such that only multiples of three or
#five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17 


'''
def inputNumber(message):
    while True:
        try:
            userInput = int(input(message))    
            sum = 0 
            for i in range(1, userInput+1): 
                if(i%2==1):
                    sum += i 
            
            print(sum)
        except ValueError:
            print("Not an integer! Try again.")
            continue
        else:
            return userInput 
            break 
     
    
 
#MAIN PROGRAM STARTS HERE:
check = inputNumber("Input a number: ")
'''


#6 Write a program that asks the user for a number n and gives 
#them the possibility to choose between computing the sum 
# and computing the product of 1,…,n.

'''
def inputNumber(message): 
    while True: 
        try:
            userInput = int(input(message))    
            sum = 0 
            product = 1
            anotherInput = input('what method you like? 1 for sum, 2 for factorial:') 
            if (int(anotherInput)== 1):
                for i in range(1, userInput+1): 
                    sum += i 
                 
            elif (int(anotherInput)==2):
                for i in range(1, userInput+1): 
                    product *= i 
            
            print(sum)

        except ValueError:
            print("Not an integer! Try again.")
            continue

        else:
            return userInput 
            break 

#MAIN PROGRAM STARTS HERE:
check = inputNumber("Input a number: ")
'''

#7 Write a program that prints a multiplication table for numbers up to 12.

'''
check = int(input("Input a number: "))
for i in range(1,13):
    print(check,'x',i,'=',check*i)
'''
#8 Write a program that prints all prime numbers. 
#(Note: if your programming language does not support arbitrary size numbers, 
#printing all primes up to the largest number you can easily represent is fine too.


'''
n = int(input("tell me how many prime numbers you want to print: "))
count = 0
for i in range(1,1000):
    if i>1 and i%2 !=0 and count !=n:
        count = count+1
        print (i)
'''

#9 Write a guessing game where the user has to guess a secret number. 
# After every guess the program tells the user whether their number was too large or too small. 
# At the end the number of tries needed should be printed. 
# It counts only as one try if they input the same number multiple times consecutively.
'''
def test():
    numOfCount = 0 
    j = round(random.random()*100)
    while True:
        try:
            n = int(input('Guess a number: ')) 
        except ValueError:
            print("Not an integer! Try again.")
            continue
        
        if n ==j: 
            print('bingo!,this is how many times you tried ',numOfCount)

        elif n>j:
            print('Too big')

        elif n<j:
            print('Too small')

        numOfCount +=1 

print(test())
'''
#Write a program that prints the next 20 leap year 
'''
current_year = date.today().year 

def leapyear():
    count = 0 
    years=[]
    for i in range(current_year,5000):
        condition_1 = i%4 
        condition_2 = i%100
        condition_3 = i%400 
        if count <20 and condition_1 ==0 and condition_2>0:
            count = count+1 
            years.append(i)
        
        elif count<20 and condition_3==0:
            count = count+1
            years.append(i)
        
    return years

print(leapyear())

'''
#List & Strings 
#1 Write a functiont that returns largest element in a list 
'''
def checkLargest(n): 
    length = len(n)
    biggest=1

    for i in range(length): 
        if n[i]>biggest:
            biggest = n[i]
    
    return biggest 

print(checkLargest([3,5,18,80,120,34]))
'''
    
#2 reverse a list 
'''
def reverse(n):
    list_length = len(n)
    new_list =[]
    print(list_length)
    for i in range(list_length):
        new_list.append( n[list_length-i-1])
    
    return new_list 

print(reverse([7,4,6,7,0]))
'''
 #print framer 

 #Write a function that takes a list of strings an prints them, one per line, in a rectangular frame. 
 #For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
'''
def frame(n):
    longestWord = ''
    
    lengthOflist = len(n)
    
    #know which is the longest word
    for i in range(lengthOflist):
        if(len(n[i])>len(longestWord)):
            longestWord=n[i]
    length_longestWord = len(longestWord)
    lengthOfAsterisk = length_longestWord +4 
    print('*'*lengthOfAsterisk)

    for w in n:
        space_to_add=length_longestWord - len(w)
        # if(length_longestWord-len(w)==0):
        print('* '+w+" " * space_to_add +' *')


    print(lengthOfAsterisk*'*')   

print(frame(["Hello", "World", "in", "a", "frame"]))
'''

 #Write a function that checks whether an element occurs in a list.


'''
def check(testedlist,element):
        for i in testedlist: 
            if(i ==element): 
                print("element exists")
print(check([3,5,6,7,9],4))
'''

#Write a program that outputs all possibilities to put + or - or nothing between the numbers 1,2,…,9 (in this order) 
#such that the result is 100. For example 1 + 2 + 3 - 4 + 5 + 6 + 78 + 9 = 100.
'''
import operator
def checksum(): 
    #divide and conquer 
    target_sum = 100
    num_list = [1,2,3,4,5,6,7,8,9]
    combination = [1 ]
    ops = {'+':operator.add,'-':operator.sub,'concat':''}

    #option 1 addition

    for i in range(1,len(num_list)):
        # do recursive calls 
        combination.append(str(i)+'+'+str(i+1))
        combination.append(str(i)+'-'+str(i+1))
        combination.append(str(i)+str(i+1))
        print(combination)
     # if plus doesn't work then call again and go to minus sign 

    #option 2 minus 


    print(combination)
    #option 3 concat 


    #filter those that returns to only target_sum 
    #loop through combination 
    newCombo = []
    for eachSolution in combination: 
        newCombo.append(eachSolution)
        
    # return newCombo



print(checksum())
'''
'''
def i1():
    """
    Our helper function, here we will do the actual recursive call.
    numbers is a list with all numbers we have to check. We start
    with 1 to 9, but we always remove one number with each call

    i is the current value of all numbers combined so that we can check
    if it's 100 in the end. i is always an integer and never a string

    path is what will be printed. It contains the previous nubmers
    in a human readable format as a string (e.g. "1+2+4-5" if
    numbers is still [6, 7, 8, 9]).

    This function returns a list with all previously found paths
    that are equal to 100. The return value can also be an empty list
    """

    def helper(numbers, i, path):
        if not numbers and i == 100:
            if path[-1] in ("+", "-"):
                return [path[:-1]]

            return [path]

        if not numbers:
            return []

        # we prepare the recursive call. current is the number we will
        # use for the addition/substraction/concatenation.
        # numbers will be the remaining ones.
        current = numbers[0]
        numbers = numbers[1:]
        return (
                helper(numbers, i + current, path + str(current) + "+") +
                helper(numbers, i - current, path + str(current) + "-") +
                helper(numbers, i*10 + current, path + str(current) + "")
        )
 
    print("\n".join(helper([i for i in range(1, 10)], 0, "")))
    '''

    # Write a function that computes the running total of a list.

'''
def total(original_list): 
    final = 0
    for n in original_list: 
        final +=n 
        
    return final 
    

print(total([2,3,4,566,90]))
'''

# Write a function that tests whether a string is a palindrome.
'''
import re
def testing(n): 
    # loop through the string 
    # delete all spaces 
    formattedStr = re.sub(r'/[ _.,!"'/$&]/g', r'', n) 
    result = re.sub(r'(/[ _.,!"'/$&]/g)', '',n)  
    n.replace(regex,'') # replace space with 
    y = len(n)

    # palindrome 
    for i in range(y): 
        if n[i] != n[-1]:
            return False
    # slice the string

    # return true if 

print(testing('madam'))
'''

# Write three functions that compute the sum of the numbers in a list: 
# using a for-loop, a while-loop and recursion. 
# Subject to availability of these constructs in your language of choice.
'''
def first(n):
    sum = 0
    for i in n:
        sum += i 
    
    return sum 

# print(first([2,4,5,7,10,28]))
'''
'''
def second(n): 
    sum = 0 
    while n:
        for i in n: 
            sum += i 
        break
    return sum 

print(second([4,6,7,3,77,120]))
'''
'''
def sum(x): 

    total= 0
    total = total+ x

    return total



def third(n):
    length = len(n)
    x= 0
    for i in range(length):
       x = sum(n[i])

    return x
print(third([4,5,6,10,20]))
'''
'''
a = [2, 3, 5, 8]
print(sum(i for i in a))
'''

def getSum(piece):
    if len(piece)==0:
        return 0
    else:
        return piece[0] + getSum(piece[1:]) 
        
print(getSum([1, 3, 4, 2, 5]))