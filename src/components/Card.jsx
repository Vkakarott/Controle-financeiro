import React from "react";

export default function Card() {
    return (
        <div className="flex flex-col w-full h-full rounded-3xl col-start-1 col-end-4 row-start-2 row-end-5 p-2 bg-[var(--royal-blue)]">
            <div className="flex w-full h-4/5 items-center justify-center bg-[var(--bruma)]">
                Grafico
            </div>
            <div className="flex w-full h-20 bg-stone-500">
                <h1 className="text-4xl text-white">R$ 2000</h1>
            </div>
        </div>
    )
}