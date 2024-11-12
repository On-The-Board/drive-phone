import Image from "next/image"
import logo from"@/app/favicon.ico"
import insta from "@/icons/instagram.png"
import snap from "@/icons/snapchat.png"

export default function Footer() {
    return(
        <footer className="footer bg-white text-blue-600 p-10">
            <aside>
            <Image src={logo} alt="" width={80} height={80}/>
            <p className="font-semibold">
                Drive Phone
                <br />
                Réparation de Smartphones à domicile
            </p>
            </aside>
            <nav className="flex flex-row lg:flex-col w-full justify-between lg: items-center">
            <div className="">
                    <h6 className="footer-title pt-2">Réseaux</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <Image src={insta} alt="" className="w-6 p-0.5"/>
                        </a>
                        <a>
                            <Image src={snap} alt="" className="w-6 p-0.5"/>
                        </a>
                        <a>
                            <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAERUlEQVR4nO2aTYgcRRTH26zGGDXqyUyMGTNdb3ZNNB48KIqo54gfyCQBJbvzqm1QEBET8Qv24Aeo5CIBESSIHjzoyYsQiOA3mE1y0IjZIBtW4+6817NRN3GjJml53VUznXEnOxPH7W6YPzRDdVdXvV/Xx3tVNY7TV199nZeUR/copD1K83HQHKZ5KeRZsQWQNnYHgfxS2sZDOyjNL3bcEtFLyCcBeduQTwUnZQ35VBBbIpsi2zpoGdD0iQHZ5mRMSvPTcVejPQtnRp6VzMXh2konYyoO11bG3Yt+XzCz7YtORgWd2vd/gADS7n8NXOQvndFwSc5A+MR8M5Dr1dfnC0TzH1JmwT+6XNIK6RVTz1O5bJGCASnr6Q2g6Qxomtzw8NSluW0RESB/YBzc+92MFcgCyOrK5CX23lo9fbXSdMQ4uI8GkVflAWQu9k0Ty5L3SyMEoHnctMxxQHoPPPbdkfq1uQIRDSJfrjS9bh0xxFA/ZnWwRzGSenz84jhNuxXyZwJh86iHghVlTZuNjzmRD5CmU/x43WO1y2y+gn90eaZBlKY/pcx1lXBpsg6z1jiksPbgnaPhhamDlPyZNUrzM0rzp0rTz8bwDxcCUcgHmlB0DJC+TgVEplOleUdjndByNUCQ/pL0zX54UbIOSSukJ5TmibMXT3Rk0UAkpFZI35iveUb6O1SDrVCt3TQPyN+Slu7Trg6Ju8rI9yskdHVNLQpI1JeRx8xUOQEe3XGuMjoB6VTQSxCFtNP05cN2ASZGAtIWhfROaxmg6VSUroQDmQEpjRBIn5evPDgyfaPcE08Mmve3jJGpTIOo5g7L25KOp0w62JxKCaEa3JJcKgPS6ahMExxmBeSAPHeR747Smp40A/5gMro9u0wJ2aXM8IIsgczKc7uOEN8RgVVpU/syMwZSHJ5YZp7PJfKPn3PZOhouiScGOh2lK+GAacFTqYGI7BZqc9nKX0TvVIMHnHlUwvoNxvDJxmZbPJ5+cdIEAU3fyvOyrt0epZGeM1PxmPXcDVXCgWjPNgZ50+TfaPzP5+mCIL1qDHlD0iV/5gpA+smEFntd5HtBB9e7Ht9nPb9CqisvWG0+xLtxHcGzqYK4Xn298QtzZW9qrdwTf2Jh5rmmlBfc2sgn7yKfvA5niqmCiAB5l8m3z85epmVeAE1fyQovHjv0/JpHf71KnheHj12pNP1gWnOHc56CXoKI0QrpewtjW6adyj4PNfIjjyU3IboV9Dr6FeMTMHMyZtxHardZI+XX1XyXQn7LhvESxnS6W7JoIM3uxLtsCGKv1lMuE5vtbOf5UwdJ+gql6TVA+s7uYckqT8IZpfllCTSdHgkWc83e7TZoN4JO7ZNDFMmYhSO3VsHW4BrjXH9zFlLDEyNvd/J89AYmhDCHodv/6yzTCw0ir4ogujkMFckRcBsvnZ/jaSuhjv4wkNiTzd0fBvrqqy/H6h/Z+wojRao/LgAAAABJRU5ErkJggg==" width={800} height={800} alt="" className="w-6"/>
                        </a>
                    </div>
                </div>
                <div>
                    <h6 className="footer-title">Contact</h6>
                    <a href="tel:0761707524" className="font-semibold">07 61 70 75 24</a>
                </div>               
            </nav>
        </footer>
    )
}