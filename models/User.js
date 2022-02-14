var mysql = require('mysql')

let User = function (data) {
    this.data = data
}

User.prototype.login = function () {
    if (this.data.username == "User1" && this.data.password == "Password1234") {
        return true
    } else {
        return false
    }
}

module.exports = User