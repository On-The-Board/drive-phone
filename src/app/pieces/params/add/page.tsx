import Navbar from "@/components/navbar/navbar";
import ImageUploader from "@/components/ImageUploaderPieces/ImageUploader"


export default function Add(){
    return(
        <>
            <Navbar back={true}/>
            <ImageUploader/>
        </>
    )
}