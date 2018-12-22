/*
 *   modulo without built-in function %
 *
*/


function modulo(num1, num2) {
  if (num2 ===0 || Number.isNaN(num1) || Number.isNaN(num2)) {
    return NaN;
  }
  var isPositive = num1 >= 0;
  
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);
  
  while (num1 >= num2) {
    num1 -= num2;
  }
  
  return isPositive ? num1 : -num1;
}