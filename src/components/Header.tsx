import React from "react";
import Image from "next/image";

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
                <Image src={user.image} alt="avatar" width={40} height={40} className="rounded-full ml-2" />
                : 
                <Image src="/defaultAvatar.jpg" alt="avatar" width={40} height={40} className="rounded-full ml-2" />
                }
            </div>
        </div>
    );
}