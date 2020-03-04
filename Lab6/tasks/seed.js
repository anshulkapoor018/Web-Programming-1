const connection = require('../config/mongoConnection');
const data = require('../data/');
const bands = data.bands;
const albums = data.albums;

const main = async () => {
    const db = await connection();
	await db.dropDatabase();
	//Creating first Band
    const LinkinPark = await bands.addBand("Linkin Park",["Chester Bennington", "Rob Bourdon", "Brad Delson", "Dave Farrell", "Joe Hahn", "Mike Shinoda"], 2000, ["Rock"], [], "Universal");
    const LinkinParkAlbum1 = await albums.addAlbum("Hybrid Theory I", String(LinkinPark._id), ["One Step Closer", "Crawling", "Papercut", "In the End"]);
    const LinkinParkAlbum2 = await albums.addAlbum("Hybrid Theory II", String(LinkinPark._id), ["One Step Closer", "Crawling", "Papercut", "In the End"]);
    
    //Creating Second Band
    const Maroon5 = await bands.addBand("Maroon 5",["Adam Levine", "Jesse Carmichael", "Mickey Madden", "Matt Flynn", "Ryan Dusick"], 1994, ["Rock"], [], "NBC");
    const Maroon5Album = await albums.addAlbum("Overexposed", String(Maroon5._id), ["One Step Closer", "Crawling", "Papercut", "In the End"]);

    
    //Creating third Band
    const Coldplay = await bands.addBand("Colplay",["Chris Martin", "Guy Berryman", "Will Champion", "Jonny Buckland", "Phil Harvey"], 1996, ["Rock"], [], "Atlantic");
    const ColdplayAlbum = await albums.addAlbum("Everyday Life", String(Coldplay._id), ["One Step Closer", "Crawling", "Papercut", "In the End"]);

    
    //Creating fourth Band
    const Beatles = await bands.addBand("The Beatles",["John Lennon", "Paul McCartney", "Ringo Starr", "George Harrison"], 1964, ["Rock", "Pop"], [], "Apple");
    const BeatlesAlbum = await albums.addAlbum("Abbey road", String(Beatles._id), ["One Step Closer", "Crawling", "Papercut", "In the End"]);

    
    //Creating fifth Band
    const RollingStones = await bands.addBand("Rolling Stones",["Mick Jagger", "Keith Richards", "Ronnie Wood", "Charlie Watts"], 1962, ["Rock", "Blues", "Rock and Roll"], [], "Universal");
    const RollingStonesAlbum = await albums.addAlbum("Sticky fingers", String(RollingStones._id), ["One Step Closer", "Crawling", "Papercut", "In the End"]);


    console.log('Done seeding database for Band Collection!');
	await db.serverConfig.close();
};

main().catch(error => {
    console.log(error);
});