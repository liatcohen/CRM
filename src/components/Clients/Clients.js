import React, { useState, useEffect } from 'react'
import Client from './Client'
import './Clients.css'
import axios from 'axios';
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css"; //for css

const URL = "http://localhost:4000"

function Clients(props) {
    const [clients, setClients] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [numberOfPages, setNumberOfPages] = useState()

    useEffect(() => {
        getClientsInfo(currentPage)
    },[currentPage]);

    function getClientsInfo(numPage) {
        console.log("client getClients!")
        console.log(numPage)
        axios.get(`${URL}/clients/${numPage}/${20}`)
            .then((response) => {
                setNumberOfPages(Math.ceil(response.data.totalNumberOfClients/20)) 
                console.log(response.data.clients)
                setClients(response.data.clients)
                
            })
            .catch(function (error) {
                console.log("ERROR: ")
                console.log(error);
            });
    }
    
    function editClient(client) {
        console.log(`${client.name} was clicked`)
    }

    async function changeCurrentPage(numPage){
        setCurrentPage(numPage)
    } 

    return (
        <div className="clients">
            <div className="clients-headers">
                <div></div>
            <Pagination
                currentPage={currentPage}
                totalPages={numberOfPages}
                changeCurrentPage={changeCurrentPage}
                theme="bottom-border"/>
            </div>
           
            <table className="clients-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Country</th>
                        <th>First Contact</th>
                        <th>Email Type</th>
                        <th>Sold</th>
                        <th>Owner</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((c, key) => <Client client={c} key={key} editClient={editClient} />)}
                </tbody>
            </table>
            <div>
            <Pagination
                currentPage={currentPage}
                totalPages={numberOfPages}
                changeCurrentPage={changeCurrentPage}
                theme="bottom-border"/>
            </div>
           
        </div>
    );
}

export default Clients;
