import Logo from "./Logo";

const AboutHeroSection = () => {
  return (
    <section className="min-h-[60vh] flex items-center justify-center text-center text-white px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Logo />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          About Paleswan Nepal
        </h1>
        <p className="text-xl md:text-2xl font-light italic">
          Empowering communities, inspiring change.
        </p>
      </div>
    </section>
  );
};

export default AboutHeroSection;