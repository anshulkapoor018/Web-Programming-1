const mongoCollections = require('../config/mongoCollections');
const albums = mongoCollections.albums;
const bands = mongoCollections.bands;

async function addAlbum(albumTitle, albumAuthor, albumSongs) {
    const albumCollection = await albums();
    // const bandCollection = await bands();

    if (!albumTitle) throw 'You must provide a name for the Album!';

    if (!albumAuthor) throw 'You must provide id for the Album Author!';

    if (!albumSongs || !Array.isArray(albumSongs)) throw 'You must provide an array of Album Songs!';
    if (albumSongs.length === 0) throw 'You must provide at least one album Song'; 

    let newAlbum = {
        title: albumTitle, // String title
        author: albumAuthor, // ID of album as string
        songs: albumSongs // Array of strings
    };

    const bandCollection = await bands();
    const { ObjectId } = require('mongodb');
    const objId = ObjectId.createFromHexString(albumAuthor);

    const insertInfo = await albumCollection.insertOne(newAlbum);
    if (insertInfo.insertedCount === 0) {
        throw 'Could not add new Album';
    } else {
        // console.log(newAlbum._id);
        const updatedInfo = await bandCollection.updateOne({ _id: objId }, { $push: { albums: String(newAlbum._id) } });
        if (updatedInfo.modifiedCount === 0) {
            throw 'Could not update Band with Album Data!';
        }
    }

    const newId = insertInfo.insertedId;
    const newIDString = String(newId);
    const album = await this.getAlbum(newIDString);
    return album;
}

async function getAllAlbums() {
    const albumCollection = await albums();

    const albumsData = await albumCollection.find({}).toArray();

    return albumsData;
}

async function getAlbum(id) {
    if (!id) throw 'You must provide an id to search for';
    const albumCollection = await albums();
    const { ObjectId } = require('mongodb');
    const objId = ObjectId.createFromHexString(id);
    const albumSearch = await albumCollection.findOne({_id: objId});
    if (albumSearch === null){
        throw 'No Album with id - ' + id;
    }
    return albumSearch;
}

async function updateAlbum(albumId, albumTitle, albumAuthor, albumSongs) {
    if (!albumId) throw 'You must provide an id to search for';

    const albumCollection = await albums();

    if (!albumTitle) throw 'You must provide a name for the Album!';

    if (!albumAuthor) throw 'You must provide id for the Album Author!';

    if (!albumSongs || !Array.isArray(albumSongs)) throw 'You must provide an array of Album Songs!';
    if (albumSongs.length === 0) throw 'You must provide at least one album Song'; 

    const { ObjectId } = require('mongodb');
    const objId = ObjectId.createFromHexString(albumId);
    const updatedAlbum = {
        title: albumTitle, // String title
        author: albumAuthor, // ID of album as string
        songs: albumSongs // Array of strings
    };

    const updatedInfo = await albumCollection.updateOne({_id: objId}, {$set: updatedAlbum});
    if (updatedInfo.modifiedCount === 0) {
      throw 'could not update Album!';
    }

    return await this.getAlbum(albumId);
}

async function removeAlbum(id) {
    if (!id) throw 'You must provide an id to search for';
    
    const albumCollection = await albums();
    const { ObjectId } = require('mongodb');
    const objId = ObjectId.createFromHexString(id);
    const deletionInfoForAlbum = await albumCollection.removeOne({_id: objId});

    if (deletionInfoForAlbum.deletedCount === 0) {
      throw `Could not delete Album with id of ${id}`;
    }

    return true;
}

module.exports = {
    addAlbum,
    getAllAlbums,
    getAlbum,
    updateAlbum,
    removeAlbum
}
