
import hamburger from "@/icons/hamburger.svg";
import cross from "@/icons/cross.svg"
import barrow from "@/icons/back-arrow.svg"
import backward from "@/icons/backward.svg";
import Image from "next/image";
import { a } from "react-spring";
import "./navbar.css"
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { userSession } from "@/utils/userSession";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { Session } from "inspector/promises";
import { prisma } from "@/lib/prisma";

interface NavbarProps {
  back?: boolean;
}
interface UserProps {
  id: string,
  phone: string,
  email?: string,
  username: string,
  role: string,
}
export default async function Navbar(props: NavbarProps) {
  const session = await getServerSession(authOptions)
  return (
    <nav className="drawer drawer-end p-2 h-12 lg:h-20 w-full bg-white flex flex-col fixed top-0 z-30">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle"/>
      <div className="drawer-content flex flex-row w-full h-full justify-between items-center overflow-hidden z-[100]">
        {props.back == true ? (<a href="javascript:history.back()" className="text-black"><Image src={backward} className="w-6 h-6" alt=""/></a>): (<p className="w-6 h-6"></p>)}
        <a href="/" className="uppercase font-extrabold text-xl lg:text-2xl text-blue-600 mx-auto">
          Drive Phone
        </a>
        <label htmlFor="my-drawer-4"></label>
        <label htmlFor="my-drawer-4" className="drawer-button"><Image src={hamburger} alt="Hamburger Menu" className="h-6 w-6 lg:h-10 lg:w-10 transition duration-150"/></label>
        {/* {hamburgerActive ? <label htmlFor="my-drawer-4"><Image src={cross} alt="Hamburger Menu" className="h-6 w-6 lg:h-10 lg:w-10 transition duration-150" onClick={() => setHamburgerActive(false)} /></label> : <label htmlFor="my-drawer-4" className="drawer-button"><Image src={hamburger} alt="Hamburger Menu" className="h-6 w-6 lg:h-10 lg:w-10 transition duration-150" onClick={() => setHamburgerActive(true)} /></label>} */}
      </div>
      <div className="drawer-side pt-12 z-[50] shadow-none">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
          <ul className="menu py-4 w-80 min-h-full bg-white text-black">
              {/* Sidebar */}
              {/* {user?.role == "client" ? <>
                <a href="/api/auth/signin" className="btn btn-ghost bg-blue-600 text-white hover:text-blue-600 hover:bg-white hover:border-blue-600"><li>Connexion</li></a>
                <a href="/devices" className="btn btn-ghost hover:bg-petrole"><li>Prendre rendez-vous</li></a>
                <a href="/notices" className="btn btn-ghost hover:bg-petrole"><li>Avis Clients</li></a>
              </> : user?.role == "master" ? <>
                <a href="/api/auth/signin" className="btn btn-ghost bg-blue-600 text-white hover:text-blue-600 hover:bg-white hover:border-blue-600"><li>Connexion</li></a>
                <a href="/devices" className="btn btn-ghost hover:bg-petrole"><li>Prendre rendez-vous</li></a>
                <a href="/notices" className="btn btn-ghost hover:bg-petrole"><li>Avis Clients</li></a>
              </> : <>
                <a href="/api/auth/signin" className="btn btn-ghost bg-blue-600 text-white hover:text-blue-600 hover:bg-white hover:border-blue-600"><li>Connexion</li></a>
                <a href="/devices" className="btn btn-ghost hover:bg-petrole"><li>Prendre rendez-vous</li></a>
                <a href="/notices" className="btn btn-ghost hover:bg-petrole"><li>Avis Clients</li></a>
              </>
              } */}
          </ul>
      </div>
    </nav>
  );
}
