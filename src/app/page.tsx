import Image from "next/image";
import bp from "@/img/brokenPhone.png"

export default function Home() {
  return (
    <main>
      <div className="px-5 z-10 bg-[url('../img/background.jpg')] h-screen bg-cover">
        <div className="w-full flex flex-row">
          <Image src={bp} alt="tel cassé" className="w-56 absolute" />
          <div className="flex flex-col pt-20 ml-40">
            <h1 className="font-bold text-lg">TÉLÉPHONE CASSÉ ?</h1>
            <p className="text-sm text-end leading-5 font-light">On se déplace chez vous <br />pour le réparer en toute <br />tranquilité</p>
            <button className="w-20 rounded-sm bg-white h-6 mt-4 self-end text-blue-600 text-xs">
              Réserver
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}
