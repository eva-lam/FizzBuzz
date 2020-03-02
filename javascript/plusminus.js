let digits; 
let solution = 'not possible';

function test(i ,sum , sol) {
    if(i === digits.length ) {
        if(sum === 0)
            solution = sol ;
        return ; 
    }
    test(i+1,sum+parseInt(digits.charAt(i)),sol+'+') ; 
    test(i+1,sum-parseInt(digits.charAt(i)),sol+'-') ; 
}

function PlusMinus(num) {
    digits = num.toString() ; 
    test (1,parseInt(digits.charAt(0)),'') ; 
    return solution;
}


console.log(PlusMinus(26712))