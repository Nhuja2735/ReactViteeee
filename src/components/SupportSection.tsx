import { Button } from "@/components/ui/button";

const SupportSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-foreground mb-6">Support Our Cause</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
          Join us in making a difference. Your contribution helps us continue our work.
        </p>
        <Button variant="blue" size="lg" className="text-lg">
          Donate Now
        </Button>
      </div>
    </section>
  );
};

export default SupportSection;