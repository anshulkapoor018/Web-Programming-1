const mongoCollections = require('../config/mongoCollections');
const bands = mongoCollections.bands;
const albums = require('./albums');
const albumsCollection = mongoCollections.albums;

async function addBand(bandName, bandMembers, yearFormed, genres, albums, recordLabel) {
    const bandCollection = await bands();

    if (!bandName) throw 'You must provide a name for the Band!';

    if (!yearFormed) throw 'You must provide an year in which band was formed!';

    if (!recordLabel) throw 'You must provide recordLabel for the Band!';

    if (!Array.isArray(albums)) albums = [];

    if (!bandMembers || !Array.isArray(bandMembers)) throw 'You must provide an array of Band members';
    if (bandMembers.length === 0) throw 'You must provide at least one Band Member!';

    if (!genres || !Array.isArray(genres)) throw 'You must provide an array of Genre!';
    if (genres.length === 0) throw 'You must provide at least one genres'; 

    let newBand = {
        bandName: bandName,
        bandMembers: bandMembers,
        yearFormed: yearFormed,
        genres: genres,
        albums: albums,
        recordLabel: recordLabel,
    };

    const insertInfo = await bandCollection.insertOne(newBand);
    if (insertInfo.insertedCount === 0) throw 'Could not add new Band';

    const newId = insertInfo.insertedId;
    const newIDString = String(newId);
    const band = await this.getBand(newIDString);
    return band;
}

async function getAllBands() {
    const bandCollection = await bands();

    const bandsData = await bandCollection.find({}).toArray();

    for (var j = 0; j < bandsData.length; j++){
        const albumList = (bandsData[j].albums);
        var updatedAlbumObjectArray = [];
        for (var k = 0; k < albumList.length; k++){
            const albumCollection = await albumsCollection();
            const { ObjectId } = require('mongodb');
            const objId = ObjectId.createFromHexString(albumList[k]);
            const albumSearch = await albumCollection.findOne({_id: objId});
            if (albumSearch === null){
                throw 'No Album with id - ' + id;
            } else {
                updatedAlbumObjectArray.push(albumSearch)
            }
        }
        bandsData[j].albums = [];
        bandsData[j].albums = updatedAlbumObjectArray;
    }
    return bandsData;
}

async function getBand(id) {
    if (!id) throw 'You must provide an id to search for';
    const bandCollection = await bands();
    const { ObjectId } = require('mongodb');
    const objId = ObjectId.createFromHexString(id);
    const bandSearch = await bandCollection.findOne({_id: objId});
    if (bandSearch === null){
        throw 'No Band with id - ' + id;
    } else {
        const albumList = (bandSearch.albums);
        var updatedAlbumObjectArray = [];
        for (var k = 0; k < albumList.length; k++){
            const albumCollection = await albumsCollection();
            const { ObjectId } = require('mongodb');
            const objId = ObjectId.createFromHexString(albumList[k]);
            const albumSearch = await albumCollection.findOne({_id: objId});
            if (albumSearch === null){
                throw 'No Album with id - ' + id;
            } else {
                updatedAlbumObjectArray.push(albumSearch)
            }
        }
        bandSearch.albums = [];
        bandSearch.albums = updatedAlbumObjectArray;
    }
    return bandSearch;
}

async function updateBand(bandId, bandName, bandMembers, yearFormed, genres, albums, recordLabel) {
    if (!bandId) throw 'You must provide an id to search for';

    if (!bandName) throw 'You must provide a name for the Band!';

    if (!yearFormed) throw 'You must provide an year in which band was formed!';

    if (!recordLabel) throw 'You must provide recordLabel for the Band!';

    if (!Array.isArray(albums)) albums = [];

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
        albums: albums,
        recordLabel: recordLabel,
    };

    const updatedInfo = await bandCollection.updateOne({_id: objId}, {$set: updatedBand});
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
    const bandSearch = await bandCollection.findOne({_id: objId});
    if (bandSearch === null){
        throw 'No Band with id - ' + id;
    } else{
        const albumList = bandSearch.albums;

        for (var j = 0; j < albumList.length; j++){
            try {
                const albumCollection = await albumsCollection();
                const { ObjectId } = require('mongodb');
                const objId = ObjectId.createFromHexString(albumList[j]);
                const deletionInfoForAlbum = await albumCollection.removeOne({_id: objId});
            
                if (deletionInfoForAlbum.deletedCount === 0) {
                  throw `Could not delete Album with id of ${id}`;
                }
            } catch (e) {
                throw 'Could not Delete Album while deleting band!';
            }
        }
        const deletionInfoForBand = await bandCollection.removeOne({_id: objId});
        if (deletionInfoForBand.deletedCount === 0) {
            throw `Could not delete Band with id of ${id}`;
        }
        return true;
    }
}

module.exports = {
    addBand,
    getAllBands,
    getBand,
    updateBand,
    removeBand
}
