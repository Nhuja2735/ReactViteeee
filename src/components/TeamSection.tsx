import { Card, CardContent } from "@/components/ui/card";

const TeamSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">Meet Our Team</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardContent className="p-8">
              <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary"></div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Founder Name</h3>
              <p className="text-muted-foreground">Founder & President</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-8">
              <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-4 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-secondary"></div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Team Member</h3>
              <p className="text-muted-foreground">Program Coordinator</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;