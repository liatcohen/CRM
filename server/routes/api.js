const express = require('express')
const router = express.Router()
const moment = require('moment')
const axios = require('axios')
const mongoose = require('mongoose')
const Client = require('../models/Client')



// POST NEW CONCERT
// router.post('/concert', async (req, res) => {
//     const { artist, date, hour, country, city, venue, num_of_tickets, asked_price, original_price, additional_info, seller, isBid, bid_end_date, bid_end_time } = req.body
    
//     const img_url = await findArtistImg(artist)
//     const newConcert = await sequelize.query(`
//         INSERT INTO concert ( artist, date, country, city , venue, num_of_tickets, asked_price, original_price, additional_info, seller, status, img_url, uploaded_at, is_bid, ends_at)
//         VALUES ( '${artist}', '${date} ${hour}:00' , '${country}', '${city}', '${venue}', ${num_of_tickets}, ${asked_price}, ${original_price}, '${additional_info}', ${seller} , 'active', '${img_url}', '${moment().format('YYYY-MM-DD  HH:mm:ss')}', ${isBid}, '${isBid ? `${bid_end_date} ${bid_end_time}:00` : `${date} ${hour}:00`}')
//         ;`)
//     res.send(newConcert)
        
//     const concertID = newConcert[0]
//     if(isBid){
//         const sellerInfo = await fetchSellerInfo(seller)
//         startCronJob(concertID, bid_end_time, bid_end_date, sellerInfo, req.body);
//     }
// })
router.get('/', function (request, response) {
    response.send("check")
})

router.get('/clients', async function (req, res) {
    console.log("server get clients")
    const clients=await Client.find({})
    console.log(clients)
    // console.log(clients)
    res.send(clients)
})

router.get('/clientsNames', async function (req, res) {
    const clients=await Client.find({},{name: 1})
    res.send(clients)
})

router.get('/owners', async function (req, res) {
    const clients=await Client.find({},{owner: 1})
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



module.exports = router