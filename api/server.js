const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const usersRouter = require('./users/users-router.js');
const potlucksRouter = require('./potlucks/potlucks-router.js');

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())


server.use('/api/users', usersRouter);
server.use('/api/potlucks', potlucksRouter);

//handles all next() functions by outputting errors
server.use((err, req, res, next) => { 
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});


module.exports = server
