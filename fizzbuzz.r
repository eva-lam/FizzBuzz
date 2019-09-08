# R has the standard control structures you would expect. 
# expr can be multiple (compound) statements by enclosing them in braces { }.
# It is more efficient to use built-in functions rather than control structures whenever possible

#SOLUTION 1  - for loop 

#  We start with the double evaluation – 
# any other ordering of our if-else statements would cause the program to fail 
# (because numbers which pass the double evaluation by definition also pass the single evaluations).
 
for (i in 1:32){
 if(i%%3 == 0 & i%%5 == 0) {
    print('FizzBuzz')
  }
  else if(i%%3 == 0) {
    print('Fizz')
  }
  else if (i%%5 == 0){
    print('Buzz')
  }
  else {
    print(i)
  }
  
}

#solution 2 - use function 
#A for loop conveys that it’s iterating over something, but doesn’t clearly convey a high level goal
# defines a function called “fizz_buzz”. This function takes an input (which I have defined in the function as num_sequence_f), 
# and then passes it through the logical sequence we defined using the “if” statements above.

fizz_buzz <- function(num_sequence_f){
  if(num_sequence_f%%3 == 0 & num_sequence_f%%5 == 0) {
    print('FizzBuzz')
  }
  else if(num_sequence_f%%3 == 0) {
    print('Fizz')
  }
  else if (num_sequence_f%%5 == 0){
    print('Buzz')
  }
  else {
    print(num_sequence_f)
  }
  
}


# apply it to the numbers 1 to 100
sapply(seq(from = 1, to = 100, by = 1), fizz_buzz)

