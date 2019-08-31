import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Navbar() {
  return (
    <Router>
        <div className="navbar">
          <Link to="/clients">Clients</Link>
          <Link to="/actions">Actions</Link>
          <Link to="/analytics">Analytics</Link>
        </div>
    </Router>
  );
}

export default Navbar;
