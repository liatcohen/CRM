import React, { useState, useEffect } from 'react'

function AddClient(props) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [owner, setOwner] = useState('')

    function handleChange(e){
        switch (e.target.id) {
            case 'name':
                    setName(e.target.value)
                break;
            case 'email':
                    setEmail(e.target.value)
                break;
            case 'country':
                setCountry(e.target.value)
                break;
            case 'owner':
                setOwner(e.target.value)
                break;
        }
    }

    function addClient(){
        props.addClient({
            name,
            email,
            country,
            owner
        })
    }
    return (
        <div className="add-client">
        <div>AddClient</div>
        <form className="add-client-form">
            <label>Name:
            <input id="name" type="text" name="name" value={name} onChange={handleChange} />
            </label>
            <label>Email:
            <input id="email" type="email" name="name" value={email} onChange={handleChange} />
            </label>
            <label>Country:
            <input id="country" type="text" name="name" value={country} onChange={handleChange} />
            </label>
            <label>Owner:
            <input id="owner" type="text" name="name" value={owner} onChange={handleChange} />
            </label>
        </form>
        <button onClick={addClient}>Add New Client</button>
        </div>
    )
}

export default AddClient;
