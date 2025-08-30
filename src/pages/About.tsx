import Navigation from "@/components/Navigation";
import AboutHeroSection from "@/components/AboutHeroSection";
import AboutCardsSection from "@/components/AboutCardsSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <title>About | Paleswan Nepal</title>
      <meta name="description" content="Learn about Paleswan Nepal's mission, vision, values and team. Empowering communities, inspiring change through education and cultural preservation." />
      
      <div className="min-h-screen bg-gradient-to-br from-primary to-secondary">
        <Navigation />
        <AboutHeroSection />
      </div>
      
      <AboutCardsSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default About;