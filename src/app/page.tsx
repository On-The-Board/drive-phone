import * as React from "react"

import Image from "next/image";
import bp from "@/img/brokenPhone.png"
import rp from "@/img/Reparateur.png"
import random from "@/img/random.jpg"
import issa from "@/img/issa.jpg"
import nico from "@/img/Nicolas.jpg"
import sophie from "@/img/sophie.png"
import emma from "@/img/emma.png"
import insta from "@/icons/instagram.png"
import snap from "@/icons/snapchat.png"
import fb from "@/icons/facebook.png"
import arrowD from "@/icons/arrow_down.svg"
import star from "@/icons/star.png"


import { v4 as uuidv4 } from "uuid";
import Carousel_testimonials from "../components/carousel_testimonials";
import Card_testimonials from "../components/card";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import EmblaCarousel from '../components/embla/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import '../components/embla/embla.css'
import { ArrowRight } from "lucide-react";
import { prisma } from "@/lib/prisma";




export default async function Home() {
  const OPTIONS: EmblaOptionsType = {}
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  const data = await prisma.device.findMany({
    where: {active: true}
  })
  const basic = [
    "apple_iphone_15_pro-12557",
    "apple_iphone_11-9848",
    "apple_iphone_12-10509",
    "xiaomi_redmi_note_12_pro-11955",
    "samsung_galaxy_s20-10081",
    "google_pixel_9_pro-13218"
    
]


  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card_testimonials img={random} text="Super service ! Mon écran remplacé en 30 min, sans bouger de chez moi. 👌📱" name="Lucas Martin"/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card_testimonials img={sophie}  text="Réparateur pro et rapide. Mon iPhone fonctionne comme neuf. Merci ! 🔧✨" name="Sophie Dupont"/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card_testimonials img={issa}  text="Prix honnête, intervention efficace. Plus besoin d’aller en boutique ! 🙌" name="Issa Diakate"/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card_testimonials img={emma}  text="Très sympa et ponctuel. Mon téléphone est sauvé ! Je recommande. 👍" name="Emma Roussel"/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card_testimonials img={nico}  text="Réparation express et soignée, à domicile en plus ! Top service ! 🚀" name="Nicolas Pons"/>
      )
    }
  ];
  return (
    <main className="text-white scroller no-scrollbar overflow-x-hidden">
      <Navbar/>
      <section className="scroller-section items-center px-5 z-10 bg-[url('../img/background.png')] h-[100dvh] bg-[auto_120dvw] bg-no-repeat bg-bottom lg:bg-cover flex flex-col relative">
        <div className="text-black text-center my-auto gap-y-4  flex flex-col pb-36 lg:pb-64">
          <h2 className="text-sm lg:text-xl font-medium">Téléphone cassé? <br className="lg:hidden" /> On se déplace pour le réparer</h2>
          <h1 className="font-bold text-2xl lg:text-6xl lg:pb-6">Réparation Smartphone <br />Givors, Lyon et alentours</h1>
          <div className="flex flex-row mx-auto gap-6">
            <a href="/devices"><button className="rounded-full bg-blue-600 p-6 py-2 text-white">Réserver</button></a>
            <a href="/accessories" className="p-4 py-2 flex flex-row font-semibold group">Accessoires<ArrowRight className="ml-1 w-4 group-hover:translate-x-1 transition duration-300"/></a>
          </div>
        </div>
      </section>
      <section className="scroller-section text-black bg-[url('../img/bg2.png')] h-[100dvh] bg-[auto_120dvw] w-screen bg-no-repeat bg-center lg:bg-cover flex flex-col relative overflow-hidden relative">
        <h2 className="mt-36 lg:mt-24 2xl:mt-36 text-center text-3xl lg:text-4xl font-bold text-black left-0 right-0 px-5 lg:px-auto ">Comment ça marche?</h2>
        <div className="mt-auto flex flex-col lg:flex-row p-5 lg:px-24 overflow-x-scroll no-scrollbar gap-y-4 ">
          <div className="w-[90vw] lg:w-[20vw] lg:left-[10vw] flex flex-row lg:absolute bottom-[55dvh] top-[40dvh] lg:flex-col">
            <p className="text-3xl font-bold mr-2 lg:mr-0 ">1</p>
            <div>
              <p className="font-semibold ">Selectionnez votre Smartphone</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ipsa </p>
            </div>
          </div>
          <div className="w-[90vw] flex flex-row lg:flex-col lg:text-center 2xl:pb-10">
            <p className="text-3xl font-bold mr-2 lg:mr-0 lg:text-center">2</p>
            <div>
              <p className="font-semibold lg:text-center">Commandez votre Réparation</p>
              <p className="lg:px-[30vw] 2xl:px-[35vw]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ipsa </p>
            </div>
          </div>
          <div className="w-[90vw] lg:w-[20vw] lg:right-[10vw] flex flex-row lg:absolute bottom-[55dvh] top-[40dvh] lg:flex-col">
            <p className="text-3xl font-bold mr-2 lg:mr-0">3</p>
            <div>
              <p className="font-semibold ">Nous venons Réparer dans l'heure</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ipsa </p>
            </div>
          </div>
        </div>
      </section>
      <h2 className="text-center text-black text-3xl font-semibold mt-16 lg:mt-24">Séléctionner mon Smartphone</h2>
      <section className=" min-h-screen bg-white overflow-x-scroll">
        <div className="flex flex-row w-fit h-fit overflow-x-scroll gap-10 mt-6 lg:mt-8 px-24">
          {data.filter((device: any) => (device.id.includes(basic[0]) || device.id.includes(basic[1]) || device.id.includes(basic[2]) || device.id.includes(basic[3]) || device.id.includes(basic[4]) || device.id.includes(basic[5]))).map((device: any) => (
            <a className="text-black justify-center flex w-[20dvw] flex-col p-8" href={`/pieces/${device.id}`}>
                <img src={device.img} alt={device.name} className="lg:w-56 lg:mx-auto"/>
                <h2 className="text-center pt-5">{device.name}</h2>
            </a>
          ))}
          <a href="" className="my-auto text-black text-lg">
            <button className="flex flex-row items-center">Voir tous les smartphones<ArrowRight className="ml-0 w-6"/></button>
          </a>
        </div>
      </section>
      <section className="scroller-section h-screen bg-blue-600 overflow-hidden content-center w-full ">
        <video
          id="my-video"
          className="video-js lg;pt-20 pt-12 px-2 lg:hidden"
          preload="auto"
          controls
          autoPlay
          muted
          width="100%"
        >
          <source src="https://firebasestorage.googleapis.com/v0/b/stagger-61882.appspot.com/o/Drive-Phone%2FVID-20241031-WA0000.mp4?alt=media&token=e646d258-d0b6-40fd-ac21-58dff948e385" type="video/mp4" />
          <track src="https://firebasestorage.googleapis.com/v0/b/stagger-61882.appspot.com/o/Drive-Phone%2FVID-20241031-WA0000.mp4?alt=media&token=e646d258-d0b6-40fd-ac21-58dff948e385" />
        </video>
        <video
          id="my-video"
          className="video-js lg;pt-20 pt-12 px-2 lg:block hidden self-center mx-auto"
          preload="auto"
          controls
          autoPlay
          muted
        >
          <source src="https://firebasestorage.googleapis.com/v0/b/stagger-61882.appspot.com/o/Drive-Phone%2FVID-20241031-WA0000.mp4?alt=media&token=e646d258-d0b6-40fd-ac21-58dff948e385" type="video/mp4" />
          <track src="https://firebasestorage.googleapis.com/v0/b/stagger-61882.appspot.com/o/Drive-Phone%2FVID-20241031-WA0000.mp4?alt=media&token=e646d258-d0b6-40fd-ac21-58dff948e385" />
        </video>
      </section>
      <section className="scroller-section">
        <Footer/>
      </section>
    </main>
  );
}
