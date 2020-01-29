const words = {
    programming: "The action or process of writing computer programs.",
    charisma: "A personal magic of leadership arousing special popular loyalty or enthusiasm for a public figure (such as a political leader)",
    sleuth: "To act as a detective : search for information",
    foray: "A sudden or irregular invasion or attack for war or spoils : raid",
    adjudicate: "to make an official decision about who is right in (a dispute) : to settle judicially"
}

function checkInput(str) {
    try{
        if(typeof str == 'string') {
            return str;      
        }
        else {
            throw "Not a String";
        } 
    } catch(e) {
        throw "Not a String";
    }
}

function lookupDefinition(str) {
    try {
        let input = checkInput(str);
        if(words[input] != undefined){
            return words[input];
        }
    } catch(e) {
        throw "Not a String";
    } 
}

function getWord(str) {
    try{
        let definition = checkInput(str);
        let getW = Object.keys(words).find(key => words[key] === definition);
        if(getW != undefined)
          return getW;
        else
          throw "Error";
    }
    catch(e){
        throw "Definition not Found";
    }   
}

module.exports = {lookupDefinition, getWord}
