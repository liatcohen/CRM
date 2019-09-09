const express = require('express')
const router = express.Router()
const moment = require('moment')
const axios = require('axios')
const mongoose = require('mongoose')
const Client = require('../models/Client')

router.get('/', function (request, response) {
    response.send("check")
})
router.get('/clients/:currentPage?', async function (req, res) {
    console.log("get clients" )
    // console.log(req.query)

    let searchCategory=req.query.searchCategory||'name'
    let searchQuery= req.query.searchQuery ||''
    searchCategory=searchCategory.toLowerCase()
    let sortBy=req.query.sortBy ||'name'
    let sortOrder=req.query.sortOrder||'1'
    console.log(`sortBy: ${sortBy}, sortOreder: ${sortOrder}`)
    sortBy=sortBy.toLowerCase()
    let clients = await Client.find({[searchCategory] : {$regex : `.*${searchQuery}.*`, '$options' : 'i'}}).sort( { [sortBy]: sortOrder } )
    const totalNumberOfClients = clients.length;
    const currentPage = req.params.currentPage
    if (currentPage) {
        const itemsInPages = parseInt(req.query.itemsInPages ||20)
        console.log(itemsInPages)
        const startItem = (currentPage - 1) * itemsInPages
        clients = clients.slice(startItem, startItem + itemsInPages)
        console.log(clients.length)
        res.send({ clients, totalNumberOfClients })
    } else {
        res.send({ clients })
    }
})

getSearchQuery=(query)=>{
   let searchCategory=query.searchCategory
   let searchQuery= query.searchQuery 
}
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
    newClient.save()
})

router.put('/client/:id', async function (req, res) {
    const query = { _id: req.params.id };
    const update = { "$set": { [req.body.fieldToUpdate]: req.body.value, } };
    console.log(query)
    console.log(update)
    Client.findOneAndUpdate(query, update)
        .then(c =>
            res.send(c)
        ).catch(err => console.error(`Failed to find and update document: ${err}`))

})

module.exports = router