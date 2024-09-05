import Image from "next/image";
import bp from "@/img/brokenPhone.png"
import rp from "@/img/Reparateur.png"

export default function Home() {
  return (
    <main>
      <div className="px-5 z-10 bg-[url('../img/background.jpg')] h-screen bg-cover flex flex-col">
        <div className="w-full flex flex-row mt-16">
          <Image src={bp} alt="tel cassé" className="w-56 absolute" />
          <div className="flex flex-col pt-16 ml-40">
            <h1 className="font-bold text-lg text-end">TÉLÉPHONE CASSÉ ?</h1>
            <p className="text-sm text-end leading-5 font-light">On se déplace chez vous <br />pour le réparer en toute <br />tranquilité</p>
            <a href="/rdv" className="self-end">
              <button className="w-20 rounded-sm bg-white h-6 mt-4 text-blue-600 text-xs hover:bg-blue-600 hover:border hover:border-white hover:text-white active:bg-blue-600 active:border active:border-white active:text-white">
                Réserver
              </button>
            </a>
          </div>
        </div>
        <div className="w-full bg-white bg-opacity-45 h-[26rem] rounded-md mt-24 self-center flex flex-col px-8">
          <Image src={rp} alt="reparation smartphone" className="w-full h-fit pt-8 self-center"/>
          <h1 className="self-center py-4">Réparation Smartphone</h1>
          <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsum expedita omnis optio molestiae laboriosam mollitia ea, eligendi excepturi amet, repellat sed natus in neque vero vitae, disti...</p>
        </div>
        <div className="rounded-t-full bg-white w-16 h-8 self-center mt-12">
          {/* flèche vers le bas */}
        </div>
      </div>
      <div className="h-screen bg-white overflow-hidden">
        <div className="px-5">
          <div className="w-full mt-16 h-16 border-y border-y-blue-600 flex flex-row justify-between py-2">
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
        <div className="bg-[url('../img/Rectangle_40.png')] bg-no-repeat bg-contain h-full px-5">
          <p className="pt-14 leading-5">Lisez <br />les avis des <br />précédents clients </p>
        </div>
      </div>
    </main>
  );
}
