import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UpdatesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12">Latest Updates</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold">Update Title 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Brief summary of the latest update or news. Stay informed about our progress.
              </p>
              <Button variant="link" className="text-secondary p-0">
                Read More
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold">Update Title 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Brief summary of another important update or event.
              </p>
              <Button variant="link" className="text-secondary p-0">
                Read More
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;