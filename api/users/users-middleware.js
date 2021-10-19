const { JWT_SECRET } = require("../secrets"); 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Users = require('./users-model.js');


const validReqBody = (req, res, next) => {
    const {username, password} = req.body

    if(!username || !username.trim() || !password || !password.trim()) {
        next({status: 422, message: "username and password required"})
    }
    else {
        req.username = username.trim()
        req.password = password.trim()
        next();
    }
}

const checkUsernameExists = async (req, res, next) => {
    const alreadyUsername = await Users.findBy({username: req.username})

        if(alreadyUsername.length){
            next({status: 422, message: "username taken"})
        }
        else {
            next();
        }
}

const checkRole = (req, res, next) => {
    const {role} = req.body

    if (!role) {
        next({status: 422, message: "role required"})
    }
    else {
        req.role = role;
        next();
    }
}

const checkUsernameValid = async (req, res, next) => {
    const validUser = await Users.findBy({username: req.username})

        if(!validUser.length){
            next({status: 422, message: "invalid credentials"})
        }
        else {
            req.user = validUser[0]
            next();
        }
}

const checkPasswordValid = (req, res, next) => {

    const buildToken = (user) => {
        const payload = {
            subject: user.id,
            username: user.username
        };
        const options = {
            expiresIn: '1d'
        }
        return jwt.sign(payload, JWT_SECRET, options)
    }

    if (bcrypt.compareSync(req.password, req.user.password)){
        const token = buildToken(req.user)

        res.status(200).json({
            message: `welcome, ${req.user.username}`,
            token
        })
        next()
    }
    else {
        next({status: 422, message: "invalid credentials"})
    }
}

module.exports = {
    validReqBody,
    checkUsernameExists,
    checkRole,
    checkUsernameValid,
    checkPasswordValid
}

