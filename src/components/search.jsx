import { useState, useEffect } from "react"
import cross from "@/icons/cross.png"
import Image from "next/image";
import gsmarena from "gsmarena-api"
import util from "util"

export default function Search(props){
    const [input, setInput] = useState("")
    const [placeholder, setPlaceholder] = useState(props.placeholder)
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await gsmarena.catalog.getBrands();
    //         setData(result);
    //         console.log(result)
    //         try {
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    //     fetchData()
    // }, [data, setData])
    // console.log(data);

    const [data, setData] = useState()
    const result = async() =>{
        const data = await gsmarena.catalog.getBrand('xiaomi-phones-80');
        console.log(util.inspect(data, { maxArrayLength: null }))
        setData(data);
    } 
    result();
    const post = async() => {
        const res = await prisma.device.createMany({
            data: {
                
            }
        })
    }

    return(
        <div className={`w-full border-b border-b-blue-600 flex flex-row ${input != "" ? "pl-6" : null}`}>
            <input type="text"
                placeholder={placeholder}
                value={input}
                onFocus={() => setPlaceholder("")}
                onBlur={() => placeholder == "" ? setPlaceholder(props.placeholder) : null}
                onChange={(e) => setInput(e.target.value)}
                className="w-full text-center text-blue-600 rounded-full placeholder:text-blue-600 p-2 outline-none"
            />
            <Image 
                src={cross}
                alt=""
                className={`w-6 h-6 self-center ${input != "" ? "flex" : "hidden"}`}
                onClick={() => setInput("")}
            />
        </div>
    )
}