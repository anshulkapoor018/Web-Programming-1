const express = require("express");
const router = express.Router();
const story = {
    "storyTitle": "Bhangra : The best part of my college life",
    "story": "The story starts with me roaming around with my friends randomly in my previous college and coming across a group of people who were doing Bhangra (An Indian dance form). My friends and I thought of joining that group just for fun, not knowing that it would turn out to be such a great experience for us.\nAll of us used to learn together, practice together and perform together. There I learnt being a team player. There I discovered a whole new side of myself. There I met the love of my life. That just for fun decision turned out to be the most beautiful decision I ever made."
};

router.get("/",async(req,res)=> {
    res.json(story)
})

module.exports = router;