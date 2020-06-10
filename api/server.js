const express = require('express');

const server = express();

server.use(express.json());

server.use('/api/cars', carsRouter)

const carsRouter = require('../cars/cars-router.js')

module.exports = server;