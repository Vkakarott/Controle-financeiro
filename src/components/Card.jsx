import React from "react";
import LineChart from "./Grafico";

export default function Card() {
    const value = 2000;

    return (
        <div className="flex flex-col w-full h-full rounded-3xl col-start-1 col-end-5 row-start-2 row-end-5 p-2 bg-[var(--cards)] shadow-md shadow-[var(--shawdon)]">
            <div className="flex w-full h-4/5 p-1 items-center justify-center">
                <LineChart />
            </div>
            <div className="flex items-end w-full rounded-2xl h-20 bg-[var(--smoke)]">
                <h1 className="text-4xl mb-2 ml-3 text-zinc-600">${value}</h1>
            </div>
        </div>
    )
}