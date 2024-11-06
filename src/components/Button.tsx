import React, { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    ariaLabel?: string;
    [key: string]: unknown;
}

export default function Button({ children, onClick, className = "", ariaLabel = "", ...props }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`rounded-full ${className}`}
            aria-label={ariaLabel}
            {...props}
        >
            {children}
        </button>
    );
}