#this solution, however, breaks the solution in 15 lines, so it is not optimal 
for num in range(1,32):
  if num % 3 and num % 5 ==0:
    print('fizzbuzz')
  
  elif num % 5 ==0:
    print('buzz')

  elif num % 3 ==0:
    print('fizz')
  
  else:
    print(num)

#Solution 2 
# rearrange the order of the branches that print "Fizz" and "Buzz"
#"FizzBuzz" is never printed because, by definition, 
#any number that is eligible to be "FizzBuzz"'ed – divisible by 3 and 5 – 
# is also eligible to be either "Fizz" or "Buzz" – divisible by either 3 or 5.


for num in range(1, 32):
    if num % 5 is 0:
        print("Buzz")
    elif num % 3 is 0:
        print("Fizz")
    elif num % 15 is 0:
        print("FizzBuzz")
    else:
        print(num)

#In an if/elif/else construct, the interpreter will stop at the first branch that evaluates to True. 
# So the trick is to arrange the conditional branches so that the FizzBuzz branch takes priority over the other two.

for num in range(1,33): 
    if num % 15 is 0:
        print("FizzBuzz")
    elif num % 3 is 0:
        print("Fizz")
    elif num % 5 is 0:
        print("Buzz")
    else:
        print(num)

#solution 3 - function 

# import the pandas library
import pandas as pd
import numpy as np

# define the function
def fizz_buzz(num_sequence_f):
    if (num_sequence_f % 3 == 0) & (num_sequence_f % 5 == 0):
        return('FizzBuzz')
    elif (num_sequence_f % 3 == 0):
        return('Fizz')
    elif (num_sequence_f % 5 == 0):
        return('Buzz')
    else:
        return(num_sequence_f)

# apply it to the number series
pd.Series(np.arange(1,33)).apply(fizz_buzz)

# numpy arange command (which returns an array of numbers).
# As described above, we convert the array to a pandas Series, which is then passed to our function.