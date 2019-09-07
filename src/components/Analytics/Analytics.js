import React, { useState, useEffect } from 'react'
import './Analytics.css'
import Badges from './Badges/Badges';
import Charts from './Charts/Charts'
import axios from 'axios';

const URL = "http://localhost:4000"

function Analytics() {

  const [clients, setClients] = useState([])

  useEffect(() => {
    getClientsInfo()
  }, [])

  function getClientsInfo() {
    console.log("getClientsInfo!")
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
