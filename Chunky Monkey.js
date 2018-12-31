/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

*/


function chunkArrayInGroups(arr, size) {
  // Break it up.;
  let returnArr =[];
  var repeat = arr.length/size;
  for(let i=0; i<repeat; i++){
    returnArr.push(arr.splice(0,size));
  }
  return returnArr;
}

var output =chunkArrayInGroups(["a", "b","e", "c", "d"], 2);

console.log(output);