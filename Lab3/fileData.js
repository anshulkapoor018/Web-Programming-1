const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const prompt = bluebird.promisifyAll(require("prompt"));
const fs = bluebird.promisifyAll(require("fs"));

async function getFileAsString(path) {
    if (!path) throw "Please provide a path!";
    const fileContent = await fs.readFileAsync(path, "utf-8")
    .catch(error => ({
        message: "Error while reading the file", error: error
    }));

    return fileContent;
}

async function getFileAsJSON(path) {
    if (!path) { // Check for Path entered or not
        throw "Please provide a path!"; 
    }
    if (!fs.existsSync(path)) { // Check for Path Exists or not
        throw "Please enter a Valid path to a file!";
    }
    const fileContent = await fs.readFileAsync(path, "utf-8")
    .catch(error => ({
        message: "Error while reading the file", error: error
    }));

    const fileObject = JSON.parse(fileContent);

    return fileObject;
}

async function saveStringToFile(path, text) {
    if(text == "" || text == undefined){
        throw "Please provide a text to write!"
    }
    if (!fs.existsSync(path)) { // Check for Path Exists or not
        throw "Please enter a Valid path to a file you want to write on!";
    }
    await fs.writeFileAsync(path, text)
    .catch(err => {
        throw err;
    });
    return true;
}

async function saveJSONToFile(path, obj) {
    if(obj == "" || obj == undefined){
        throw "Please provide a valid Object to write!"
    }
    if (!fs.existsSync(path)) { // Check for Path Exists or not
        throw "Please enter a Valid path to a file you want to write on!";
    }
    const text = JSON.stringify(obj);
    await fs.writeFileAsync(path, text)
    .catch(err => {
        throw err;
    });
    return true;
}

// function createMetrics(text){
//     text = text.toLowerCase();
//     var newText = text;
//     var totalVowels = 0;
//     var totalConsonants = 0;
//     var uniqueWordsDict = {};
//     var averageWordLength = 0;
//     var longWords = 0;
//     newText = newText.replace(/(\\r|\\n|\\t|\s)/gm,"");
//     var lettersOnly = '';
//     for (var i = 0; i < newText.length; i++) {
//         if (newText[i] >= 'A' && newText[i] <= 'Z' || newText[i] >= 'a' && newText[i] <= 'z') {
//             lettersOnly += newText[i];
//             if (newText[i].match(/[aeiouAEIOU]/)){
//                 totalVowels += 1;
//             } else {
//                 totalConsonants += 1;
//             }
//         }
//     }
//     var onlyWords = text.replace(/[0-9]/g, '');
//     var onlyWords = onlyWords.replace(/[\r\n]+/gm, " ");
//     // onlyWords = onlyWords.replace(/[&\/\\#,+()$~;%.'":*?<>{}!-]/g, ' ');
//     onlyWords = onlyWords.replace(/[^a-zA-Z ]/g, " ");
//     onlyWords = onlyWords.replace(/ +(?= )/g,'').trim();
//     var words = onlyWords.split(" ");
//     console.log(words)

//     for (var i = 0; i < words.length; i++) {
//         var data = words[i];
//         averageWordLength += data.length;
//         if (data.length >= 6) {
//             longWords += 1;
//         }

//         if (!uniqueWordsDict[data]) {
//             uniqueWordsDict[data] = 0;
//         }
//         uniqueWordsDict[data] += 1;
//     }
    
//     const totalLetters = lettersOnly.length;
//     const totalNonLetters = text.replace(/[a-z]/gi, '').length;
//     const totalWords = words.length
//     const uniqueWords = Object.keys(uniqueWordsDict).length;
//     averageWordLength = averageWordLength / totalWords;

//     var result = {
//         totalLetters: totalLetters,
//         totalNonLetters: totalNonLetters,
//         totalWords: totalWords,
//         totalVowels: totalVowels,
//         totalConsonants: totalConsonants,
//         uniqueWords: uniqueWords,
//         longWords: longWords,
//         averageWordLength: averageWordLength,
//         wordOccurrences: uniqueWordsDict
//     }
//     return result;
// }
  
// async function main() {
//     // We can await this; if it throws / rejects
//     var objectCheck = {
//         College: "Stevens", 
//         Name: "Anshul Kapoor",
//         Major: "Software Engineering"
//     };

//     const check = await getFileAsString("/Users/django/Desktop/Web-Programming-1/Lab3/chapter1.txt");
    
//     console.log(createMetrics(check));
// }

module.exports = {
    firstName: "Anshul", 
    lastName: "Kapoor", 
    studentId: "10456388",
    getFileAsString,
    getFileAsJSON,
    saveStringToFile,
    saveJSONToFile
};