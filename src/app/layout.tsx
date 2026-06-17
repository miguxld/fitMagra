import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// ── Única fuente display (headings, precios, números grandes)
const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

// ── Única fuente UI (todo lo demás)
const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FitMagra Systems · Coaching Científico · Bogotá",
  description:
    "Coaching de alto rendimiento basado en bioquímica aplicada. +450 clientes transformados en 14 países. Magíster U. Rosario.",
  keywords: "coaching fitness, nutrición clínica, bioquímica aplicada, FitMagra, Bogotá",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
