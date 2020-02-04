var util = require('./utilities');
var geo = require('./geometry');

const first = {a: 2, b: 3};
const second = {a: 2, b: 4};
const third = {b: 3, a: 2};
const fourth = {}
const fifth = {a: '2', b: '3'}

//Testing Method DeepEquality
console.log("Testing Method Deep Equality from Utilities.js\n")
try {
    console.log(util.deepEquality(first, third)); // true
}catch(e) {
    console.log(e);
}

try {
    console.log(util.deepEquality(first, second)); // false
}catch(e) {
    console.log(e);
}

try {
    console.log(util.deepEquality(first, fourth)); // false
}catch(e) {
    console.log(e);
}

try {
    console.log(util.deepEquality(fourth)); // undefined
}catch(e) {
    console.log(e);
}

try {
    console.log(util.deepEquality(third, fifth)); // false
}catch(e) {
    console.log(e);
}

console.log("\n")
//Testing Method countOfEachCharacterInString
console.log("Testing Method countOfEachCharacterInString from Utilities.js\n")
try {
    const test = "Hello, the pie is in the oven";
    const charMap = util.countOfEachCharacterInString(test);
    console.log(charMap)
}catch(e) {
    console.log(e);
}

try {
    const test = "";
    const charMap = util.countOfEachCharacterInString(test);
    console.log(charMap) // String is empty
}catch(e) {
    console.log(e);
}

try {
    const test = null;
    const charMap = util.countOfEachCharacterInString(test);
    console.log(charMap) // String is null
}catch(e) {
    console.log(e);
}

try {
    const test = "aabbccAABBCC";
    const charMap = util.countOfEachCharacterInString(test);
    console.log(charMap)
}catch(e) {
    console.log(e);
}

try {
    const test = "The quick brown fox jumps over the lazy dog";
    const charMap = util.countOfEachCharacterInString(test);
    console.log(charMap)
}catch(e) {
    console.log(e);
}

console.log("\n")
// Testing method uniqueElements
console.log("Testing Method uniqueElements from Utilities.js\n")
try {
    const testArr = ["a", "a", "b", "a", "b", "c"];
    console.log("Number of Unique elements in the array -> " + util.uniqueElements(testArr));
}catch(e) {
    console.log(e);
}

try {
    const testArr = "abcdefgh"; // Not an array
    console.log("Number of Unique elements in the array -> " + util.uniqueElements(testArr));
}catch(e) {
    console.log(e);
}

try {
    const testArr = []; // Array is empty
    console.log("Number of Unique elements in the array -> " + util.uniqueElements(testArr));
}catch(e) {
    console.log(e);
}

try {
    const testArr = ["a", 1];
    console.log("Number of Unique elements in the array -> " + util.uniqueElements(testArr));
}catch(e) {
    console.log(e);
}

try {
    const testArr = ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa"];
    console.log("Number of Unique elements in the array -> " + util.uniqueElements(testArr));
}catch(e) {
    console.log(e);
}

console.log("\n")
// Testing method volumeOfRectangularPrism
console.log("Testing Method volumeOfRectangularPrism from geometry.js\n")
try {
    const length = 22;
    const width = 22;
    const height = 21;
    console.log("Volume Of Rectangular Prism with Radius- " + length + ", Breadth-" + width + 
    " & Height-" + height + " : " + geo.volumeOfRectangularPrism(length, width, height));
}catch(e) {
    console.log(e);
}

try {
    const length = 0;
    const width = 22;
    const height = 21;
    console.log("Volume Of Rectangular Prism with Radius- " + length + ", Breadth-" + width + 
    " & Height-" + height + " : " + geo.volumeOfRectangularPrism(length, width, height));
}catch(e) {
    console.log(e);
}

try {
    const length = null;
    const width = 2.2;
    const height = 21;
    console.log("Volume Of Rectangular Prism with Radius- " + length + ", Breadth-" + width + 
    " & Height-" + height + " : " + geo.volumeOfRectangularPrism(length, width, height));
}catch(e) {
    console.log(e);
}

try {
    const length = 22;
    const width = -11;
    const height = 22;
    console.log("Volume Of Rectangular Prism with Radius- " + length + ", Breadth-" + width + 
    " & Height-" + height + " : " + geo.volumeOfRectangularPrism(length, width, height));
}catch(e) {
    console.log(e);
}

try {
    const length = 22;
    const width = 22;
    const height = "";
    console.log("Volume Of Rectangular Prism with Length- " + length + ", Breadth-" + width + 
    " & Height-" + height + " : " + geo.volumeOfRectangularPrism(length, width, height));
}catch(e) {
    console.log(e);
}

console.log("\n")
// Testing method surfaceAreaOfRectangularPrism
console.log("Testing Method surfaceAreaOfRectangularPrism from geometry.js\n")
try {
    const length = 22;
    const width = 22;
    const height = 21;
    console.log("Surface Area Of Rectangular Prism with Length-" + length + ", Breadth-" + width + 
    " & Height-" + height + " : " + geo.surfaceAreaOfRectangularPrism(length, width, height));
}catch(e) {
    console.log(e);
}

try {
    const length = 0;
    const width = 22;
    const height = 21;
    console.log("Surface Area Of Rectangular Prism with Length-" + length + ", Breadth-" + width + 
    " & Height-" + height + " : " + geo.surfaceAreaOfRectangularPrism(length, width, height));
}catch(e) {
    console.log(e);
}

try {
    const length = 22;
    const width = -1;
    const height = 21;
    console.log("Surface Area Of Rectangular Prism with Length-" + length + ", Breadth-" + width + 
    " & Height-" + height + " : " + geo.surfaceAreaOfRectangularPrism(length, width, height));
}catch(e) {
    console.log(e);
}

try {
    const length = 22;
    const width = 22;
    const height = 0.0;
    console.log("Surface Area Of Rectangular Prism with Length-" + length + ", Breadth-" + width + 
    " & Height-" + height + " : " + geo.surfaceAreaOfRectangularPrism(length, width, height));
}catch(e) {
    console.log(e);
}

try {
    const length = 22;
    const width = 22;
    const height = null;
    console.log("Surface Area Of Rectangular Prism with Length-" + length + ", Breadth-" + width + 
    " & Height-" + height + " : " + geo.surfaceAreaOfRectangularPrism(length, width, height));
}catch(e) {
    console.log(e);
}

console.log("\n")
// Testing method volumeOfSphere
console.log("Testing Method volumeOfSphere from geometry.js\n")
try {
    const radius = 22;
    console.log("Volume Of Sphere with Radius - " + radius + " : " + geo.volumeOfSphere(radius));
}catch(e) {
    console.log(e);
}

try {
    const radius = null;
    console.log("Volume Of Sphere with Radius - " + radius + " : " + geo.volumeOfSphere(radius));
}catch(e) {
    console.log(e);
}

try {
    const radius = 0;
    console.log("Volume Of Sphere with Radius - " + radius + " : " + geo.volumeOfSphere(radius));
}catch(e) {
    console.log(e);
}

try {
    const radius = 222;
    console.log("Volume Of Sphere with Radius - " + radius + " : " + geo.volumeOfSphere(radius));
}catch(e) {
    console.log(e);
}

try {
    const radius = "2";
    console.log("Volume Of Sphere with Radius - " + radius + " : " + geo.volumeOfSphere(radius));
}catch(e) {
    console.log(e);
}

console.log("\n")
// Testing method surfaceAreaOfSphere
console.log("Testing Method surfaceAreaOfSphere from geometry.js\n")
try {
    const radius = 2.1;
    console.log("Surface Area Of Sphere with Radius - " + radius + " : " + geo.surfaceAreaOfSphere(radius));
}catch(e) {
    console.log(e);
}

try {
    const radius = 0;
    console.log("Surface Area Of Sphere with Radius - " + radius + " : " + geo.surfaceAreaOfSphere(radius));
}catch(e) {
    console.log(e);
}

try {
    const radius = -1122;
    console.log("Surface Area Of Sphere with Radius - " + radius + " : " + geo.surfaceAreaOfSphere(radius));
}catch(e) {
    console.log(e);
}

try {
    const radius = "a";
    console.log("Surface Area Of Sphere with Radius - " + radius + " : " + geo.surfaceAreaOfSphere(radius));
}catch(e) {
    console.log(e);
}

try {
    const radius = 22;
    console.log("Surface Area Of Sphere with Radius - " + radius + " : " + geo.surfaceAreaOfSphere(radius));
}catch(e) {
    console.log(e);
}