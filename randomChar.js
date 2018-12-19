/*
*   20181214 
*   
*   1.random. number
*   2.random. number max inclusive
*   3.random. character
*/

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()* (max - min)) + min;
}

function getRandomIntMaxIncludsive(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function randomString(num){
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var text = "";
    for(var i=0; i<num; i++){
        text += chars.charAt(Math.floor(Math.random()* chars.length) ); 
    }
    return text;
}


console.log(getRandomInt(5,6));
console.log(getRandomIntMaxIncludsive(5,6));
console.log(randomString(5));
