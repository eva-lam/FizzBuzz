//Goal: to find the best solution in order to avoid premature optimization, 
//which means to consider the speed of noncritical parts of the programs and its negative impact when debugging and maintenance.


//SOLUTION 1 in JS 

//using loop: ( low-level)
//The program structure reflects that we will end up with exactly one output per iteration,
// but it comes with a cost: we repeat the modulo tests several times, 
//and one of our cases is just a combination of two others. 
//This latter redundancy was already part of the original task description 
//runtime is not optimized in this solution

function fizzbizz(n){

let newlist=[]

for(i=1;i<n+1;i++){
  if(i%15==0){
    newlist.push('fizzbuzz')
  }
  else if(i%3==0){
    newlist.push('fizz')
  }
  else if(i%5==0){
    newlist.push('buzz')
  }
  else{
    newlist.push(i)
  }
}
return newlist.toString()

}

fizzbizz(32)




//Solution 2 in JS

//Getting rid of the else commands reflects that our options are not exclusive, 
//a number can be divisible by 3 and 5 at the same time. 
//allows us to get rid of the repeated modulo checks
//"What if I want 150 numbers instead of 100?" or "What if I want multiples of 7 and 8?"

function fizzbizz(n){
    let newlist=[];
    for(var i=1;i<=n;i++){
        if(i%3 ===0){
            newlist.push('Fizz');
        }if(i%5===0){
            newlist.push('Bizz')
        }if(i%3!=0 && i%5!=0){
            newlist.push(i)
        }
    }
    return newlist.toString('')
}

fizzbizz(32)