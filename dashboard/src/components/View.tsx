import React from "react";

export default function View() {
    return (
        <div className="flex flex-col mt-10 border border-zinc-700 bg-[var(--cards)] rounded-2xl col-start-1 col-end-7 row-span-2">
            <div className="flex p-2 px-4 bg-black">
                titles
            </div>
            <div className="flex h-full bg-white">
                lists    
            </div> 
        </div>
    )
}