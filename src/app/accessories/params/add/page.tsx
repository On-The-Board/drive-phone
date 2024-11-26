import Navbar from "@/components/navbar/navbar";
import ImageUploader from "@/components/ImageUploader/ImageUploader"


export default function Add(){
    return(
        <>
            <Navbar back={true}/>
            <ImageUploader/>
        </>
    )
}