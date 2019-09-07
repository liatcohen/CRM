const express = require('express')
const router = express.Router()
const moment = require('moment')
const axios = require('axios')
const mongoose = require('mongoose')
const Client = require('../models/Client')

router.get('/', function (request, response) {
    response.send("check")
})

router.get('/clients/:currentPage?/:itemsInPages?', async function (req, res) {
    // {currentPage: numPage, itemsInPages: 20}
    console.log("server get clients")
    let clients = await Client.find({})
    const totalNumberOfClients= clients.length;
    const currentPage=req.params.currentPage
    console.log(currentPage)

    if (currentPage){
        console.log("currentPage")

        const itemsInPages= parseInt(req.params.itemsInPages)
        const startItem = (currentPage-1)*itemsInPages
        console.log(itemsInPages)
        console.log(startItem)
console.log(startItem+itemsInPages)
        clients=clients.slice(startItem, startItem+itemsInPages)
        res.send({clients, totalNumberOfClients })

    }else{
        res.send({clients})
    }
    // console.log(clients)
    // res.send(clients)
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
    console.log("put client")
    const query = { _id: req.params.id };
    console.log("req.body")
    // console.log(req.body)
    // res.send({})

    const update = { "$set": { [req.body.fieldToUpdate]: req.body.value, } };
    console.log(query)
    console.log(update)
    Client.findOneAndUpdate(query, update)
        .then(c => 
            res.send(c)
        ).catch(err => console.error(`Failed to find and update document: ${err}`))

})

module.exports = router