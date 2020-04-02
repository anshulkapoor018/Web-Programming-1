const express = require("express");
const router = express.Router();

function check_Palindrome(phrase){
  if(phrase==="") {
    console.log("Nothing found!");
    return false;
  }
  if ((phrase.length) % 2 === 0) {
    total_chars = (phrase.length) / 2;
  } else {
    if (phrase.length === 1) {
      return true;
    } else {
      total_chars = (phrase.length - 1) / 2;
    }
	}
	
  for (var x = 0; x < total_chars; x++) {
    if (phrase[x] != phrase.slice(-1-x)[0]) {
      return false;
    }
	}
	
  return true;
}

router.post("/", async (req, res) => {
  let inputString = req.body.personName;
  console.log(inputString)
  if(!inputString) {
    errorArray.push("Input String is not given");
  }
  if(typeof(inputString) != 'string') {
    errorArray.push("inputString is not a type of string")
  }
  if(inputString.length === 0) {
    errorArray.push("inputString must be not empty")
  }
  
  var alphanumericInputString = (inputString.replace(/[^A-Za-z0-9\s]/g,"").replace(/\s/g,'')).toLowerCase();
	console.log(alphanumericInputString)
	var isPalindrome = check_Palindrome(alphanumericInputString);
	if(isPalindrome == true) {
		console.log("Phrase is a Palindrome!");
	} else {
		console.log("Phrase is not a Palindrome!");
	}
  let renderData = {
    phrase: inputString,
    isPalindrome: isPalindrome
  }
  // console.log(renderData)
  // res.json(renderData)
  res.render("result/index", renderData);
});

module.exports = router;