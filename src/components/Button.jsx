import React from "react";

export default function Button({ children, onClick, className = "", type = "button", ariaLabel = "", ...props }) {
    return (
        <button
            onClick={onClick}
            className={`rounded-full ${className}`}
            type={type}
            aria-label={ariaLabel}
            {...props}
        >
            {children}
        </button>
    );
}