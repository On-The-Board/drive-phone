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




export default function Home() {
  const OPTIONS: EmblaOptionsType = {}
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

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
      <section className="scroller-section px-5 z-10 bg-[url('../img/background.jpg')] min-h-screen bg-cover flex flex-col relative">
        <div className="w-full lg:w-fit lg:mx-auto lg:h-full flex flex-col lg:flex-row mt-16 lg:items-center">
          <Image src={bp} alt="tel cassé" className="w-full mx-6 lg:mx-0 lg:w-fit lg:h-[70vh] lg:mt-24  lg:relative" />
          <div className="flex flex-col lg:pt-16 lg:ml-40 -center">
            <h1 className="font-bold text-3xl lg:text-5xl text-start lg:text-end">TÉLÉPHONE CASSÉ ?</h1>
            <p className="text-xl lg:text-3xl text-start lg:text-end leading-5 font-light lg:py-12 pt-2 lg:pt-0">On se déplace chez vous <br className="lg:hidden" />pour <br className="hidden lg:flex"/> le réparer en toute <br className="lg:hidden" />tranquilité</p>
            <a href="/devices" className=" self-center lg:self-end">
              <button className="w-32 lg:w-56 rounded-sm bg-white h-8 lg:h-12 mt-8 lg:mt-4 font-medium text-blue-600 text-lg lg:text-2xl hover:bg-blue-600 hover:border hover:border-white hover:text-white active:bg-blue-600 active:border active:border-white active:text-white">
                Réserver
              </button>
            </a>
          </div>
        </div>
        {/* <div className="w-full bg-white bg-opacity-45 h-[26rem] rounded-md mt-24 self-center flex flex-col lg:hidden px-8">
          <Image src={rp} alt="reparation smartphone" className="w-full h-fit pt-8 self-center"/>
          <h1 className="self-center py-4">Réparation Smartphone</h1>
          <p className="text-xs">Vous avez un problème avec votre smartphone ? Pas de panique ! Drive Phone vous propose un service de réparation de smartphones à domicile, sur Lyon et ses alentours. <br />Profitez de notre expertise pour redonner vie à votre appareil, dans le confort de votre maison. </p>
        </div> */}
        <div className="rounded-t-full bg-white w-16 h-8 self-center lg:absolute lg:bottom-0 mt-28 flex align-middle">
          <Image src={arrowD} alt="" className="m-auto pt-1"/>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="scroller-section text-black bg-[url('../img/bg2.png')] h-[100dvh] bg-[auto_120dvw] w-screen bg-no-repeat bg-center lg:bg-cover flex flex-col relative overflow-hidden relative">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      <section className="scroller-section no-scrollbar text-black bg-[url('../img/bg2.png')] h-[100dvh] bg-[auto_120dvw] w-screen bg-no-repeat bg-center lg:bg-cover flex flex-col relative overflow-hidden relative">
>>>>>>> parent of d78b726 (mode maintenance)
=======
      <section className="scroller-section no-scrollbar text-black bg-[url('../img/bg2.png')] h-[100dvh] bg-[auto_120dvw] w-screen bg-no-repeat bg-center lg:bg-cover flex flex-col relative overflow-hidden relative">
>>>>>>> parent of d78b726 (mode maintenance)
        <h2 className="mt-36 lg:mt-24 2xl:mt-36 text-center text-3xl lg:text-4xl font-bold text-black left-0 right-0 px-5 lg:px-auto ">Comment ça marche?</h2>
=======
        <h2 className="mt-36 text-center text-3xl lg:text-4xl font-bold text-black left-0 right-0 px-5 lg:px-auto ">Comment ça marche?</h2>
>>>>>>> parent of 463d6d8 (also landing)
=======
        <h2 className="mt-36 text-center text-3xl lg:text-4xl font-bold text-black left-0 right-0 px-5 lg:px-auto ">Comment ça marche?</h2>
>>>>>>> parent of 463d6d8 (also landing)
=======
        <h2 className="mt-36 text-center text-3xl lg:text-4xl font-bold text-black left-0 right-0 px-5 lg:px-auto ">Comment ça marche?</h2>
>>>>>>> parent of 463d6d8 (also landing)
        <div className="mt-auto flex flex-col lg:flex-row p-5 lg:px-24 overflow-x-scroll no-scrollbar gap-y-4 ">
          <div className="w-[90vw] lg:w-[20vw] lg:left-[10vw] flex flex-row lg:absolute bottom-[55dvh] top-[40dvh] lg:flex-col">
            <p className="text-3xl font-bold mr-2 lg:mr-0 ">1</p>
            <div>
              <p className="font-semibold ">Selectionnez votre Smartphone</p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, ipsa </p>
            </div>
=======
      <section className="scroller-section min-h-screen bg-white overflow-hidden relative">
        <div className="flex flex-col lg:flex-row content-center pt-16 bg-[url('../img/background.jpg')] bg-cover">
          <div className="h-[35vh]">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
>>>>>>> parent of ef8cb41 (refonte landing)
          </div>
          <div className="">
            <h3 className="text-white text-center text-lg font-semibold mt-12 px-2">On se déplace dans Lyon et ses alentours <br />7/7J de 9h a 23h </h3>
            <iframe width="100%" height="100%" className="h-[45vh] rounded-lg self-center w-[100vw] pt-7 pb-0 lg:p-10" allow="geolocation" src="https://umap.openstreetmap.fr/fr/map/anonymous-edit/1171317:wrscz99JdcaVebC1gWbtPnIShETvFWJswQqtx-Gv34E?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&editMode=disabled&moreControl=false&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=false&onLoadPanel=none&captionBar=false&captionMenus=false&fullscreenControl=false&captionControl=false"></iframe>
          </div>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <h2 className="text-center text-black text-3xl font-semibold mt-16 lg:mt-24">Séléctionner mon Smartphone</h2>
<<<<<<< HEAD
<<<<<<< HEAD
      <section className=" min-h-screen bg-white overflow-x-scroll">
=======
      <section className="h-fit bg-white overflow-x-scroll">
>>>>>>> parent of d78b726 (mode maintenance)
=======
      <section className="h-fit bg-white overflow-x-scroll">
>>>>>>> parent of d78b726 (mode maintenance)
        <div className="flex flex-row w-fit h-fit overflow-x-scroll gap-10 mt-6 lg:mt-8 px-24">
          {data.filter((device: any) => (device.id.includes(basic[0]) || device.id.includes(basic[1]) || device.id.includes(basic[2]) || device.id.includes(basic[3]) || device.id.includes(basic[4]) || device.id.includes(basic[5]))).map((device: any) => (
            <a className="text-black justify-center flex w-[20dvw] flex-col p-8" href={`/pieces/${device.id}`}>
                <img src={device.img} alt={device.name} className="lg:w-56 lg:mx-auto"/>
                <h2 className="text-center pt-5">{device.name}</h2>
            </a>
          ))}
<<<<<<< HEAD
<<<<<<< HEAD
          <a href="" className="my-auto text-black text-lg">
=======
          <a href="/devices" className="my-auto text-black text-lg">
>>>>>>> parent of d78b726 (mode maintenance)
=======
          <a href="/devices" className="my-auto text-black text-lg">
>>>>>>> parent of d78b726 (mode maintenance)
            <button className="flex flex-row items-center">Voir tous les smartphones<ArrowRight className="ml-0 w-6"/></button>
          </a>
=======
      <section className="scroller-section min-h-screen bg-white overflow-hidden">
        <div className="px-5">
          <div className="w-full mt-16 lg:mt-20 h-16 border-y border-y-blue-600 flex flex-row justify-between py-2">
            <div className="content-center h-full w-full">
              <p className="text-blue-600 text-center font-semibold leading-4 text-sm">5 ans <br /> d’experience</p>
            </div>
            <div className="content-center h-full border-x border-x-blue-600 px-4 w-full">
              <p className="text-blue-600 text-center font-semibold leading-4 text-sm">+13 000 <br />réparations</p>
            </div>
            <div className="content-center h-full w-full">
              <Image src={star} alt="star" className="w-4 lg:w-6 h-fit mx-auto"/>
              <p className="text-blue-600 text-center font-semibold leading-4 pt-0 text-sm lg:text-lg">4.9/5</p>
            </div>
          </div>
        </div>
        <div className="bg-[url('../img/Rectangle_40.png')] lg:bg-[url('../img/Rectangle_80.png')] bg-no-repeat  h-full px-5 lg:px-64">
          <p className="pt-20 leading-5 lg:hidden">Avis des <br />précédents clients </p>
          <p className="hidden lg:block text-blue-600 text-2xl text-center mt-6 pt-10">Avis des précédents clients</p>
          <div className="hidden xl:block xl:px-64">
            <Carousel_testimonials
              cards={cards}
              height="550px"
              width="100%"
              margin="0 auto"
              offset={200}
              showArrows={false}
            />
          </div>
          <div className="hidden lg:block xl:hidden">
            <Carousel_testimonials
              cards={cards}
              height="300px"
              width="100%"
              margin="0 auto"
              offset={200}
              showArrows={false}
            />
          </div>
          <div className="lg:hidden block">
            <Carousel_testimonials
              cards={cards}
              height="300px"
              width="100%"
              margin="0 auto"
              offset={200}
              showArrows={false}
            />
          </div>
          <p className="pt-16  lg:pt-8 leading-5 text-blue-600 lg:text-center lg:text-2xl">Suivez-nous <br className="lg:hidden"/>sur les réseaux sociaux</p>
          <div className="flex flex-row justify-between h-full content-center pt-8  lg:pt-16">
            <a href="https://www.instagram.com/drv.phone/?utm_source=ig_web_button_share_sheet" className="text-blue-600 text-sm w-full flex flex-col text-center">
              <Image src={insta} alt="" width={40} className="self-center pb-2"/>
              @drv.phone
            </a>
=======
      <section className="scroller-section min-h-screen bg-white overflow-hidden">
        <div className="px-5">
          <div className="w-full mt-16 lg:mt-20 h-16 border-y border-y-blue-600 flex flex-row justify-between py-2">
            <div className="content-center h-full w-full">
              <p className="text-blue-600 text-center font-semibold leading-4 text-sm">5 ans <br /> d’experience</p>
            </div>
            <div className="content-center h-full border-x border-x-blue-600 px-4 w-full">
              <p className="text-blue-600 text-center font-semibold leading-4 text-sm">+13 000 <br />réparations</p>
            </div>
            <div className="content-center h-full w-full">
              <Image src={star} alt="star" className="w-4 lg:w-6 h-fit mx-auto"/>
              <p className="text-blue-600 text-center font-semibold leading-4 pt-0 text-sm lg:text-lg">4.9/5</p>
            </div>
          </div>
        </div>
        <div className="bg-[url('../img/Rectangle_40.png')] lg:bg-[url('../img/Rectangle_80.png')] bg-no-repeat  h-full px-5 lg:px-64">
          <p className="pt-20 leading-5 lg:hidden">Avis des <br />précédents clients </p>
          <p className="hidden lg:block text-blue-600 text-2xl text-center mt-6 pt-10">Avis des précédents clients</p>
          <div className="hidden xl:block xl:px-64">
            <Carousel_testimonials
              cards={cards}
              height="550px"
              width="100%"
              margin="0 auto"
              offset={200}
              showArrows={false}
            />
          </div>
          <div className="hidden lg:block xl:hidden">
            <Carousel_testimonials
              cards={cards}
              height="300px"
              width="100%"
              margin="0 auto"
              offset={200}
              showArrows={false}
            />
          </div>
          <div className="lg:hidden block">
            <Carousel_testimonials
              cards={cards}
              height="300px"
              width="100%"
              margin="0 auto"
              offset={200}
              showArrows={false}
            />
          </div>
          <p className="pt-16  lg:pt-8 leading-5 text-blue-600 lg:text-center lg:text-2xl">Suivez-nous <br className="lg:hidden"/>sur les réseaux sociaux</p>
          <div className="flex flex-row justify-between h-full content-center pt-8  lg:pt-16">
            <a href="https://www.instagram.com/drv.phone/?utm_source=ig_web_button_share_sheet" className="text-blue-600 text-sm w-full flex flex-col text-center">
              <Image src={insta} alt="" width={40} className="self-center pb-2"/>
              @drv.phone
            </a>
>>>>>>> parent of 463d6d8 (also landing)
=======
      <section className="scroller-section min-h-screen bg-white overflow-hidden">
        <div className="px-5">
          <div className="w-full mt-16 lg:mt-20 h-16 border-y border-y-blue-600 flex flex-row justify-between py-2">
            <div className="content-center h-full w-full">
              <p className="text-blue-600 text-center font-semibold leading-4 text-sm">5 ans <br /> d’experience</p>
            </div>
            <div className="content-center h-full border-x border-x-blue-600 px-4 w-full">
              <p className="text-blue-600 text-center font-semibold leading-4 text-sm">+13 000 <br />réparations</p>
            </div>
            <div className="content-center h-full w-full">
              <Image src={star} alt="star" className="w-4 lg:w-6 h-fit mx-auto"/>
              <p className="text-blue-600 text-center font-semibold leading-4 pt-0 text-sm lg:text-lg">4.9/5</p>
            </div>
          </div>
        </div>
        <div className="bg-[url('../img/Rectangle_40.png')] lg:bg-[url('../img/Rectangle_80.png')] bg-no-repeat  h-full px-5 lg:px-64">
          <p className="pt-20 leading-5 lg:hidden">Avis des <br />précédents clients </p>
          <p className="hidden lg:block text-blue-600 text-2xl text-center mt-6 pt-10">Avis des précédents clients</p>
          <div className="hidden xl:block xl:px-64">
            <Carousel_testimonials
              cards={cards}
              height="550px"
              width="100%"
              margin="0 auto"
              offset={200}
              showArrows={false}
            />
          </div>
          <div className="hidden lg:block xl:hidden">
            <Carousel_testimonials
              cards={cards}
              height="300px"
              width="100%"
              margin="0 auto"
              offset={200}
              showArrows={false}
            />
          </div>
          <div className="lg:hidden block">
            <Carousel_testimonials
              cards={cards}
              height="300px"
              width="100%"
              margin="0 auto"
              offset={200}
              showArrows={false}
            />
          </div>
          <p className="pt-16  lg:pt-8 leading-5 text-blue-600 lg:text-center lg:text-2xl">Suivez-nous <br className="lg:hidden"/>sur les réseaux sociaux</p>
          <div className="flex flex-row justify-between h-full content-center pt-8  lg:pt-16">
            <a href="https://www.instagram.com/drv.phone/?utm_source=ig_web_button_share_sheet" className="text-blue-600 text-sm w-full flex flex-col text-center">
              <Image src={insta} alt="" width={40} className="self-center pb-2"/>
              @drv.phone
            </a>
>>>>>>> parent of 463d6d8 (also landing)
            <a href="https://www.snapchat.com/add/drive_phone?share_id=uZMlzMXlkFI&locale=fr-FR" className="text-blue-600 text-sm w-full flex flex-col text-center">
              <Image src={snap} alt="" width={40} className="self-center pb-2"/>
              @drive_phone
            </a>
            <a href="https://www.tiktok.com/@drive.phone7?is_from_webapp=1&sender_device=pc" className="text-blue-600 text-sm w-full flex flex-col text-center">
              <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAERUlEQVR4nO2aTYgcRRTH26zGGDXqyUyMGTNdb3ZNNB48KIqo54gfyCQBJbvzqm1QEBET8Qv24Aeo5CIBESSIHjzoyYsQiOA3mE1y0IjZIBtW4+6817NRN3GjJml53VUznXEnOxPH7W6YPzRDdVdXvV/Xx3tVNY7TV199nZeUR/copD1K83HQHKZ5KeRZsQWQNnYHgfxS2sZDOyjNL3bcEtFLyCcBeduQTwUnZQ35VBBbIpsi2zpoGdD0iQHZ5mRMSvPTcVejPQtnRp6VzMXh2konYyoO11bG3Yt+XzCz7YtORgWd2vd/gADS7n8NXOQvndFwSc5A+MR8M5Dr1dfnC0TzH1JmwT+6XNIK6RVTz1O5bJGCASnr6Q2g6Qxomtzw8NSluW0RESB/YBzc+92MFcgCyOrK5CX23lo9fbXSdMQ4uI8GkVflAWQu9k0Ty5L3SyMEoHnctMxxQHoPPPbdkfq1uQIRDSJfrjS9bh0xxFA/ZnWwRzGSenz84jhNuxXyZwJh86iHghVlTZuNjzmRD5CmU/x43WO1y2y+gn90eaZBlKY/pcx1lXBpsg6z1jiksPbgnaPhhamDlPyZNUrzM0rzp0rTz8bwDxcCUcgHmlB0DJC+TgVEplOleUdjndByNUCQ/pL0zX54UbIOSSukJ5TmibMXT3Rk0UAkpFZI35iveUb6O1SDrVCt3TQPyN+Slu7Trg6Ju8rI9yskdHVNLQpI1JeRx8xUOQEe3XGuMjoB6VTQSxCFtNP05cN2ASZGAtIWhfROaxmg6VSUroQDmQEpjRBIn5evPDgyfaPcE08Mmve3jJGpTIOo5g7L25KOp0w62JxKCaEa3JJcKgPS6ahMExxmBeSAPHeR747Smp40A/5gMro9u0wJ2aXM8IIsgczKc7uOEN8RgVVpU/syMwZSHJ5YZp7PJfKPn3PZOhouiScGOh2lK+GAacFTqYGI7BZqc9nKX0TvVIMHnHlUwvoNxvDJxmZbPJ5+cdIEAU3fyvOyrt0epZGeM1PxmPXcDVXCgWjPNgZ50+TfaPzP5+mCIL1qDHlD0iV/5gpA+smEFntd5HtBB9e7Ht9nPb9CqisvWG0+xLtxHcGzqYK4Xn298QtzZW9qrdwTf2Jh5rmmlBfc2sgn7yKfvA5niqmCiAB5l8m3z85epmVeAE1fyQovHjv0/JpHf71KnheHj12pNP1gWnOHc56CXoKI0QrpewtjW6adyj4PNfIjjyU3IboV9Dr6FeMTMHMyZtxHardZI+XX1XyXQn7LhvESxnS6W7JoIM3uxLtsCGKv1lMuE5vtbOf5UwdJ+gql6TVA+s7uYckqT8IZpfllCTSdHgkWc83e7TZoN4JO7ZNDFMmYhSO3VsHW4BrjXH9zFlLDEyNvd/J89AYmhDCHodv/6yzTCw0ir4ogujkMFckRcBsvnZ/jaSuhjv4wkNiTzd0fBvrqqy/H6h/Z+wojRao/LgAAAABJRU5ErkJggg==" alt="" width={40} height={40} className="self-center pb-2"/>
              @drive.phone7
            </a>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> parent of 463d6d8 (also landing)
=======
>>>>>>> parent of 463d6d8 (also landing)
=======
>>>>>>> parent of 463d6d8 (also landing)
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> parent of d78b726 (mode maintenance)
      <section className=" text-black bg-[url('../img/bg3.png')] h-[65dvh]  w-screen bg-no-repeat bg-bottom lg:bg-cover flex flex-col relative">
          <h2 className="text-center text-3xl font-semibold mt-24">Services professionnels recommandés par nos clients</h2>
          <div className="w-1/2 grid grid-cols-2 pl-[25vw] pr-[5vw] content-center gap-y-10 text-3xl 2xl:text-4xl font-bold my-auto ">
            <div>
              <p className="">6,981+</p>
              <p className="text-base">Clients satisfaits</p>
            </div>
            <div>
              <p className="">867+</p>
              <p className="text-base">Avis</p>
            </div>
            <div>
              <p className="">9,128+</p>
              <p className="text-base"></p>
            </div>
            <div>
              <p className="">8,412+</p>
              <p className="text-base"></p>
            </div>
          </div>
      </section>
      <section className="scroller-section h-[60vh] bg-blue-600 overflow-hidden content-center w-full ">
        
<<<<<<< HEAD
>>>>>>> parent of d78b726 (mode maintenance)
=======
>>>>>>> parent of d78b726 (mode maintenance)
      </section>
      <section className="scroller-section">
        <Footer/>
      </section>
    </main>
  );
}
