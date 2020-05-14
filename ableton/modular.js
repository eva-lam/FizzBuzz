//step 1 : seperate the line
let input1 = `
module alpha reverse
    module beta delay
    connect alpha beta
    process Hello world 
` 

let input2 = `
module beta echo
    module alpha reverse
    connect beta alpha 
    process Hello world 
    process foo bar
` 
let input3 = `
module beta echo
    module alpha reverse
    connect beta alpha 
    process Hello world 
    process foo bar
    process frankfurt AmMain
` 

function helper(input){
  var result = input.split(/\r?\n/g)
  var final = result.map(element=>element.trim()).filter(Boolean)
  return final
}


//manipulate based on verb
function categorize(input){
  let lines = helper(input)

  let modules = {};
  let connect = [];
  let process = []

  //group the verbs and categorize them accordingly 
  
  lines.forEach(line=> {
    //here we identify word by splitting line
    let words = line.split(" ")
    //config: module/connect/process 
    let config = words[0];
    switch (config){
      case 'module':
        let name = words[1];
        let action = words[2];
        modules[name] = action;
        break;

      case 'connect':
        connect = connect.concat(words.slice(1));
        
        break;

      case 'process':
        process.push(words.slice(1).join(" "));
        break;
      }
    });

    //console.log('modules: ',modules,'connect:', connect, 'process',process)

    return [modules, connect, process]; 
  }

  
  

  function processSummedInput([modules,connect,process]){
    //should return result after going through one module operation

    let summedInput = []
    let previousInput = null; 
    let counter = 0; 
    let previousInputCount = counter;

    //console.log(process[0])

    if (process.length == 0) {
      return 'no process lines available'
    } if (process.length ==1) {
      summedInput = process.join(' ')
      return [modules, summedInput,previousInput]
    } else if (process.length >1) {
      summedInput = process.join(' ').concat('')
      previousInput = process[counter]
      counter ++
      return [modules,summedInput,previousInput,previousInputCount]
    } 
}
 
    // modules.forEach((moduleName, j) =>{
       
    //     switch (modules[moduleName]){
          
    //       case 'echo':
    //         // call echo operation 
    //         resultFromSingleOperation.push(echo_operation(word))
    //         break;
    //       case 'delay':
    //         resultFromSingleOperation.unshift(delay_operation(word))
    //         break;
    //       case 'reverse':
    //         resultFromSingleOperation.push(reverse_operation(word))
    //         break;
    //       case 'noop': 
    //         resultFromSingleOperation.push(no_operation(word))
    //         break;
    //       }
    //     //end of processContent
    //   })
   
  

  function ApplyOperationOnProcessLine([modules,summedInput,previousInput,previousInputCount],previous){
    let afterOnceOperation =[];
    let moduleName = Object.keys(modules);
    // let network run empty 
    //console.log(moduleName)
    console.log('summedInput: ',summedInput);
    //split eachword 
    let wordArray = summedInput.split(' ')
    console.log(wordArray)
    let command = Object.values(modules)
    console.log('command length: ', command.length)
    let commandIndex = 0; 


    console.log(Object.values(modules))

    if(commandIndex!=command.length){
      wordArray.forEach(word=>{
      
        switch (command[commandIndex]){
          case 'echo':
            // call echo operation 
            console.log('echo called')
            afterOnceOperation.push(echo_operation(word));
            
            break;
          case 'delay':
            console.log('delay called');
            afterOnceOperation.unshift(delay_operation(word));
          
            break;
          case 'reverse':
            console.log('reverse called');
            afterOnceOperation.push(reverse_operation(word));
           
            break;
          case 'noop': 
            console.log('noop called');
            afterOnceOperation.push(no_operation(word));
           
            break;
        }
      })

    }else{
      return afterOnceOperation.join(' ')
    }
    
    commandIndex ++;
    console.log(commandIndex)
    console.log(afterOnceOperation.join(' '))
   // summedInput = afterOnceOperation;
    newsummedInput = afterOnceOperation.join(' ')
   
    return ApplyOperationOnProcessLine([modules,newsummedInput,previousInput,previousInputCount]);

    // return afterOperation;


  }

  function keepAnalyze([modules, connect, process],previousOutput){

    let finalresult = [];
    //identify connect order 
    connect.forEach((name, i) =>{
      
    })
  
    return finalresult.join(' ');
}

//calling function

console.log(ApplyOperationOnProcessLine(processSummedInput(categorize(input3))))


function reverse_operation(process) {
  return process.split("").reverse().join("")
}

function echo_operation(process){
 return process+process;
}

function delay_operation(process){
  if (process.length==1){
    return 'hello'
  }else{
    return process[0]
  }
}

function no_operation(process){
  return process
}

function runAll(input) {
  return finalAnalyze(categorize(input));
}


// console.log(run(input))

exports.keepAnalyze = keepAnalyze
exports.categorize = categorize
exports.runAll = runAll





