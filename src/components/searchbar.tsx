import magnifier from "@/icons/magnifier.svg";
import circle_cross from "@/icons/circle_cross.svg";
import Image from "next/image";

interface SearchbarProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  callback?: Function;
}

export default function Searchbar(props: SearchbarProps) {
  return (
    <div className="relative h-12">
      <input
        value={props.value}
        onChange={(e) => props.setValue(e.target.value)}
        className="h-full w-full rounded-full bg-white border-2 shadow-xl text-black p-5 pr-12"
      />
      <Image
        src={props.value ? circle_cross : magnifier}
        alt="Search button"
        className={`absolute right-1 h-12 w-12 top-0 p-4 ${props.value ? "" : "pointer-events-none"}`}
        onClick={props.value ? () => props.setValue("") : () => {}}
      />
    </div>
  );
}
