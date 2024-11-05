"use client"
import { usePathname } from 'next/navigation'


export default function Params(){
    const pathname = usePathname()
    return(
        <div className="w-full h-full">
            <div className="grid grid-cols-12 h-full w-full text-black pt-12 pb-5 lg:pt-20 px-5 overflow-x-hidden">
                <div className="col-start-1 col-end-3 flex flex-col h-full w-full  border-r border-r-black ">
                    <ul className="text-center w-full flex flex-col gap-y-4 h-full">
                        <li className="w-full h-10 content-center px-5 hover:bg-gray-100 hover:rounded-md hover:cursor-pointer"><a href="" className={`${pathname == "/settings" ? "h-full text-blue-600 font-semibold border-b border-b-blue-600" : "h-full"}`}>Horaires</a></li>
                        <li className="w-full h-10 content-center px-5 hover:bg-gray-100 hover:rounded-md hover:cursor-pointer"><a href="/settings/pricing" className={`${pathname == "/settings/pricing" ? "h-full text-blue-600 font-semibold border-b border-b-blue-600" : "h-full"}`}>Tarifs</a></li>
                        <li className="w-full h-10 content-center px-5 hover:bg-gray-100 hover:rounded-md hover:cursor-pointer"><a href="" className={`${pathname == "/settings/" ? "h-full text-blue-600 font-semibold border-b border-b-blue-600" : "h-full"}`}>Link</a></li>
                        <li className="w-full h-10 content-center px-5 hover:bg-gray-100 hover:rounded-md hover:cursor-pointer"><a href="" className={`${pathname == "/settings/" ? "h-full text-blue-600 font-semibold border-b border-b-blue-600" : "h-full"}`}>Link</a></li>
                    </ul>
                </div>
                <div className="col-start-4 col-end-17 w-full">
                    <h1></h1>
                </div>
            </div>
        </div>

    )
}