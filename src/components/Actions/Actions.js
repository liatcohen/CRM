import React, { useState, useEffect } from 'react'
import AddClient from './AddClient'
import UpdateClient from './UpdateClient'
import './Actions.css'
import moment from 'moment';
import axios from 'axios';
import ModalMsg from './Modal'
const url = `http://localhost:4000`
url=""

function Actions() {

    const [clientsNames, setClientsNames] = useState([])
    const [owners, setOwners] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const [modalMsg, setModalMsg] = useState('')

    const openModal = () => setModalVisible(true)
    const closeModal = () => setModalVisible(false)

    useEffect(() => {
        getClientsNames()
        getOwners()
    }, []);

    function getClientsNames() {
        console.log("client getClients")

        axios.get(`${url}clientsNames`)
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

        axios.get(`${url}/owners`)
            .then((response) => {
                let uniqOwnersArr=[]
                let uniqOwnersObj ={}
                let count=0
                for (let ow of response.data){
                    console.log(ow.owner)
                    if (uniqOwnersObj[String(ow.owner)]!=1){
                        count++
                        uniqOwnersArr.push(ow)
                    }else{
                        uniqOwnersObj[String(ow.owner)]=1
                    }
                }
                console.log("count: "+count)
                // for (let ow of response.data){
                //     {!uniqOwnersObj[ow.owner]?uniqOwnersArr.push(ow):uniqOwnersObj[ow.owner]=1}
                // }
                // uniqOwners=uniqOwners.filter((item,index) => uniqOwners.indexOf(item)===index)
                console.log(uniqOwnersArr)
                setOwners(uniqOwnersArr)
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
        axios.post(`${url}/client`, client)
            .then((response) => {
                setModalMsg('Client added succecfuly!')
                setModalVisible(true)
            })
            .catch(function (error) {
                console.log("ERROR: ")
                console.log(error);
            });

    }

    function clientUpdatedModal(modalMsg) {
        setModalMsg(modalMsg)
        setModalVisible(true)
    }
    return (
        <div className="actions">
            <AddClient addClient={addClient} />
            <hr />
            <UpdateClient clients={clientsNames} owners={owners} clientUpdatedModal={clientUpdatedModal} />
            <ModalMsg visible={modalVisible} openModal={openModal} closeModal={closeModal} msg={modalMsg} />

        </div>
    );
}

export default Actions;
