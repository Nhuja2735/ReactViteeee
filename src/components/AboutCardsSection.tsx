import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutCardsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To drive social transformation through education, environmental sustainability, 
                and cultural preservation. We believe in empowering children, uplifting 
                communities, and protecting Nepal's rich heritage.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To create a future where every child has access to quality education, every 
                community thrives sustainably, and every culture is celebrated.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2">
                <li>• Inclusivity & Diversity</li>
                <li>• Integrity & Transparency</li>
                <li>• Community Empowerment</li>
                <li>• Innovation & Creativity</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutCardsSection;