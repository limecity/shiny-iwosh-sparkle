import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StandorteSection from "@/components/StandorteSection";
import ProgrammeSection from "@/components/ProgrammeSection";
import StaubsaugerSection from "@/components/StaubsaugerSection";
import Ready2WashSection from "@/components/Ready2WashSection";
import WauWashSection from "@/components/WauWashSection";
import VideoSection from "@/components/VideoSection";
import ReviewCTA from "@/components/ReviewCTA";
import KontaktSection from "@/components/KontaktSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <StandorteSection />
    <ProgrammeSection />
    <StaubsaugerSection />
    <Ready2WashSection />
    <WauWashSection />
    <VideoSection />
    <ReviewCTA />
    <FAQSection />
    <KontaktSection />
    <Footer />
  </div>
);

export default Index;
