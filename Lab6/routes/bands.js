const express = require("express");
const router = express.Router();
const data = require('../data/');
const bands = data.bands;

router.get("/:id", async (req, res) => {
  try {
    const band = await bands.getBand(req.params.id);
    res.status(200).json(band);
  } catch (e) {
    res.status(404).json({ message: "Band not found!" });
  }
});

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

router.put('/:id', async (req, res) => {
	const updatedData = req.body;
	if (!updatedData.bandName || !updatedData.bandMembers || !updatedData.yearFormed || !updatedData.genres || !updatedData.recordLabel) {
		res.status(400).json({ error: 'You must Supply All fields' });
		return;
	}
	try {
		await bands.getBand(req.params.id);
	} catch (e) {
		res.status(404).json({ error: 'Band not found!' });
		return;
	}

	try {
		const updatedBand = await bands.updateBand(req.params.id, updatedData.bandName, updatedData.bandMembers, updatedData.yearFormed, updatedData.genres, updatedData.albums, updatedData.recordLabel);
		res.json(updatedBand);
	} catch (e) {
		res.status(500).json({ error: e });
	}
});

router.delete('/:id', async (req, res) => {
	if (!req.params.id) {
		res.status(400).json({ error: 'You must Supply an ID to delete' });
		return;
	}
	try {
		await bands.getBand(req.params.id);
	} catch (e) {
		res.status(404).json({ error: 'Band not found!' });
		return;
	}
	try {
		const toBeDeletedBand = await bands.getBand(req.params.id);
		await bands.removeBand(req.params.id);
		res.json({deleted: true, data: toBeDeletedBand});
	} catch (e) {
		res.status(500).json({ error: e });
	}
});

module.exports = router;