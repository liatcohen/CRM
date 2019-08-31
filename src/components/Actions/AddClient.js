import React, { useState, useEffect } from 'react'

function AddClient(props) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [owner, setOwner] = useState('')

    function handleChange(e) {
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

    function addClient() {
        props.addClient({
            name,
            email,
            country,
            owner
        })
    }
    return (
        <div className="add-clientr">
            <div className="actions-header">Add Client</div>
            <form className="add-client-form">
                <div class="styled-input">
                    <input id="name" type="text" value={name} onChange={handleChange}  required />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Name</label>
                </div>
                <div class="styled-input">
                    <input id="email" type="text" value={email} onChange={handleChange}  required />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Email</label>
                </div>
                <div class="styled-input">
                    <input id="country" type="text" value={country} onChange={handleChange}  required />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Country</label>
                </div>
                <div class="styled-input">
                    <input id="owner" type="text" value={owner} onChange={handleChange}  required />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Owner</label>
                </div>

            </form>
            <button onClick={addClient}>Add New Client</button>
        </div>
    )
}

export default AddClient;
