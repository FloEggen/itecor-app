const User = require('../models/User')

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