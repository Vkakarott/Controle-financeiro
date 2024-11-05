import React from "react";
import List from "./ListLatestTransactions";
import { prisma } from "@/lib/prisma";

interface dataBase {
    id: string;
    type: string;
    value: number;
    label: string;
    date: string;
    userId: string;
}

interface TransactionsProps {
    dataBase: dataBase[];
}

export default function Transactions({ dataBase }: TransactionsProps) {
    return (
        <div className="flex flex-col mt-10 bg-[var(--cards)] shadow-md shadow-[var(--shadow)] rounded-3xl col-start-1 col-end-7 row-span-2">
            <div className="flex justify-between items-center gap-7 p-1 px-7 border-b border-[var(--border-card)] text-xs">
                <div className="w-full pl-2">tipo</div>
                <div className="w-full">data</div>
                <div className="w-full">categoria</div>
                <div className="flex justify-center w-full">valor</div>
            </div>
            <div className="flex h-full mt-1">
                <List dataBase={dataBase}/>    
            </div> 
        </div>
    )
}