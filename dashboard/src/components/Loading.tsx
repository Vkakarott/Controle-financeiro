import React from "react";

export default function Loading() {
    return (
        <div className="flex flex-wrap w-11/12 h-5/6 items-center justify-between p-4 gap-4">
            <div className="animate-pulse bg-[var(--veu)] h-2/4 w-full rounded-xl" />
            <div className="animate-pulse bg-[var(--veu)] h-1/3 w-1/2 rounded-xl"></div>
            <div className="animate-pulse bg-[var(--veu)] h-1/3 w-5/12 rounded-xl"></div>
        </div>
    )
}