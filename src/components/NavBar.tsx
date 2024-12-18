"use client"

import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from "./Button";
import { signOut } from "next-auth/react";
import { PopoverInput } from "./NewInput";

interface NavBarProps {
    onNavClick: (page: string) => void;
}

export default function NavBar({ onNavClick }: NavBarProps) {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const togglePopUp = () => {
        setIsPopoverOpen(!isPopoverOpen);
    };

    return (
        <nav className="flex items-center justify-between flex-col h-full px-5 py-8 text-2xl gap-7">
            <div className="flex flex-col justify-between h-full bg-[var(--nav)] px-3 py-7 rounded-full gap-12 shadow-md">
                <Button
                    onClick={() => onNavClick("home")} 
                    ariaLabel="Home"><i className="bi bi-house"></i></Button>
                <Button 
                    className="mt-10"
                    onClick={() => togglePopUp()}
                    ariaLabel="New-data"><i className="bi bi-node-plus-fill"></i></Button>
                <Button 
                    onClick={() => onNavClick("config-profile")}
                    ariaLabel="Profile"><i className="bi bi-person-gear"></i></Button>
            </div> 
            <Button ariaLabel="SignOut" onClick={() => signOut()}><i className="bi bi-box-arrow-left"></i></Button>
            {isPopoverOpen && (
                <PopoverInput 
                    isOpen={isPopoverOpen} 
                    onclose={togglePopUp} 
                />
            )}
        </nav>
    )
}