"use client"

import { useState, FormEvent } from "react";

export default function RegisterPage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);

        try {
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: username,
                    email,
                    password,
                }),
            });

            const data = await response.json();
            if (data.user) {
                window.location.href = "/signin";
            } else {
                setError(data.message as string);
            }
        } catch (error) {
            setError("Something wenr wrong. Please try again.");	
        }
    };

    return (
        <div className="flex flex-col w-96 h-96 items-center justify-center rounded-3xl border border-[var(--zinc)] shadow-md p-5 bg-[var(--background1)]">
            <h1 className="text-2xl mb-7 font-semibold">Register</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input 
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="px-4 py-2 bg-transparent border border-[var(--zinc)] rounded-md shadow-md"
                    required 
                />
                <input 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-2 bg-transparent border border-[var(--zinc)] rounded-md shadow-md"
                    required 
                /><input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-4 py-2 bg-transparent border border-[var(--zinc)] rounded-md shadow-md"
                required 
                />
                {error && <p className="text-[var(--text-error)]">{error}</p>}
                <button
                    type="submit" 
                    className="py-1 text-[var(--zinc)] bg-[var(--primary-color)] rounded"
                >
                    Register
                </button>
                <button
                    type="button"
                    className="flex text-nowrap w-min m-auto text-sm text-[var(--text-button)]"
                    onClick={() => window.location.href = '/signin'}
                >
                    Sign In
                </button>
            </form>
        </div>
    )
}