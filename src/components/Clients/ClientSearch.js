import React from 'react'

function ClientSearch(props) {
    const searchOptions = ["Name", "Email", "Owner", "Country"]

    const handleSearchQuery = (e) => props.handleSearchQuery(e.target.value)

    const handleSearchCategory = (e) => props.handleSearchCategory(e.target.value)

    return (
        <div className="client-search">
            <input type="text" placeholder="Type to search..." value={props.searchQuery} onChange={handleSearchQuery} />
            <select id="ownership" value={props.searchCategory} onChange={handleSearchCategory}>
                {searchOptions.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
        </div>
    );
}

export default ClientSearch;
