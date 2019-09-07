import React, { useState, useEffect } from 'react'
import ClientInput from './ClientInput'
import { conditionalExpression } from '@babel/types';
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

    const UpdateClient = async (updatedValue, fieldToUpdate) => {
        console.log("UpdateClient")
        let clientKey = getClientKey(client)
        console.log(clientKey)
        console.log(updatedValue)
        console.log(fieldToUpdate)
        await axios.put(`http://localhost:4000/client/${clientKey}`, { "value": updatedValue, "fieldToUpdate": fieldToUpdate })
    }
    const getClientKey = (clientName) => {

        return props.clients.find(c => c.name === clientName)._id
    }
    function transferOwnership() {
        console.log("transferOwnership")
        UpdateClient(owner, 'owner')
    }

    function sendEmail() {
        console.log("send email")
    }

    function declareSale() {
        console.log("declare sale")
    }
    return (
        <div className="update-client">
            <div className="form-style-5">
                <form>
                    <fieldset>
                        <legend><span className="number"></span>Update Client</legend>
                        <div className="update-sub-div choose-client">
                            <label for="client">Client:</label>
                            <select placeholder="aaa" value={client} onChange={(e) => (setClient(e.target.value))}>
                                <option value="" selected disabled hidden>Choose client</option>

                                {props.clients.map(c =>
                                    <option key={c._id} value={c.name}>{c.name}</option>)}
                            </select>
                        </div>
                        <div className="update-sub-div">
                            <label for="ownership">Transfer ownership to:</label>
                            <select id="ownership" value={owner} onChange={(e) => (setOwner(e.target.value))}>
                                <option value="" selected disabled hidden></option>
                                {props.owners.map(ow =>
                                    <option key={ow._id} value={ow.owner}>{ow.owner}</option>)}
                            </select>
                            <input type="button" value="Transfer" onClick={transferOwnership} />
                        </div>
                        <div className="update-sub-div">
                            <label for="email-type">Send Email:</label>
                            <select value={emailType} onChange={(e) => (setEmailType(e.target.value))}>
                                <option value="" selected disabled hidden></option>
                                {emails.map(e =>
                                    <option key={e} value={e}>{e}</option>)}
                            </select>
                            <input type="button" value="Send" onClick={sendEmail} />
                        </div>
                        <div className="update-sub-div">
                            <label for="job">Declare Sale</label>
                            <input type="button" value="Declare!" onClick={declareSale} />
                        </div>
                    </fieldset>
                </form>
            </div>

        </div>

    );
}

export default UpdateClient;
