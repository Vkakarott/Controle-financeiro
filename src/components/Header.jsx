import React from "react";
import { dadosUsuario } from "../../dadosexample";

export default function Header({user}) {
    let nickname = dadosUsuario.nome;
    let avatar = dadosUsuario.imagemDePerfil ? dadosUsuario.imagemDePerfil : "https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png";

    return (
        <div className="flex items-end justify-between p-2 w-full h-16 col-start-1 col-end-7 row-start-1 row-end-2">
            <h1 className="font-semibold text-xl py-2 font-sans">Dashboard</h1>
            <div className="flex gap-2 items-end">
                <h2 className="flex">{nickname}</h2>
                <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full ml-2" />
            </div>
        </div>
    )
}