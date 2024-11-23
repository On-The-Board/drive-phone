import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Drive Phone - Réparation de smartphone à domicile",
  description: "Vous avez un problème avec votre smartphone ? Pas de panique ! Drive Phone vous propose un service de réparation de smartphones à domicile, sur Lyon et ses alentours. Profitez de notre expertise pour redonner vie à votre appareil, dans le confort de votre maison.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
