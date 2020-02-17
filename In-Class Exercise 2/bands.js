const mongoCollections = require('./mongoCollections');
const bands = mongoCollections.bands;

async function addBand(bandName, bandMembers, yearFormed, genres, recordLabel) {
    const bandCollection = await bands();

    if (!bandName) throw 'You must provide a name for the Band!';

    if (!yearFormed) throw 'You must provide an year in which band was formed!';

    if (!recordLabel) throw 'You must provide recordLabel for the Band!';

    if (!bandMembers || !Array.isArray(bandMembers)) throw 'You must provide an array of Band members';
    if (bandMembers.length === 0) throw 'You must provide at least one Band Member!';

    if (!genres || !Array.isArray(genres)) throw 'You must provide an array of Genre!';
    if (genres.length === 0) throw 'You must provide at least one genres'; 

    let newBand = {
        bandName: bandName,
        bandMembers: bandMembers,
        yearFormed: yearFormed,
        genres: genres,
        recordLabel: recordLabel,
    };

    const insertInfo = await bandCollection.insertOne(newBand);
    if (insertInfo.insertedCount === 0) throw 'Could not add new Band';

    const newId = insertInfo.insertedId;

    const band = await this.getBand(newId);
    return band;
}

async function getAllBands() {
    const bandCollection = await bands();

    const bandsData = await bandCollection.find({}).toArray();

    return bandsData;
}

async function getBand(id) {
    if (!id) throw 'You must provide an id to search for';
    const bandCollection = await bands();
    const { ObjectId } = require('mongodb');
    const objId = ObjectId.createFromHexString(id);
    const bandSearch = await bandCollection.findOne({_id: id});
    if (bandSearch === null){
        throw 'No Band with id - ' + id;
    }
    return bandSearch;
}

async function updateBand(bandId, bandName, bandMembers, yearFormed, genres, recordLabel) {
    if (!id) throw 'You must provide an id to search for';

    if (!bandName) throw 'You must provide a name for the Band!';

    if (!yearFormed) throw 'You must provide an year in which band was formed!';

    if (!recordLabel) throw 'You must provide recordLabel for the Band!';

    if (!bandMembers || !Array.isArray(bandMembers)) throw 'You must provide an array of Band members';
    if (bandMembers.length === 0) throw 'You must provide at least one Band Member!';

    if (!genres || !Array.isArray(genres)) throw 'You must provide an array of Genre!';
    if (genres.length === 0) throw 'You must provide at least one genres';

    const bandCollection = await bands();
    const { ObjectId } = require('mongodb');
    const objId = ObjectId.createFromHexString(bandId);
    const updatedBand = {
        bandName: bandName,
        bandMembers: bandMembers,
        yearFormed: yearFormed,
        genres: genres,
        recordLabel: recordLabel,
    };

    const updatedInfo = await dogCollection.updateOne({_id: objId}, {$set: updateBand});
    if (updatedInfo.modifiedCount === 0) {
      throw 'could not update Band successfully';
    }

    return await this.getBand(bandId);
}

async function removeBand(id) {
    if (!id) throw 'You must provide an id to search for';

    const bandCollection = await bands();
    const { ObjectId } = require('mongodb');
    const objId = ObjectId.createFromHexString(id);
    const deletionInfoForBand = await bandCollection.removeOne({_id: objId});

    if (deletionInfoForBand.deletedCount === 0) {
      throw `Could not delete Band with id of ${id}`;
    }

    return true;
}

module.exports = {
    addBand,
    getAllBands,
    getBand,
    updateBand,
    removeBand
}
