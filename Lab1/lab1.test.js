const lab1 = require("./lab1");

// Test case for Question 1
console.log(lab1.questionOne([1, 2, 3])); // should output 14
console.log(lab1.questionOne([5, 3, 10])); // should output 134
console.log(lab1.questionOne([2, 1, 2])); // should output 9
console.log(lab1.questionOne([5, 10, 9])); // should output 206
console.log(lab1.questionOne([1, -1, 1])); // should output 3
console.log(lab1.questionOne([0, 0, 0])); // should output 0
console.log(lab1.questionOne([0, 10, 999])); // should output 998101


// Test case for Question 2
console.log(lab1.questionTwo(0)); // should output 0
console.log(lab1.questionTwo(1)); // should output 1
console.log(lab1.questionTwo(2)); // should output 1
console.log(lab1.questionTwo(3)); // should output 2
console.log(lab1.questionTwo(8)); // should output 21
console.log(lab1.questionTwo(9)); // should output 34
console.log(lab1.questionTwo(10)); // should output 55
console.log(lab1.questionTwo(11)); // should output 89

// Test cases for Question 3
console.log(lab1.questionThree("Mr. and Mrs. Dursley, of number four, Privet Drive, were  proud  to  say  that  they  were  perfectly  normal,  thank you  very  much. They  were  the  last  people  youd  expect  to  be  involved in anything strange or mysterious, because they just didn't hold with such nonsense. \n Mr. Dursley was the director of a firm called Grunnings, which  made  drills.  He  was  a  big,  beefy  man  with  hardly  any  neck,  although he did have a very large mustache. Mrs. Dursley was thin and blonde and had nearly twice the usual amount of neck, which came in very useful as she spent so much of her time craning over garden fences, spying on the neighbors. The Dursleys had a small son  called  Dudley  and  in  their  opinion  there  was no finer boy anywhere.")); // should output 196
console.log(lab1.questionThree("aeiou")); // should output 5
console.log(lab1.questionThree("bcdqrst")); // should output 0 
console.log(lab1.questionThree("10101010")); // should output 0
console.log(lab1.questionThree("aAeEiIoOuU")); // should output 10

// Test cases for Question 4
console.log(lab1.questionFour(10)); // should output 3628800
console.log(lab1.questionFour(-1)); // should output NaN
console.log(lab1.questionFour(0)); // should output 1
console.log(lab1.questionFour(1)); // should output 1
console.log(lab1.questionFour(2)); // should output 2
console.log(lab1.questionFour(3)); // should output 6
console.log(lab1.questionFour(4)); // should output 24
console.log(lab1.questionFour(5)); // should output 120