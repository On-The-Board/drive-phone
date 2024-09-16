"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <main className="bg-white flex flex-col justify-center pt-16 px-5">
      <form className="flex flex-col gap-2">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="p-2"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="p-2"
        />
        <button
          type="submit"
          className="p-2 shadow-lg border rounded-sm"
          onClick={() => signIn("credentials", { email, password })}
        >
          Login
        </button>
      </form>
    </main>
  );
}
