import { Card, CardContent } from "@/components/ui/card";

const ImpactSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">Our Impact</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">350+</div>
              <div className="text-sm text-muted-foreground">Children Reached</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">18</div>
              <div className="text-sm text-muted-foreground">Programs Organized</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">7</div>
              <div className="text-sm text-muted-foreground">Trainings Conducted</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">25</div>
              <div className="text-sm text-muted-foreground">Volunteers</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;