import React from "react";
import Calendar from "./Calendar";
import Feed from "./Feed";

export default function SideBar() {
    return (
        <div className="bg-[var(--smoke)] h-full w-[277px] rounded-e-3xl shadow-[-10px_0_20px_-5px_var(--shawdon)] hidden xl:flex flex-col items-center justify-between pt-3">
            <Feed events={[]}/>
            <Calendar />
        </div>
    )
}