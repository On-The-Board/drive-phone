"use client"

import { prisma } from "@/lib/prisma"
import { useEffect, useState } from "react"

export default function Orders(){
    // interface Orders {
    //     id: string;
    // name: string;
    // userId: string | null;
    // date: Date;
    // phoneId: string;
    // piecesId: string | null;
    // address: string;
    // city: string;
    // zipCode: string;
    // status: string;
    // total: number;
    // subtotal: number;
    // }
    // const [orders, setOrders] = useState<Orders>({id: "",
    //     name: "",
    //     userId: "",
    //     date: new Date,
    //     phoneId: "",
    //     piecesId: "",
    //     address: "",
    //     city: "",
    //     zipCode: "",
    //     status: "",
    //     total: 0.00,
    //     subtotal: 0.00,})
    // const fetchOrders = async () => {
    //     const data = await prisma.order.findMany()
    //     setOrders(data)
    // }
    // useEffect(()=> {
    //     fetchOrders()
    // })
    return(
        <main className="min-h-screen">
            {/* <ul>
                {orders != undefined ? orders.map(o => 
                <li>

                </li>
                ) : null}
            </ul> */}
        </main>
    )
}