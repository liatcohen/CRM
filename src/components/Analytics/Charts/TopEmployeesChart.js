import React from 'react';
import {
    ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend,
} from 'recharts';

function TopEmployeesChart(props) {

    return (
        <div>
            <div id="chart-headline">Top employees</div>
            <ComposedChart
                layout="vertical"
                width={500}
                height={350}
                data={props.data}
                margin={{
                    top: 20, right: 40, bottom: 20, left: 20,
                }}>
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis type="number" />
                <YAxis dataKey="employee" type="category" className="employee"/>
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" barSize={15} fill="#413ea0" />
            </ComposedChart>
        </div>
    );
}

export default TopEmployeesChart;
