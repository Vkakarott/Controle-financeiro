"use client"

import { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      const res = await fetch("/api/auth/register", {
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

      const data = await res.json();
      console.log("Response data:", data);
      if (data.user) {
        window.location.href = "/signin";
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error("Error:", err);
    }
  };

  return (
    <div className="flex w-[380px] h-[380px] rounded-3xl border border-[var(--zinc)] shadow-md flex-col items-center justify-center p-5">
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
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-2 bg-transparent border border-[var(--zinc)] rounded-md shadow-md"
          required
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="py-1 text-[var(--zinc)] bg-[var(--dark-green)] rounded"
        >
          Register
        </button>
        <button 
          type="button"
          className="flex text-nowrap w-min m-auto text-sm text-zinc-500" 
          onClick={() => window.location.href = '/signin'}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}