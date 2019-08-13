const express = require('express')
const app = express()
const port = 4000
const mongoose = require('mongoose')
const Client = require('./server/models/Client')
const bodyParser = require('body-parser')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/crm', { useNewUrlParser: true })

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (request, response) {
    response.send("check")
})

app.get('/clients', async function (req, res) {
    const clients=await Client.find({})
    // console.log(clients)
    res.send(clients)
})

app.post('/client', function (req, res) {
    const newClient = new Client({
                name: req.body.name,
                email: req.body.email,
                firstContact: req.body.firstContact,    
                emailType: req.body.emailType,    
                sold: req.body.sold,    
                owner: req.body.owner,
                country: req.body.country
    })
   
    console.log("POST:")

    console.log(newClient)
    newClient.save()
})

app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})

// for (let c of myData){
//     let newClient = new Client({
//         name: c.name,
//         email: c.email,
//         firstContact: c.firstContact,    
//         emailType: c.emailType,    
//         sold: c.sold,    
//         owner: c.owner,
//         country: c.country
//     })
//     newClient.save()
// }