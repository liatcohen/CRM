import React, { useState, useEffect } from 'react'
import AddClient from './AddClient'
import UpdateClient from './UpdateClient'

function Actions() {

    function addNewClient(client){
        console.log(client)
    }
    return (
        <div>Actions
        <UpdateClient/>
        <AddClient addNewClient={addNewClient}/>


        </div>
    );
}

export default Actions;
