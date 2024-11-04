"use client";

import { redirect } from "next/navigation";
import { useState } from "react";



export const SignUpForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [date, setDate] = useState("")
    const [pass, setPass] = useState("")
    const submitPost = async () => {
        if(name.length > 2 && pass.length > 2){
            let body = {
                phone:      phone,
                email:    email,
                username: name,
                password: pass
            }
            try {
                await fetch(`/api/user`, {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify(body)
                })
                redirect("/login")
            } catch (error) {
                console.error(error)
            }

        }
    }
    return (

        <div className="h-screen w-full">
            <section className="flex flex-col items-center h-screen self-center">
                        <h2 className="text-2xl font-semibold text-center pt-12">Mon Compte</h2>
                        <div className="flex flex-row justify-between w-full lg:w-1/2 mt-5">
                            <a href="./login"><h2 className="text-xl font-semibold text-nardo hover:text-petrole">Connexion</h2></a>
                            <a href=""><h2 className="text-xl font-semibold hover:text-petrole">Inscription</h2></a>
                        </div>
                        <div className="rounded-lg Shadow mt-5 flex flex-col p-8 gap-y-3 justify-self-center w-full lg:w-1/2 items-center">
                            <div className="w-full">
                                <p>Nom:</p>
                                <input type="text" name="name" onChange={(e) => setName(e.target.value)} className="border rounded-lg w-full p-2 bg-white" required />
                            </div>
                            <div className="w-full">
                                <p>Telephone:</p>
                                <input type="phone" name="phone" onChange={(e) => setPhone(e.target.value)} className="border rounded-lg w-full p-2 bg-white" required />
                            </div>
                            <div className="w-full">
                                <p>Email:</p>
                                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} className="border rounded-lg w-full p-2 bg-white" required />
                            </div>
                            <div className="w-full">
                                <p>Mot de passe:</p>
                                <input type="password" name="password" onChange={(e) => setPass(e.target.value)} className="border rounded-lg w-full p-2 bg-white" required />
                            </div>
                            <div className="pt-5">
                                <button type="submit" value="" onClick={() => submitPost()} className="btn btn-sm lg:btn-md bg-petrole text-white border-petrole hover:bg-white hover:text-petrole hover:border hover:border-petrole" >S'inscrire</button>
                            </div>  
                        </div>
            </section>
        </div>

    )
}


