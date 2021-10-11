const User = require('../models/User')
const jwt = require('jsonwebtoken')

exports.home = function (req, res) {
    res.render('home-guest')
}

exports.login = function (req, res) {
    let user = new User(req.body)
    if (user.login()) {
        res.render('logged-user', { username: user.data.username })
    } else {
        res.render('home-guest')
    }



    //res.send("Hello " + user.data.username + " this is your pwd: " + user.data.password)
}

exports.apiLogin = function (req, res) {
    let user = new User(req.body)
    if (user.login()) {
        res.json(jwt.sign({ username: user.data.username }, process.env.JWTSECRET, { expiresIn: '2h' }))
    } else {
        res.json("Sorry bro!")
    }
}

exports.apiMustBeLoggedIn = function (req, res, next) {
    try {
        req.apiUser = jwt.verify(req.body.token, process.env.JWTSECRET)
        next()
    } catch {
        res.json("Sorry, you must provide a valid token!")
    }
}