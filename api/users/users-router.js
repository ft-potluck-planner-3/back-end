const router = require("express").Router();

const {validReqBody, checkUsernameExists, checkRole, checkUsernameValid, checkPasswordValid} = require('./users-middleware.js');
const Users = require('./users-model.js');
const bcrypt = require('bcryptjs');


router.post('/register', validReqBody, checkUsernameExists, checkRole, (req, res, next) => {
    const {username, password, role} = req
    const hash = bcrypt.hashSync(password, 8)
  
    Users.add({username, password: hash, role})
         .then(newUser => {
             res.json(`${newUser.username} successfully created an account`)
         })
         .catch(err => next(err))
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    Users.findById(id)
         .then(user => {
             res.json(user)
         })
         .catch(err => next(err))
})


router.post('/login', validReqBody, checkUsernameValid, checkPasswordValid, (req, res) => {
})

module.exports = router;