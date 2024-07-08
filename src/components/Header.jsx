import React from "react";

export default function Header({user}) {
    let nickname = user?.nickname ? user.nickname : "Username";
    let avatar = user?.avatar ? user.avatar : "https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png";

    return (
        <div className="flex items-end justify-between px-10 py-3 w-full h-20 mt-2">
            <h1 className="font-semibold text-xl py-2 font-sans">Dashboard</h1>
            <div className="flex gap-2 items-end">
                <h2 className="flex">{nickname}</h2>
                <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full ml-2" />
            </div>
        </div>
    )
}