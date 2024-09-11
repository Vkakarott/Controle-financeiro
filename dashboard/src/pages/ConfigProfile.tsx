"use client";

import React from "react";
import { SetStateAction, useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import TitleEdit from "@/components/TitleEdit";
import Input from "@/components/Input";
import Avatar from "@/components/Avatar";
import Button from "@/components/Button";

export default function ConfigProfile({ session }: { session: any }) {
    const [name, setName] = useState(session.user.name);
    const [image, setImage] = useState(session.user.image);
    const [profession, setProfession] = useState(session.user.profession);
    const [fixedIncome, setFixedIncome] = useState(session.user.fixedIncome);
    
    const handleNameChange = (newName: SetStateAction<string>) => {
        setName(newName);
    }

    const handleProfessionChange = (newProfession: SetStateAction<string>) => {
        setProfession(newProfession);
    }

    const handleFixedIncomeChange = (newFixedIncome: SetStateAction<string>) => {
        setFixedIncome(newFixedIncome);
    }


    return (
        <form className="grid grid-cols-2 grid-rows-[auto,1fr] gap-1 w-full p-1 px-5">
            <h1 className="col-span-2 w-full h-min font-semibold text-xl p-7">
                Config Profile
            </h1>
            <section className="row-start-2 px-3 h-[95%] border-r-[2px] border-zinc-800">
                <h2 className="flex w-full h-min font-semibold text-lg p-2 px-4 text-zinc-700">
                    Personal data
                </h2>
                <div className="flex justify-between px-5 pr-10 pt-5">
                    <TitleEdit initialValue={name} onChange={handleNameChange} />
                    <div className="flex justify-center items-center">
                        <Avatar src={image} />
                        <Button className="absolute hover:bg-[var(--veu)] w-12 h-12">
                            <i className="bi bi-pencil text-transparent hover:text-white transition-colors duration-300"></i>
                        </Button>
                    </div>
                </div>

            </section>
            <section className="row-start-2 px-3 h-full">
                <h2 className="flex w-full h-min font-semibold text-lg p-2 px-4 text-zinc-700">
                    Financial data
                </h2>
            </section>
        </form>
    );
}