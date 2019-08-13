import React, { useState, useEffect } from 'react'
import Client from './Client'

function Clients(props) {

    function editClient(client) {
        console.log(`${client.name} was clicked`)
    }

    return (
        <div>
            <div>Clients</div>
            <table className="clients-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Country</th>
                        <th>First Contact</th>
                        <th>Email Type</th>
                        <th>Sold</th>
                        <th>Owner</th>
                    </tr>
                </thead>
                <tbody>
                    {props.clients.map((c, key) => <Client client={c} key={key} editClient={editClient}/>)}
                </tbody>
            </table>
        </div>
    );
}

export default Clients;
