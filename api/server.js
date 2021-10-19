const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const db = require('./data/db-config')

const usersRouter = require('./users/users-router.js');
const potlucksRouter = require('./potlucks/potlucks-router.js');

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())


server.use('/api/users', usersRouter);
server.use('/api/potlucks', potlucksRouter);


module.exports = server
