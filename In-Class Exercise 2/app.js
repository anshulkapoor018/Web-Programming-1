const animals = require("./bands");
const connection = require("./mongoConnection");


// const main = async() => {


//     const blubBlub = await animals.createTask("t1", "its my first", false, null);
//     console.log(blubBlub);

//     const blubBlub = await animals.createTask("t2", "its my second", false, null);
//     console.log(blubBlub);

//     const blubBlub = await animals.getAllTasks();
//     console.log(blubBlub);

//     const blubBlub = await animals.getTask('5d929ddd157f9a05fec7d644');
//     console.log(blubBlub);

//     const blubBlub = await animals.completeTask('5d929ddd157f9a05fec7d644');
//     console.log(blubBlub);

//     const blubBlub1 = await animals.removeTask(blubBlub._id);
//     console.log(blubBlub1);
    

// }

main().catch(error => {
    console.log(error);
});