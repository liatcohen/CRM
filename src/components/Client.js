import React, { useState, useEffect } from 'react'

function Client(props) {

    function editClient() {
        props.editClient(props.client)
    }

    return (
        <tr onClick={editClient}>
            <td>{props.client.name}</td>
            <td>{props.client.email}</td>
            <td>{props.client.emailType}</td>
            <td>{props.client.sold}</td>
            <td>{props.client.owner}</td>
            <td>{props.client.country}</td>
        </tr>
    );
}

export default Client;
