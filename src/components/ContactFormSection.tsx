import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const ContactFormSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" type="email" />
              <Textarea placeholder="Your Message" rows={4} />
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Send
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Kathmandu, Nepal</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">+977 981234567</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">info@PaleswanNepal.org</span>
              </div>
              
              <div className="flex items-center space-x-4 pt-4">
                <Facebook className="w-6 h-6 text-primary cursor-pointer hover:text-primary/80" />
                <Instagram className="w-6 h-6 text-primary cursor-pointer hover:text-primary/80" />
                <Twitter className="w-6 h-6 text-primary cursor-pointer hover:text-primary/80" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;