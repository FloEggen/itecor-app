const express = require('express')
const app = express()

app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const router = require('./router.js')
app.use('/', router)

let port = process.env.PORT
if (port == null || port == "") { port = 3000 }
app.listen(port)