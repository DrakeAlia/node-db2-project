const express = require('express');

const server = express();

server.use(express.json());

const carsRouter = require('../cars/cars-router.js')
server.use('/api/cars', carsRouter)


module.exports = server;