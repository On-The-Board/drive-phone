"use client";

import { signIn } from "next-auth/react";
import { useSearchParams, useRouter, redirect } from "next/navigation";
import { ChangeEvent, useState } from "react";



export const LoginForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/compte";

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            setFormValues({ email: "", password: "" });

            const res = await signIn("credentials", {
                redirect: false,
                email: formValues.email,
                password: formValues.password,
                callbackUrl,
            });

            setLoading(false);

            console.log(res);
            if (!res?.error) {
                router.push("/account");
            } else {
                setError("Email ou Mot de passe Invalide");
            }
        } catch (error: any) {
            setLoading(false);
            setError(error);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };
    return (

        <form onSubmit={onSubmit} className="h-screen w-full">
            <section className="flex flex-col items-center h-screen">
                        <h2 className="text-2xl font-semibold text-center pt-12">Mon Compte</h2>
                        <div className="flex flex-row justify-between w-full lg:w-1/2 mt-5">
                            <a href=""><h2 className="text-xl font-semibold hover:text-petrole">Connexion</h2></a>
                            <a href="./signup"><h2 className="text-xl font-semibold text-nardo hover:text-petrole">Inscription</h2></a>
                        </div>
                        <div className="rounded-lg Shadow mt-5 flex flex-col p-8 gap-y-3 justify-self-center w-full lg:w-1/2 items-center">
                            <div className="w-full">
                                <p>Email:</p>
                                <input type="email" name="email" value={formValues.email} onChange={handleChange} className="border rounded-lg w-full p-2" required />
                            </div>
                            <div className="w-full">
                                <p>Mot de passe:</p>
                                <input type="password" name="password" value={formValues.password} onChange={handleChange} className="border rounded-lg w-full p-2" required />
                            </div>
                            <div className="self-start"> 
                                <a href="#">Mot de passe oublié ?</a>
                            </div>
                            {error && (
                                <p className="text-center bg-red text-black p-3 mb-6 rounded">{error}</p>
                            )}
                            <div className="pt-5">
                                <button type="submit" value="" className="btn btn-sm lg:btn-md bg-petrole text-white border-petrole hover:bg-white hover:text-petrole hover:border hover:border-petrole" >{loading ? "chargement..." : "Se connecter"}</button>
                            </div>  
                        </div>
            </section>
        </form>

    )
}


