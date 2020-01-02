var current_year =2020; 
var n = 5000; 
var list =[]; 

function leapYear(m){
  count = 0 
  for(i=current_year; i<5000;i++){

    var condition_1 = i%4; 
    var condition_2 = i%100; 
    var condition_3 = i%400; 

    if (count!=20 && condition_1 ==0 && condition_2>0){
      list.push(i); 
      count++;

    }if (count!=20 && condition_3==0){
      list.push(i);
      count++;
    }
  }
  return list 
}

console.log(leapYear(n))