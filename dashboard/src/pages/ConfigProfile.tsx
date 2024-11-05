"use client";

import React, { useState, useEffect } from "react";

import 'bootstrap-icons/font/bootstrap-icons.css';

import Input from "@/components/Input";
import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import TitleEdit from "@/components/TitleEdit";
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
    const { user, updateUser } = useUser();
    const email = user?.email;
    const [change, setChange] = useState(false);
    const [image, setImage] = useState(user?.image ?? "");
    const [name, setName] = useState(user?.name ?? "");
    const [isSaving, setIsSaving] = useState(false);
    const [payOff, setPayOff] = useState(user?.payOff ?? 0);
    const [currency, setCurrency] = useState(user?.currency ?? "$");
    const [profession, setProfession] = useState(user?.profession ?? "");
    const [fixedIncome, setFixedIncome] = useState(user?.fixedIncome ?? 0);
    
    const handleNameChange = (newName: string) => {
            setName(newName);
            setChange(true);
    };

    useEffect(() => {
    }, [name]);

    const handleProfessionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newProfession = e.target.value;
        if (newProfession !== profession) {
            setProfession(newProfession);
            setChange(true);
        }
    };

    const handleFixedIncomeChange = (newFixedIncome: number) => {
        if (newFixedIncome !== fixedIncome) {
            setFixedIncome(newFixedIncome);
            setChange(true);
        }
    };

    const handlePayOffChange = (newPayOff: number) => {
        if (newPayOff !== payOff) {
            setPayOff(newPayOff);
            setChange(true);
        }
    };

    const handleCurrencyChange = (newCurrency: string) => {
        if (newCurrency !== currency) {
            setCurrency(newCurrency);
            setChange(true);
        }
    };

    const handleImageChange = (newImage: File) => {
        const reader = new FileReader();
        reader.onload = () => {
            const dataURL = reader.result as string;
            setImage(dataURL);
            setChange(true);
        };
        reader.readAsDataURL(newImage);
    }

    const saveChanges = async () => {
        setIsSaving(true);
        console.log("save: ", {	
            name,
        });
        try {
            const response = await fetch('/api/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    image,
                    profession,
                    fixedIncome,
                    payOff,
                    currency,
                    email,
                }),
            });
    
            if (!response.ok) {
                throw new Error('Failed to save changes');
            }
    
            const result = await response.json();
            setChange(false);
            updateUser(result);
        } catch (error) {
            console.error('Error saving changes:', error);
        }
        setIsSaving(false);
    };
    

    return (
        <main className="flex h-full w-full p-8 py-14 gap-4">
            <section className="flex flex-col justify-between h-full w-1/2 gap-3 rounded-2xl shadow-2xl p-5 pt-7">
                <div className="flex flex-col">
                    <header className="flex font-semibold text-lg ml-4 mb-5">
                        Perfil
                    </header>
                    <div className="flex flex-col gap-3">
                        <Input 
                            value={profession} 
                            onChange={handleProfessionChange} 
                            placeholder="Profissão" 
                            className="border border-[var(--veu)] rounded-lg p-4"
                        />
                        <Input 
                            className="w-full text-[var(--text-light)] border border-[var(--veu)] rounded-lg p-4"
                            type="number" 
                            value={payOff.toString()} 
                            onChange={(e) => handlePayOffChange(Number(e.target.value))} 
                            placeholder="Dia do pagamento" 
                        />
                        <div className="flex items-center">
                            <Input 
                                type="number" 
                                value={fixedIncome.toString()} 
                                onChange={(e) => handleFixedIncomeChange(Number(e.target.value))} 
                                placeholder="Renda mensal" 
                                className="border border-[var(--veu)] rounded-lg p-4"
                            />
                            <div className="flex pt-6">
                                <SelectComponent 
                                    value={currency} 
                                    onChange={handleCurrencyChange} 
                                    options={currencyOptions} 
                                    placeholder="Moeda" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-end justify-end p-5">
                    { change && (
                        <button 
                            className="flex bg-[var(--primary-color)] px-3 py-1 rounded text-[var(--text-inverse)] font-medium"
                            disabled={isSaving} 
                            onClick={saveChanges}
                        >
                        Salvar
                    </button>
                    )}
                </div>
            </section>

            <section className="flex flex-col h-full w-1/2 rounded-2xl shadow-2xl p-5 items-center justify-between">
                <div className="flex w-full p-2">
                    <ModeToggle />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="relative transition-all">
                        <Avatar src={image} className="w-36 h-36 relative z-0" />
                        <Button className="absolute bottom-0 right-0 w-10 h-10 z-10 hover:bg-[var(--veu)]" variant="primary">
                            <label>
                                <i className="bi bi-pencil text-transparent hover:text-[var(--text)]"></i>
                                <input type="file" onChange={(e) => e.target.files && handleImageChange(e.target.files[0])} className="hidden" />
                            </label>
                        </Button>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <TitleEdit initialValue={name} onChange={(newName) => handleNameChange(newName)} />
                        <Input className="border-none text-[var(--text-light)] m-0 text-center" value={email} readOnly />
                    </div>
                </div>
                <div className="flex text-zinc-500">
                    &copy; Vk Dev
                </div>
            </section>
        </main>
    );
}
