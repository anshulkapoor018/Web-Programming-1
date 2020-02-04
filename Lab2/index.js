var util = require('./utilities');
var geo = require('./geometry');

const first = {a: 2, b: 3};
const second = {a: 2, b: 4};
const third = {b: 3, a: 2};
const fourth = {}
const fifth = {a: '2', b: '3'}

//Testing Method DeepEquality
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

//Testing Method countOfEachCharacterInString
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

// Testing method uniqueElements
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

// Testing method volumeOfRectangularPrism

try {
    const length = 22;
    const width = 22;
    const height = 21;
    console.log("Volume Of Rectangular Prism with Radius- " + length + ", Breadth-" + width + 
    "& Height-" + height + " : " + geo.volumeOfRectangularPrism(length, width, height));
}catch(e) {
    console.log(e);
}

try {
    const length = 0;
    const width = 22;
    const height = 21;
    console.log("Volume Of Rectangular Prism with Radius- " + length + ", Breadth-" + width + 
    "& Height-" + height + " : " + geo.volumeOfRectangularPrism(length, width, height));
}catch(e) {
    console.log(e);
}

try {
    const length = 1;
    const width = 2.2;
    const height = 21;
    console.log("Volume Of Rectangular Prism with Radius- " + length + ", Breadth-" + width + 
    "& Height-" + height + " : " + geo.volumeOfRectangularPrism(length, width, height));
}catch(e) {
    console.log(e);
}

try {
    const length = 22;
    const width = -11;
    const height = 22;
    console.log("Volume Of Rectangular Prism with Radius- " + length + ", Breadth-" + width + 
    "& Height-" + height + " : " + geo.volumeOfRectangularPrism(length, width, height));
}catch(e) {
    console.log(e);
}

try {
    const length = 22;
    const width = 22;
    const height = "";
    console.log("Volume Of Rectangular Prism with Length- " + length + ", Breadth-" + width + 
    "& Height-" + height + " : " + geo.volumeOfRectangularPrism(length, width, height));
}catch(e) {
    console.log(e);
}

// Testing method surfaceAreaOfRectangularPrism

try {
    const length = 22;
    const width = 22;
    const height = 21;
    console.log("Surface Area Of Rectangular Prism with Length-" + length + ", Breadth-" + width + 
    "& Height-" + height + " : " + geo.surfaceAreaOfRectangularPrism(length, width, height));
}catch(e) {
    console.log(e);
}

try {
    const length = 0;
    const width = 22;
    const height = 21;
    console.log("Surface Area Of Rectangular Prism with Length-" + length + ", Breadth-" + width + 
    "& Height-" + height + " : " + geo.surfaceAreaOfRectangularPrism(length, width, height));
}catch(e) {
    console.log(e);
}

try {
    const length = 22;
    const width = -1;
    const height = 21;
    console.log("Surface Area Of Rectangular Prism with Length-" + length + ", Breadth-" + width + 
    "& Height-" + height + " : " + geo.surfaceAreaOfRectangularPrism(length, width, height));
}catch(e) {
    console.log(e);
}

try {
    const length = 22;
    const width = 22;
    const height = 0.0;
    console.log("Surface Area Of Rectangular Prism with Length-" + length + ", Breadth-" + width + 
    "& Height-" + height + " : " + geo.surfaceAreaOfRectangularPrism(length, width, height));
}catch(e) {
    console.log(e);
}

try {
    const length = 22;
    const width = 22;
    const height = null;
    console.log("Surface Area Of Rectangular Prism with Length-" + length + ", Breadth-" + width + 
    "& Height-" + height + " : " + geo.surfaceAreaOfRectangularPrism(length, width, height));
}catch(e) {
    console.log(e);
}

// Testing method volumeOfSphere

try {
    const radius = 22;
    console.log("Volume Of Sphere with Radius- " + radius + geo.volumeOfSphere(radius));
}catch(e) {
    console.log(e);
}

try {
    const radius = 2.20;
    console.log("Volume Of Sphere with Radius- " + radius + geo.volumeOfSphere(radius));
}catch(e) {
    console.log(e);
}

try {
    const radius = -1.7;
    console.log("Volume Of Sphere with Radius- " + radius + geo.volumeOfSphere(radius));
}catch(e) {
    console.log(e);
}

try {
    const radius = 2;
    console.log("Volume Of Sphere with Radius- " + radius + geo.volumeOfSphere(radius));
}catch(e) {
    console.log(e);
}

try {
    const radius = "2";
    console.log("Volume Of Sphere with Radius- " + radius + geo.volumeOfSphere(radius));
}catch(e) {
    console.log(e);
}

// Testing method surfaceAreaOfSphere

try {
    const radius = 2.1;
    console.log("Surface Area Of Sphere with Radius- " + radius + geo.surfaceAreaOfSphere(radius));
}catch(e) {
    console.log(e);
}

// try {
//     const radius = 22;
//     console.log("Surface Area Of Sphere with Radius- " + radius + geo.surfaceAreaOfSphere(radius));
// }catch(e) {
//     console.log(e);
// }

// try {
//     const radius = 22;
//     console.log("Surface Area Of Sphere with Radius- " + radius + geo.surfaceAreaOfSphere(radius));
// }catch(e) {
//     console.log(e);
// }

// try {
//     const radius = 22;
//     console.log("Surface Area Of Sphere with Radius- " + radius + geo.surfaceAreaOfSphere(radius));
// }catch(e) {
//     console.log(e);
// }

// try {
//     const radius = 22;
//     console.log("Surface Area Of Sphere with Radius- " + radius + geo.surfaceAreaOfSphere(radius));
// }catch(e) {
//     console.log(e);
// }