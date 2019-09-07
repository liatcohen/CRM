import React from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

function SalesBarChart(props) {

    return (
        <div>
            <div id="chart-headline">sales by country</div>
      <BarChart
                width={600}
                height={300}
                data={props.data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="country" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#8884d8" />
            </BarChart>
        </div>

    );
}

export default SalesBarChart;
