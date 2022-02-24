const express = require('express')
const session = require('express-session')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

// Make our app support sessions
let sessionOptions = session({
    secret: "Javascript is soooo cool",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24, httpOnly: true }
})

app.use(sessionOptions)
// End of session config

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
// The API line is placed at the beginning such that the other app.use() orders will not be applied to API routes
app.use('/api', require('./router-api'))

app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(express.static('public'))



const router = require('./router.js')
app.use('/', router)

let port = 4001
if (port == null || port == "") { port = 4001 }
app.listen(port)