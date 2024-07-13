import React from "react";

export default function Conteiner({children}) {
    return (
        <div className="grid grid-cols-6 grid-rows-6 p-8 w-full h-full gap-7">
            {children}
        </div>
    )
}