const express = require('express');
const router = express.Router();
const Asana = require('../models/Asana');
const { del } = require('express/lib/application');

// LIST OF ALL ASANAS

router.get('/', async (req, res, next) => {
	try {
		const asana = await Asana.find({});
		res.json(asana);
	} catch (error) {
		next(error);
	}
});

// LIST SINGLE ASANA

router.get('/:id', async (req, res, next) => {
	try {
		const asana = await Asana.findById(req.params.id);
		if (asana) {
			res.json(asana);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});

// CREATE ASANA

router.post('/', async (req, res, next) => {
	try {
		const newAsana = await Asana.create(req.body);
		res.status(201).json(newAsana);
	} catch (error) {
		next(error);
	}
});

// UPDATE ASANA

router.put('/:id', async (req, res, next) => {
	try {
		const asanaToUpdate = await Asana.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		res.json(asanaToUpdate);
	} catch (error) {
		next(error);
	}
});

// DELETE ASANA

router.delete('/:id', async (req, res, next) => {
	try {
		const asanaToDelete = await Asana.findByIdAndDelete(req.params.id);
		const asana = await Asana.find({});
		res.json(asana);
		if (asanaToDelete) {
			res.sendStatus(204);
		} else {
			res.sendStatus(404);
		}
	} catch (error) {
		next(error);
	}
});


// GET BY CATEGORY

router.get('/category/:category', async (req, res, next) => {
	try {
		const asanaCategory = await Asana.find({
			'categories.0.catName': `${req.params.category}`,
		});
		console.log(asanaCategory)
		res.json(asanaCategory);
	} catch (error) {
		next(error)
	}
})

// EXPORT

module.exports = router;
