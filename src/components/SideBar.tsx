import React from "react";
import Calendar from "./Calendar";
import Feed from "./Feed";

interface SideBarProps {
    events: Event[];
}

interface Event {
    day: string;
    message: string;
}

export default function SideBar({ events }: SideBarProps) {
    return (
        <div className="bg-[var(--smoke)] h-full w-[277px] rounded-e-3xl shadow-[-10px_0_20px_-5px_var(--shadow)] hidden xl:flex flex-col items-center justify-between pt-3">
            <Feed events={events}/>
            <Calendar />
        </div>
    )
}