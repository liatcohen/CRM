import React, { useState, useEffect } from 'react'
import Client from './Client'
import './Clients.css'
import ClientSearch from './ClientSearch'
import axios from 'axios';
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";
import TableHead from './TableHead';
const url = `http://localhost:4000`
url=""

function Clients(props) {
    const [clients, setClients] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [numberOfPages, setNumberOfPages] = useState()
    const [searchCategory, setSearchCategory] = useState('Name')
    const [searchQuery, setSearchQuery] = useState('')
    const [sortOrder, setSortOrder] = useState(1)
    const [sortBy, setSortBy] = useState('name')

    // const [sort] = useState({})
    const itemsInPages = 20
    const tableHeads = ["Name", "Email", "Country", "First Contact", "Email Type", "Sold", "Owner"]
    useEffect(() => {
        getClientsInfo(currentPage)
    }, [currentPage]);

    useEffect(() => {
        getClientsInfo(1)
    }, [searchQuery, searchCategory]);

    useEffect(() => {
        getClientsInfo(1)
    }, [sortOrder])

    function getClientsInfo(numPage) {
        const search = getSearchQuery()
        axios.get(`${url}/clients/${numPage}?itemsInPages=${itemsInPages}&sortBy=${sortBy}&sortOrder=${sortOrder}${search}`)
            .then((response) => {
                setNumberOfPages(Math.ceil(response.data.totalNumberOfClients / itemsInPages))
                setClients(response.data.clients)
            })
            .catch(function (error) {
                console.log("ERROR: ")
                console.log(error);
            });
    }

    function getSearchQuery() {
        if (searchQuery) {
            return `&searchCategory=${searchCategory}&searchQuery=${searchQuery}`
        }
        return ''
    }
    function editClient(client) {
        console.log(`${client.name} was clicked`)
    }

    async function changeCurrentPage(numPage) {
        setCurrentPage(numPage)
    }

    function handleSearchCategory(category) {
        setSearchCategory(category)
    }
    function handleSearchQuery(query) {
        setSearchQuery(query)
    }
    function sortClicked(sortBy, sortOrder) {
        setSortBy(sortBy)
        setSortOrder(sortOrder)
    }
  
    return (
        <div className="clients">
            <div className="clients-headers">
                <ClientSearch searchCategory={searchCategory} searchQuery={searchQuery} handleSearchCategory={handleSearchCategory} handleSearchQuery={handleSearchQuery} />
                <Pagination
                    currentPage={currentPage}
                    totalPages={numberOfPages}
                    changeCurrentPage={changeCurrentPage}
                    theme="bottom-border" />
            </div>
            <table className="clients-table">
                <thead>
                    <tr>
                        {tableHeads.map(h => <TableHead headline={h} sortClicked={sortClicked} sortBy={sortBy} sortOrder={sortOrder} />)}
                    </tr>
                </thead>
                {clients.length > 0 ?
                    <tbody>
                        {clients.map((c, key) => <Client client={c} key={key} editClient={editClient} />)}
                    </tbody>
                    : <div>No clients found</div>}
            </table>
            <div className="clients-bottom">
                <Pagination
                    currentPage={currentPage}
                    totalPages={numberOfPages}
                    changeCurrentPage={changeCurrentPage}
                    theme="bottom-border" />
            </div>

        </div>
    );
}

export default Clients;
