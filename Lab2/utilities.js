/*
Helper Function to check that each argument is 
provided and that each argument is an object.
*/
function isParameterObject(obj) { 
    if (typeof obj === "object" && obj != null) {
      return true;
    } else {
      return false;
    }
}

function deepEquality(obj1, obj2) {
    if (obj1 === obj2) {
      return true;
    } else if (isParameterObject(obj1) && isParameterObject(obj2)) {
        if (Object.keys(obj1).length !== Object.keys(obj2).length){ 
            return false; 
        }
        for (var prop in obj1) {
            if (!deepEquality(obj1[prop], obj2[prop])) {
                return false;
            }
        }
        return true;
    }
}

/*
Helper Function to check that array is not undefinded 
provided and that each argument is an object.
*/
function checkForDefinedArray(arr) {
    if(arr == undefined)
        throw "Array is not defined";
    else
        return true;
}

//Helper Function to check that parameter passed is of type Array
function checkTypeArray(arr) {
    if(Array.isArray(arr) == false)
        throw "Is not a Array";
    else
        return true;
}

//Helper Function to check that array passed is non-empty
function checkEmptyArray(arr) {
    if(arr.length == 0)
        throw "Array is empty";
    else 
        return true;
}

function uniqueElements(arr) {
    try{
        if(checkTypeArray(arr) && checkEmptyArray(arr) && checkForDefinedArray(arr)){
            return new Set(arr).size
        }
    } catch(e) {
        throw e;
    }   
}

//Helper Function to check that parameter passed is of non-empty
function isExists(str) {
    if(str == ""){
        throw "String is empty";
    } else {
        return true; 
    }
}

//Helper Function to check that parameter passed is of type String or non-null
function checkTypeString(str) {
    if(typeof str === 'string' || str instanceof String )
        return true;
    else {
        if(str==null)
            throw "String is a null";
        else
            throw "Not a String type";
    }
}

function to_str(obj) {
    return ""+obj;
}

function countOfEachCharacterInString(str) {
    try{
        if(checkTypeString(str) && isExists(str)){
            result = { };
               let v = str.split("");
               for(var i = 0; i < v.length; ++i) {
                if(!result[to_str(v[i])])
                     result[to_str(v[i])] = 0;
                ++result[to_str(v[i])];
               }
            return result;
         }
    } catch(e) {
         throw e;
    }   
}

countOfEachCharacterInString.prototype.toString = function() {
    return ""+this;
}

module.exports = {countOfEachCharacterInString, uniqueElements, deepEquality};