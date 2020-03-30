# Write a function that rotates a list by k elements. 
# For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]. 
# Try solving this without creating a copy of the list. 
# How many swap or move operations do you need?


# step 1 - take in argument k 


def Rotate(k, l):
    # based on k, we pop the initial value of the list then append to the end. 
    for i in range(k):
        tmp = l[0]
        for i in range(len(l)-1):
            l[i] = l[i+1]
    
        l[-1] = tmp

    return l
    #return the list 

[2, 3, 4, 5, 6, 6]
alist = [1,2,3,4,5,6]
# print(Rotate(2, alist))

def RotateIt(k,l):
    # Try solving this without creating a copy of the list.
    result =  l[k:] + l[:k]
    return result


def Rotate3(k, l):
    # based on k, we pop the initial value of the list then append to the end. 
    tmp = l[:k]
    for i in range(len(l)-k):
        l[i] = l[i+k]

    for i, v in enumerate(tmp):
        l[len(l) - k + i] = v

    return l
    #return the list 

print(Rotate(2,[1,2,3,4,5,6]))
print(RotateIt(2,[1,2,3,4,5,6]))
print(Rotate3(2,[1,2,3,4,5,6]))
