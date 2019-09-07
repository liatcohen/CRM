import React, { useState, useEffect } from 'react'
import './Badge.css'
function Badge(props) {

    // const [selectedClient, setSelectedClient]= useState('')
    // const [newClients, setNewClients] = useState({ number: '', info: "new clients this month", icon: "fas fa-chart-line", class: "" })


    return (
        <div className="badge-container">
            <span className={`badge ${props.badge.class}`}><i className={props.badge.icon}></i></span>
            <div className="badge-info">
                <div id="badge-number">{props.badge.data}</div>
                <div>{props.badge.info}</div>
            </div>
        </div>


    );


}

export default Badge;
