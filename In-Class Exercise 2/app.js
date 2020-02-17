const bands = require("./bands");
const connection = require("./mongoConnection");


const main = async() => {
    const LinkinPark = await bands.addBand("Linkin Park",["Chester Bennington", "Rob Bourdon", "Brad Delson", "Dave Farrell", "Joe Hahn", "Mike Shinoda"], "2000", ["Rock"], "Universal");
    console.log(LinkinPark);

    const Maroon5 = await bands.addBand("Maroon 5",["Adam Levine", "Jesse Carmichael", "Mickey Madden", "Matt Flynn", "Ryan Dusick"], "1994", ["Rock"], "NBC");
    console.log(Maroon5);
}

main().catch(error => {
    console.log(error);
});