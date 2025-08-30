import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Leaf, BookOpen } from "lucide-react";

const ProgramsCardsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold text-primary">Children's Education</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We run after-school programs, scholarship drives, and creative workshops to empower children in 
                rural and urban Nepal. Our focus is on literacy, digital skills, and holistic development.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>After-school learning centers</p>
                <p>Annual art & coding camps</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold text-primary">Sustainability & Environment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We promote clean energy, tree plantation, and environmental awareness in schools and 
                communities. Our green initiatives foster a culture of sustainability for future generations.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Tree plantation drives</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold text-primary">Cultural Heritage</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                We celebrate and preserve Nepal's diverse languages, traditions, and arts
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgramsCardsSection;