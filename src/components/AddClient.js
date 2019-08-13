import React, { useState, useEffect } from 'react'

function AddClient(props) {

    const [firstName, setFirstName] = useState('')
    const [surname, setSurname] = useState('')
    const [country, setCountry] = useState('')
    const [owner, setOwner] = useState('')

    function handleChange(e){
        switch (e.target.id) {
            case 'firstName':
                setFirstName(e.target.value)
                break;
            case 'surname':
                setSurname(e.target.value)
                break;
            case 'country':
                setCountry(e.target.value)
                break;
            case 'owner':
                setOwner(e.target.value)
                break;
        }
    }

    function addNewClient(){
        props.addNewClient({
            firstName,
            surname,
            country,
            owner
        })
        // console.log(firstName+"-> "+country+" "+surname+"  "+owner)
    }
    return (
        <div className="add-client">
            <div>AddClient</div>
        <form className="add-client-form">
            <label>First Name:
            <input id="firstName" type="text" name="name" value={firstName} onChange={handleChange} />
            </label>
            <label>Surname:
            <input id="surname" type="text" name="name" value={surname} onChange={handleChange} />
            </label>
            <label>Country:
            <input id="country" type="text" name="name" value={country} onChange={handleChange} />
            </label>
            <label>Owner:
            <input id="owner" type="text" name="name" value={owner} onChange={handleChange} />
            </label>
        </form>
        <button onClick={addNewClient}>Add New Client</button>
        </div>
    )
}

export default AddClient;
