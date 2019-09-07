import React, { useState, useEffect } from 'react'
import Badge from '../Badge/Badge'
import './Badges.css'

function Badges(props) {
    
    const [newClients, setNewClients] = useState({ data: '', info: "New clients this month", icon: "fas fa-chart-line", class: "new-clients" })
    const [emailsSent, setEmailsSent] = useState({ data: '', info: "Emails sent", icon:"far fa-envelope", class:"emails-sent"})
    const [outstandingClients, setOutstandingClients] = useState({ number: '', info: "Outstanding clients", icon: "fas fa-users", class: "outstanding-clients" })
    const [hottestCountry, setHottestCountry] = useState({ data: '', info: "Hottest country", icon: "fas fa-globe-americas", class: "hottest-country" })
    
    useEffect(() => {
        getNewClientsNumber()
        getEmailsSentNumber()
        getOutstandingClientsNumber()
        getHottestCountry()
    }, [])

    function getNewClientsNumber() {
        console.log(props.clients)
        const currentMonth = new Date().getMonth()
        const num = props.clients.filter(c => (new Date(c.firstContact).getMonth()) === currentMonth).length
        console.log(num)
        setNewClients({ ...newClients, data: num })
    }

    function getEmailsSentNumber() {
        const num = props.clients.filter(c => c.emailType).length
        setEmailsSent({ ...emailsSent, data: num })
    }
    
    function getOutstandingClientsNumber() {
        const num = props.clients.filter(c => !c.sold).length
        setOutstandingClients({ ...outstandingClients, data: num })
    }

    function getHottestCountry() {
        let country, maxNumber = 0
        let countries = {}
        for (let c of props.clients) {
            {countries[c.country] ? countries[c.country]++: countries[c.country] = 1}
            if (countries[c.country]> maxNumber){
                maxNumber=countries[c.country]
                country=c.country
            }
        }
        setHottestCountry({ ...hottestCountry, data: country })
    }

    return (
        <div className="badges">
            <Badge badge={newClients} />
            <Badge badge={emailsSent} />
            <Badge badge={outstandingClients} />
            <Badge badge={hottestCountry} />
        </div>


    );


}

export default Badges;
