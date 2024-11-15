"use client"
import { use, useEffect, useState } from "react"
import axios from "axios"
import Image from "next/image"
import Apple from "@/icons/apple-logo.svg"
import Card from "@/icons/credit-card.svg"
import Paypal from "@/icons/paypal.svg"
import Navbar from "@/components/navbar/navbar"
import { format, parseISO } from "date-fns"
import { is, fr } from "date-fns/locale"

import {CardElement, Elements} from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "@/components/stripe/CheckoutForm.jsx";
import CompletePage from "@/components/stripe/CompletePage.jsx";
import { Skeleton } from "@/components/ui/skeleton"

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
    const fetchData = async() => {
        const {data} = await axios.post("/api/stripe/create-payment-intent", {
            data: { amount: 89 },})
            setClientSecret(data)
    }
    useEffect(() => {
        fetchData()
    // Create PaymentIntent as soon as the page loads
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
    const [date, setDate] = useState("")
    const [adress, setAdress] = useState("")
    const [zip, setZip] = useState("")
    const [town, setTown] = useState("")
    const [workforce, setWorkforce] = useState<any>()
    const [selectedPieces, setSelectedPieces] = useState<any>([])
    let [sum, setSum] = useState(0)
    const [deposit, setDeposit] = useState<any>()
    const fetchDevice = async() => {
        const deviceId = localStorage.getItem("deviceId")
        const adressRes = localStorage.getItem("address") || ""
        const dateRes = localStorage.getItem("dateRes") || ""
        const zipRes = localStorage.getItem("zipcode") || ""
        const townRes = localStorage.getItem("city") || ""
        const piecesRes = JSON.parse(localStorage.getItem("prices")  || "")
        const response = await fetch(`/api/devices/${deviceId}`).then((response) => response.json())
        const wf = await fetch("/api/data/workforce").then((response) => response.json())
        const dt = await fetch("/api/data/deposit").then((response) => response.json())

        setDevice(response)
        setAdress(adressRes)
        setDate(dateRes)
        setZip(zipRes)
        setTown(townRes)
        setWorkforce(wf)
        setDeposit(dt)
        setSelectedPieces(piecesRes)
    }
    useEffect(() => {
        fetchDevice()
    }, [])
    selectedPieces.forEach((element: any) => { sum += (element) });
    
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
                    <a href="/checkout/payment" className={`${!isIdentified ? "text-gray-500 self-center align-middle flex text-lg font-semibold" : "text-blue-600 self-center align-middle flex text-lg font-semibold"}`}>
                        <button onClick={() => setStep(step + 1)} disabled={!isIdentified}>
                            Valider
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
                            <input type="text" className="outline-none border-b border-b-black bg-white" onBlur={() => Identify()} onChange={(e) => {setName(e.target.value); Identify(); localStorage.setItem("name", e.target.value)}}/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="">Prenom *</label>
                            <input type="text" className="outline-none border-b border-b-black bg-white" onBlur={() => Identify()} onChange={(e) => {setSurname(e.target.value); Identify(); localStorage.setItem("surname", e.target.value)}}/>
                        </div>
                        <div className="col-span-2 flex flex-col pt-5">
                            <label htmlFor="">Telephone *</label>
                            <input type="phone" className="outline-none border-b border-b-black bg-white" onBlur={() => Identify()} onChange={(e) => {setPhone(e.target.value); Identify(); localStorage.setItem("phone", e.target.value)}}/>
                        </div>
                        <div className="col-span-2 flex flex-col pt-5">
                            <label htmlFor="">Email</label>
                            <input type="email" className="outline-none border-b border-b-black bg-white" onBlur={() => Identify()} onChange={(e) => {setMail(e.target.value); Identify(); localStorage.setItem("mail", e.target.value)}}/>
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
                            <p>{date ? format(date, "dd MMMM, HH:mm", {locale: fr}) : null}</p>
                        </div>
                        <div className="flex flex-row py-3 justify-between" id="adress">
                            <p className="font-semibold">Adresse</p>
                            <p className="text-end">{adress}<br />{zip + ", " + town}</p>
                        </div>
                        <div className="flex flex-row py-3  border-b border-b-black justify-between" id="pricing">
                            <p className="font-semibold">Total</p>
                            <p className="flex flex-row">{workforce ? ( workforce.decimal + sum ): <div><Skeleton className="w-full h-[1.75rem]"/></div>} €</p>
                        </div>
                    </div>
                </div>
                {btn()}
            </main>
        </>
    )
}