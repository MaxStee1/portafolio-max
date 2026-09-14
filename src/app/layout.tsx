import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Max Malebrán — Ingeniero TI",
  description: "Portafolio profesional de Max Malebrán Cortés. Ingeniero en Tecnologías de Información especializado en Data Integration, ETL y desarrollo de software.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable}`}>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}