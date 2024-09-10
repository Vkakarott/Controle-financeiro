import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

interface User {
    name: string;
    image?: string;
}

interface HeaderProps {
    user: User;
}

export default function Header({ user }: HeaderProps) {
    return (
        <div className="flex items-end justify-between p-2 w-full h-16 col-start-1 col-end-7 row-start-1 row-end-2">
            <h1 className="font-semibold text-xl py-2 font-sans">Dashboard</h1>
            <div className="flex gap-2 items-end">
                <h2 className="flex">{user.name}</h2>
                {user.image ? 
                <img src={user.image} alt="avatar" className="w-10 h-10 rounded-full ml-2" />
                : <i className="bi bi-person-circle text-4xl ml-2"></i>}
            </div>
        </div>
    )
}