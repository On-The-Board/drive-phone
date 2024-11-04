import Navbar from "@/components/navbar/navbar";
import { Pieces } from "@/components/Pieces";


export default function PiecesParams(){
    return(
        <>
            <Navbar back={true}/>
            <Pieces/>
        </>
    )
}