const User = require('../models/User')
const jwt = require('jsonwebtoken')

exports.home = function (req, res) {
    if (req.session.user) {
        // console.log(req.session.user.username)
        res.render('logged-user', { username: req.session.user.username })
    } else {
        res.render('home-guest')
    }
}

exports.login = function (req, res) {
    let user = new User(req.body)
    if (user.login()) {
        // The session object is unique per user visitor. The attribute user is declared here.
        req.session.user = { username: user.data.username }
        req.session.save(function () {
            res.redirect('/')
        })
    } else {
        res.render('home-guest')
    }
}

exports.logout = function (req, res) {
    req.session.destroy(function () {
        res.redirect('/')
    })
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