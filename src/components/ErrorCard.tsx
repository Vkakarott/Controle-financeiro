import React from "react";

export default function ErrorCard({ error }: { error: string }) {
    return (
        <section className="flex items-center justify-center h-full w-full">
                    <h1 className="text-[var(--text-light)]">{error}</h1>
        </section>
    )
}