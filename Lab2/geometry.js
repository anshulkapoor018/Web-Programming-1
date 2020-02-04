const volumeOfRectangularPrism = function volumeOfRectangularPrism(length, width, height) {
    if(length == undefined){
        throw "Length not defined!"
    }
    if(width == undefined){
        throw "Width not defined!"
    }
    if(height == undefined){
        throw "Height not defined!"
    }
    if(isNaN(length)){
        throw "Length entered is not a number!"
    }
    if(isNaN(width)){
        throw "Width entered is not a number!"
    }
    if(isNaN(height)){
        throw "Height entered is not a number!"
    }
    if(length <= 0){
        throw "Length entered is out of bounds"
    }
    if(width <= 0){
        throw "Width entered is out of bounds"
    }
    if(height <= 0){
        throw "Height entered is out of bounds"
    }
    var volume = length * width * height;
    return volume;
}

const surfaceAreaOfRectangularPrism = function surfaceAreaOfRectangularPrism(length, width, height) {
    if(length == undefined){
        throw "Length not defined!"
    }
    if(width == undefined){
        throw "Width not defined!"
    }
    if(height == undefined){
        throw "Height not defined!"
    }
    if(isNaN(length)){
        throw "Length entered is not a number!"
    }
    if(isNaN(width)){
        throw "Width entered is not a number!"
    }
    if(isNaN(height)){
        throw "Height entered is not a number!"
    }
    if(length <= 0){
        throw "Length entered is out of bounds"
    }
    if(width <= 0){
        throw "Width entered is out of bounds"
    }
    if(height <= 0){
        throw "Height entered is out of bounds"
    }
    var surfaceArea = 2 * ((length * width) + (height * length) + (height * width));
    return surfaceArea;
}

const volumeOfSphere = function volumeOfSphere(radius) {
    if(radius == undefined){
        throw "Radius not defined!"
    }
    if(isNaN(radius)){
        throw "Radius entered is not a number!"
    }
    if(radius <= 0){
        throw "Radius entered is out of bounds"
    }
    var volume = (4/3) * Math.PI * Math.pow(radius, 3);
    return volume.toFixed(2);
}

const surfaceAreaOfSphere = function surfaceAreaOfSphere(radius) {
    if(radius == undefined){
        throw "Radius not defined!"
    }
    if(isNaN(radius)){
        throw "Radius entered is not a number!"
    }
    if(radius <= 0){
        throw "Radius entered is out of bounds"
    }
    var surfaceArea = (4) * Math.PI * Math.pow(radius, 2);
    return surfaceArea.toFixed(2);
}

module.exports = {
    firstName: "Anshul", 
    lastName: "Kapoor", 
    studentId: "10456388",
    volumeOfRectangularPrism,
    surfaceAreaOfRectangularPrism,
    volumeOfSphere,
    surfaceAreaOfSphere
};