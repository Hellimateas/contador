var number = document.getElementById('value')
var currentNumber = 0;




function incremento(){
 
  currentNumber = currentNumber+1;
  
  number.innerHTML = currentNumber;
}

function decremento(){
  if(currentNumber>0){
    currentNumber = currentNumber-1;
    } else {currentNumber = 0}
  number.innerHTML = currentNumber;
}
