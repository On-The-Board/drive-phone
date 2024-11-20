"use client"
import { use, useEffect, useState } from "react"
import axios from "axios"
import Navbar from "@/components/navbar/navbar"
import { format, parseISO } from "date-fns"

import {CardElement, Elements} from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "@/components/stripe/CheckoutForm.jsx";
import CompletePage from "@/components/stripe/CompletePage.jsx";
import { fr } from "date-fns/locale"
import emailjs from "@emailjs/browser"
import { getSession, useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { Router } from "next/router"
import { Skeleton } from "@/components/ui/skeleton"
import {sendEmail} from "@/utils/email"



const SuccessIcon =
<svg width="96px" height="96px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">
  <g id="SVGRepo_bgCarrier" stroke-width="0"/>
  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
  <g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2m0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"/> <path fill="#ffffff" d="M10.5 16.5c-.42 0-.82-.176-1.094-.484l-2.963-2.97c-.274-.26-.443-.653-.443-1.06 0-.405.17-.798.462-1.078.482-.513 1.557-.55 2.113.037l1.925 1.93 4.943-4.958c.52-.55 1.575-.57 2.132.02.256.242.425.634.425 1.04 0 .402-.164.79-.45 1.068l-5.993 6.012c-.238.267-.637.443-1.057.443z"/> </g>
</svg>;

if(typeof process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === 'undefined'){
    throw new Error("1")
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Payment(){
    interface UserProps {
        id: string,
        phone: string,
        email?: string,
        username: string,
        role: string,
      }

    interface Workforce {
        id: string,
        name:  string,
        text:string,
        num: number,
        decimal: number
    }
    const [user, setUser] = useState<UserProps>()
    async function getUserSession() {
        const session = await getSession()
        const userSession = await fetch(`/api/user/${session?.user.id}`).then((response) => response.json())
        setUser(userSession)
    }
    useEffect(() => {
        getUserSession()
    }, [])

    const [clientSecret, setClientSecret] = useState("");
    const [dpmCheckerLink, setDpmCheckerLink] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const [posted, setPosted] = useState(false)
    const [workforce, setWorkforce] = useState<Workforce>({id: "", name: "", text: "", num: 0, decimal: 0})
    const [delivery, setDelivery] = useState<Workforce>({id: "", name: "", text: "", num: 0, decimal: 0})
    const [deposit, setDeposit] = useState<any>()
    
    // Create PaymentIntent as soon as the page loads

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,

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
    const [city, setCity] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [date, setDate] = useState("")
    const [email, setEmail] = useState("")
    const [selectedPieces, setSelectedPieces] = useState<any>([])
    const [sku, setSku] = useState<number>()
    let [sum, setSum] = useState(0)
    const fetchDevice = async() => {
        const deviceId = localStorage.getItem("deviceId")
        const adressRes = localStorage.getItem("address") || ""
        const cityRes = localStorage.getItem("city") || ""
        const zipRes = localStorage.getItem("zipcode") || ""
        const dateRes = localStorage.getItem("dateRes") || ""
        const mailRes = localStorage.getItem("mail") || ""
        const response = await fetch(`/api/devices/${deviceId}`).then((response) => response.json())
        const piecesRes = JSON.parse(localStorage.getItem("prices")  || "")
        const wf = await fetch("/api/data/workforce").then((response) => response.json())
        const dt = await fetch("/api/data/deposit").then((response) => response.json())
        const dl = await fetch("/api/data/delivery").then((response) => response.json())
        setDevice(response)
        setAdress(adressRes)
        setDate(dateRes)
        setCity(cityRes)
        setZipcode(zipRes)
        setWorkforce(wf)
        setDelivery(dl)
        setDeposit(dt)
        setEmail(mailRes)
        setSelectedPieces(piecesRes)
        setSku(Math.floor(100000 + Math.random() * 900000))
    }
    useEffect(() => {
        fetchDevice()
        
    }, [])
    selectedPieces.forEach((element: any) => { sum += (element) });
    const fetchData = async( price: number) => {
        const {data} = await axios.post("/api/stripe/create-payment-intent", {
            data: { amount: parseFloat(price.toFixed(2)) * 100},})

        setClientSecret(data)
        
    }
    useEffect(() => {
        if (workforce.decimal != 0 && sum != 0){
            fetchData(((workforce.decimal + sum + delivery.num) / 100) * deposit.num)
        }
    }, [workforce, sum]);
    useEffect(() => {
        setConfirmed(new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
          ) ? true : false);
    });


    const postOrder = async () => {
        let body = {
            userId: "4b6255cd-a38f-45bf-bb67-73e39b478d74",
            sku: sku,
            name: localStorage.getItem("name") + " " + localStorage.getItem("surname"),
            date: localStorage.getItem("dateRes"),
            phone: localStorage.getItem("phone"),
            phoneId: localStorage.getItem("deviceId"),
            piecesId: localStorage.getItem("pieces"),
            phoneName: localStorage.getItem("deviceName"),
            address: localStorage.getItem("address"),
            city: localStorage.getItem("city"),
            zipCode: localStorage.getItem("zipcode"),
            status: "in process",
            total:  workforce.decimal + sum + delivery.num,
            subtotal: parseFloat(((( workforce.decimal + sum + delivery.num) / 100) * (100 - deposit.num )).toFixed(2))

        }
        try {
            await fetch(`/api/orders/post`, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(body)
            })
        } catch (error) {
            console.error(error)
        }
    }

    const sendMail = async () =>{
        try {

            sendEmail({to: email, from: "contact@drivephone.fr", subject: "Commande Drive Phone",message: "Merci pour votre commande !", img: device.img, date: format(date, "dd MMMM, HH:mm", {locale: fr}), phoneName: device.name, name: localStorage.getItem("surname"), price: (workforce.decimal + sum + delivery.num).toFixed(2), sku: sku, adress: adress +" "+ zipcode +" "+ city })
            console.log('Email sent successfully! WTF');
        }
         catch (error) {
         console.error('Error sending email:', error);
        // Handle error
         }
    }

      function sendOrder() {
        postOrder()
        sendMail()
        setPosted(true)
      }

    if(confirmed && !posted && email != "") {
        sendOrder()
    }

    // const noDeposit = async () => {
    //     setConfirmed(true)
    //     redirect(`/nodeposit`)
    // }

    return(
        <>{confirmed ? null :
            <Navbar back={true}/>}
            <main className={`${confirmed ? "bg-blue-600 h-screen text-white px-5 xl:px-[40vw]" : "h-screen px-5 xl:px-[40vw] text-black"}`}>
                    <div>
                        {confirmed ? 
                            <div className="w-full flex flex-col items-center pt-16">
                                {SuccessIcon}
                                <p className="pt-6">Commande Validée</p>
                                {email == "" ? 
                                    <div className="flex flex-col pt-16 w-full">
                                        Email :
                                        <input type="text" placeholder="john@doe.com" className="bg-transparent h-8 border-b border-b-white outline-none" onChange={(e) => setEmail(e.target.value)}/>
                                        <button className="text-white " onClick={() => sendOrder()}>Envoyer la facture</button>
                                    </div > : <p className="pt-16">Facture envoyé à {email}</p>
                                }
                            </div> : null
                        }

                        <div className={`${confirmed ? "pt-16 lg:pt-24" : "pt-16 lg:pt-24"}`} id="service">
                            <div className="flex flex-row justify-between w-full text-center pb-3" id="device">
                                <img src={device.img} alt="" className="w-9 h-12 rounded-sm"/>
                                <p className="text-center my-auto font-semibold">{device.name}</p>
                            </div>
                            <div className="flex flex-row py-3 justify-between" id="date">
                                <p className="font-semibold">Date</p>
                                <p>{date ? format(date, "dd MMMM, HH:mm", {locale: fr}) : null}</p>
                            </div>
                            <div className="flex flex-row py-3 justify-between" id="adress">
                                <p className="font-semibold">Adresse</p>
                                <p className="text-end">{adress}<br /> {zipcode}, {city}</p>
                            </div>
                            <div className={`flex flex-row py-3 justify-between ${confirmed ? "border-t border-t-white" : " border-b border-b-black"}`} id="pricing">
                                <p className="font-semibold">Total</p>
                                <p className="flex flex-row">{workforce ? ( workforce.decimal + sum + delivery.num ): <div><Skeleton className="w-full h-[1.75rem]"/></div>} €</p>
                            </div>
                        </div>
                        <div className={`mt-5 flex flex-col`} id="payment">
                            {clientSecret && confirmed ? 
                                null : clientSecret == "" ? <></> : (
                                    <>
                                        <div className="flex flex-row py-3 justify-between">
                                            <p className="font-semibold">Accompte</p>
                                            <p className="flex flex-row">{workforce ? ((( workforce.decimal + sum + delivery.num)  / 100) * deposit.num ).toFixed(2): <div><Skeleton className="w-full h-[1.75rem]"/></div>} €</p>
                                        </div>
                                        <Elements options={options} stripe={stripePromise}>
                                            <CheckoutForm dpmCheckerLink={dpmCheckerLink} />
                                        </Elements>
                                        {user?.role == "master" ? <a href="/checkout/nodeposit" className="w-full text-center mt-10 text-blue-600 font-semibold">Continuer sans accompte</a> : null}
                                    </>
                            )}
                        </div>
                    </div>
                    {confirmed ? <div className='w-full flex justify-center items-center pt-16 fixed bottom-16 left-0'>
                    <a href="/" className="text-white self-center align-middle flex text-lg font-semibold">
                        <button>
                            Retour à l'accueil
                            </button>
                    </a>
                </div> : null}
            </main>
        </>
    )
}