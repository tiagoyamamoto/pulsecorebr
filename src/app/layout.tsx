import type { Metadata } from "next";
import { Syncopate, Space_Mono } from "next/font/google";
import "./globals.css";

const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-syncopate",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Pulsecorebr | Segurança, Conectividade e Energia Solar",
  description: "Especialistas em CFTV, Infraestrutura de Redes, Internet e Energia Solar em Blumenau/SC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${syncopate.variable} ${spaceMono.variable}`}>
      <body className="font-space antialiased">
        {children}
      </body>
    </html>
  );
}
