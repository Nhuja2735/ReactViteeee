import Navigation from "@/components/Navigation";
import ContactHeroSection from "@/components/ContactHeroSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <>
      <title>Contact | Paleswan Nepal</title>
      <meta name="description" content="Get in touch with Paleswan Nepal for questions, partnerships, or to get involved. Contact us today." />
      
      <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-primary">
        <Navigation />
        <ContactHeroSection />
      </div>
      
      <ContactFormSection />
      <Footer />
    </>
  );
};

export default Contact;