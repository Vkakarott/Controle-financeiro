import React from "react";
import { Chart } from "./Chart";

const chartData = [
    { month: "January", incomes: 186, expenses: 80 },
    { month: "February", incomes: 305, expenses: 200 },
    { month: "March", incomes: 237, expenses: 120 },
    { month: "April", incomes: 73, expenses: 190 },
    { month: "May", incomes: 209, expenses: 130 },
    { month: "June", incomes: 214, expenses: 140 },
  ]

export default function Overview() {
    return (
        <div className="flex flex-col w-full h-full rounded-3xl col-start-1 col-end-5 row-start-2 row-end-5 p-2 bg-[var(--cards)] shadow-md shadow-[var(--shadow)]">
            <Chart chartData={chartData}/>
        </div>
    )
}