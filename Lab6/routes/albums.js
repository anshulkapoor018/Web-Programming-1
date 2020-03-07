const express = require("express");
const router = express.Router();
const data = require('../data/');
const albums = data.albums;

//Get album by ID
router.get("/:id", async (req, res) => {
  try {
    const album = await albums.getAlbum(req.params.id);
    res.status(200).json(album);
  } catch (e) {
    res.status(404).json({ message: "Album not found!" });
  }
});

//Get all albums
router.get("/", async (req, res) => {
  try {
    const albumList = await albums.getAllAlbums();
    res.status(200).json(albumList);
  } catch (e) {
    // Something went wrong with the server!
    res.status(404).send();
  }
});

router.post('/', async (req, res) => {
	const albumData = req.body;
	if (!albumData.title) {
		res.status(400).json({ error: 'You must provide a Title for the album!' });
		return;
	}
	if (!albumData.author) {
		res.status(400).json({ error: 'You must provide an ID of the Author Band lassan!' });
		return;
	}
	if (!albumData.songs) {
		res.status(400).json({ error: 'You must provide the an array of album Songs!!' });
		return;
    }
	try {
		const { title, author, songs } = albumData;
		const newAlbum = await albums.addAlbum(title, author, songs);
		res.json(newAlbum);
	} catch (e) {
		res.status(500).json({ error: e });
	}
});

router.patch('/:id', async (req, res) => {
	const requestBody = req.body;
	let updatedObject = {};
	try {
		const oldPost = await albums.getAlbum(req.params.id);
		console.log(oldPost.author._id);
		if (requestBody.newTitle && requestBody.newTitle !== oldPost.title) updatedObject.title = requestBody.newTitle;
		if (requestBody.newSongs && !oldPost.songs.includes(requestBody.newSongs)) {
			const newSongArray = oldPost.songs;
			newSongArray.push(requestBody.newSongs);
			updatedObject.songs = newSongArray;
		}
		updatedObject.author = String(oldPost.author._id);
	} catch (e) {
		res.status(404).json({ error: 'Album not found' });
		return;
	}

	try {
		const updatedAlbum = await albums.updateAlbum(req.params.id, updatedObject.title, updatedObject.author, updatedObject.songs);
		res.json(updatedAlbum);
	} catch (e) {
		res.status(500).json({ error: e });
	}
});

module.exports = router;

