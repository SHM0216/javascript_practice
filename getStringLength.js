/*
    getStringLength not using built-in method 'object.length'

    1. slice method (start, [end]), slice() ==> copy
    2. substirng method(start, [end])
*/

function getStringLength(str){
    var i=0;
    while(1){
        if(!String.slice(i)) break;
        i++;
    }
    return i;
}

function getStringLength(str){
    var i=0;
    while(1){
        if(!String.substring(i)) break;
        i++;
    }
    return i;
}