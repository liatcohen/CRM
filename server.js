const express = require('express')
const app = express()
const api = require('./server/routes/api')
const port = 4000
const mongoose = require('mongoose')
// const Client = require('./server/models/Client') //?
const bodyParser = require('body-parser')
const path = require('path')

// mongoose.set('useFindAndModify', true);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/crm', { useNewUrlParser: true })


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', api)
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})