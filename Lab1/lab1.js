const questionOne = function questionOne(arr) {
    var sum = 0;
    i = arr.length;
    while (i--)
        sum += Math.pow(arr[i], 2);
    return sum;
}

const questionTwo = function questionTwo(num) {
    if (num < 1) return 0;

    if (num == 1) return 1;
    
    return questionTwo(num - 1) + questionTwo(num - 2);
}

const questionThree = function questionThree(text) {
    var count = 0;
    for(var i = 0; i < text.length; i++){
        if(text[i] == 'a' || text[i] == 'e' || text[i] == 'i' ||text[i]== 'o' || text[i]== 'u' 
        || text[i] == 'A' || text[i] == 'E' || text[i] == 'I' ||text[i]== 'O' || text[i]== 'U'){
            count+=1;
        }
    }
    return count;
}

const questionFour = function questionFour(num) {
    if (num < 0) 
        return NaN;
    else if (num == 0 || num == 1) 
      return 1;
    else {
        return (num * questionFour(num - 1));
    }
}

module.exports = {
    firstName: "Anshul", 
    lastName: "Kapoor", 
    studentId: "10456388",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};