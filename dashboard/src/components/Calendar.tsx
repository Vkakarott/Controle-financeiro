import React from "react";

export default function Calendar() {
    const date = new Date();
    const month_name = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][date.getMonth()];
    const day = date.getDate();
    const first_day = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const last_day = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    return (
        <div className="flex flex-col w-[95%] px-2 pb-4 mb-3 rounded-2xl bg-[var(--calendar)] items-center">
            <h1 className="font-semibold p-1">
                {month_name}
            </h1>
            <div>
                <ul className="flex text-sm font-medium items-center justify-between text-[var(--text)]">
                    <li>Sun</li>
                    <li>Mon</li>
                    <li>Tue</li>
                    <li>Wed</li>
                    <li>Thu</li>
                    <li>Fri</li>
                    <li>Sat</li>
                </ul>
                <ul className="flex flex-wrap w-full">
                    {[...Array(first_day).keys()].map((emptyDay) => (
                        <li key={`empty-${emptyDay}`}></li>
                    ))}
                    {[...Array(last_day).keys()].map((dayNumber) => (
                        <li key={dayNumber + 1} className={dayNumber + 1 === day ? 'z-10 before:absolute before:z-0 before:w-5 before:h-5 before:bg-[var(--primary-shawdon)] before:rounded-full' : ''}>
                                {dayNumber + 1}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}