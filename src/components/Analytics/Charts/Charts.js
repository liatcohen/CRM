
import React, { useState, useEffect } from 'react'
import './Charts.css'
import SalesBarChart from './SalesBarChart'
import TopEmployeesChart from './TopEmployeesChart'
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

    function getTopEmployees() {
        let employees = {}
        for (let c of props.clients) {
            if (c.sold) {
                { employees[c.owner] ? employees[c.owner]++ : employees[c.owner] = 1 }
            }
        }
        let data = []
        for (let [key, value] of Object.entries(employees)) {
            data.push({ employee: key, sales: value })
            console.log(key, value);
        }
        return data
    }

    return (
        <div className="charts">
          <SalesBarChart data={getSalesPerCountry()} />
          <TopEmployeesChart data={getTopEmployees()}/>
        </div>


    );


}

export default Charts;
