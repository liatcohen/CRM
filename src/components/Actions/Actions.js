import React, { useState, useEffect } from 'react'
import AddClient from './AddClient'
import UpdateClient from './UpdateClient'
import './Actions.css'
import moment from 'moment';
import axios from 'axios';
import ModalMsg from './Modal'
import { arrayExpression } from '@babel/types';

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
                // const set1 = new Set([1, 2, 3, 4, 5]);
                // uniq = [...new Set(array)];
                let uniqOwnersArr=[]
                // const result = words.filter(word => word.length > 6);
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
        axios.post('http://localhost:4000/client', client)
            .then((response) => {
                console.log("Client added succecfuly!")
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
