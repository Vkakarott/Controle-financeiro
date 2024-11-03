import React from "react";

interface AvatarProps {
    src?: string;
    className?: string;
}

export default function Avatar({ src, className }: AvatarProps) {
    const defaultSrc = "/defaultAvatar.jpg";

    return (
        <div className="flex">
            <img 
                className={`w-12 h-12 rounded-full ${className}`}
                src={src || defaultSrc} 
                alt={src ? "User Avatar" : "Default Avatar"} 
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => e.currentTarget.src = defaultSrc}
            />
        </div>
    );
}