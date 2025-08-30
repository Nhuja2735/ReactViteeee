import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">What People Say</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-lg text-muted-foreground mb-4 italic">
                "Your testimonial text goes here, sharing a positive experience."
              </p>
              <p className="text-muted-foreground font-medium">
                - Beneficiary Name
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-lg text-muted-foreground mb-4 italic">
                "Another inspiring testimonial about our impact."
              </p>
              <p className="text-muted-foreground font-medium">
                - Supporter Name
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;