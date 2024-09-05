import hamburger from "@/icons/hamburger.svg";
import backward from "@/icons/backward.svg";
import Image from "next/image";

interface NavbarProps {
  href?: string;
}

function Backward(props: NavbarProps) {
  if (props.href)
    return (
      <a href={props.href}>
        <Image alt="Go back" src={backward} className="h-6 w-6" />
      </a>
    );
  return <div className="h-6 w-6"></div>;
}
export default function Navbar(props: NavbarProps) {
  return (
    <nav className="p-2 h-12 w-full bg-white flex justify-between overflow-hidden items-center fixed top-0 z-30">
      {Backward(props)}
      <a href="/" className="uppercase font-extrabold text-xl text-blue-600">
        Drive Phone
      </a>
      <Image src={hamburger} alt="Hamburger Menu" className="h-6 w-6" />
    </nav>
  );
}
