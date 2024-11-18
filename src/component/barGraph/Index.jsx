import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    const data = {
        labels: ['November'],
        datasets: [
            {
                label: 'First Bar',
                data: [50], // Replace with actual data
                backgroundColor: '#7C4DFF',
                borderRadius: 10,
                barPercentage: 0.6,
            },
            {
                label: 'Second Bar',
                data: [30], // Replace with actual data
                backgroundColor: '#A975FF',
                borderRadius: 10,
                barPercentage: 0.6,
            },
            {
                label: 'Third Bar',
                data: [70], // Replace with actual data
                backgroundColor: '#6B8EFB',
                borderRadius: 10,
                barPercentage: 0.6,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Total User',
                color: '#000',
                font: {
                    size: 18,
                    weight: 'bold',
                },
                padding: {
                    top: 10,
                    bottom: 10,
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#000',
                },
                grid: {
                    display: false,
                },
            },
            y: {
                ticks: {
                    color: '#000',
                },
                grid: {
                    color: '#E0E0E0',
                    borderDash: [8, 4],
                },
                title: {
                    display: true,
                    text: 'Number of Users',
                    color: '#000',
                    font: {
                        size: 14,
                    },
                },
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default BarChart;
