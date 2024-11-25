import { PrismaClient } from "@prisma/client";
import gsmarena from "gsmarena-api"
import {v4 as uuidv4} from "uuid"
const prisma = new PrismaClient();
async function main() {
    // const delet = await prisma.piece.createMany({
    //     data:
    //         [
    //             {id: uuidv4(), category: "Face avant", name: "Ecran complet (Pulled)", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
    //             {id: uuidv4(), category: "Face avant", name: "Ecran complet (ReLife)", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
    //             {id: uuidv4(), category: "Face avant", name: "Ecran complet (Soft OLED)", price: 199.90, phoneIds: ["apple_iphone_15_pro-12557"]},
    //             {id: uuidv4(), category: "Face avant", name: "Ecran complet (LTPS)", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
    //             {id: uuidv4(), category: "Face avant", name: "Caméra avant (ReLife)", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
    //             {id: uuidv4(), category: "Face avant", name: "Adhésif Ecran (Boite de 50) Arrière (ReLife)", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
    //             {id: uuidv4(), category: "Face avant", name: "Adhésif Ecran", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
    //             {id: uuidv4(), category: "Face arrière", name: "Vitre arrière Complète Titane Noir (Avec MagSafe)", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
    //             {id: uuidv4(), category: "Face arrière", name: "Vitre arrière Complète Titane Blanc (Avec MagSafe)", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
    //             {id: uuidv4(), category: "Face arrière", name: "Vitre arrière Complète Titane Naturel (Avec MagSafe)", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
    //             {id: uuidv4(), category: "Face arrière", name: "Vitre arrière Complète Titane Bleu (Avec MagSafe)", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
    //             {id: uuidv4(), category: "Face arrière", name: "Caméra Arrière (ReLife)", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
    //             {id: uuidv4(), category: "Face arrière", name: "Adhésif Vitre Arrière Exterieur (Boite de 50)", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
    //             {id: uuidv4(), category: "Contour", name: "Connecteur de Charge Titane Blanc (ReLife)", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
    //             {id: uuidv4(), category: "Contour", name: "Connecteur de Charge Titane Noir (ReLife)", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
    //             {id: uuidv4(), category: "Contour", name: "Connecteur de Charge Titane Naturel (ReLife)", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
    //             {id: uuidv4(), category: "Contour", name: "Connecteur de Charge Titane Bleu (ReLife)", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
    //             {id: uuidv4(), category: "Contour", name: "Nappe Power/Volume", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
    //             {id: uuidv4(), category: "Contour", name: "Tiroir Sim Titane Naturel", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
    //             {id: uuidv4(), category: "Contour", name: "Tiroir Sim Titane Noir", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
    //             {id: uuidv4(), category: "Contour", name: "Tiroir Sim Titane Blanc", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
    //             {id: uuidv4(), category: "Contour", name: "Tiroir Sim Titane Bleu", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
    //             {id: uuidv4(), category: "Intérieur", name: "Adhésif Batterie (Boite de 20)", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
    //             {id: uuidv4(), category: "Intérieur", name: "Ecouteur Interne", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
    //             {id: uuidv4(), category: "Intérieur", name: "Set de Vis Complet", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
    //             {id: uuidv4(), category: "Intérieur", name: "Haut Parleur", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
    //             {id: uuidv4(), category: "Intérieur", name: "Lentille Caméra", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
    //             {id: uuidv4(), category: "Intérieur", name: "Vibreur", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]}, 
    //     ]
    // })
    const data = await gsmarena.catalog.getBrand('apple-phones-48')
    
    // Post Devices
    // {data.forEach(async (device) => {
    //     const res = await prisma.device.create({
    //         data: 
    //             {id: device.id, brand_id: 'xiaomi-phones-80', name: device.name, img: device.img, description: device.description },
    //         })
    //         return(res)
    // })}

    //Post Pieces
    // {data.forEach(async (device) => {
    //     const response = await prisma.piece.createMany({
    //         data: [
    //             {id: uuidv4(), category: "Face avant", name: "Ecran", price: 163.79, phoneIds: [device.id]},
    //             {id: uuidv4(), category: "Face arrière", name: "Vitre", price: 163.79, phoneIds: [device.id]},
    //             {id: uuidv4(), category: "Face arrière", name: "Camera", price: 163.79, phoneIds: [device.id]},
    //             {id: uuidv4(), category: "Contour", name: "Connecteur de Charge", price: 163.79, phoneIds: [device.id]},
    //             {id: uuidv4(), category: "Intérieur", name: "Batterie", price: 163.79, phoneIds: [device.id]},
    //         ]
    //     })
    // // Done: Apple, Samsung, Xiaomi, Huawei
    // return(response)
    // })}

    // Post Accessories
    {data.forEach(async (device) => {
        const response = await prisma.accesorie.createMany({
            data: [
                {id: uuidv4(),  name: "Coque", price: 163.79, phoneId: device.id, stock: 0, img: ""},
                {id: uuidv4(),  name: "Vitre Protection", price: 163.79, phoneId: device.id, stock: 0, img: ""},
                {id: uuidv4(),  name: "Chargeur", price: 163.79, phoneId: device.id, stock: 0, img: ""},
            ]
        })
    // Done: Apple, Samsung, Xiaomi, Huawei
    return(response)
    })}

    // {data.forEach(async (device) => {
    //     const response = await prisma.brand.create({
    //         data: {id: device.id, name: device.name, devices: device.devices}
    //     })
    //     return(response)
    // })}
    
    // const res = await prisma.device.createMany({
    //     data: {
    //         {data.forEach((device) => {
    //             {id: device.id, brand_id: 'xiaomi-phones-80', name: device.name, img: device.img, description: device.description }
    //         })}
    //     }
    // })

    //  Post Data
    // const res = await prisma.data.createMany({
    //     data: [
    //         {id: "deposit", name: "deposit", text: null, num: 25, decimal: null},
    //         {id: "workforce", name: "workforce", text: null, num: null, decimal: 50.0},
    //         {id: "min-delivery", name: "min-delivery", text: null, num: 20, decimal: null},


    //     ]
    // })
    // return(res)
}
main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit();
    });