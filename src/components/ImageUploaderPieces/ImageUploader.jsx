"use client"
import { useState, useEffect } from 'react';
import ShortUniqueId from 'short-unique-id';
import './ImageUploader.scss';






 function ImageUploader() {
    const [phoneId, setPhoneId] = useState([])
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const [selectedfile, SetSelectedFile] = useState([]);
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [devices, setDevices] = useState([])
    const getPieces = async () => {
        const res = await fetch("/api/devices").then((response) => response.json());

        setDevices(res)
    }
    useEffect(() => {
        getPieces()
    }, [])

    const uid = new ShortUniqueId({length: 10})

    const ImgDisplay = () => {
        return(
            selectedfile.map((data, index) => {
                const { id, filename, fileimage, } = data;
                return (
                    <div className="file-atc-box" key={id}>
                        {
                            filename.match(/.(jpg|jpeg|png)$/i) ?
                                <div className="file-image"> <img src={fileimage} alt="" /></div> :
                                <div className="file-image"><i className="far fa-file-alt"></i></div>
                        }
                        <div className="file-detail">
                            <div className="file-actions">
                                <button type="button" className="file-action-btn" onClick={() => DeleteSelectFile(id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }


    const filesizes = (bytes, decimals = 2) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    const InputChange = (e) => {
        // --For Multiple File Input
        console.log(e.target.files)
        let images = [];
        for (let i = 0; i < e.target.files.length; i++) {
            images.push((e.target.files[i]));
            let reader = new FileReader();
            let file = e.target.files[i];
            

            reader.onloadend = () => {
                SetSelectedFile((preValue) => {
                    return [
                        ...preValue,
                        {
                            id: uid.rnd(),
                            filename: e.target.files[i].name,
                            filetype: e.target.files[i].type,
                            fileimage: reader.result,
                            datetime: e.target.files[i].lastModifiedDate.toLocaleString('en-IN'),
                            filesize: filesizes(e.target.files[i].size)
                        }
                    ]
                });
                
            }
            if (e.target.files[i]) {
                reader.readAsDataURL(file);
            }
        }
    }


    const DeleteSelectFile = (id) => {
            const result = selectedfile.filter((data) => data.id !== id);
            SetSelectedFile(result);
            if (result.length == 0) {
                document.getElementById("insert").style.display = "flex"
                document.getElementById("firstImg").style.display = "none"
            }
    }
    let postimages = []
     for (let i = 0; selectedfile.length > i; i++) {
        postimages.push(selectedfile[i].fileimage)
     }

     const submitPost = async () => {

         let body = {
            id: ShortUniqueId,
             name: name,
             phoneIds: phoneId,
             img: postimages,
             price: price,
             stock: stock,
             category: description


         }
         try {
             await fetch(`/api/pieces/post/`, {
                 method: 'POST',
                 headers: { 'Content-type': 'application/json' },
                 body: JSON.stringify(body)
             })
         } catch (error) {
             console.error(error)
         }
     }

     
     if (selectedfile.length > 0) {
         document.getElementById("insert").style.display = "none"
         document.getElementById("firstImg").style.display = "flex"
        }
     
     
     

    return (

        
                    <div className="flex flex-col w-full max-h-screen mt-16 lg:mt-24 text-black">
                        <div className="card-body">
                            <div className="kb-data-box">
                                

                                    <div className="kb-modal-data-title">
                                        
                                    </div>

                                    <div className="kb-file-upload flex flex-col" id='insert'>
                                        <div className="flex flex-col file-upload-box mx-auto" >
                                            <input type="file" id="fileupload" className="file-upload-input" onChange={InputChange} multiple />
                                            <span>Déposez vos photos ici</span>
                                        </div>
                                    </div>
                                    <div className="kb-attach-box mb-3" id='firstImg'>
                                        <div className="file-upload-box" >
                                        <ImgDisplay/>
                                        </div>
                                    </div>
                                    
                                    <div className='grid grid-cols-2 gap-4'>
                                        <div className='flex flex-col'>
                                            <label htmlFor="">Nom</label>
                                            <input type='text' className='bg-white border-b border-b-black' onChange={(e) => setName(e.target.value)} required />
                                        </div>
                                        <div className='flex flex-col'>
                                            <label htmlFor="">Model</label>
                                            <select type='text' className='bg-white border-b border-b-black' onChange={(e) => setPhoneId([e.target.value])} required>
                                               {devices.map(d => (
                                                   <option value={d.id}>{d.name}</option>    

                                               ))}
                                            </select>
                                        </div>
                                        
                                        <div className='flex flex-col'>
                                            <label htmlFor="">Prix (€)</label>
                                            <input type='number' className='bg-white border-b border-b-black' onChange={(e) => setPrice(parseFloat(e.target.value))} required/>
                                        </div>
                                        <div className='flex flex-col'>
                                            <label htmlFor="">Stock</label>
                                            <input type='number' className='bg-white border-b border-b-black' onChange={(e) => setStock(parseInt(e.target.value))} required/>
                                        </div>
                                        <div className='flex flex-col col-span-2'>
                                            <label htmlFor="">Categorie</label>
                                            <input type='text' className='bg-white border-b border-b-black' onChange={(e) => setDescription(e.target.value)} required/>
                                        </div>
                                        
                                    </div>
                                    {/* <div className='submitButton'>
                                        <button type='submit' onClick={submitPost}>Publier</button>
                                    </div> */}
                                    <div className='w-full flex justify-center items-center pt-14 fixed bottom-[5vh] bg-white left-0'>
                                        <div className="text-blue-600 self-center align-middle flex text-lg font-semibold">
                                            <button onClick={submitPost}>
                                                Valider
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>


    );
}

export default ImageUploader;
