const mongoCollections = require("../mongoCollections");
const animals = mongoCollections.animals;

async function create(name, animalType){
    if(name === null || animalType === null || name === undefined || animalType === undefined || typeof(name) != 'string' ||
    typeof(animalType) != 'string') {
        throw "Please enter Proper Arguments."
    }
    if(name.length === 0 || animalType.length === 0) {
        throw "Name or animalType length should not be zero"
    }
    const animalCollection = await animals();
    
    var newAnimal = {
        name: name,
        animalType: animalType
    };

    const insertInfo = await animalCollection.insertOne(newAnimal);
    if (insertInfo.insertedCount === 0) {
        throw 'Could not add new Animal Data!';
    }
    const newId = insertInfo.insertedId;
    const newIDString = String(newId);
    const animalData = await this.get(newIDString);
    return animalData;
}

async function getAll(){
    const animalCollection = await animals();
    const animal = await animalCollection.find({}).toArray();
    return animal;
}

async function get(id){
    if (!id) {
        throw 'You must provide an id to search for';
    }    
    const animalollection = await animals();
    const { ObjectId } = require('mongodb');
    const objId = ObjectId.createFromHexString(id);
    const animalSearch = await animalollection.findOne({_id: objId});
    if (animalSearch === null){
        throw 'No Animal with id - ' + id;
    }
    return animalSearch;
}

async function remove(id){
    if (!id) {
        throw 'You must provide an id to search for';
    }
    const animalLogging = await get(id);
    const animalCollection = await animals();
    const { ObjectId } = require('mongodb');
    const objId = ObjectId.createFromHexString(id);
    const deletionInfoForAnimal = await animalCollection.removeOne({_id: objId});

    if (deletionInfoForAnimal.deletedCount === 0) {
      throw `Could not delete animal with id - ${id}`;
    }

    return animalLogging;
}

async function rename(id, newName){
    if(!id) {
        throw "You must provide an id to search for";
    }
    if(newName === null || newName === undefined  || typeof(newName) !== 'string') {
        throw "Rename failed, Please Provide a Proper Argument for Renaming!";
    }
    
    if(newName.length === 0) {
        throw "Rename failed! You must provide valid name and not an empty String";
    }
    const animalToBeUpdated = await get(id);
    const animalCollection = await animals();
    const { ObjectId } = require('mongodb');
    const objId = ObjectId.createFromHexString(id);
    const updatedAnimal = {
        name: newName,
        animalType: animalToBeUpdated.animalType
    };

    const updatedInfo = await animalCollection.updateOne({_id: objId}, {$set: updatedAnimal});
    if (updatedInfo.modifiedCount === 0) {
      throw 'could not update Animal name successfully';
    }

    return await this.get(id);
}

module.exports={
        create,
        get,
        getAll,
        remove,
        rename,
        firstName: "Anshul", 
        lastName: "Kapoor", 
        studentId: "10456388",
}