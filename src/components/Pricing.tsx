"use client"

import { useEffect, useState } from "react"

export default  function Params(){
    const [deposit, setDeposit] = useState<any>()
    const [workforce, setWorkforce] = useState<any>()
    const[dp, setDp] = useState(0)
    const [wf, setWf] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const fetchWF = async () => {
        const res = await fetch('/api/data/workforce').then((response) => response.json());
        setWorkforce(res.decimal)
        const res2 = await fetch('/api/data/deposit').then((response) => response.json());
        setDeposit(res2.num)
    }
    
    useEffect(()=> {
        if (loaded == false){
            fetchWF()
            setWf(workforce)
            setDp(deposit)
            setLoaded(true)
        }
    })

    const updateDP = async() => {
        let body = {deposit: dp}
        try {
            await fetch('/api/data/deposit/update',{
                method: 'PATCH',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(body)
            }
            )
        }
        catch (err) {
            console.error(err)
        }
        
    }

    const updateWF = async() => {
        let body = {workforce: wf}
        try {
            await fetch('/api/data/workforce/update',{
                method: 'PATCH',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(body)
            }
            )
        }
        catch (err) {
            console.error(err)
        }
        
    }

    const updateAll = async () => {
        updateDP()
        updateWF()
    }

    const [ready, setReady] = useState(false)

    // const updateAll = async (wf: number, dp: number) => {
    //     await prisma.data.update({
    //         where: {id:"workforce"},
    //         data:{decimal: wf}
    //     })
    //     await prisma.data.update({
    //         where: {id:"deposit"},
    //         data:{num: dp}
    //     })
    
    // }
    return(
        <>
            <div className="w-full p-5 pt-12 lg:pt-20 text-black">
                <div className="flex flex-col text-xl font-semibold uppercase text-blue-600 content-center w-full">
                    <p className="w-full flex justify-between pt-10">
                        <label htmlFor=""  className="">Main d'oeuvre :</label>
                        <span>
                            <input type="number" name="" id="" className="text-end bg-white w-10 outline-none" defaultValue={workforce} onChange={(e) => {setWf(parseFloat(e.target.value)); setReady(true); console.log(wf)}}/>
                            €
                        </span>
                    </p>
                    <p className="w-full flex justify-between pt-10">
                        <label htmlFor=""  className="">Accomptes :</label>
                        <span>
                            <input type="number" name="" id="" className="text-end bg-white w-10 outline-none" defaultValue={deposit} onChange={(e) => {setDp(parseInt(e.target.value)); setReady(true)}}/>
                            %
                        </span>
                    </p>
                </div>
            </div>
            <div className='w-full flex justify-center items-center fixed bottom-[5vh] left-0'>
                <a className={`${!ready ? "text-gray-500 cursor-not-allowed self-center align-middle flex text-lg font-semibold" : "text-blue-600 self-center align-middle flex text-lg font-semibold"}`}>
                    <button onClick={() => updateAll()}>
                        Valider
                    </button>
                </a>
            </div>
        </>
    )
}