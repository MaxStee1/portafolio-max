import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Max Malebrán Cortés — Ingeniero TI | Data Integration & Software Development",
    template: "%s | Max Malebrán Cortés",
  },
  description: "Ingeniero en Tecnologías de Información especializado en integración de datos, ETL, desarrollo de software full-stack y ciberseguridad OT. Construyo soluciones técnicas robustas con impacto real.",
  keywords: [
    "Ingeniero TI",
    "Data Integration",
    "ETL",
    "Software Development",
    "TypeScript",
    "React",
    "Next.js",
    "Python",
    "PostgreSQL",
    "Power BI",
    "Ciberseguridad OT",
    "ISA/IEC 62443",
  ],
  authors: [{ name: "Max Malebrán Cortés" }],
  creator: "Max Malebrán Cortés",
  publisher: "Max Malebrán Cortés",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://maxmalebran.dev",
    siteName: "Max Malebrán Cortés — Portfolio",
    title: "Max Malebrán Cortés — Ingeniero TI",
    description: "Ingeniero en Tecnologías de Información especializado en integración de datos, ETL, desarrollo de software y ciberseguridad OT.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Max Malebrán Cortés - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Max Malebrán Cortés — Ingeniero TI",
    description: "Ingeniero en Tecnologías de Información especializado en integración de datos, ETL, desarrollo de software y ciberseguridad OT.",
    images: ["/og-image.png"],
    creator: "@MaxStee1",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0E17" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${geistMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="sitemap" href="/sitemap.xml" />
        <link rel="alternate" type="application/rss+xml" title="RSS Feed" href="/rss.xml" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Nav />
        <main className="flex-1 pt-16" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}