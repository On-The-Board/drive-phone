"use client"
import { usePathname } from 'next/navigation'


export default function Params(){
    const pathname = usePathname()
    return(
        <div className="w-full h-full">
            <div className="flex flex-col lg:grid grid-cols-12 h-full w-full text-black pt-12 pb-5 lg:pt-20 px-5 overflow-x-hidden">
                <h1 className='text-xl pt-10 py-5 lg:hidden'>Paramètres</h1>
                <div className="lg:col-start-1 lg:col-end-3 flex flex-col h-full w-full  lg:border-r lg:border-r-black ">
                    <ul className="lg:text-center w-full flex flex-col gap-y-4 h-full">
                        <li className="hidden lg:flex w-full h-10 content-center px-5 hover:bg-gray-100 hover:rounded-md hover:cursor-pointer"><a href="/settings" className={`${pathname == "/settings" ? "h-full text-blue-600 font-semibold border-b border-b-blue-600" : "h-full"}`}>Horaires</a></li>
                        <li className="hidden lg:flex w-full h-10 content-center px-5 hover:bg-gray-100 hover:rounded-md hover:cursor-pointer"><a href="/settings/pricing" className={`${pathname == "/settings/pricing" ? "h-full text-blue-600 font-semibold border-b border-b-blue-600" : "h-full"}`}>Tarifs</a></li>
                        <li className="hidden lg:flex w-full h-10 content-center px-5 hover:bg-gray-100 hover:rounded-md hover:cursor-pointer"><a href="" className={`${pathname == "/settings/" ? "h-full text-blue-600 font-semibold border-b border-b-blue-600" : "h-full"}`}>Link</a></li>
                        <li className="hidden lg:flex w-full h-10 content-center px-5 hover:bg-gray-100 hover:rounded-md hover:cursor-pointer"><a href="" className={`${pathname == "/settings/" ? "h-full text-blue-600 font-semibold border-b border-b-blue-600" : "h-full"}`}>Link</a></li>
                        <li className=" lg:hidden w-full h-10 content-center pt-5 px-5 hover:bg-gray-100 hover:rounded-md hover:cursor-pointer justify-between"><a href="/settings/schedules" className={`${pathname == "/settings" ? "h-full flex flex-row gap-5 items-center" : "h-full flex flex-row gap-5 items-center"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24">
                            <path d="M 12 0 C 5.371094 0 0 5.371094 0 12 C 0 18.628906 5.371094 24 12 24 C 18.628906 24 24 18.628906 24 12 C 24 5.371094 18.628906 0 12 0 Z M 12 2 C 17.523438 2 22 6.476563 22 12 C 22 17.523438 17.523438 22 12 22 C 6.476563 22 2 17.523438 2 12 C 2 6.476563 6.476563 2 12 2 Z M 10.9375 3.875 L 10.5 12.0625 L 10.59375 12.9375 L 16.75 18.375 L 17.71875 17.375 L 12.625 11.96875 L 12.1875 3.875 Z"></path>
                            </svg>
                            <p className='leading-3'>Horaires <br /><span className='text-sm text-gray-700'>Modifiez vos horraires de travail</span></p> 
                            </a>
                        </li>
                        <li className=" lg:hidden w-full h-10 content-center pt-5 px-5 hover:bg-gray-100 hover:rounded-md hover:cursor-pointer justify-between"><a href="/settings/pricing" className={`${pathname == "/settings" ? "h-full flex flex-row gap-5 items-center" : "h-full flex flex-row gap-5 items-center"}`}>
                            <svg width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <defs>
                                <clipPath id="clip-pricetag2">
                                <rect width="32" height="32"/>
                                </clipPath>
                            </defs>
                            <g id="pricetag2" clip-path="url(#clip-pricetag2)">
                                <g id="Group_2401" data-name="Group 2401" transform="translate(-208 -260)">
                                <g id="Group_2397" data-name="Group 2397">
                                    <g id="Group_2396" data-name="Group 2396">
                                    <g id="Group_2395" data-name="Group 2395">
                                        <path id="Path_3856" data-name="Path 3856" d="M227.168,273.419l.524-.524q.4-.4.087-.708t-.713.1l-.514.514a3.37,3.37,0,0,0-2.156-.915,2.941,2.941,0,0,0-2.675,2.156,2.6,2.6,0,0,0,.08,1.337,8.391,8.391,0,0,0,.687,1.486l-2.256,2.255a1.844,1.844,0,0,1-.254-.788,1.652,1.652,0,0,1,.092-.679,8.652,8.652,0,0,1,.381-.836.745.745,0,0,0,.077-.495.906.906,0,0,0-.267-.471.854.854,0,0,0-.64-.266.828.828,0,0,0-.6.237,2.367,2.367,0,0,0-.507.779,2.985,2.985,0,0,0-.211,1.05,3.323,3.323,0,0,0,.2,1.215,4.338,4.338,0,0,0,.725,1.258l-1.309,1.31a.861.861,0,0,0-.26.4.386.386,0,0,0,.138.352.336.336,0,0,0,.376.114,1.61,1.61,0,0,0,.473-.362l1.208-1.207a3.856,3.856,0,0,0,1.562.834,2.913,2.913,0,0,0,1.552-.024,3.061,3.061,0,0,0,1.295-.776,2.85,2.85,0,0,0,.65-.975,2.564,2.564,0,0,0,.174-1.1,2.806,2.806,0,0,0-.245-1.031q-.22-.492-.657-1.259l2.018-2.017a1.554,1.554,0,0,1-.034,1.576.853.853,0,0,0,.1,1.13.826.826,0,0,0,.606.252.807.807,0,0,0,.6-.242,1.666,1.666,0,0,0,.362-.6,2.914,2.914,0,0,0,.172-.846,2.5,2.5,0,0,0-.162-1.133A4.3,4.3,0,0,0,227.168,273.419Zm-4.263,6.31a1.413,1.413,0,0,1-.956.422,1.883,1.883,0,0,1-1.149-.364l2.124-2.124a2.987,2.987,0,0,1,.374,1.154A1.174,1.174,0,0,1,222.9,279.729Zm.844-4.123a2.76,2.76,0,0,1-.294-1.006,1.274,1.274,0,0,1,1.2-1.167,2.414,2.414,0,0,1,.955.315Z" fill="#344952"/>
                                    </g>
                                    </g>
                                </g>
                                <g id="Group_2400" data-name="Group 2400">
                                    <g id="Group_2399" data-name="Group 2399">
                                    <g id="Group_2398" data-name="Group 2398">
                                        <path id="Path_3857" data-name="Path 3857" d="M239.516,261.014a.47.47,0,0,0-.519-.462.506.506,0,0,0-.48.514c0,.063-.013,1.556-3.314,1.978a4.632,4.632,0,0,0-1.631.529l-1.613-1.614a1,1,0,0,0-.966-.259l-8.016,2.149a1,1,0,0,0-.675.292l-13.526,13.526a1,1,0,0,0,0,1.414l12.08,12.079a1,1,0,0,0,1.414,0L235.8,277.635a1,1,0,0,0,.292-.673l2.148-8.018a1,1,0,0,0-.259-.966l-3.657-3.657a3.672,3.672,0,0,1,1.01-.285C239.621,263.488,239.522,261.114,239.516,261.014Zm-5.361,15.433-12.592,12.592L210.9,278.374l12.592-12.593,7.464-2,1.092,1.093a7.589,7.589,0,0,0-1.165,2.164,2.122,2.122,0,1,0,.967.245,6.461,6.461,0,0,1,.908-1.7l3.4,3.4Zm-2.545-8.12a1,1,0,1,1-1.415,0,.978.978,0,0,1,.371-.227,7.822,7.822,0,0,0-.161.886.5.5,0,0,0,.448.545.423.423,0,0,0,.05,0,.5.5,0,0,0,.5-.451,7.226,7.226,0,0,1,.147-.8C231.566,268.3,231.591,268.309,231.61,268.327Z" fill="#344952"/>
                                    </g></g></g></g></g>
                            </svg>
                            <p className='leading-3'>Tarifs <br /><span className='text-sm text-gray-700'>Main d'oeuvre, frais de transport...</span></p> 
                            </a>
                        </li>
                    </ul>
                </div>
                <div className=" hidden lg:col-start-4 lg:col-end-17 w-full">
                    <h1></h1>
                </div>
            </div>
        </div>

    )
}