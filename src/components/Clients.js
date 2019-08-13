import React, { useState, useEffect } from 'react'

function Clients(props) {
    return (
        <div>
            <div>Clients</div>
            <table className="clients-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Email Type</th>
                        <th>Sold</th>
                        <th>Owner</th>
                        <th>Country</th>

                    </tr>
                </thead>
                <tbody>
                    {props.clients.map(u =>
                        <tr>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>{u.emailType}</td>
                            <td>{u.sold}</td>
                            <td>{u.owner}</td>
                            <td>{u.country}</td>
                        </tr>
                    )}
                </tbody>


            </table>
        </div>
    );
}

export default Clients;
