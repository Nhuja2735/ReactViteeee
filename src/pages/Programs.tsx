import Navigation from "@/components/Navigation";
import ProgramsHeroSection from "@/components/ProgramsHeroSection";
import ProgramsCardsSection from "@/components/ProgramsCardsSection";
import ImpactSection from "@/components/ImpactSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const Programs = () => {
  return (
    <>
      <title>Programs | Paleswan Nepal</title>
      <meta name="description" content="Discover our programs in children's education, sustainability, and cultural heritage. Transforming lives through targeted initiatives." />
      
      <div className="min-h-screen bg-gradient-to-br from-primary to-secondary">
        <Navigation />
        <ProgramsHeroSection />
      </div>
      
      <ProgramsCardsSection />
      <ImpactSection />
      <GallerySection />
      <Footer />
    </>
  );
};

export default Programs;