express = require 'express'
app = express()
bodyParser = require 'body-parser'
session = require 'express-session'
flash = require 'express-flash'
mongoose = require 'mongoose'
path = require 'path'

app.use bodyParser.json()
app.use bodyParser.urlencoded { extended: true }
app.use session({
    secret: "09as820dsj90j2a",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
})
app.use flash()
app.use express.static(path.join(__dirname, '../../public/dist/public'))
app.listen 8000

module.exports = app