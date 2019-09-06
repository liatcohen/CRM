import React, { useState, useEffect } from 'react'
import ClientInput from './ClientInput'
const axios = require('axios');

function UpdateClient(props) {
    const [client, setClient] = useState('')
    const [owner, setOwner] = useState('')
    const [emailType, setEmailType] = useState('')
    const emails = ['A', 'B', 'C', 'D']
    function submitSelectedClient(client) {

    }

    // useEffect(() => {
    //     setOwners(props.owners)
    // }, [])


    return (
        <div className="update-client">
            <div class="form-style-5">
                <form>
                    <fieldset>
                        <legend><span class="number"></span>Update Client</legend>
                        <label for="job">Client:</label>
                        <select value={client} onChange={(e) => (setClient(e.target.value))}>
                            {props.clients.map(c =>
                                <option value={c.name}>{c.name}</option>)}
                        </select>
                        <label for="job">Transfer ownership to:</label>
                        <select value={owner} onChange={(e) => (setOwner(e.target.value))}>
                            {props.owners.map(ow =>
                                <option value={ow.owner}>{ow.owner}</option>
                            )}
                        </select>
                        <label for="job">Send Email:</label>
                        <select value="emails" onChange={(e) => (setEmailType(e.target.value))}>
                            {emails.map(e =>
                                <option value={e}>{e}</option>)}
                        </select>
                        <button>send</button>
                        <label for="job">Declare Sale</label>

                    </fieldset>
                    <input type="submit" value="Apply" />
                </form>
            </div>

        </div>

    );
}

export default UpdateClient;
