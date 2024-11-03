import React from "react";

interface Transaction {
    id: string;
    type: string;
    value: number;
    label: string;
    date: string;
    userId: string;
}

export default function List({ dataBase }: { dataBase: Transaction[] }) {
    return (
        <div className="flex flex-col items-center justify-between w-full h-28 overflow-y-auto scrollbar-hide">
            {dataBase.map((transaction) => {
                const formattedDate = new Date(transaction.date).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "2-digit",
                });
                const formattedValue = transaction.value.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                });
                return (
                    <div key={transaction.id} className="flex justify-between items-center gap-7 p-1 px-7 text-sm w-full">
                        <div className="w-full text-xs text-zinc-500">{transaction.type}</div>
                        <div className="w-full">{formattedDate}</div>
                        <div className="w-full text-xs">{transaction.label}</div>
                        <div className="flex justify-center w-full">{formattedValue}</div>
                    </div>
                );
            })}
        </div>
    );
}