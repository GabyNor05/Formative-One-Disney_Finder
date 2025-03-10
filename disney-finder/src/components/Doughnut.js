import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);
const DoughnutChart = () => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3],
                backgroundColor: [
                    '#19BACC',
                    '#D9D9D9',
                    '#012E57',
                ],
                borderColor: [
                    '#19BACC',
                    '#D9D9D9',
                    '#012E57',  
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false, // Disable the legend
            },
            tooltip: {
                enabled: false, // Disable the tooltips
            },
        },
    };
    return (
        <div>
            <Doughnut data={data} options={options} />
        </div>
    );
}
export default DoughnutChart;