import React, { useState, useEffect } from 'react'
import './Clients.css'

const moment = require('moment');

function Client(props) {

    function editClient() {
        props.editClient(props.client)
        console.log("Client: "+props.client.name)
    }

    return (
        <tr onClick={editClient}>
            <td>{props.client.name}</td>
            <td>{props.client.email}</td>
            <td>{props.client.country}</td>
            <td>{moment(props.client.firstContact).format('DD/MM/YYYY')}</td>
            <td>{props.client.emailType}</td>
            <td>{props.client.sold? <i className="fas fa-check"></i>: null}</td>
            <td>{props.client.owner}</td>
        </tr>
    );
}
export default Client;
