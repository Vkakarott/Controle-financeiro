import React from "react";
import { ChartTracking } from "./Chart2";

const chartData = [
    { "label": "roupas", "value": 100 },
    { "label": "eletrônicos", "value": 200 },
    { "label": "alimentos", "value": 300 },
    { "label": "bebidas", "value": 400 },
    { "label": "lazer", "value": 500 },
    { "label": "outros", "value": 600 },
  ]

export default function Tracking() {
    return (
        <div className="flex justify-center items-center rounded-3xl col-start-5 col-end-7 row-start-3 row-end-5 bg-[var(--cards)] border-[var(--zinc)] border shadow-md">
            <ChartTracking chartData={chartData}/>
        </div>
    );
}