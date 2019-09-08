import React, { useState, useEffect } from 'react'
import AddClient from './AddClient'
import UpdateClient from './UpdateClient'
import { PromiseProvider } from 'mongoose';
import './Actions.css'
import moment from 'moment';
// const moment = require('moment');
import axios from 'axios';
import ModalMsg from './Modal'

function Actions(props) {

    const [clientsNames, setClientsNames] = useState([])
    const [owners, setOwners] = useState([])
    const [modalVisible,setModalVisible] = useState(false)

    const openModal=()=>setModalVisible(true)
    const closeModal=()=>setModalVisible(false)

    useEffect(() => {
        getClientsNames()
        getOwners()
    }, []);

    function getClientsNames() {
        console.log("client getClients")

        axios.get('http://localhost:4000/clientsNames')
            .then((response) => {
                setClientsNames(response.data)
            })
            .catch(function (error) {
                console.log("ERROR: ")
                console.log(error);
            });
    }

    function getOwners() {
        console.log("getOwners")

        axios.get('http://localhost:4000/owners')
            .then((response) => {
                setOwners(response.data)
            })
            .catch(function (error) {
                console.log("ERROR: ")
                console.log(error);
            });
    }

    function addClient(client) {
        console.log(client)
        client.firstContact = moment().format();
        client.sold = false
        client.emailType = null
        props.addClient(client)
        setModalVisible(true)
    }
    return (
        <div className="actions">
            <AddClient addClient={addClient} />
            <hr/>
            <UpdateClient clients={clientsNames} owners={owners} />
            <ModalMsg visible={modalVisible} openModal={openModal} closeModal={closeModal}/>

        </div>
    );
}

export default Actions;
