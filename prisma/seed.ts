import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const delet = await prisma.brand.createMany({
        data:
            [
                { id: 'spice-phones-68', name: 'Spice', devices: 120 },
                { id: 't_mobile-phones-55', name: 'T-Mobile', devices: 66 },
                { id: 'tcl-phones-123', name: 'TCL', devices: 75 },
                { id: 'tecno-phones-120', name: 'Tecno', devices: 146 },
                { id: 'tel_me_-phones-21', name: 'Tel.Me.', devices: 7 },
                { id: 'telit-phones-16', name: 'Telit', devices: 30 },
                { id: 'thuraya-phones-49', name: 'Thuraya', devices: 1 },
                { id: 'toshiba-phones-44', name: 'Toshiba', devices: 35 },
                { id: 'ulefone-phones-124', name: 'Ulefone', devices: 99 },
                { id: 'umidigi-phones-135', name: 'Umidigi', devices: 66 },
                { id: 'unnecto-phones-91', name: 'Unnecto', devices: 30 },
                { id: 'vertu-phones-39', name: 'Vertu', devices: 17 },
                { id: 'verykool-phones-70', name: 'verykool', devices: 139 },
                { id: 'vivo-phones-98', name: 'vivo', devices: 471 },
                { id: 'vk_mobile-phones-37', name: 'VK Mobile', devices: 31 },
                { id: 'vodafone-phones-53', name: 'Vodafone', devices: 87 },
                { id: 'wiko-phones-96', name: 'Wiko', devices: 100 },
                { id: 'wnd-phones-51', name: 'WND', devices: 5 },
                { id: 'xcute-phones-43', name: 'XCute', devices: 4 },
                { id: 'xiaomi-phones-80', name: 'Xiaomi', devices: 405 },
                { id: 'xolo-phones-85', name: 'XOLO', devices: 81 },
                { id: 'yezz-phones-78', name: 'Yezz', devices: 113 },
                { id: 'yota-phones-99', name: 'Yota', devices: 3 },
                { id: 'yu-phones-100', name: 'YU', devices: 13 },
                { id: 'zte-phones-62', name: 'ZTE', devices: 384 }
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
