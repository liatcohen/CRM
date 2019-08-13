import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Analytics from './components/Analytics'
import Actions from './components/Actions'
import Clients from './components/Clients'
import myData from './data.json';

function App() {

  const [clients, setClients] = useState(myData)
  function func1() {
    console.log("Hi")
    console.log(myData)
  }

  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <Link to="/">Clients</Link>
          <Link to="/actions">Actions</Link>
          <Link to="/analytics">Analytics</Link>
        </div>
        <button onClick={func1}>click me</button>
        <Route path="/" exact render={() => <Clients clients={clients}/>} />
        <Route path="/actions" exact render={() => <Actions/>} />
        <Route path="/analytics" exact render={() => <Analytics/>} />

      </div>
    </Router>
  );
}

export default App;
