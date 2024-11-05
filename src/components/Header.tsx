import React from "react";

interface User {
    name: string;
    image?: string;
}

interface HeaderProps {
    user: User | null;
}

export default function Header({ user }: HeaderProps) {
    return (
        <div className="flex items-end justify-between text-[var(--text)] p-2 w-full h-16 col-start-1 col-end-7 row-start-1 row-end-2">
            <h1 className="font-semibold text-xl py-2 font-sans">Dashboard</h1>
            <div className="flex gap-2 items-end">
                <h2 className="flex font-medium">{user?.name}</h2>
                {
                user?.image ? 
                <img src={user?.image} alt="avatar" className="w-10 h-10 rounded-full ml-2" />
                : 
                <img src="/defaultAvatar.jpg" alt="avatar" className="w-10 h-10 rounded-full ml-2" />
                }
            </div>
        </div>
    );
}