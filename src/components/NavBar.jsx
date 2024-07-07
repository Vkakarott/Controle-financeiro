import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function NavBar() {
    return (
        <nav className="flex items-center justify-between flex-col h-full px-5 py-8 text-2xl gap-7">
            <div className="flex flex-col h-full bg-[var(--picton-blue)] px-3 py-7 rounded-full gap-12">
                <div className="flex flex-col gap-3">
                    <i class="bi bi-house"></i>
                    <i class="bi bi-bar-chart"></i>
                    <i class="bi bi-calendar3"></i>
                </div>
                <div className="flex flex-col gap-3 before:h-px before:bg-[var(--bruma)] after:h-px after:bg-[var(--bruma)]">
                    <i class="bi bi-cash-coin"></i>
                    <i class="bi bi-database-add"></i>
                    <i class="bi bi-database-dash"></i>
                </div>
            </div> 
            <i class="bi bi-box-arrow-left"></i>
        </nav>
    )
}