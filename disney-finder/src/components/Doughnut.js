import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);

const DoughnutChart = ({ selectedTitle }) => {
    if (!selectedTitle) {
        // Render a placeholder if no title is selected
        return <p>Please select a title to view the chart.</p>;
    }

    const data = {
        labels: ["TMBD Popularity", "IMDB Score", "TMDB Score"],
        datasets: [
            {
                label: "Title Data",
                data: [
                    selectedTitle.tmdb_popularity ? selectedTitle.tmdb_popularity : 0,
                    selectedTitle.imdb_score ? selectedTitle.imdb_score : 0,
                    selectedTitle.tmdb_score ? selectedTitle.tmdb_score :0,
                ],
                backgroundColor: ["#19BACC", "#D9D9D9", "#012E57"],
                borderColor: ["#19BACC", "#D9D9D9", "#012E57"],
                borderWidth: 1,
            },
        ],
    };

    console.log("Chart Data:", data.datasets[0].data);

    const options = {
        plugins: {
            legend: {
                display: false, // Disable the legend
            },
            tooltip: {
                enabled: true, // Disable the tooltips
            },
        },
    };

    return (
        <div>
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default DoughnutChart;