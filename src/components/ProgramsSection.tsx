import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProgramsSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">Our Programs</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Program Name 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Brief description of program 1. Highlight key activities and goals.
              </p>
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                Learn More
              </Button>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Program Name 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Brief description of program 2. Explain the impact and benefits.
              </p>
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;