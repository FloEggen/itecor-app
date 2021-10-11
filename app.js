const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
// The API line is placed at the beginning such that the other app.use() orders will not be applied to API routes
app.use('/api', require('./router-api'))

app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(express.static('public'))



const router = require('./router.js')
app.use('/', router)

let port = process.env.PORT
if (port == null || port == "") { port = 3000 }
app.listen(port)