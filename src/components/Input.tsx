import React from "react";

export default function Input({
    type = "text",
    placeholder = "",
    value = "",
    onChange,
    className = "",
    ...props 
}) {
    return (
        <div className="flex flex-col p-2">
            <div className="flex text-[15px] text-zinc-400">
                {placeholder}
            </div>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className={`w-56 h-6 px-2 text-base border-b-2 border-zinc-600 focus:outline-none bg-transparent ${className}`}
                {...props}
            />
        </div>
    );
}