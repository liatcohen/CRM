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
                        <div className="update-sub-div choose-client">
                            <label for="client">Client:</label>
                            <select value={client} onChange={(e) => (setClient(e.target.value))}>
                                {props.clients.map(c =>
                                    <option value={c.name}>{c.name}</option>)}
                            </select>
                        </div>
                        <div className="update-sub-div">
                            <label for="ownership">Transfer ownership to:</label>
                            <select id="ownership" value={owner} onChange={(e) => (setOwner(e.target.value))}>
                                {props.owners.map(ow =>
                                    <option value={ow.owner}>{ow.owner}</option>)}
                            </select>
                            <input type="submit" value="Transfer" />
                        </div>
                        <div className="update-sub-div">
                            <label for="email-type">Send Email:</label>
                            <select value="emails" onChange={(e) => (setEmailType(e.target.value))}>
                                {emails.map(e =>
                                    <option value={e}>{e}</option>)}
                            </select>
                            <input type="submit" value="Send" />
                        </div>
                        <div className="update-sub-div">
                            <label for="job">Declare Sale</label>
                            <input type="submit" value="Declare!" />
                        </div>
                    </fieldset>
                </form>
            </div>

        </div>

    );
}

export default UpdateClient;
