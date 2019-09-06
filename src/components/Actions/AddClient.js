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
            <div class="form-style-5">
                <form>
                    <fieldset>
                        <legend><span class="number"></span>Add Client</legend>
                        <input type="text" id="name" placeholder="Name" value={name} onChange={handleChange} required/>
                        <input type="email" id="email" placeholder="Email" value={email} onChange={handleChange} required />
                        <input type="text" id="country" placeholder="Country" value={country} onChange={handleChange} required/>
                        <input type="text" id="owner" placeholder="Owner" value={owner} onChange={handleChange} required/>
                    </fieldset>
                    <input type="submit" value="Add New Client" onClick={addClient}/>
                </form>
            </div>
        </div>
    )
}

export default AddClient;