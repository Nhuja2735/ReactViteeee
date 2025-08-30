import { Button } from "@/components/ui/button";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <nav className="w-full max-w-6xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between bg-white rounded-full border-2 border-primary px-8 py-4 shadow-lg">
        <Logo />
        
        <div className="flex items-center space-x-8">
          <Button variant="nav" className="text-primary hover:text-primary/80">
            Home
          </Button>
          <Button variant="nav" className="text-primary hover:text-primary/80">
            About
          </Button>
          <Button variant="nav" className="text-primary hover:text-primary/80">
            Programs
          </Button>
          <Button variant="nav" className="text-primary hover:text-primary/80">
            Contact
          </Button>
          <Button variant="nav" className="text-primary hover:text-primary/80">
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;