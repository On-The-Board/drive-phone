import magnifier from "@/icons/magnifier.svg";
import circle_cross from "@/icons/circle_cross.svg";
import Image from "next/image";

interface SearchbarProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  callback?: Function;
  placeholder?: string;
}

export default function Searchbar(props: SearchbarProps) {
  return (
    <div className="relative h-12 lg:h-16 lg:mx-auto lg:w-[60vw] lg:mt-12">
      <input
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        placeholder={props.placeholder}
        className="h-full w-full lg:max-w-[60vw] rounded-full bg-white border-2 shadow-md text-black p-5 pr-12 outline-none"
      />
      <Image
        src={props.value ? circle_cross : magnifier}
        alt="Search button"
        className={`absolute right-1 h-12 w-12 top-0 lg:top-[15%] p-4 ${props.value ? "" : "pointer-events-none"}`}
        onClick={props.value ? () => props.setValue("") : () => {}}
      />
    </div>
  );
}
