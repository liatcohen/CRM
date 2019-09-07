
import React, { useState, useEffect } from 'react'
import './Charts.css'
import SalesBarChart from './SalesBarChart'
function Charts(props) {


    function getSalesPerCountry() {
        let sales = {}
        for (let c of props.clients) {
            if (c.sold) {
                { sales[c.country] ? sales[c.country]++ : sales[c.country] = 1 }
            }
        }
        let data = []
        for (let [key, value] of Object.entries(sales)) {
            data.push({ country: key, sales: value })
            console.log(key, value);
        }
        return data
    }
    
    return (
        <div className="charts">
            Charts
          <SalesBarChart data={getSalesPerCountry()} />
        </div>


    );


}

export default Charts;
