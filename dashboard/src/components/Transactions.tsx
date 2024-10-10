import React from "react";
import List from "./ListLatestTransactions";

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
                <td className="w-full pl-2">type</td>
                <td className="w-full">date</td>
                <td className="w-full">category</td>
                <td className="flex justify-center w-full">value</td>
            </div>
            <div className="flex h-full mt-1">
                <List dataBase={dataBase}/>    
            </div> 
        </div>
    )
}