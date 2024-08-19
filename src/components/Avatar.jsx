import React from "react";

export default function Avatar({ src }) {
    const defaultSrc = "/avatar.jpeg"; 

    return (
        <div className="flex">
            <img 
                className="w-12 h-12 rounded-full"
                src={src || defaultSrc} 
                alt={src ? "User Avatar" : "Default Avatar"} 
                onError={(e) => e.target.src = defaultSrc}
            />
        </div>
    );
}