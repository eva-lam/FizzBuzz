def check():
    original=[1,2,3,4,5,6,7,8,9]
    target = 100 
    combinations = generateCombinations(0, 'x')

    print(combinations)

    for c in combinations:
        if resolve(original, c) == 100:
            print(c)
        

    
import operator
def resolve(numbers, operations):
    # pass 1: resolve concat
    comb_numbers = []
    comb_operators = []
    last_number = numbers[0]
    

    for i in range(len(operations)): 
        if operations[i] =='':
            last_number = int(str(last_number)+str(numbers[i+1]))
        else:
            comb_numbers.append(last_number)
            comb_operators.append(operations[i])
            last_number = numbers[i+1]

    comb_numbers.append(last_number)
    
    sum = comb_numbers[0]
    for i in range(len(comb_operators)):
        
        if comb_operators[i] =='+':
            sum +=comb_numbers[i+1]
        if comb_operators[i] =='-': 
            sum -=comb_numbers[i+1]
            
    
    return sum
         

def generateCombinations(depth,op):

    if depth == 8:
        return [[op]]
    
    # Recursion call to generate the plus sign 
    c1 = generateCombinations(depth+1, '+')

    # Recursion call to generate the minus sign 
    c2 = generateCombinations(depth+1, '-')

    # Recursion call to generate the empty/concat sign 
    c3 = generateCombinations(depth+1, '')

    a = c1 + c2 + c3

    if op == 'x':
        return a

    for e in a:
        e.append(op)

    return a

check()

    
