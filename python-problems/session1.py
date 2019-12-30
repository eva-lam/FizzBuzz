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
            anotherInput = input('what method you like? 1 for sum, 2 for factorial:') 
            if (int(anotherInput)== 1):
                for i in range(1, userInput+1): 
                    sum += i 
                 
            elif (int(anotherInput)==2):
                for i in range(1, userInput+1): 
                    sum *= i 
            
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



    