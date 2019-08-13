import React, { useState, useEffect } from 'react'
import AddClient from './AddClient'
import UpdateClient from './UpdateClient'
import { PromiseProvider } from 'mongoose';
const moment = require('moment');

function Actions(props) {

    function addClient(client) {
        console.log(client)
        client.firstContact = moment().format();
        client.sold = false
        client.emailType = null
        props.addClient(client)
    }
    return (
        <div>Actions
        <UpdateClient />
        <AddClient addClient={addClient} />


        </div>
    );
}

export default Actions;
