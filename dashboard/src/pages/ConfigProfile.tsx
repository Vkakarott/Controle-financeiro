"use client";

import React, { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import TitleEdit from "@/components/TitleEdit";
import Input from "@/components/Input";
import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import { SelectComponent } from "@/components/SelectComponent";

interface User {
    name: string;
    email: string;
    image: string;
    profession: string;
    fixedIncome: number;
    payOff: number;
    currency: string;
}

const currencyOptions = [
    { label: "BRL", value: "R$" }, // Real brasileiro
    { label: "USD", value: "$" },  // Dólar americano
    { label: "EUR", value: "€" },  // Euro
    { label: "GBP", value: "£" },  // Libra esterlina
    { label: "JPY", value: "¥" },   // Iene japonês
    { label: "INR", value: "₹" },   // Rupia indiana
    { label: "KRW", value: "₩" },   // Won sul-coreano
    { label: "CHF", value: "CHF" }, // Franco suíço
    { label: "CAD", value: "C$" },  // Dólar canadense
];

export default function ConfigProfile({ session }: { session: User }) {
    const [name, setName] = useState(session.name);
    const [image, setImage] = useState(session.image);
    const [profession, setProfession] = useState(session.profession);
    const [fixedIncome, setFixedIncome] = useState(session.fixedIncome);
    const [payOff, setPayOff] = useState(session.payOff);
    const [currency, setCurrency] = useState(session.currency);
    
    const handleNameChange = (newName: string) => {
        setName(newName);
    }

    const handleProfessionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfession(e.target.value);
    }

    const handleFixedIncomeChange = (newFixedIncome: number) => {
        setFixedIncome(newFixedIncome);
    }

    const handlePayOffChange = (newPayOff: number) => {
        setPayOff(newPayOff);
    }

    const handleCurrencyChange = (newCurrency: string) => {
        setCurrency(newCurrency);
    }

    return (
        <div className="flex h-full w-full p-8 gap-4">
            <div className="flex flex-col h-full w-1/2 gap-3 rounded-2xl shadow-2xl p-5 pt-7">
                <div className="flex font-semibold text-lg ml-4 mb-3">
                    Config Profile
                </div>
                <div className="flex flex-col gap-4">
                    <Input className="border-none text-zinc-500" value={session.email} readOnly />
                    <Input 
                        value={profession} 
                        onChange={handleProfessionChange} 
                        placeholder="Profession" 
                    />
                    <Input 
                        className="border-2 w-10 text-zinc-500"
                        type="number" 
                        value={payOff.toString()} 
                        onChange={(e) => handlePayOffChange(Number(e.target.value))} 
                        placeholder="Pay Off" 
                    />
                    <div className="flex items-center">
                        <Input 
                            type="number" 
                            value={fixedIncome.toString()} 
                            onChange={(e) => handleFixedIncomeChange(Number(e.  target.value))} 
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
            <div className="flex flex-col h-full w-1/2 rounded-2xl shadow-2xl p-5 items-center justify-center">
                <Avatar src={image} className="w-36 h-36" />
                <TitleEdit initialValue={name} onChange={handleNameChange} />
            </div>
        </div>
    );
}
