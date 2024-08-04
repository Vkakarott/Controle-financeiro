import React from "react";

export default function Main({children}) {
    return (
        <div className="flex items-center justify-center h-[780px] w-[1200px] bg-[var(--bruma)] rounded-[40px] border-[3px] border-[var(--border)] shadow-[0_0_15px_3px_var(--shawdon)]">
            <div className="flex items-center justify-between h-[95%] w-[97%] bg-[var(--backpage)] rounded-[30px] shadow-sm">
                {children}
            </div>
        </div>
    );
}