import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import './App.css';
import Analytics from './components/Analytics/Analytics'
import Actions from './components/Actions/Actions'
import Clients from './components/Clients/Clients'
import myData from './data.json';
const axios = require('axios');

function App() {

  const [clients, setClients] = useState([])

  // useEffect(() => {
  //   getClientsInfo()
  // },[]);
  
  // function getClientsInfo() {
  //   console.log("client getClients")

  //   axios.get('http://localhost:4000/clients')
  //     .then((response) => {
  //       setClients(response.data)
  //     })
  //     .catch(function (error) {
  //       console.log("ERROR: ")
  //       console.log(error);
  //     });
  // }
  function getClientsNames() {
    console.log("client getClients")

    axios.get('http://localhost:4000/clients')
      .then((response) => {
        setClients(response.data)
      })
      .catch(function (error) {
        console.log("ERROR: ")
        console.log(error);
      });
  }

  function addClient(client) {
    console.log("addClient")
    console.log(client)
    axios.post('http://localhost:4000/client', client)
      .then((response) => {
        // getClients()
      })
      .catch(function (error) {
        console.log("ERROR: ")
        console.log(error);
      });
  }

  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <Link to="/clients">Clients</Link>
          <Link to="/actions">Actions</Link>
          <Link to="/analytics">Analytics</Link>
        </div>
        <Route exact path="/" render={() => (<Redirect to="/clients" />)} />
        <Route path="/clients" exact render={() => <Clients />} />
        <Route path="/actions" exact render={() => <Actions clients={clients.map(c=>c.name)} addClient={addClient}/>} />
        <Route path="/analytics" exact render={() => <Analytics />} />

      </div>
    </Router>
  );
}

export default App;
