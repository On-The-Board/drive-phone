import { useState, useEffect } from "react"
import cross from "@/icons/cross.png"
import Image from "next/image";
import gsmarena from "gsmarena-api"

export default function Search(props){
    const [input, setInput] = useState("")
    const [placeholder, setPlaceholder] = useState(props.placeholder)
    const [data, setData] = useState()
    useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await gsmarena.search.search("casio");
            setData(result);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchData()
    }, [input])
    console.log(data);
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