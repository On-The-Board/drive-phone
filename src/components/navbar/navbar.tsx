"use client"
import hamburger from "@/icons/hamburger.svg";
import cross from "@/icons/cross.svg"
import barrow from "@/icons/back-arrow.svg"
import backward from "@/icons/backward.svg";
import Image from "next/image";
import { a } from "react-spring";
import "./navbar.css"
import { useState } from "react";

interface NavbarProps {
  back?: boolean;
}
export default function Navbar(props: NavbarProps) {
  const [hamburgerActive, setHamburgerActive] = useState(false)
  return (
    <nav className="p-2 h-12 w-full bg-white flex justify-between overflow-hidden items-center fixed top-0 z-30">
      {props.back == true ? (<a href="javascript:history.back()" className="text-black"><Image src={backward} className="w-6 h-6" alt=""/></a>): (<p className="w-6 h-6"></p>)}
      <a href="/" className="uppercase font-extrabold text-xl text-blue-600">
        Drive Phone
      </a>
      {hamburgerActive ? <Image src={cross} alt="Hamburger Menu" className="h-6 w-6 transition duration-150" onClick={() => setHamburgerActive(false)} /> : <Image src={hamburger} alt="Hamburger Menu" className="h-6 w-6 transition duration-150" onClick={() => setHamburgerActive(true)} />}
    </nav>
  );
}
