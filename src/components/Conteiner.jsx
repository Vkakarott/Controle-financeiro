import React from "react";

export default function Conteiner({children}) {
    return (
        <div className="flex flex-wrap justify-start items-start w-full h-full">
            {children}
        </div>
    )
}