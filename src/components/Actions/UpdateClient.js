import React, { useState, useEffect } from 'react'
import ClientInput from './ClientInput'
const axios = require('axios');

function UpdateClient(props) {

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
            <div className="actions-header">Update</div>
            <ClientInput clients={props.clients} submitSelectedClient={submitSelectedClient} />

            <label>
                Transfer ownership to:
                <select value={owner} onChange={(e) => (setOwner(e.target.value))}>
                    {props.owners.map(ow =>
                        <option value={ow.owner}>{ow.owner}</option>
                    )}
                </select>
                <button>Transfer</button>
            </label>
            <div></div>
            <label>
                Send Email
                <select value="emails" onChange={(e) => (setEmailType(e.target.value))}>
                    {emails.map(e =>
                        <option value={e}>{e}</option>
                    )}
                </select>
                <button>send</button>
            </label>
            <label>
                Declare Sale
            <button>declare!</button>
            </label>
        </div>

    );
}

export default UpdateClient;
