import React, { useState } from 'react'

function ClientInput(props) {

    const [selectedClient, setSelectedClient] = useState('')

    const clientSelected = (e) => setSelectedClient(e.target.value)

    const submitSelectedClient = () => props.submitSelectedClient(selectedClient)

    return (
        <div className="form-style-5">
            <label for="job"> Client:</label>
            <input type="text" name="name" placeholder="Name" />
            <input list="clients" name="client" placeholder="Select Client"
                value={selectedClient}
                onInput={clientSelected} />
            <datalist id="clients">
                {props.clients.map(c =>
                    <option key={c.id} value={c.name} />
                )}
            </datalist>
            <input type="submit" onClick={submitSelectedClient} />
        </div>
    );


}

export default ClientInput;
