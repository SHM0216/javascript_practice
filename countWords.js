/* 
    2018/12/14
    To count the number of Words in string and then return it in the form of object, key is string and value is number { string: count} 
    
*/

function countWords(string) {
    // start solution
    //string =string.toLowerCase()
    var words = string.split(' ');
    var wordsCopy = words;
    var obj = new Object();
    
    for(let i=0; i<words.length; i++){
      var cnt =0;
      if(words[i] !== null){
        wordsCopy.forEach(function(elem){
          if(words[i] === elem){
            cnt++;
          }
        });
        if(cnt>0){
          obj[words[i]] = cnt;
        }
      }
    }
    
    return obj;
    // end solution
  }
  
  function countWordsCaseInsensitive(string) {
    // start solution
    string =string.toLowerCase()
    var words = string.split(' ');
    var wordsCopy = words;
    var obj = new Object();
    
    for(let i=0; i<words.length; i++){
      var cnt =0;
      if(words[i] !== null){
        wordsCopy.forEach(function(elem){
          if(words[i] === elem){
            cnt++;
          }
        });
        if(cnt>0){
          obj[words[i]] = cnt;
        }
      }
    }
    
    return obj;
    // end solution
  }s


  /* 
    count characters 
  */

 function countCharacters(string) {
  // start soluti
  var chars = string.split('');
  var copies = chars;
  var obj = {};
  
  chars.forEach(function(elem){
    var cnt =0;
    if(elem !== null){
      copies.forEach(function(copy){
        if(elem === copy){
          cnt++;
        }
      });
    }
    if(cnt>0){
      obj[elem] = cnt;
    }
  }); //comparison
  
  return obj;
  // end solution
}