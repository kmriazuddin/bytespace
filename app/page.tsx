import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FeaturedCourse from "@/components/sections/FeaturedCourse";
import GrowthSection from "@/components/sections/GrowthSection";
import Hero from "@/components/sections/Hero";
import LearningPath from "@/components/sections/LearningPath";
import LogoStrip from "@/components/sections/LogoStrip";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Hero />
      </div>
      <LogoStrip />
      <FeaturedCourse />
      <LearningPath />
      <GrowthSection />
      <Footer />
    </>
  );
}
