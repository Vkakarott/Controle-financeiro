"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

export default function RegisterPage() {
    const [error, setError] = useState<string | null>(null);

    const schema = yup.object().shape({
        username: yup.string().required("Nome é obrigatório!"),
        email: yup.string().email("Formato invalido!").required("Email é obrigatório!"),
        password: yup.string().required("Defina uma senha!"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = async (data: { username: string; email: string; password: string; }) => {
        setError(null);

        try {
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: data.username,
                    email: data.email,
                    password: data.password,
                }),
            });

            const result = await response.json();
            if (result.user) {
                window.location.href = "/signin";
            } else {
                setError(result.message);
                console.error(result.message);
            }
        } catch (error) {
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <main className="flex flex-col  items-center justify-center rounded-3xl border border-[var(--zinc)] shadow-md px-24 py-12 bg-[var(--background1)]">
            <h1 className="text-2xl mb-7 font-semibold">Cadastre-se</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-0">
                <input 
                    type="text"
                    placeholder="Nome"
                    {...register("username")} 
                    className="px-4 py-2 bg-transparent border border-[var(--zinc)] rounded-md shadow-md"
                />
                {errors.username && <p className="text-[var(--text-error)] text-xs">{errors.username.message}</p>}

                <input 
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                    className="px-4 py-2 bg-transparent border border-[var(--zinc)] rounded-md shadow-md mt-4"
                />
                {errors.email && <p className="text-[var(--text-error)] text-xs">{errors.email.message}</p>}

                <input 
                    type="password"
                    placeholder="Senha"
                    {...register("password")} 
                    className="px-4 py-2 bg-transparent border border-[var(--zinc)] rounded-md shadow-md mt-4"
                />
                {errors.password && <p className="text-[var(--text-error)] text-xs">{errors.password.message}</p>}

                {error && <p className="text-[var(--text-error)] text-xs">{error}</p>} 
                
                <button
                    type="submit" 
                    className="py-1 text-[var(--zinc)] bg-[var(--primary-color)] rounded my-4"
                >
                    Cadastre-se
                </button>
                <button
                    type="button"
                    className="flex text-nowrap w-min m-auto text-sm text-[var(--text-button)]"
                    onClick={() => window.location.href = '/signin'}
                >
                    Entre
                </button>
            </form>
        </main>
    );
}