import React from "react";

const date_pay = 30;
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const left = date_pay - day;

export default function PayDay() {
    return (
        <div className="flex col-start-5 col-end-7 row-start-2 row-end-3 items-center gap-7 rounded-3xl p-5 border-white border shadow-md bg-[#7bdef0]">
            <div className="flex w-14 h-14 items-center justify-center rounded-2xl bg-[var(--bruma)] border-white border shadow-md">
                <i class="bi bi-hourglass-split h-[30px] text-3xl text-white"></i>
            </div>
            <div className="flex flex-col mr-2">
                <h1 className="text-xl font-semibold text-white">{left} dias</h1>
                <p className="text-sm text-slate-400">{day}/{month}</p>
            </div>
        </div>
    )
}