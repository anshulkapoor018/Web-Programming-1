const express = require("express");
const router = express.Router();
const story = {
    "storyTitle": "My Story when I bought the laptop",
    "story": "As I always do before making a purchase, I checked a few shopping portals to see what I could earn, but didn’t find anything special. I checked the best buy shop and found some intresting offers. I bought apple ipad with 20% less price than any other shops.\nThis idiot stole somebody’s laptop, and the owner was able to remotely regain access to it and post this video of the perp. I feel that posting here will help to maximize the fuckhole’s embarrassment!"
}

router.get("/",async(req,res)=> {
    res.json(story)
})

module.exports = router;