"use client";

import { useLanguage } from "@/app/hooks/useLanguage";
import { useTheme } from "@/app/hooks/useTheme";
import ScrollProgress from "@/app/components/ScrollProgress";
import MusicPlayer from "@/app/components/MusicPlayer";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Marquee from "@/app/components/Marquee";
import Globe from "@/app/components/Globe";
import Stats from "@/app/components/Stats";
import About from "@/app/components/About";
import Method from "@/app/components/Method";
import Transforms from "@/app/components/Transforms";
import Testimonials from "@/app/components/Testimonials";
import Pricing from "@/app/components/Pricing";
import Payment from "@/app/components/Payment";
import Contact from "@/app/components/Contact";
import MarqueeCTA from "@/app/components/MarqueeCTA";
import Footer from "@/app/components/Footer";

export default function HomeContent() {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <ScrollProgress />
      <MusicPlayer />
      <Navbar lang={lang} setLang={setLang} t={t} theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero t={t} lang={lang} />
        <Marquee lang={lang} />
        <Globe lang={lang} />
        <Stats t={t} lang={lang} />
        <About t={t} lang={lang} />
        <Method t={t} lang={lang} />
        <Transforms t={t} lang={lang} />
        <Testimonials t={t} lang={lang} />
        <Pricing t={t} lang={lang} />
        <Payment t={t} lang={lang} />
        <Contact t={t} />
        <MarqueeCTA />
      </main>
      <Footer />
    </>
  );
}
