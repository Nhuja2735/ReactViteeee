import { Button } from "@/components/ui/button";
import Logo from "./Logo";

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen flex flex-col items-center justify-center text-white relative"
      style={{ 
        background: 'var(--hero-gradient)'
      }}
    >
      <div className="text-center max-w-4xl mx-auto px-6">
        <Logo className="w-32 h-32 mx-auto mb-8" />
        
        <h1 className="text-6xl font-bold mb-6">
          Welcome to Paleswan Nepal
        </h1>
        
        <p className="text-xl mb-8 text-white/90 italic">
          Empowering communities, inspiring change.
        </p>
        
        <Button variant="blue" size="lg" className="text-lg">
          Learn More About Us
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;