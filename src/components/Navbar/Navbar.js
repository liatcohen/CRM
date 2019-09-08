import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link ,NavLink} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
        <div className="navbar">
          <NavLink to="/clients">Clients</NavLink>
          <NavLink to="/actions">Actions</NavLink>
          <NavLink to="/analytics">Analytics</NavLink>
        </div>
  );
}

export default Navbar;
