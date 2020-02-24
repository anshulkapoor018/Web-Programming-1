const express = require("express");
const router = express.Router();
const education = [
        {
          "schoolName": "VVDAV Public School",
          "degree": "Senior Secondary School",
          "favoriteClass": "Chemistry",
          "favoriteMemory": "When I got to represent school in an Inter-School Science Competition."
        },
        {
            "schoolName": "Jaypee Institute Of Information Technology",
            "degree": "Bachelors of Technology (B.Tech)",
            "favoriteClass": "Data Mining",
            "favoriteMemory": "My Dance Troupe(Bhangra) in College. Won many group dance competitions."
        },
        {
            "schoolName": "Stevens Institute of Technology",
            "degree": "Masters of Science (MS)",
            "favoriteClass": "Special Topics in Software Engineering",
            "favoriteMemory": "Loved the Teaching Style of Professor Rowland in Fall Semester"
        }
]

router.get("/",async(req,res)=> {
    res.json(education)
})

module.exports = router;