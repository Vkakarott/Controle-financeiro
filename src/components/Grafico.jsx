"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJs, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, plugins } from 'chart.js';

ChartJs.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend
);

const LineChart = () => {
    const data = {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
        datasets: [
            {
                label: "Entradas",
                data: [12, 19, 3, 5, 2, 3, 7, 22, 10, 5, 9, 14],
                fill: false,
                borderColor: "#53F4FF",
                tension: 0.5,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'overview'
            },
        },
    };
    
    return <Line data={data} options={options} />;
}

export default LineChart;