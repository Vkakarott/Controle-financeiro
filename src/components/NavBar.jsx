import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Button from "./Button";

export default function NavBar() {
    return (
        <nav className="flex items-center justify-between flex-col h-full px-5 py-8 text-2xl gap-7">
            <div className="flex flex-col justify-between h-full bg-[var(--picton-blue)] px-3 py-6 rounded-full gap-12">
                <div className="flex flex-col gap-3">
                    <Button><i class="bi bi-house"></i></Button>
                    <Button><i class="bi bi-bar-chart"></i></Button>
                    <Button><i class="bi bi-calendar3"></i></Button>
                </div>
                <div className="flex flex-col gap-3 mt-16">
                    <Button><i class="bi bi-gear"></i></Button>
                </div>
            </div> 
            <Button><i class="bi bi-box-arrow-left"></i></Button>
        </nav>
    )
}