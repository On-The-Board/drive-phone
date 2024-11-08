import * as React from "react"

import Image from "next/image";
import bp from "@/img/brokenPhone.png"
import rp from "@/img/Reparateur.png"
import random from "@/img/random.jpg"
import insta from "@/icons/instagram.png"
import snap from "@/icons/snapchat.png"
import fb from "@/icons/facebook.png"
import arrowD from "@/icons/arrow_down.svg"


import { v4 as uuidv4 } from "uuid";
import Carousel_testimonials from "../components/carousel_testimonials";
import Card_testimonials from "../components/card";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";


export default function Home() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card_testimonials img={random} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eaque qui laboriosam" name="John Doe"/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card_testimonials img={random}  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eaque qui laboriosam" name="John Doe"/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card_testimonials img={random}  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eaque qui laboriosam" name="John Doe"/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card_testimonials img={random}  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eaque qui laboriosam" name="John Doe"/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card_testimonials img={random}  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eaque qui laboriosam" name="John Doe"/>
      )
    }
  ];
  return (
    <main className="text-white">
      <Navbar/>
      <section className="px-5 z-10 bg-[url('../img/background.jpg')] h-screen bg-cover flex flex-col">
        <div className="w-full lg:w-fit lg:mx-auto lg:h-full flex flex-row mt-16 lg:items-center">
          <Image src={bp} alt="tel cassé" className="w-56 lg:w-fit lg:h-[70vh] lg:mt-24 absolute lg:relative" />
          <div className="flex flex-col pt-16 ml-40 -center">
            <h1 className="font-bold text-lg lg:text-5xl text-end">TÉLÉPHONE CASSÉ ?</h1>
            <p className="text-sm lg:text-3xl text-end leading-5 font-light lg:py-12">On se déplace chez vous <br className="lg:hidden" />pour <br className="hidden lg:flex"/> le réparer en toute <br className="lg:hidden" />tranquilité</p>
            <a href="/devices" className="self-end">
              <button className="w-20 lg:w-56 rounded-sm bg-white h-6 lg:h-12 mt-4 text-blue-600 text-xs lg:text-2xl hover:bg-blue-600 hover:border hover:border-white hover:text-white active:bg-blue-600 active:border active:border-white active:text-white">
                Réserver
              </button>
            </a>
          </div>
        </div>
        <div className="w-full bg-white bg-opacity-45 h-[26rem] rounded-md mt-24 self-center flex flex-col lg:hidden px-8">
          <Image src={rp} alt="reparation smartphone" className="w-full h-fit pt-8 self-center"/>
          <h1 className="self-center py-4">Réparation Smartphone</h1>
          <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsum expedita omnis optio molestiae laboriosam mollitia ea, eligendi excepturi amet, repellat sed natus in neque vero vitae, disti...</p>
        </div>
        <div className="rounded-t-full bg-white w-16 h-8 self-center mt-12 flex align-middle">
          <Image src={arrowD} alt="" className="m-auto pt-1"/>
        </div>
      </section>
      <section className="h-screen bg-white overflow-hidden">
        <div className="px-5">
          <div className="w-full mt-16 lg:mt-20 h-16 border-y border-y-blue-600 flex flex-row justify-between py-2">
            <div className="content-center h-full w-full">
              <p className="text-blue-600 text-center font-semibold leading-4 text-sm">5 ans <br /> d’experience</p>
            </div>
            <div className="content-center h-full border-x border-x-blue-600 px-4 w-full">
              <p className="text-blue-600 text-center font-semibold leading-4 text-sm">+13 000 <br />réparations</p>
            </div>
            <div className="content-center h-full w-full">
              <p className="text-blue-600 text-center font-semibold leading-4 text-sm">5 ans <br /> d’experience</p>
            </div>
          </div>
        </div>
        <div className="bg-[url('../img/Rectangle_40.png')] lg:bg-[url('../img/Rectangle_80.png')] bg-no-repeat  h-full px-5 lg:px-64">
          <p className="pt-14 leading-5 lg:hidden">Lisez <br />les avis des <br />précédents clients </p>
          <p className="hidden lg:block text-blue-600 text-2xl text-center mt-6 pt-10">Lisez les avis des précédents clients</p>
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
          <p className="pt-12  lg:pt-8 leading-5 text-blue-600 lg:text-center lg:text-2xl">Suivez-nous <br className="lg:hidden"/>sur les réseaux sociaux</p>
          <div className="flex flex-row justify-between pt-16">
            <a href="" className="text-blue-600 text-sm w-full flex flex-col text-center">
              <Image src={insta} alt="" width={40} className="self-center pb-2"/>
              @drv.phone
            </a>
            <a href="" className="text-blue-600 text-sm w-full flex flex-col text-center">
              <Image src={snap} alt="" width={40} className="self-center pb-2"/>
              @drive_phone
            </a>
            <a href="" className="text-blue-600 text-sm w-full flex flex-col text-center">
              <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAERUlEQVR4nO2aTYgcRRTH26zGGDXqyUyMGTNdb3ZNNB48KIqo54gfyCQBJbvzqm1QEBET8Qv24Aeo5CIBESSIHjzoyYsQiOA3mE1y0IjZIBtW4+6817NRN3GjJml53VUznXEnOxPH7W6YPzRDdVdXvV/Xx3tVNY7TV199nZeUR/copD1K83HQHKZ5KeRZsQWQNnYHgfxS2sZDOyjNL3bcEtFLyCcBeduQTwUnZQ35VBBbIpsi2zpoGdD0iQHZ5mRMSvPTcVejPQtnRp6VzMXh2konYyoO11bG3Yt+XzCz7YtORgWd2vd/gADS7n8NXOQvndFwSc5A+MR8M5Dr1dfnC0TzH1JmwT+6XNIK6RVTz1O5bJGCASnr6Q2g6Qxomtzw8NSluW0RESB/YBzc+92MFcgCyOrK5CX23lo9fbXSdMQ4uI8GkVflAWQu9k0Ty5L3SyMEoHnctMxxQHoPPPbdkfq1uQIRDSJfrjS9bh0xxFA/ZnWwRzGSenz84jhNuxXyZwJh86iHghVlTZuNjzmRD5CmU/x43WO1y2y+gn90eaZBlKY/pcx1lXBpsg6z1jiksPbgnaPhhamDlPyZNUrzM0rzp0rTz8bwDxcCUcgHmlB0DJC+TgVEplOleUdjndByNUCQ/pL0zX54UbIOSSukJ5TmibMXT3Rk0UAkpFZI35iveUb6O1SDrVCt3TQPyN+Slu7Trg6Ju8rI9yskdHVNLQpI1JeRx8xUOQEe3XGuMjoB6VTQSxCFtNP05cN2ASZGAtIWhfROaxmg6VSUroQDmQEpjRBIn5evPDgyfaPcE08Mmve3jJGpTIOo5g7L25KOp0w62JxKCaEa3JJcKgPS6ahMExxmBeSAPHeR747Smp40A/5gMro9u0wJ2aXM8IIsgczKc7uOEN8RgVVpU/syMwZSHJ5YZp7PJfKPn3PZOhouiScGOh2lK+GAacFTqYGI7BZqc9nKX0TvVIMHnHlUwvoNxvDJxmZbPJ5+cdIEAU3fyvOyrt0epZGeM1PxmPXcDVXCgWjPNgZ50+TfaPzP5+mCIL1qDHlD0iV/5gpA+smEFntd5HtBB9e7Ht9nPb9CqisvWG0+xLtxHcGzqYK4Xn298QtzZW9qrdwTf2Jh5rmmlBfc2sgn7yKfvA5niqmCiAB5l8m3z85epmVeAE1fyQovHjv0/JpHf71KnheHj12pNP1gWnOHc56CXoKI0QrpewtjW6adyj4PNfIjjyU3IboV9Dr6FeMTMHMyZtxHardZI+XX1XyXQn7LhvESxnS6W7JoIM3uxLtsCGKv1lMuE5vtbOf5UwdJ+gql6TVA+s7uYckqT8IZpfllCTSdHgkWc83e7TZoN4JO7ZNDFMmYhSO3VsHW4BrjXH9zFlLDEyNvd/J89AYmhDCHodv/6yzTCw0ir4ogujkMFckRcBsvnZ/jaSuhjv4wkNiTzd0fBvrqqy/H6h/Z+wojRao/LgAAAABJRU5ErkJggg==" alt="" width={40} height={40} className="self-center pb-2"/>
              @drive.phone7
            </a>
          </div>
        </div>
      </section>
      <section className="h-screen bg-blue-600 overflow-hidden content-center w-full ">
        <video
          id="my-video"
          className="video-js lg;pt-20 pt-12 px-2 lg:hidden"
          preload="auto"
          autoPlay
          loop
          controls
          width="100%"
        >
          <source src="https://firebasestorage.googleapis.com/v0/b/stagger-61882.appspot.com/o/Drive-Phone%2FVID-20241031-WA0000.mp4?alt=media&token=e646d258-d0b6-40fd-ac21-58dff948e385" type="video/mp4" />
          <track src="https://firebasestorage.googleapis.com/v0/b/stagger-61882.appspot.com/o/Drive-Phone%2FVID-20241031-WA0000.mp4?alt=media&token=e646d258-d0b6-40fd-ac21-58dff948e385" />
        </video>
        <video
          id="my-video"
          className="video-js lg;pt-20 pt-12 px-2 lg:block hidden self-center mx-auto"
          preload="auto"
          autoPlay
          loop
          controls
        >
          <source src="https://firebasestorage.googleapis.com/v0/b/stagger-61882.appspot.com/o/Drive-Phone%2FVID-20241031-WA0000.mp4?alt=media&token=e646d258-d0b6-40fd-ac21-58dff948e385" type="video/mp4" />
          <track src="https://firebasestorage.googleapis.com/v0/b/stagger-61882.appspot.com/o/Drive-Phone%2FVID-20241031-WA0000.mp4?alt=media&token=e646d258-d0b6-40fd-ac21-58dff948e385" />
        </video>
      </section>
      <Footer/>
    </main>
  );
}
