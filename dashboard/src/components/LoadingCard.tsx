import React from "react";

export default function LoadingCard() {
    return (
        <div className="grid grid-cols-8 grid-rows-6 p-8 w-full h-full gap-7">
            <div className="flex w-full h-full rounded-3xl col-start-7 col-end-9 row-start-1 row-end-6 bg-[var(--veu)] animate-pulse"></div>
            <div className="flex w-full h-16 col-start-1 rounded-3xl col-end-7 row-start-1 row-end-2 bg-[var(--veu)] animate-pulse"></div>
            <div className="flex w-full h-full rounded-3xl col-start-1 col-end-5 row-start-2 row-end-5 bg-[var(--veu)] animate-pulse shadow-md shadow-[var(--shadow)]"></div>
            <div className="flex col-start-5 col-end-7 row-start-2 row-end-3 rounded-3xl p-3 bg-[var(--veu)] animate-pulse"></div>
            <div className="flex h-56 rounded-3xl col-start-5 col-end-7 row-start-3 row-end-5 bg-[var(--veu)] animate-pulse shadow-md"></div>
            <div className="flex mt-10 bg-[var(--veu)] animate-pulse shadow-md shadow-[var(--shadow)] rounded-3xl col-start-1 col-end-7 row-span-2"></div>
        </div>
    )
}