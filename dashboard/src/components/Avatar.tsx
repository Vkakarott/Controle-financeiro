import React from "react";

interface AvatarProps {
    src?: string;
}

export default function Avatar({ src }: AvatarProps) {
    const defaultSrc = "/avatar.jpeg"; 

    return (
        <div className="flex">
            <img 
                className="w-12 h-12 rounded-full"
                src={src || defaultSrc} 
                alt={src ? "User Avatar" : "Default Avatar"} 
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => e.currentTarget.src = defaultSrc}
            />
        </div>
    );
}