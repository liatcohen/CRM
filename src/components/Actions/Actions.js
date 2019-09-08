import React, { useState, useEffect } from 'react'
import AddClient from './AddClient'
import UpdateClient from './UpdateClient'
import './Actions.css'
import moment from 'moment';
import axios from 'axios';
import ModalMsg from './Modal'

function Actions(props) {

    const [clientsNames, setClientsNames] = useState([])
    const [owners, setOwners] = useState([])
    const [modalVisible,setModalVisible] = useState(false)
    const [modalMsg,setModalMsg] = useState('')

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
        // props.addClient(client)
        setModalMsg('Client added succecfuly!')
        setModalVisible(true)
    }

    function clientUpdatedModal(modalMsg){
        setModalMsg(modalMsg)
        setModalVisible(true)
    }
    return (
        <div className="actions">
            <AddClient addClient={addClient} />
            <hr/>
            <UpdateClient clients={clientsNames} owners={owners} clientUpdatedModal={clientUpdatedModal}/>
            <ModalMsg visible={modalVisible} openModal={openModal} closeModal={closeModal} msg={modalMsg}/>

        </div>
    );
}

export default Actions;
