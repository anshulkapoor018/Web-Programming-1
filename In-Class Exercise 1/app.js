var dic = require('./dictionary');
try {
    var definition1 = dic.lookupDefinition("programming");
    console.log("The key is \"programming\" and the value is: "+ definition1);
}catch(e) {
    console.log(e);
}

try {
    var definition2 = dic.lookupDefinition("hello");
    console.log("The key is \"hello\" and the value is: "+ definition2);
}catch(e) {
    console.log(e);
}

try {
    var getWord1 = dic.getWord("The action or process of writing computer programs.");
    if(getWord1 == undefined)
        throw "Word not Found";
    console.log(getWord1);
} catch(e) {
    console.log(e);
}

try {
    var getWord2 = dic.getWord("A way of greeting someone!");
    if(getWord2 == undefined)
        throw "Word not Found";
    console.log(getWord2);
} catch(e) {
    console.log(e);
}