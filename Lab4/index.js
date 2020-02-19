const animals = require("./data/animals") ;
const connection = require("./mongoConnection");

async function main(){
    // Create an animal named Sasha with the type of Dog
    const SashaObj = await animals.create("Sasha","Dog");
    console.log(SashaObj); // Log the newly created animal
    console.log("\n--------------------------------------------------------------------------\n");

    // Create an animal named Lucy, with the type of Dog
    const LucyObj = await animals.create("Lucy", "Dog");

    const allAnimals = await animals.getAll();
    console.log(allAnimals); // Query all animals, and log them all
    console.log("\n--------------------------------------------------------------------------\n");

    // Create an animal named Duke, with a type of Walrus
    const DukeObj = await animals.create("Duke", "Walrus");
    console.log(DukeObj); // Log the newly created Duke
    console.log("\n--------------------------------------------------------------------------\n");

    // Rename Sasha to Sashita
    const updatedSashaObj = await animals.rename(String(SashaObj._id), "Sashita")
    console.log(updatedSashaObj); // Log the newly named Sashita
    console.log("\n--------------------------------------------------------------------------\n");

    // Remove Lucy
    const removedLucyObj = await animals.remove(String(LucyObj._id))
    console.log(removedLucyObj)
    console.log("\n--------------------------------------------------------------------------\n");

    // Query all animals, and log them all
    const allAnimalsAgain = await animals.getAll();
    console.log(allAnimalsAgain);

    const db = await connection();
    await db.serverConfig.close();
}

main().catch(error => {
    console.log(error);
});