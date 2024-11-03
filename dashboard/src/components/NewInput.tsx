import React, { ChangeEvent, useState, FormEvent } from "react";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { SelectComponent } from "./SelectComponent";

interface PopoverComponentProps {
    isOpen: boolean;
    onclose: () => void;
    currency: string;
    id: string;
}

const options = [
    { label: "Electronics", value: "electronics" },
    { label: "Drinks", value: "drinks" },
    { label: "Food", value: "food" },
    { label: "Clothes", value: "clothes" },
    { label: "Leisure", value: "leisure" },
    { label: "Others", value: "others" },
];

export function PopoverInput({ isOpen, onclose, currency, id }: PopoverComponentProps) {
    const [selectOption, setSelectOption] = useState<string | "">("");
    const [transactionType, setTransactionType] = useState<string | "">("");
    const [amount, setAmount] = useState<number | "">("");
    
    const handleSelectChange = (value: string) => setSelectOption(value);

    const handleTransactionTypeChange = (event: ChangeEvent<HTMLInputElement>) => setTransactionType(event.target.value);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (typeof amount !== 'number' || amount <= 0) {
            console.error("Amount should be greater than zero");
            return;
        }

        const transactionData = {
            type: transactionType,
            value: amount,
            label: selectOption,
            date: new Date().toISOString(),
            userId: id,
        };

        try {
            const response = await fetch("/api/transaction", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(transactionData),
            });

            if (response.ok) {
                console.log("Transaction added successfully!");
                setTransactionType("");
                setAmount("");
                setSelectOption("");
                onclose();
            } else {
                console.error("Failed to add transaction");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    return (
        <Popover 
            open={isOpen}
            onOpenChange={(open) => {
                if (!open) onclose();
            }}
        >
            <PopoverContent className="w-80 absolute top-56 left-72 bg-[var(--cards)] rounded-lg border-[var(--border-card)] ">
                <form className="flex flex-col gap-3 p-5 text-[var(--text)]" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <h4 className="font-medium leading-none">New Transaction</h4>
                        <p className="text-sm text-muted-foreground">
                            Set new transaction.
                        </p>
                    </div>
                    <div className="flex w-full items-center mt-3 gap-5">
                        <div className="flex items-center">
                            <input 
                                type="radio" 
                                name="transactionType" 
                                value="income" 
                                className="w-4 h-4 accent-accent-[var(--nav)]" 
                                id="income"
                                checked={transactionType === "income"}
                                onChange={handleTransactionTypeChange}
                            />
                            <label htmlFor="income" className="text-sm px-2 text-muted-foreground">Incomes</label>
                        </div>
                        <div className="flex items-center">
                            <input 
                                type="radio" 
                                name="transactionType" 
                                value="expense" 
                                className="w-4 h-4 accent-accent-[var(--nav)]" 
                                id="expense"
                                checked={transactionType === "expense"}
                                onChange={handleTransactionTypeChange} 
                            />
                            <label htmlFor="expense" className="text-sm px-2 text-muted-foreground">Expenses</label>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <label className="text-sm">{currency}</label>
                        <input 
                            type="number" 
                            className="w-full bg-transparent p-1 px-3 border border-[var(--zinc)] rounded" 
                            onChange={({ target: { value } }) => setAmount(value ? Number(value) : "")}
                            value={amount}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <SelectComponent 
                            value={selectOption} 
                            options={options} 
                            onChange={ handleSelectChange } 
                            placeholder="Tag"  
                        />
                    </div>
                    <div className="flex w-full justify-end">
                        <button 
                            type="submit" 
                            className="w-24 font-bold text-sm p-2 mt-5 bg-[var(--text)] text-[var(--text-inverse)] rounded"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    )
}
