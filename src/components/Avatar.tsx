import React from "react";
import Image from "next/image";

interface AvatarProps {
    src?: string;
    className?: string;
}

export default function Avatar({ src, className }: AvatarProps) {
    const defaultSrc = "/defaultAvatar.jpg";

    return (
        <div className="flex">
            <Image src={src || defaultSrc} alt="Avatar" width={140} height={140} className={`rounded-full ${className}`} />
        </div>
    );
}