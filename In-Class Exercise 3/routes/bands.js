const express = require("express");
const router = express.Router();
const data = require('../data/');
const bands = data.bands;


//Get Band by ID
router.get("/:id", async (req, res) => {
  try {
    const band = await bands.getBand(req.params.id);
    res.json(band);
  } catch (e) {
    res.status(404).json({ message: "not found!" });
  }
});

//Get all Bands
router.get("/", async (req, res) => {
  try {
    const bandList = await bands.getAllBands();
    res.json(bandList);
  } catch (e) {
    // Something went wrong with the server!
    res.status(500).send();
  }
});

module.exports = router;