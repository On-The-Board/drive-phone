import type { MetadataRoute } from 'next'

interface iDevice {
    map(arg0: ({ id }: { id: any }) => { url: string }): { url: string; lastModified?: string | Date; changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"; priority?: number; alternates?: { languages?: import("next/dist/lib/metadata/types/alternative-urls-types").Languages<string> } }[]
    id: string
}
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const devs = await fetch("https://www.drivephone.fr/api/devices")
    const devices: iDevice = await devs.json()
    const devicesEntries: MetadataRoute.Sitemap = devices.map(({id}) => ({
        url: `https://www.drivephone.fr/devices/${id}`,
    }))
    const piecesEntries: MetadataRoute.Sitemap = devices.map(({id}) => ({
        url: `https://www.drivephone.fr/pieces/${id}`,
    }))
  return [
    {
      url: 'https://www.drivephone.fr',
    },
    {
      url: 'https://www.drivephone.fr/devices',
    },
    {
      url: 'https://www.drivephone.fr/accessories',
    },
    ...devicesEntries,
    ...piecesEntries
  ]
}
