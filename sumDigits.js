/*
    function sumDigits

    get the argument in typeof 'number' convert to 'string' convert to 'array' reduce to the sum
    
    if argument is negative, with line 16-18 code, array will be modified into appropriate form

*/

function sumDigits(num) {
  /* convert input num to string, then to array,   Number(Array).toString(), String.split('')
  var chars = num.toString().split('');
  
  /* negative input number check-up */
  chars.forEach(function(elem,idx,arr){
      if(elem === '-'){
        arr.splice(idx, 2, '-'+ arr[idx+1]);
      }    
  });
  /* Create number array */
  var nums =chars.map(function(char, idx){
    return Number(char);
  });

  /* function return */
  return nums.reduce(function(acc,cur){
    return acc+cur;
  });
  
}