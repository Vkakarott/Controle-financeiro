"use client";

import React, { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import TitleEdit from "@/components/TitleEdit";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Avatar from "@/components/Avatar";
import { ModeToggle } from "@/components/ToggleTheme";
import { SelectComponent } from "@/components/SelectComponent";
import { useUser } from "@/context/UserContext";

const currencyOptions = [
    { label: "BRL", value: "R$" }, 
    { label: "USD", value: "$" },  
    { label: "EUR", value: "€" },  
    { label: "GBP", value: "£" },  
    { label: "JPY", value: "¥" },  
    { label: "INR", value: "₹" },  
    { label: "KRW", value: "₩" },  
    { label: "CHF", value: "CHF" },
    { label: "CAD", value: "C$" },
];

export default function ConfigProfile() {
    const { user, loading, error } = useUser();
    const [name, setName] = useState(user?.name ?? "");
    const email = user?.email;
    const [image, setImage] = useState(user?.image);
    const [profession, setProfession] = useState(user?.profession ?? "");
    const [payOff, setPayOff] = useState(user?.payOff ?? 0);
    const [fixedIncome, setFixedIncome] = useState(user?.fixedIncome ?? 0);
    const [currency, setCurrency] = useState(user?.currency ?? "$");
    
    const handleNameChange = (newName: string) => {
        setName(newName);
    };

    const handleProfessionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfession(e.target.value);
    };

    const handleFixedIncomeChange = (newFixedIncome: number) => {
        setFixedIncome(newFixedIncome);
    };

    const handlePayOffChange = (newPayOff: number) => {
        setPayOff(newPayOff);
    };

    const handleCurrencyChange = (newCurrency: string) => {
        setCurrency(newCurrency);
    };

    return (
        <section className="flex h-full w-full p-8 py-14 gap-4">
            <div className="flex flex-col h-full w-1/2 gap-3 rounded-2xl shadow-2xl p-5 pt-7">
                <header className="flex font-semibold text-lg ml-4 mb-3">
                    Config Profile
                </header>
                <div className="flex flex-col gap-4">
                    <Input 
                        value={profession} 
                        onChange={handleProfessionChange} 
                        placeholder="Profession" 
                    />
                    <Input 
                        className="w-full text-[var(--text-light)]"
                        type="number" 
                        value={payOff.toString()} 
                        onChange={(e) => handlePayOffChange(Number(e.target.value))} 
                        placeholder="Pay Off" 
                    />
                    <div className="flex items-center">
                        <Input 
                            type="number" 
                            value={fixedIncome.toString()} 
                            onChange={(e) => handleFixedIncomeChange(Number(e.target.value))} 
                            placeholder="Fixed Income" 
                        />
                        <SelectComponent 
                            value={currency} 
                            onChange={handleCurrencyChange} 
                            options={currencyOptions} 
                            placeholder="Currency" 
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col h-full w-1/2 rounded-2xl shadow-2xl p-5 items-center justify-between">
                <div className="flex w-full p-2">
                    <ModeToggle />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="relative transition-all">
                        <Avatar src={image} className="w-36 h-36 relative z-0" />
                        <Button className="absolute bottom-0 right-0 w-10 h-10 z-10 hover:bg-[var(--veu)]" variant="primary">
                            <i className="bi bi-pencil text-transparent hover:text-[var(--text)]"></i>
                        </Button>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <TitleEdit initialValue={name} onChange={handleNameChange} />
                        <Input className="border-none text-[var(--text-light)] m-0 " value={email} readOnly />
                    </div>
                </div>
                <div className="flex text-zinc-500">
                    &copy; Vk Dev
                </div>
            </div>
        </section>
    );
}
