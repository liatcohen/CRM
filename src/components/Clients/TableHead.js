import React, { useState, useEffect } from 'react'

function TableHead(props) {

    const sortClicked = () => {
        let sortOrder = -1
        if (props.sortOrder === -1) {
            // if (sign === '-1' || sign === '') {

            sortOrder = 1
        }
        props.sortClicked(props.headline, sortOrder)
    }

    return (
        <th onClick={sortClicked}>{props.headline}
            {
                props.sortBy.toLowerCase() === props.headline.toLowerCase() ?
                    props.sortOrder === 1 ? <i class="fas fa-chevron-up sort-sign"></i>:<i class="fas fa-chevron-down sort-sign"></i>
                    // "1up" : "-1down"
                    : '  '
            }
        </th>
    );
}

export default TableHead;
 // <i class="fas fa-chevron-up"></i>
    // <i class="fas fa-chevron-down"></i>