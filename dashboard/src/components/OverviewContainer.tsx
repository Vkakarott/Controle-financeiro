import React from "react";
import { Chart } from "./Chart";

const chartData = [
    { month: "January", incomes: 186, expenses: 80, balance: 106 },
    { month: "February", incomes: 305, expenses: 200, balance: 105 },
    { month: "March", incomes: 237, expenses: 120, balance: 117 },
    { month: "April", incomes: 73, expenses: 190, balance: -117 },
    { month: "May", incomes: 209, expenses: 130, balance: 79 },
    { month: "June", incomes: 214, expenses: 140, balance: 74 },
    { month: "July", incomes: 160, expenses: 100, balance: 60 },
    { month: "August", incomes: 120, expenses: 60, balance: 60 },
    { month: "September", incomes: 140, expenses: 80, balance: 60 },
    { month: "October", incomes: 160, expenses: 100, balance: 60 },
  ]

export default function Overview() {
    return (
        <div className="flex flex-col w-full h-full rounded-3xl col-start-1 col-end-5 row-start-2 row-end-5 bg-[var(--cards)] shadow-md shadow-[var(--shadow)]">
            <Chart chartData={chartData}/>
        </div>
    )
}