import React, { useState, useEffect } from 'react'
import Client from './Client'
import './Clients.css'
import axios from 'axios';
const URL = "http://localhost:4000"

// const axios = require('axios');

function Clients(props) {
    const [clients, setClients] = useState([])

    useEffect(() => {
        getClientsInfo()
      },[]);
      
      function getClientsInfo() {
        console.log("client getClients!")
        axios.get(`${URL}/clients`)
          .then((response) => {
              console.log(response.data)
            setClients(response.data)
          })
          .catch(function (error) {
            console.log("ERROR: ")
            console.log(error);
          });
      }

    function editClient(client) {
        console.log(`${client.name} was clicked`)
    }

    return (
        <div>
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
                    {clients.map((c, key) => <Client client={c} key={key} editClient={editClient}/>)}
                </tbody>
            </table>
        </div>
    );
}

export default Clients;
