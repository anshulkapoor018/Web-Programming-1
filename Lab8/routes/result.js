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
  let inputString = req.body['text-to-test'];

  if(!inputString || inputString.length === 0) {
    let renderData = {
      title: "",
      phrase: inputString,
      isPalindrome: isPalindrome,
      errorMsg: "Input String is not given"
    }
    res.status(400).render("result/error", renderData);
  }
  else{
    var alphanumericInputString = (inputString.replace(/[^A-Za-z0-9\s]/g,"").replace(/\s/g,'')).toLowerCase();

    var isPalindrome = check_Palindrome(alphanumericInputString);
    
    let renderData = {
      title: "The Palindrome Results!",
      phrase: inputString,
      isPalindrome: isPalindrome,
      errorMsg: ""
    }
  
    res.render("result/index", renderData);
  }
});

module.exports = router;