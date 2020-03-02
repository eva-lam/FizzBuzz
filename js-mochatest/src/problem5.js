// #5 Modify the previous program such that only multiples of three or
// five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17 

let problem5 = (n) => {
    var sum=0; 

    for(i=0; i<=n;i++){
        if(i%3==0 || i%5 ==0){
            sum +=i;
        }    
    }
    return sum 
}

module.exports = problem5;