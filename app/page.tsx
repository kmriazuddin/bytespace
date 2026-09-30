import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import LogoStrip from "@/components/sections/LogoStrip";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Hero />
      </div>
      <LogoStrip />
      <Footer />
    </>
  );
}
