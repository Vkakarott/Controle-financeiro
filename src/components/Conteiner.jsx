import React from "react";

export default function Conteiner({children}) {
    return (
        <div className="flex flex-col w-full h-full">
            {children}
        </div>
    )
}