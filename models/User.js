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

User.prototype.register = function () {
    return new Promise(async (resolve, reject) => {

        var con = mysql.createConnection({
            /* host: "sql4.freemysqlhosting.net",
             port: "3306",
             user: "sql4402888",
             password: "zgMDF8as5F",
             database: "sql4402888" */
            host: "1y3m8.myd.infomaniak.com",
            port: "3306",
            user: "1y3m8_flo",
            password: "Password1234",
            database: "1y3m8_flo"
        });

        con.query(
            "SELECT * FROM testies WHERE Biere='Feld'",
            (err, rows) => {
                if (rows === undefined) {
                    reject(new Error("Error rows is undefined" + err));
                } else {
                    resolve(rows);
                }
            }
        )
        con.end()
    })
}

module.exports = User