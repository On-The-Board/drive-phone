import { PrismaClient } from "@prisma/client";
import {v4 as uuidv4} from "uuid"

const prisma = new PrismaClient();

async function main() {
    const delet = await prisma.piece.createMany({
        data:
            [
        {id: uuidv4(), category: "Face avant", name: "Ecran complet (Pulled)", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Face avant", name: "Ecran complet (ReLife)", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Face avant", name: "Ecran complet (Soft OLED)", price: 199.90, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Face avant", name: "Ecran complet (LTPS)", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Face avant", name: "Caméra avant (ReLife)", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Face avant", name: "Adhésif Ecran (Boite de 50) Arrière (ReLife)", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Face avant", name: "Adhésif Ecran", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Face arrière", name: "Vitre arrière Complète Titane Noir (Avec MagSafe)", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Face arrière", name: "Vitre arrière Complète Titane Blanc (Avec MagSafe)", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Face arrière", name: "Vitre arrière Complète Titane Naturel (Avec MagSafe)", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Face arrière", name: "Vitre arrière Complète Titane Bleu (Avec MagSafe)", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Face arrière", name: "Caméra Arrière (ReLife)", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Face arrière", name: "Adhésif Vitre Arrière Exterieur (Boite de 50)", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},

        // {id: uuidv4(), category: "Face avant", name: "Capteur Face ID", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        // {id: uuidv4(), category: "Face arrière", name: "Flash", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        
        {id: uuidv4(), category: "Contour", name: "Connecteur de Charge Titane Blanc (ReLife)", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Contour", name: "Connecteur de Charge Titane Noir (ReLife)", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Contour", name: "Connecteur de Charge Titane Naturel (ReLife)", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Contour", name: "Connecteur de Charge Titane Bleu (ReLife)", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Contour", name: "Nappe Power/Volume", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},

        {id: uuidv4(), category: "Contour", name: "Tiroir Sim Titane Naturel", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Contour", name: "Tiroir Sim Titane Noir", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Contour", name: "Tiroir Sim Titane Blanc", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Contour", name: "Tiroir Sim Titane Bleu", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        // {id: uuidv4(), category: "Contour", name: "Boutons Volume", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        // {id: uuidv4(), category: "Contour", name: "Micro", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        
        {id: uuidv4(), category: "Intérieur", name: "Adhésif Batterie (Boite de 20)", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Intérieur", name: "Ecouteur Interne", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Intérieur", name: "Set de Vis Complet", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Intérieur", name: "Haut Parleur", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Intérieur", name: "Lentille Caméra", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        {id: uuidv4(), category: "Intérieur", name: "Vibreur", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},

        // {id: uuidv4(), category: "Intérieur", name: "CPU (Processeur)", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        // {id: uuidv4(), category: "Intérieur", name: "Batterie", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        // {id: uuidv4(), category: "Intérieur", name: "Carte Mère", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
        // {id: uuidv4(), category: "Intérieur", name: "Capteur GPS", price: 163.79, phoneIds: ["apple_iphone_15_pro-12557"]},
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
