exports.accessGeneva = function (req, res) {
    res.render('office-geneva')
}

exports.accessVevey = function (req, res) {
    res.render('office-vevey')
}

exports.apiCountFreeSeats = function (req, res) {
    let office = req.body.office
    if (office === "Geneva") {
        res.json("The Geneva office has 10 bookable seats!")
    } else if (office === "Vevey") {
        res.json("The Vevey office is under renovation!")
    } else {
        res.json("The office: " + office + " is unknown!")
    }
}