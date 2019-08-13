import React, { useState, useEffect } from 'react'
const moment = require('moment');

function Client(props) {

    function editClient() {
        props.editClient(props.client)
    }

    return (
        <tr onClick={editClient}>
            <td>{props.client.name}</td>
            <td>{props.client.email}</td>
            <td>{props.client.country}</td>
            <td>{moment(props.client.firstContact).format('DD/MM/YYYY')}</td>
            <td>{props.client.emailType}</td>
            <td>{props.client.sold}</td>
            <td>{props.client.owner}</td>
        </tr>
    );
}
export default Client;
