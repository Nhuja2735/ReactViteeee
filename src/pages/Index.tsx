import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ProgramsSection from "@/components/ProgramsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SupportSection from "@/components/SupportSection";
import UpdatesSection from "@/components/UpdatesSection";
import ServicesSection from "@/components/ServicesSection";
import ImpactSection from "@/components/ImpactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-10 pt-4">
        <Navigation />
      </div>
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Mission Section */}
      <MissionSection />
      
      {/* Programs Section */}
      <ProgramsSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Support Section */}
      <SupportSection />
      
      {/* Updates Section */}
      <UpdatesSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Impact Section */}
      <ImpactSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
