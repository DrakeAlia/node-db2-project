const express = require('express');

const db = require('../data/connection.js');

const router = express.Router();

// getting all cars
router.get('/', (req, res) => {
	db('cars')
		.then((cars) => {
			res.json(cars);
		})
		.catch((err) => {
			res.status(500).json({ message: 'A error occured when trying to get cars' });
		});
});

// getting cars by id
router.get('/:id', (req, res) => {
	const { id } = req.params;

	db('cars')
		.where({ id })
		.car()
		.then((car) => {
			res.json(car);
		})
		.catch((err) => {
			res.status(500).json({ message: 'A error occured when trying to get car id' });
		});
});
// posting car
router.post('/', (req, res) => {
	const postData = req.body;
	db('cars')
		.insert(postData)
		.then((post) => {
			res.status(201).json(post);
		})
		.catch((err) => {
			res.status(500).json({ message: 'cannot create' });
		});
});
// updating car by id
router.put('/:id', (req, res) => {
	const { id } = req.params;

	db('cars')
		.where({ id })
		.update(req.body)
		.then((count) => {
			if (count) {
				res.json({ updated: count });
			} else {
				res.status(500).json(count);
			}
		})
		.catch((err) => {
			res.status(500).json({ message: 'cannot update' });
		});
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;
	db('cars')
		.where({ id })
		.del({ id })
		.then((deleted) => {
			res.status(500).json(deleted);
		})
		.catch((err) => {
			res.status(500).json({ message: 'cannot delete' });
		});
});

module.exports = router;
