const express = require("express");
const router = express.Router();
const data = require('../data/');
const bands = data.bands;


//Get Band by ID
router.get("/:id", async (req, res) => {
  try {
    const band = await bands.getBand(req.params.id);
    res.status(200).json(band);
  } catch (e) {
    res.status(404).json({ message: "not found!" });
  }
});

//Get all Bands
router.get("/", async (req, res) => {
  try {
    const bandList = await bands.getAllBands();
    res.status(200).json(bandList);
  } catch (e) {
    // Something went wrong with the server!
    res.status(404).send();
  }
});

router.post('/', async (req, res) => {
	const bandData = req.body;
	if (!bandData.bandName) {
		res.status(400).json({ error: 'You must provide a name for the Band!' });
		return;
	}
	if (!bandData.bandMembers) {
		res.status(400).json({ error: 'You must provide an array of band members' });
		return;
	}
	if (!bandData.yearFormed) {
		res.status(400).json({ error: 'You must provide the year in which band was formed' });
		return;
  }
  if (!bandData.genres) {
		res.status(400).json({ error: 'You must provide an array of genres' });
		return;
  }
  if (!bandData.recordLabel) {
		res.status(400).json({ error: 'You must provide the record label' });
		return;
	}
	try {
		const { bandName, bandMembers, yearFormed, genres, albums, recordLabel} = bandData;
		const newBand = await bands.addBand(bandName, bandMembers, yearFormed, genres, albums, recordLabel);
		res.json(newBand);
	} catch (e) {
		res.status(500).json({ error: e });
	}
});

module.exports = router;