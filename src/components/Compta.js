"use client"
import jsPDFInvoiceTemplate, { OutputType, jsPDF } from "jspdf-invoice-template";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import {
    format,
    parseISO,
    startOfMonth,
    endOfMonth,
    startOfToday,
    endOfDay,
    startOfDay,
    endOfWeek,
    startOfWeek,
    endOfYear,
    startOfYear
} from "date-fns";

export default function Comptabilite() {
    
    const [meetings, setMeetings] = useState([]);
    const [presta, setPresta] = useState([])
    const getMeetings = async () => {
        const response = await fetch(`/api/orders/validated`).then((response) => response.json());
        setMeetings(response);
        setPresta(response)
    }

    useEffect(() => {
        getMeetings()
    }, [])

    const router = useRouter();
    const refreshData = () => {
        router.refresh(router.asPathName)
    }
    let today = startOfToday()
    
    const [start, setStart] = useState(startOfYear(today))
    const [end, setEnd] = useState(endOfYear(today))

    
    let sum = 0
    presta.forEach((e) => sum += (parseInt(e.total)) )

    let sumP = 0



    function generatePDF() {
        var pdfObject = jsPDFInvoiceTemplate(props);
    }

    let invoice = []
    function newInv(name, type, time, pay, price){
        const obj = {
            name: name,
            type: type,
            time: time,
            payment: pay,
            price: price,
        }
        return(obj)
    }
    presta.forEach((e) => invoice.push(newInv(e.forfait, "préstation", e.startDatetime, e.payment, e.price)) )
    
    var props = {
        outputType: OutputType.Save,
        returnJsPDFDocObject: true,
        fileName: "Facture Comptable",
        orientationLandscape: false,
        compress: true,
        logo: {
            src: "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.4ce3de89.png&w=64&q=75",
            type: 'PNG', //optional, when src= data:uri (nodejs case)
            width: 25, //aspect ratio = width/height
            height: 25,
            margin: {
                top: 0, //negative or positive num, from the current position
                left: 0 //negative or positive num, from the current position
            }
        },
        business: {
            name: "Badjine Barber",
            address: "4 Place du Pilat, 31800 Saint-Gaudens",
        },
        invoice: {
            label: "Facture : ",
            num: 19,
            invDate: `Du: ${format(start, "dd/MM/yyyy HH:mm")}`,
            invGenDate: `Au: ${format(end, "dd/MM/yyyy HH:mm")}`,
            headerBorder: false,
            tableBodyBorder: false,
            header: [
                {
                    title: "#",
                    style: {
                        width: 15
                    }
                },
                {
                    title: "Nom",
                    style: {
                        width: 40,
                        height: 20
                    }
                },
                {
                    title: "Type",
                    style: {
                        width: 30,
                        height: 20
                    }
                },
                {
                    title: "Date",
                    style: {
                        width: 40
                    }
                },
                {
                    title: "Paiement",
                    style: {
                        width: 30
                    }
                },
                { title: "Total" }
            ],
            table: 
            invoice.map((pre, idx) => ([
                idx + 1,
                pre.name,
                pre.type,
                format(parseISO(pre.time), 'dd MMM yyy, HH:mm' ),
                pre.payment,
                pre.price + "€"
            ])),
            
            additionalRows: [{
                col1: 'Total HT:',
                col3: (sum + sumP) + "€",
                style: {
                    fontSize: 10 //optional, default 12
                }
            },
            {
                col1: 'TVA:',
                col3: ((sum + sumP) / 100) * 20 + "€",
                style: {
                    fontSize: 10 //optional, default 12
                }
            },
            {
                col1: 'Total TTC:',
                col3: ((sum + sumP) / 100) * 80 + "€",
                style: {
                    fontSize: 14 //optional, default 12
                }
            }],
            invDescLabel: "N° SIRET",
            invDesc: "953 770 369 000 15",
        },
        footer: {
            text: "La facture est créée sur ordinateur et est valable sans signature ni cachet.",
        },
        pageEnable: true,
        pageLabel: "Page ",
    };


    return (
        <main className="px-3 lg:px-36 maxi:px-64 text-black min-h-screen">
            <div className="flex flex-row justify-between pt-5">
                <div className="flex flex-row gap-5 font-semibold">
                    <select name="" id="" className="bg-white text-lg" onChange={(e) => {
                        if(e.target.value == "month"){
                            setPresta(meetings.filter((e) => parseISO(e.startDatetime, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") < endOfMonth(today) && parseISO(e.startDatetime, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") > startOfMonth(today)))
                            setStart(startOfMonth(today))
                            setEnd(endOfMonth(today))
                            refreshData()
                            presta.forEach(pre => pre.products.length > 0 ? (selCart.push(pre.products)):(console.log("empty")))
                            refreshData()

                        }
                        if (e.target.value == "today") {
                            setPresta(meetings.filter((e) => parseISO(e.startDatetime, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") < endOfDay(today) && parseISO(e.startDatetime, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") > startOfDay(today)))
                            setStart(startOfDay(today))
                            setEnd(endOfDay(today))
                            refreshData()
                            presta.forEach(pre => pre.products.length > 0 ? (selCart.push(pre.products)):(console.log("empty")))
                            refreshData()
                        }
                        if (e.target.value == "week") {
                            setPresta(meetings.filter((e) => parseISO(e.startDatetime, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") < endOfWeek(today) && parseISO(e.startDatetime, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") > startOfWeek(today)))
                            setStart(startOfWeek(today))
                            setEnd(endOfWeek(today))
                            refreshData()
                            presta.forEach(pre => pre.products.length > 0 ? (selCart.push(pre.products)):(console.log("empty")))
                            refreshData()
                        }
                        if (e.target.value == "year") {
                            setPresta(meetings.filter((e) => parseISO(e.startDatetime, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") < endOfYear(today) && parseISO(e.startDatetime, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'") > startOfYear(today)))
                            setStart(startOfYear(today))
                            setEnd(endOfYear(today))
                            refreshData()
                            presta.forEach(pre => pre.products.length > 0 ? (selCart.push(pre.products)):(console.log("empty")))
                            refreshData()
                        }

                    }}>
                        <option value="year">cette année</option>
                        <option value="month">ce mois</option>
                        <option value="week">cette semaine</option>
                        <option value="today">aujourd'hui</option>
                    </select>
                </div>
                <div className=" text-center">
                    <a href="#checkout" className="btn btn-sm bg-petrole text-white font-medium font-sans">Total</a>
                </div>
            </div>
            <h2 className="text-xl font-semibold pt-10 text-start">Préstations</h2>
            <div className="flex flex-col gap-5  Shadow mt-5 rounded-xl p-5 ">
                {presta.map(async (pre) => (
                        <>
                            <div className="mx-5 border-b border-dashed hidden lg:flex flex-row justify-between">
                                <div className="flex flex-row justify-between w-1/3">
                                    <h2 className="font-semibold">{pre.phoneName}</h2>
                                    <p className="text-petrole font-semibold w-1/12 text-end">{pre.total}€</p>
                                </div>
                                <p>{format(parseISO(pre.date), 'dd MMM yyy, HH:mm' )}</p>
                            </div>
                            <div className="mx-5 border-b border-dashed justify-between grid grid-cols-2 lg:hidden">
                                <h2 className="font-semibold">{pre.phoneName}</h2>
                                <p className=""><span className="text-petrole font-semibold w-1/12 text-end">{pre.total}€</span> <br/>{format(parseISO(pre.startDatetime), 'dd/MM HH:mm' )}</p>
                                <p className="col-start-2"></p>
                            </div>

                        </>
                                    

                    ))}
            </div>
            <h2 className="text-xl font-semibold pt-10 text-start">Produits</h2>
            <div className="flex flex-col gap-5 Shadow mt-5 rounded-xl p-5 ">
                
            
            </div>
            <div id="checkout" className="text-end pt-10 flex flex-row justify-between gap-5 pb-12 align-center">
                <button className="btn text-white bg-petrole self-center font-medium font-sans" onClick={() => generatePDF()}>Créer la Facture</button>
                <div>
                    <h2>Total HT: {sum + sumP}€</h2>
                    <h2>TVA: {Number.parseFloat(((sum + sumP) / 100) * 20).toFixed(2)}€</h2>
                    <h2 className="font-semibold">Total: {Number.parseFloat(((sum + sumP) / 100) * 80).toFixed(2)}€</h2>
                </div>
            </div>
        </main>
    )
}