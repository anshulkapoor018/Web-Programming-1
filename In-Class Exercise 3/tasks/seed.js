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
    const Coldplay = await bands.addBand("Colplay",["Chester Bennington", "Rob Bourdon", "Brad Delson", "Dave Farrell", "Joe Hahn", "Mike Shinoda"], 2000, ["Rock"], "Universal");

    //Creating Second Band
    const Beatles = await bands.addBand("The Beatles",["Adam Levine", "Jesse Carmichael", "Mickey Madden", "Matt Flynn", "Ryan Dusick"], 1994, ["Rock"], "NBC");

    //Creating first Band
    const RollingStones = await bands.addBand("Rolling Stones",["Chester Bennington", "Rob Bourdon", "Brad Delson", "Dave Farrell", "Joe Hahn", "Mike Shinoda"], 2000, ["Rock"], "Universal");

    console.log('Done seeding database');
	await db.serverConfig.close();
};

main().catch(error => {
    console.log(error);
});