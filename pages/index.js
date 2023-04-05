import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import GDSCSection from "@/components/sections/GDSCSection";
import HeroSection from "@/components/sections/HeroSection";
import ItinerarySection from "@/components/sections/ItinerarySection";
import Navbar from "@/components/Navbar";
import PrizesSection from "@/components/sections/PrizesSection";
import QuestionsSection from "@/components/sections/QuestionsSection";
import SponsorsSection from "@/components/sections/SponsorsSection";
import SeoComponent from "@/components/Seo";
// import Preloader from "@/components/Preloader";

export default function Home() {
  return (
    <>
      <SeoComponent title="GDSC WoW Chennai 2023" description={"India's premier student networking event bringing the brightest future talent together."} image={"../assets/banner.png"} />
      <link rel="icon" href="../../assets/icon.png" />
      <main className="scroll-smooth w-screen ">
        <HeroSection />
        <Navbar />
        <AboutSection />
        <PrizesSection />
        <ItinerarySection />
        <SponsorsSection />
        <GDSCSection />
        <QuestionsSection />
        <ContactSection />
      </main>
    </>
  );
}
