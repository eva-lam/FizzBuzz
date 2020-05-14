const assert = require('assert'); 
const chai = require('chai')
  , expect = chai.expect
  , should = chai.should();

function smorse(input){

    //step 1: declare the morse code dot and dashes 
    let exp = typeof(input)
 
    switch (exp) {
        case 'number':
            return 'invalid input'; 
            break
        case 'string':
               return analyzeMe(input)
        case 'undefined':
            return 'invalid input';
            break
        default:

    }
}

function analyzeMe(input){
    const smooshed = '.- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --..'; 
    //step2: generate alpha dictionary
   const splitedsmoosh =smooshed.split(' '); 
   const a = 97;
   let regex = /^[A-Za-z0-9]+$/

   let checkSpecial = regex.test(input);
   let charArray = {};
   //final output declaraion 
   let finalresult =[]
  
   for (var i = 0; i<26; i++){
       charArray[String.fromCharCode(a + i)] = 
       splitedsmoosh[i]
   }

   let trimmedInput = input.trim();
   let lowered = trimmedInput.toLowerCase()
   
   //step2: check valid input 
   if(trimmedInput==null || !checkSpecial){
       //return error if invalid input 
       return "invalid input";

   }else{
       //split according to space
       let splitedInput = lowered.split(''); 
       splitedInput.forEach(element => finalresult.push(charArray[element]));
   }
   return finalresult.join('')
   
}

   

describe('checking smorse code',function(){

    let testdata =[
        { args:"sos",expected: "...---..." },
        { args:"daily",expected: "-...-...-..-.--" },
        { args:"programmer", expected: ".--..-.-----..-..-----..-." }, 
        { args:"bits",expected: "-.....-..." },
        { args:"three",expected: "-.....-..." }, 
        { args:"woRLd",expected: ".-----.-..-..-.." },
        { args:"MCDONALD",expected: "---.-.-..----..-.-..-.." }, 
        { args:"",expected: "invalid input"}, 
        { args:" ",expected: "invalid input"}, 
        { args:"($%",expected: "invalid input"}, 
        { args:"ßáš",expected: "invalid input"}, 
        { args: 0234,expected: "invalid input"}
    ]

    testdata.forEach(function(input){

        it(`${input.args} should return ${input.expected}`,function(){
            let res = smorse(input.args); 
            assert.equal(res, input.expected)
        })
    })

})
