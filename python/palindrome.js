function palindrome(n){
// check if space or punctuations exist 
var regex =  /([ _.,!"'/$&])/g
let m = n.replace(regex,'');
console.log(m)

//now loop through the string 
var firsthalf = []; 
var secondhalf = []; 
even_half_length = n.length/2
odd_half_length = Math.floor(n.length/2)

//identify even-length palindrome
if(m.length%2 ==0){
  for(i=0;i<even_half_length; i++){
    firsthalf.push(n[i])
  }
  for(i=even_half_length;i<m.length;i++)
    secondhalf.push(n[i])
  
  
}
else if(m.length%2!=0){
  //take out the string in the middle
  console.log(m.length)
  var middle_index = Math.ceil((m.length)/2)
  console.log('this is middle_index: '+middle_index);
  var f= m.substr(0,middle_index-1)+m.substr(middle_index)
  console.log(f)
  console.log('this is after taking out middle index: '+ f)

  for(i=0;i<f.length/2; i++){
    firsthalf.push(f[i])
  }
  for(i=f.length/2;i<f.length;i++)
    secondhalf.push(f[i])



}


final_first = firsthalf.join('');
final_second = secondhalf.reverse().join('');

if (final_first = final_second){
    return true
  }else{
    return false 
  }




//identity odd-length palindrome

}

palindrome('12344321')

