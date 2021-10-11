const apiRouter = require('express').Router()
const userController = require('./controllers/userController')
const officeController = require('./controllers/officeController')

apiRouter.post('/login', userController.apiLogin)
apiRouter.post('/count-seats', userController.apiMustBeLoggedIn, officeController.apiCountFreeSeats)

module.exports = apiRouter