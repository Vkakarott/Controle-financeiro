import React from "react";

const date_pay = 30;
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const left = date_pay - day;

export default function PayDay() {
    return (
        <div className="flex col-start-4 col-end-5 row-start-2 row-end-3 items-center justify-between gap-2 rounded-3xl w-52 h-24 p-5 bg-red-400">
            <div className="flex w-14 h-14 items-center justify-center rounded-xl bg-[var(--bruma)] border-white border">
                <i class="bi bi-hourglass-split text-3xl text-white"></i>
            </div>
            <div className="flex flex-col mr-2">
                <h1 className="text-xl text-white">{left} dias</h1>
                <p className="text-sm text-zinc-300">{day}/{month}</p>
            </div>
        </div>
    )
}