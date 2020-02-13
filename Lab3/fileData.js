const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const prompt = bluebird.promisifyAll(require("prompt"));
const fs = bluebird.promisifyAll(require("fs"));

async function getFileAsString(path) {
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
    
    try {
        const fileObject = await JSON.parse(fileContent);
        return fileObject;
    } catch(e) {
        throw "Not a Valid JSON String!";
    }
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
  
// async function main() {
//     // We can await this; if it throws / rejects
//     var objectCheck = {
//         College: "Stevens", 
//         Name: "Anshul Kapoor",
//         Major: "Software Engineering"
//     };

//     const check = await getFileAsJSON("/Users/django/Desktop/Web-Programming-1/Lab3/test.txt");
    
//     console.log(check);
// }

// main();

module.exports = {
    firstName: "Anshul", 
    lastName: "Kapoor", 
    studentId: "10456388",
    getFileAsString,
    getFileAsJSON,
    saveStringToFile,
    saveJSONToFile
};