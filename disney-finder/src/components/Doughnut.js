import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);

const DoughnutChart = ({ selectedTitle }) => {
    if (!selectedTitle) {
        return <p>Please select a title to view the chart.</p>;
    }

    // OMDb fields mapping
    // imdbRating is 0-10; convert to 0-100 for consistency with percentages
    const imdbRating10 = parseFloat(selectedTitle?.imdbRating);
    const imdbRating = isNaN(imdbRating10) ? 0 : Math.max(0, Math.min(100, imdbRating10 * 10));

    const metascoreInt = parseInt(selectedTitle?.Metascore, 10);
    const metascore = isNaN(metascoreInt) ? 0 : Math.max(0, Math.min(100, metascoreInt));

    let rt = 0;
    if (Array.isArray(selectedTitle?.Ratings)) {
        const rtEntry = selectedTitle.Ratings.find(r => r.Source === 'Rotten Tomatoes');
        if (rtEntry && typeof rtEntry.Value === 'string') {
            const v = parseInt(rtEntry.Value.replace('%', ''), 10);
            rt = isNaN(v) ? 0 : Math.max(0, Math.min(100, v));
        }
    }

    const data = {
        labels: ["IMDb Rating", "Metascore", "Rotten Tomatoes"],
        datasets: [
            {
                label: "Title Scores (0-100)",
                data: [imdbRating, metascore, rt],
                backgroundColor: ["#19BACC", "#D9D9D9", "#012E57"],
                borderColor: ["#19BACC", "#D9D9D9", "#012E57"],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true },
        },
    };

    return (
        <div>
            <Doughnut data={data} options={options} />
        </div>
    );
};

export default DoughnutChart;