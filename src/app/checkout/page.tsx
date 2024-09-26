"use client"
import { use, useEffect, useState } from "react"
import Image from "next/image"
import Apple from "@/icons/apple-logo.svg"
import Card from "@/icons/credit-card.svg"
import Paypal from "@/icons/paypal.svg"
import Navbar from "@/components/navbar/navbar"
import { format, parseISO } from "date-fns"
import { is } from "date-fns/locale"

import {CardElement, Elements} from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "@/components/stripe/CheckoutForm.jsx";
import CompletePage from "@/components/stripe/CompletePage.jsx";

if(typeof process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === 'undefined'){
    throw new Error("1")
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Checkout(){
    // Setup Stripe
    const [clientSecret, setClientSecret] = useState("");
    const [dpmCheckerLink, setDpmCheckerLink] = useState("");
    const [confirmed, setConfirmed] = useState(false);

    useEffect(() => {
        setConfirmed(new URLSearchParams(window.location.search).get(
          "payment_intent_client_secret"
        ) ? true : false);
      });
    useEffect(() => {
    // Create PaymentIntent as soon as the page loads
        const fetchData = async() => {
            const response = await fetch("/api/stripe/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ data: [{ amount: 700 }] }),
            })
            .then((res) => res.json())
            setClientSecret(response)
        }
        fetchData()
    }, []);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    interface iDevice {
        id: string
        brand_id: string
        name: string
        img: string
        description: string
    }
    const [device, setDevice] = useState<iDevice>({id: "", brand_id: "", name: "", img: "", description: ""})
    const [adress, setAdress] = useState("")
    const [date, setDate] = useState("")
    const fetchDevice = async() => {
        const deviceId = localStorage.getItem("deviceId")
        const adressRes = localStorage.getItem("adressRes") || ""
        const dateRes = localStorage.getItem("dateRes") || ""
        const response = await fetch(`/api/devices/${deviceId}`).then((response) => response.json())
        setDevice(response)
        setAdress(adressRes)
        setDate(dateRes)
    }
    useEffect(() => {
        fetchDevice()
    }, [])

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [phone, setPhone] = useState("")
    const [mail, setMail] = useState("")
    const [step, setStep] = useState(0)
    const [paymentMethod, setPaymentMethod] = useState("")
    const [isIdentified, setIsIdentified] = useState(false)
    const Identify = async() => {
        if(name.length >= 2 && surname.length >= 2 && phone.length > 9){
            setIsIdentified(true)
        }
        else{
            setIsIdentified(false)
        }
    }
    const pay = () => {
        if(paymentMethod == "Apple Pay"){
            return (
                <div>
                    
                </div>
            )
        }
        if(paymentMethod == "Card"){
            return (
                <Elements stripe={null}>
                    <CardElement/>

                </Elements>

                // <div className="grid grid-cols-12 mt-10">
                //     <div className="col-span-12 flex flex-col">
                //         <label htmlFor="">Titulaire Carte</label>
                //         <input type="text" defaultValue={name + ' ' + surname} className="outline-none border-b border-b-black bg-white" onBlur={() => Identify()} onChange={(e) => {setName(e.target.value); Identify()}}/>
                //     </div>
                //     <div className="col-span-12 flex flex-col pt-5">
                //         <label htmlFor="">Numéro Carte</label>
                //         <input type="text" className="outline-none border-b border-b-black bg-white" onBlur={() => Identify()} onChange={(e) => {setName(e.target.value); Identify()}}/>
                //     </div>
                //     <div className="col-span-8 flex flex-col pt-5">
                //         <label htmlFor="">Expiration</label>
                //         <input type="text" className="outline-none border-b border-b-black bg-white" onBlur={() => Identify()} onChange={(e) => {setName(e.target.value); Identify()}}/>
                //     </div>
                //     <div className="col-start-10 col-span-3 flex flex-col pt-5">
                //         <label htmlFor="">CVV</label>
                //         <input type="text" className="outline-none border-b border-b-black bg-white" onBlur={() => Identify()} onChange={(e) => {setName(e.target.value); Identify()}}/>
                //     </div>
                // </div>
            )
        }
        if(paymentMethod == "Paypal"){
            return (
                <div>
                    
                </div>
            )
        }
    }
    const btn = () => {
        if(step == 0){
            return (
                <div className='w-full flex justify-center items-center pt-16 fixed bottom-16 left-0'>
                    <div className={`${!isIdentified ? "text-gray-500 self-center align-middle flex text-lg font-semibold" : "text-blue-600 self-center align-middle flex text-lg font-semibold"}`}>
                        <button onClick={() => setStep(step + 1)} disabled={!isIdentified}>
                            Valider
                            <img src="/icons/arrow_left.png" alt="" />
                        </button>
                    </div>
                </div>
            )
        }
        if(step == 1){
            return (
                <div className='w-full flex justify-center items-center pt-16 fixed bottom-16 left-0'>
                    <a href={`/gps`} className={("text-red-600 self-center align-middle flex text-lg font-semibold")}>
                        <button>
                            Payer
                            <img src="/icons/arrow_left.png" alt="" />
                        </button>
                    </a>
                </div>
            )
        }
    }
    const userStyle = () => {
        if(step == 1){
            return "-translate-y-96 transition duration-700"
        }
    }
    const paymentStyle = () => {
        if(step == 0){
            return "opacity-0"
        }
        if(step == 1){
            return "flex opacity-1 -translate-y-96 transition duration-700"
        }
    }

    return(
        <>
            <Navbar back={true}/>
            <main className="h-screen px-5 text-black content-center">
                <div className={`flex flex-col ${userStyle()}`} id="user informations">
                    {/* <div className="flex flex-row justify-between px-12">
                        <a href="" className="rounded-md bg-blue-600 text-white w-[30vw] text-center p-2">Se connecter</a>
                        <a href="" className="rounded-md bg-blue-600 text-white w-[30vw] text-center p-2">S'inscrire</a>
                    </div> */}
                    <div className="grid grid-cols-2 gap-5">
                        <div className="flex flex-col">
                            <label htmlFor="">Nom *</label>
                            <input type="text" className="outline-none border-b border-b-black bg-white" onBlur={() => Identify()} onChange={(e) => {setName(e.target.value); Identify()}}/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="">Prenom *</label>
                            <input type="text" className="outline-none border-b border-b-black bg-white" onBlur={() => Identify()} onChange={(e) => {setSurname(e.target.value); Identify()}}/>
                        </div>
                        <div className="col-span-2 flex flex-col pt-5">
                            <label htmlFor="">Telephone *</label>
                            <input type="phone" className="outline-none border-b border-b-black bg-white" onBlur={() => Identify()} onChange={(e) => {setPhone(e.target.value); Identify()}}/>
                        </div>
                        <div className="col-span-2 flex flex-col pt-5">
                            <label htmlFor="">Email</label>
                            <input type="email" className="outline-none border-b border-b-black bg-white" onBlur={() => Identify()} onChange={(e) => {setMail(e.target.value); Identify()}}/>
                        </div>
                    </div>
                </div>
                <div className={`${step == 0 ? null : "h-full"}`}>
                    <div className={`${step == 0 ? "pt-32" : "pt-64 transition duration-700"} ${userStyle()}`} id="service">
                        <div className="flex flex-row justify-between w-full text-center pb-3" id="device">
                            <img src={device.img} alt="" className="w-9 h-12"/>
                            <p className="text-center my-auto font-semibold">{device.name}</p>
                        </div>
                        <div className="flex flex-row py-3 justify-between" id="date">
                            <p className="font-semibold">Date</p>
                            <p>{date ? format(date, "dd MMMM, HH:mm") : null}</p>
                        </div>
                        <div className="flex flex-row py-3" id="adress">
                            <p className="font-semibold">Adresse</p>
                            <p></p>
                        </div>
                        <div className="flex flex-row py-3  border-b border-b-black" id="pricing">
                            <p className="font-semibold">Total</p>
                            <p></p>
                        </div>
                    </div>
                    <div className={`${paymentStyle()} mt-10 flex flex-col`} id="payment">
                        {clientSecret && (
                            <Elements  stripe={stripePromise}>
                            {confirmed ? <CompletePage /> : <CheckoutForm dpmCheckerLink={dpmCheckerLink} />}
                            </Elements>
                        )}
                        {/* <div className="flex flex-row justify-between w-full px-3">
                            <button className="rounded-md bg-white shadow-md flex flex-row items-center text-md px-4 py-1 border" onClick={() => setPaymentMethod("Apple Pay")}>
                                <Image src={Apple} alt="apple logo" className="w-4"/>
                                <p className="ml-1">Pay</p> 
                            </button>
                            <button className="rounded-md bg-white shadow-md flex flex-row items-center text-md px-2 py-1 border active:bg-blue-600" onClick={() => setPaymentMethod("Card")} >
                                <Image src={Card} alt="apple logo" className="w-5"/>
                                <p className="ml-1">Carte</p>
                            </button>
                            <button className="rounded-md bg-white shadow-md flex flex-row items-center text-md px-4 border" onClick={() => setPaymentMethod("Paypal")}>
                                <Image src={Paypal} alt="apple logo" className="w-12 h-8"/>
                            </button>
                        </div>
                        {pay()} */}
                    </div>
                </div>
                {btn()}
            </main>
        </>
    )
}