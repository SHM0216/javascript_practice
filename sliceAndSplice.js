/*

Basic Algorithm Scripting: Slice and Splice

You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

*/

function frankenSplice(arr1, arr2, n) {
//slice() array copy
  let returnArr = arr2.slice();

    arr1.forEach(function(elem){
        //splice() , to put items to the place where i want specifically
      returnArr.splice(n,0,elem);
      n++;
    })

  return returnArr;
}

//result
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));