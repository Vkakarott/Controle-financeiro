"use client"

import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Button from "./Button";
import { signOut } from "next-auth/react";

export default function NavBar() {
    return (
        <nav className="flex items-center justify-between flex-col h-full px-5 py-8 text-2xl gap-7">
            <div className="flex flex-col justify-between h-full bg-[var(--nav)] px-3 py-6 rounded-full gap-12 shadow-md">
                <div className="flex flex-col gap-3">
                    <Button ariaLabel="Home"><i className="bi bi-house"></i></Button>
                    <Button ariaLabel="Statistic"><i className="bi bi-bar-chart"></i></Button>
                    <Button ariaLabel="Calendar"><i className="bi bi-calendar3"></i></Button>
                </div>
                <div className="flex flex-col gap-3 mt-16">
                    <Button ariaLabel="config"><i className="bi bi-gear"></i></Button>
                </div>
            </div> 
            <Button ariaLabel="SignOut" onClick={() => signOut()}><i className="bi bi-box-arrow-left"></i></Button>
        </nav>
    )
}