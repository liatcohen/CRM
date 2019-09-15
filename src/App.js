import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import './App.css';
import Analytics from './components/Analytics/Analytics'
import Actions from './components/Actions/Actions'
import Clients from './components/Clients/Clients'
import myData from './data.json';
import Navbar from './components/Navbar/Navbar';
import axios from 'axios'
const url = `http://localhost:4000`

function App() {

  const [clients, setClients] = useState([])

  function getClientsNames() {
    console.log("client getClients")

    axios.get(`${url}/clients`)
      .then((response) => {
        setClients(response.data)
      })
      .catch(function (error) {
        console.log("ERROR: ")
        console.log(error);
      });
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" render={() => (<Redirect to="/clients" />)} />
        <Route path="/clients" exact render={() => <Clients />} />
        <Route path="/actions" exact render={() => <Actions />} />
        <Route path="/analytics" exact render={() => <Analytics />} />

      </div>
    </Router>
  );
}

export default App;
