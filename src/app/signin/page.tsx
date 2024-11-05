"use client"

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

export default function SignInPage() {
  const [error, setError] = useState<string | null>(null);

  const schema = yup.object().shape({
    email: yup.string().email("Email invalido!").required("Digite um email!"),
    password: yup.string().required("Defina uma senha!"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data: { email: string; password: string}) => {
    setError(null);

    const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
    });

    if (result && result.error) {
        setError("Credenciais Invalidas!" as string);
    } else {
        window.location.href = "/";
    }
};

  return (
    <main className="flex rounded-3xl border border-[var(--zinc)] shadow-md flex-col items-center justify-center px-24 py-12 bg-[var(--background1)]">
      <h1 className="text-2xl mb-7 font-semibold">Entrar</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <input
          type="text"
          placeholder="email"
          {...register("email")}
          className="px-4 py-2 bg-transparent border border-[var(--zinc)] rounded-md shadow-md"
          required
        />
        {errors.email && <p className="text-[var(--text-error)] text-xs">{errors.email.message}</p>}
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="px-4 py-2 bg-transparent border border-[var(--zinc)] mt-4 rounded-md shadow-md"
          required
        />
        {errors.password && <p className="text-[var(--text-error)] text-xs">{errors.password.message}</p>}
        <button
          type="submit"
          className="py-1 text-[var(--zinc)] bg-[var(--primary-color)] rounded my-4"
        >
          Entrar
        </button>
        <button
          type="button"
          onClick={() => window.location.href = '/register'}
          className="flex w-min text-nowrap m-auto text-sm text-[var(--text-button)]"
        >
          Registrar-se
        </button>
      </form>
    </main>
  );
}