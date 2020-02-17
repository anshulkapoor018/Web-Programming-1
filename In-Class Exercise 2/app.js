const bands = require("./bands");
const connection = require("./mongoConnection");


const main = async() => {
    // //Creating and Logging first Band
    const LinkinPark = await bands.addBand("Linkin Park",["Chester Bennington", "Rob Bourdon", "Brad Delson", "Dave Farrell", "Joe Hahn", "Mike Shinoda"], 2000, ["Rock"], "Universal");
    console.log(LinkinPark);

    // //Creating Second Band
    const Maroon5 = await bands.addBand("Maroon 5",["Adam Levine", "Jesse Carmichael", "Mickey Madden", "Matt Flynn", "Ryan Dusick"], 1994, ["Rock"], "NBC");

    // //Get all bands and Logging them
    const getAllBands = await bands.getAllBands();
    console.log(getAllBands);

    //Below Code Block needs to be updated with Respective ID's after running the above code block
    
    /*
    //Removing First Band
    const removeBand = await bands.removeBand("5e4b1083507ef60e770f8a23"); //ID needs to be updated after the above cod block is implemented
    try {
        return await bands.getBand("5e4b1083507ef60e770f8a23"); //ID needs to be updated after the above cod block is implemented
    } catch (error) {
      console.error(error);
    }

    //Get all bands again and Logging them
    const getAllBandsAgain = await bands.getAllBands();
    console.log(getAllBandsAgain);

    // Updating the Remaining Band with new values like new name, Band Members, yearformed, recordLabel.
    const updatedBand = await bands.updateBand("5e4b1083507ef60e770f8a24", "Maroon 6", ["Adam Levine", "Jesse Carmichael", "Mickey Madden", "Ryan Dusick"], 1994, ["Funk rock", "Classic Rock", "Pop Rock"],"Universal Music Group"); //ID needs to be updated after the above cod block is implemented
    console.log(updatedBand);
    */
   
}

main().catch(error => {
    console.log(error);
});