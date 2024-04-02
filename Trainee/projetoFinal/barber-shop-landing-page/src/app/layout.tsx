import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Barba Rolling",
  description:
    "Landing page destinada a divulagação de produtos e serviços da Barbearia Barba Rolling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth bg-azul-escuro-forte">
      <head>
        <link rel="icon" href="/icon/favicon.ico" />
      </head>

      <body className={`${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
