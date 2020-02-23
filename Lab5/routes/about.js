const express = require("express");
const router = express.Router();

const about = {
    "name": "Anshul Kapoor",
    "cwid": "10456388",
    "biography": "I am an MS Student majoring in Computer Software Engineering. I did my bachelors in B.Tech in Information Technology from India. I have a keen interest in New technology, data structures, algorithms, and Mobile Development.\nI have 2 years of experience, encapsulating product support in the start of my career and then as a Software Developer building an iOS App which aimed to help students prepare better for the most competitive exam of India 'UPSC'. Fortunately, Being on both sides of the spectrum, Product support being the first role made me understand the user and software requirements in general with much clarity, and using the learnings from it helped me better my thinking towards building the product as a Software Developer later. Currently, I am learning Python and would like to go deep into it. \nI like to play mobile games a lot and reading novels on my Kindle. I love trekking while traveling and exploring different street foods in different places.",
    "favoriteShows": ["Money Heist", "Breaking Bad", "Prison Break", "Game of Thrones", "Fight Science"],
    "hobbies": ["Mobile Games", "Cooking", "Reading"]
}


router.get("/",async(req,res)=> {
    res.json(about)
})
module.exports = router;