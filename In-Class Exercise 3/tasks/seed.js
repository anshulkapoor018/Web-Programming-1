const connection = require('../config/mongoConnection');
const data = require('../data/');
const bands = data.bands;

const main = async () => {
    const db = await connection();
	await db.dropDatabase();
	//Creating first Band
    const LinkinPark = await bands.addBand("Linkin Park",["Chester Bennington", "Rob Bourdon", "Brad Delson", "Dave Farrell", "Joe Hahn", "Mike Shinoda"], 2000, ["Rock"], "Universal");

    //Creating Second Band
    const Maroon5 = await bands.addBand("Maroon 5",["Adam Levine", "Jesse Carmichael", "Mickey Madden", "Matt Flynn", "Ryan Dusick"], 1994, ["Rock"], "NBC");

    //Creating first Band
    const Coldplay = await bands.addBand("Colplay",["Chris Martin", "Guy Berryman", "Will Champion", "Jonny Buckland", "Phil Harvey"], 1996, ["Rock"], "Atlantic");

    //Creating Second Band
    const Beatles = await bands.addBand("The Beatles",["John Lennon", "Paul McCartney", "Ringo Starr", "George Harrison"], 1964, ["Rock", "Pop"], "Apple");

    //Creating first Band
    const RollingStones = await bands.addBand("Rolling Stones",["Mick Jagger", "Keith Richards", "Ronnie Wood", "Charlie Watts"], 1962, ["Rock", "Blues", "Rock and Roll"], "Universal");

    console.log('Done seeding database');
	await db.serverConfig.close();
};

main().catch(error => {
    console.log(error);
});