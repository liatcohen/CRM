const express = require('express')
const router = express.Router()
const moment = require('moment')
const axios = require('axios')
const mongoose = require('mongoose')
const Client = require('../models/Client')

router.get('/', function (request, response) {
    response.send("check")
})

router.get('/clients', async function (req, res) {
    console.log("server get clients")
    const clients = await Client.find({})
    console.log(clients)
    res.send(clients)
})

router.get('/clientsNames', async function (req, res) {
    const clients = await Client.find({}, { name: 1 })
    res.send(clients)
})

router.get('/owners', async function (req, res) {
    const clients = await Client.find({}, { owner: 1 })
    res.send(clients)
})
router.post('/client', function (req, res) {
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

router.put('/client/:id', async function (req, res) {
    const query = { "id": req.params.id };
    const update = { "$set": { [req.body.fieldToUpdate]: req.body.value, } };

    Client.findOneAndUpdate(query, update)
        .then(
            res.send(client)
        ).catch(err => console.error(`Failed to find and update document: ${err}`))

})

module.exports = router