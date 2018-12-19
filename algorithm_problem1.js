function transformFirstAndLast(array) {
  //your code here
  /* reference passing */
  if(!array.length %2){
    return "element number is not matching";  
  }
  
  var obj={};
  var arr = array.slice();
  arr.reverse();
  for(var i=0; i<arr.length; i++){
    var key= arr.pop();
    arr.reverse();
    var value = arr.pop();
    obj[key] =value;
  }
  return obj;
}