function claculate(){
    let num1 = Number(document.getElementById('num1').value);
  let digit = document.getElementById('digit').value;
  let num2 = Number(document.getElementById('num2').value);
if(digit == "+"){
  document.querySelector('.p2').innerHTML = num1+num2;
}
if(digit == "-"){
  document.querySelector('.p2').innerHTML = num1-num2;
}
if(digit == "*"){
  document.querySelector('.p2').innerHTML = num1*num2;
}
if(digit == "/"){
  document.querySelector('.p2').innerHTML = num1/num2;
}
}