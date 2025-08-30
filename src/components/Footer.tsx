import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer 
      className="py-16 text-white"
      style={{ 
        background: 'var(--footer-gradient)'
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Paleswan Nepal</h3>
            <p className="text-white/90 mb-4">
              Empowering communities since 2081. Join us in making a difference.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/90">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Programs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-white/90">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+977 9812334567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@PaleswanNepal.org</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white/90 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/90 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/90 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/90">
          <p>&copy; 2025 Paleswan Nepal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;