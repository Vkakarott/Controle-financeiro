import React, { useState, useEffect } from "react";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { SelectComponent } from "./SelectComponent";
import { useUser } from "@/context/UserContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

interface PopoverComponentProps {
    isOpen: boolean;
    onclose: () => void;
}

interface FormData {
    transactionType: string;
    amount: number;
    label: string;
}

const optionsExpenses = [
    { label: "Electronicos", value: "electronicos" },
    { label: "Transporte", value: "transporte" },
    { label: "Alimentação", value: "alimentação" },
    { label: "Roupas", value: "roupas" },
    { label: "Lazer", value: "lazer" },
    { label: "Outros", value: "outros" },
];

const schema = yup.object().shape({
    transactionType: yup.string().required("Tipo de transação nao definida."),
    amount: yup.number().positive("Valor deve ser positivo.").required("Valor é obrigatório."),
    label: yup.string().required("Tag é obrigatória."),
});

export function PopoverInput({ isOpen, onclose }: PopoverComponentProps) {
    const [selectLabel, setSelectLabel] = useState("");
    const { user, updateUser } = useUser();
    const currency = user?.currency ?? "";
    const id = user?.id ?? "";

    const { register, handleSubmit, setValue, reset, watch, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
            transactionType: "",
            amount: 0,
            label: "",
        }
    });

    useEffect(() => {
        if (!isOpen) {
            reset();
        }
    }, [isOpen, reset]);
    
    const handleSelectChange = (value: string) => {
        setSelectLabel(value);
        setValue("label", value);
    };

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        const transactionData = {
            type: data.transactionType,
            value: data.amount,
            label: selectLabel || data.label,
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
                const addedTransaction = await response.json();
                updateUser({ transactions: [...(user?.transactions ?? []), addedTransaction] });
                onclose();
                reset();
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
                <form className="flex flex-col gap-3 p-5 text-[var(--text)]" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col">
                        <h4 className="font-medium leading-none">Nova Transação</h4>
                        <p className="text-sm text-muted-foreground">Adicionar nova transação</p>
                    </div>
                    <div className="flex w-full items-center mt-3 gap-5">
                        <div className="flex items-center">
                            <input 
                                type="radio" 
                                value="income" 
                                className="w-4 h-4 accent-accent-[var(--nav)]" 
                                id="income"
                                {...register("transactionType")}
                            />
                            <label htmlFor="income" className="text-sm px-2 text-muted-foreground">Entrada</label>
                        </div>
                        <div className="flex items-center">
                            <input 
                                type="radio" 
                                value="expense" 
                                className="w-4 h-4 accent-accent-[var(--nav)]" 
                                id="expense"
                                {...register("transactionType")} 
                            />
                            <label htmlFor="expense" className="text-sm px-2 text-muted-foreground">Saida</label>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <label className="text-sm">{currency}</label>
                        <input 
                            type="number" 
                            className="w-full bg-transparent p-1 px-3 border border-[var(--zinc)] rounded" 
                            {...register("amount")}
                        />
                        {errors.amount && <p className="text-red-500">{errors.amount.message}</p>}
                    </div>
                    <div className="flex items-center gap-2">
                        {watch("transactionType") === 'expense' ? (
                            <SelectComponent 
                                value={selectLabel} 
                                options={optionsExpenses} 
                                onChange={handleSelectChange} 
                                placeholder="Tag"  
                            />
                        ) : (
                            <input
                                type="text"
                                className="w-full ml-2 bg-transparent p-2 px-3 border text-sm border-[var(--zinc)] rounded"
                                {...register("label")}
                                placeholder="descrição"	
                            />
                        )}
                        {errors.label && <p className="text-red-500">{errors.label.message}</p>}
                    </div>
                    <div className="flex w-full justify-end">
                        <button 
                            type="submit" 
                            className="w-24 font-bold text-sm p-2 mt-5 bg-[var(--text)] text-[var(--text-inverse)] rounded"
                        >
                            Adicionar
                        </button>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    );
}
