import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Drive Phone - Site en maintenance",
  description: "Drive Phone - Site en maintenance. Service de réparation de smartphones à domicile sur Lyon et ses alentours. Contactez-nous pour une réparation urgente.",
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
        <Analytics/>
      </body>
    </html>
  );
}
