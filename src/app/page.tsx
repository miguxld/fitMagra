import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "FitMagra Systems · Coaching Científico · Bogotá",
  description:
    "Coaching de alto rendimiento basado en bioquímica aplicada. +450 clientes transformados en 14 países. Magíster U. Rosario.",
};

export default function Home() {
  return <HomeContent />;
}
