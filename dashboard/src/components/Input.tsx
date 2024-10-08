import React, { ChangeEvent } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

export default function Input({
    type = "text",
    placeholder = "",
    value = "",
    onChange,
    className = "",
    ...props 
}: InputProps) {
    return (
        <div className="flex flex-col p-2">
            <div className="flex text-[15px] text-zinc-400">
                {placeholder}
            </div>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className={`w-min h-6 px-2 text-base border-b-2 border-zinc-800 focus:outline-none bg-transparent ${className}`}
                {...props}
            />
        </div>
    );
}