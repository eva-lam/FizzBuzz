function smorse(input){

    //step 1: declare the morse code dot and dashes 
    let exp = typeof(input)
 
    switch (exp) {

        case 'string':
            console.log('this is a string')
           return analyzeMe(exp)
            break

        case 'number':
            console.log('this is a number')
            return 'invalid input'; 
            break
            
        case 'undefined':
            console.log('this is undefined')
            return 'invalid input';
            break
        
        default:
            return 'invalid input';
    }
}

function analyzeMe(input){

    const smooshed = '.- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..'; 
    //step2: generate alpha dictionary
   const splitedsmoosh = smooshed.split(' '); 
   const a = 97;
   let charArray = {};
   //final output declaraion 
   let finalresult =[]

  
   for (var i = 0; i<26; i++){
       charArray[String.fromCharCode(a + i)] = splitedsmoosh[i]
   }

   let trimmedInput = input.trim();
   let lowered = trimmedInput.toLowerCase()

   
   //step2: check valid input 
   if (trimmedInput=="") {
       //return error if invalid input 
       return "invalid input"
   //check special character
   } else {
       //split according to space
       let splitedInput = trimmedInput.toLowerCase().split(''); 
       splitedInput.forEach(element => finalresult.push(charArray[element]));
   }

   return finalresult.join('')
   
}

console.log(smorse('sos'))