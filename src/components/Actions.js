import React, { useState, useEffect } from 'react'
import AddClient from './AddClient'


function Actions() {

    function addNewClient(client){
        console.log(client)
    }
    return (
        <div>Actions
        <AddClient addNewClient={addNewClient}/>


        </div>
    );
}

export default Actions;
