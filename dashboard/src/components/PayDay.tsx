import React, { useEffect, useState } from "react";

interface PayDayProps {
    payOff: number;
}

function daysRemainings(payOff: number) {
    const [currentDate, setCurrentDate] = useState<Date | null>(null);

    useEffect(() => {
        setCurrentDate(new Date());
    }, []);

    if (!currentDate) {
        return null;
    }

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    const expectedDate = new Date(currentYear, currentMonth, payOff);

    if(payOff > currentDay) {
        const diffTime = expectedDate.getTime() - currentDate.getTime();
        const diffday = Math.ceil(diffTime / (1000*60*60*24));
        return diffday;
    } else {
        const lastDay = new Date(currentYear, currentMonth + 1, 0);
        const remainingDaysinMonth = lastDay.getDate() - currentDay;

        return remainingDaysinMonth + payOff;
    }
}

export default function PayDay({ payOff }: PayDayProps) {
    const remainingDays = daysRemainings(payOff);
    const currentMonth = new Date().getMonth() + 1;

    return (
        <div className="flex col-start-5 col-end-7 row-start-2 row-end-3 items-center gap-6 rounded-3xl p-3 border-[var(--border-card)] border shadow-md bg-[--pay]">
            <div className="flex w-14 h-14 items-center justify-center rounded-2xl bg-[var(--shadow)] border-[var(--border-card)] border shadow-md">
                <i className="bi bi-hourglass-split text-3xl text-[var(--veu)]"></i>
            </div>
            {
                payOff === 0 ? (
                    <div className="flex flex-col items-start">
                        <h1 className="text-xl font-semibold text-white">Payday</h1>
                        <p className="text-sm text-slate-400">- -/ - -</p>
                    </div>
                )
                : (
                    <div className="flex flex-col mr-2">
                        <h1 className="text-xl font-semibold text-white">{remainingDays} days</h1>
                        <p className="text-sm text-slate-400">{payOff}/{currentMonth}</p>
                    </div>
                )
            }
        </div>
    )
}