import { PrismaClient } from "@prisma/client";
import {v4 as uuidv4} from "uuid"

const prisma = new PrismaClient();

async function main() {
    const delet = await prisma.piece.createMany({
        data:
            [
                {id: uuidv4(), category: "Face avant", name: "Ecran", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Face avant", name: "Caméra avant", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Face avant", name: "Capteur Face ID", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Face arrière", name: "Vitre arrière", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Face arrière", name: "Caméra", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Face arrière", name: "Flash", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Contour", name: "Nettoyage Port Lightning", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Contour", name: "Boutons Volume", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Contour", name: "Boutons Marche/Arret", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Contour", name: "Micro", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Intérieur", name: "CPU (Processeur)", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Intérieur", name: "Batterie", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Intérieur", name: "Carte Mère", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Intérieur", name: "Capteur GPS", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
                // { id: 'zte-phones-62', name: 'ZTE', devices: 384 }
            ]
    })
    return(delet)
}

main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit();
    });
