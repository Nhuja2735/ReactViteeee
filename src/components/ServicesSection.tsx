import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Leaf, BookOpen } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">What We Do</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-bold">Children's Programs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Workshops, camps, and creative events for youth empowerment.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-bold">Sustainability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Promoting clean energy, green practices, and environmental awareness.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-xl font-bold">Cultural Heritage</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Preserving Nepal's languages, traditions, and cultural assets.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;