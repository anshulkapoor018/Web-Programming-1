const express = require("express");
const router = express.Router();
const education = [
        {
          "schoolName": "VVDAV Public School",
          "degree": "Senior Secondary School",
          "favoriteClass": "Chemistry",
          "favoriteMemory": ""
        },
        {
            "schoolName": "Jaypee Institute Of Information Technology",
            "degree": "Bachelors of Technology (B.Tech)",
            "favoriteClass": "Data Mining",
            "favoriteMemory": ""
        },
        {
            "schoolName": "Stevens Institute of Technology",
            "degree": "Masters of Science (MS)",
            "favoriteClass": "Special Topics in Software Engineering",
            "favoriteMemory": "Loved the Teaching Style of Professor Rowland"
        }
]

router.get("/",async(req,res)=> {
    res.json(education)
})

module.exports = router;