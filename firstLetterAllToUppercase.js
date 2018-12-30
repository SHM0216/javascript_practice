function titleCase(str) {
  //(1) All make lower case
  let chars= str.toLowerCase().split(' ');
  //(2) Create new array to which first letter uppercased
  let mapChars = chars.map(function(substr){
    return substr[0].toUpperCase()+substr.slice(1);
  }) 
  //(3) return joining with ' '(space) concurrently
  return mapChars.join(' ');
}


// result 
console.log(titleCase("I'm a little tea pot"))  // => I'm A Little Tea Pot;