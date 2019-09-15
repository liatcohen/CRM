import React, { useState, useEffect } from 'react'
import './Analytics.css'
import Badges from './Badges/Badges';
import Charts from './Charts/Charts'
import axios from 'axios';
// const url = "http://localhost:4000"
const url=""

function Analytics() {

  const [clients, setClients] = useState([])

  useEffect(() => {
    getClientsInfo()
  }, [])

  function getClientsInfo() {
    console.log("getClientsInfo!")
    axios.get(`${url}/clients`)
      .then((response) => {
        console.log(response.data.clients)
        setClients(response.data.clients)
      })
      .catch(function (error) {
        console.log("ERROR: ")
        console.log(error);
      });
  }

  return (
    <div className="analytics">
    {
      clients.length>0 ?
      <div>
        <Badges clients={clients} />
        <Charts clients={clients}/>
        </div>
        : <div>loading</div>
    }
    </div>

  );
}

export default Analytics;
