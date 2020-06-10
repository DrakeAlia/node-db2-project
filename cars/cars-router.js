const express = require('express');

const db = require();

const router = express.Router();

// getting all cars
router.get('/', (req, res) => {
    knex('cars')
    .then(cars => {
        res.json(cars);
    })
    .catch(err => {
        res.status(500).json({ message: 'A error occured when trying to get cars' });
    });
});

// getting cars by id
router.get('/:id', (req, res) => {
    const { id } = req.params;

    knex('cars')
    .where({ id }).car()
    .then(car => {
        res.json(car);
    })
    .catch(err => {
        res.status(500).json({ message: 'A error occured when trying to get car id' });
    })
})

module.exports = router;