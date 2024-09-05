import Image from "next/image";
import bp from "@/img/brokenPhone.png"
import rp from "@/img/Reparateur.png"

export default function Home() {
  return (
    <main>
      <div className="px-5 z-10 bg-[url('../img/background.jpg')] h-screen bg-cover flex flex-col">
        <div className="w-full flex flex-row">
          <Image src={bp} alt="tel cassé" className="w-56 absolute" />
          <div className="flex flex-col pt-16 ml-40">
            <h1 className="font-bold text-lg text-end">TÉLÉPHONE CASSÉ ?</h1>
            <p className="text-sm text-end leading-5 font-light">On se déplace chez vous <br />pour le réparer en toute <br />tranquilité</p>
            <a href="/rdv" className="self-end">
              <button className="w-20 rounded-sm bg-white h-6 mt-4 text-blue-600 text-xs">
                Réserver
              </button>
            </a>
          </div>
        </div>
        <div className="w-72 bg-white bg-opacity-45 h-[21rem] rounded-md mt-16 mx-24 self-center flex flex-col">
          <Image src={rp} alt="reparation smartphone" className="w-52 h-fit pt-6 self-center"/>
          <h1 className="self-center py-3">Réparation Smartphone</h1>
          <p className="text-xs px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsum expedita omnis optio molestiae laboriosam mollitia ea, eligendi excepturi amet, repellat sed natus in neque vero vitae, disti...</p>
        </div>
      </div>
      <div className="h-screen bg-white">

      </div>
    </main>
  );
}
