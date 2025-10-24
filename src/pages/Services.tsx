import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import servicesHero from "@/assets/services-hero.jpg";

const Services = () => {
  const [activeTab, setActiveTab] = useState("nails");

  const nailServices = [
    { name: "Classic Manicure", price: "Starting from R250", description: "Traditional nail care with polish application" },
    { name: "Gel Manicure", price: "Starting from R350", description: "Long-lasting gel polish with UV curing" },
    { name: "Acrylic Extensions", price: "Starting from R450", description: "Full set of acrylic nail extensions" },
    { name: "Nail Art Design", price: "Starting from R150", description: "Custom nail art and intricate designs" },
    { name: "Classic Pedicure", price: "Starting from R280", description: "Complete foot care with polish" },
    { name: "Gel Pedicure", price: "Starting from R380", description: "Long-lasting gel polish for toes" },
  ];

  const beautyServices = [
    { name: "Lash Extensions", price: "Starting from R400", description: "Natural or dramatic volume lash extensions" },
    { name: "Makeup Application", price: "Starting from R500", description: "Professional makeup for special events" },
    { name: "Bridal Makeup", price: "Starting from R800", description: "Complete bridal makeup package with trial" },
    { name: "Birthday Glam", price: "Starting from R450", description: "Special occasion makeup and styling" },
    { name: "Hair Styling", price: "Starting from R350", description: "Professional hairstyling for any occasion" },
    { name: "Foot Spa Treatment", price: "Starting from R300", description: "Relaxing foot soak and massage" },
  ];

  const comboPackages = [
    {
      name: "The Glamour Package",
      price: "R850",
      description: "Gel manicure + Pedicure + Lash extensions",
      included: ["Full gel manicure", "Gel pedicure with foot spa", "Classic lash extensions"],
    },
    {
      name: "Special Event Package",
      price: "R1,200",
      description: "Complete beauty transformation for your big day",
      included: ["Professional makeup application", "Hair styling", "Gel manicure", "Complimentary lash touch-up"],
    },
    {
      name: "Bridal Luxury Package",
      price: "R1,500",
      description: "Everything you need to look stunning on your wedding day",
      included: ["Bridal makeup with trial", "Bridal hair styling", "Gel manicure & pedicure", "Lash extensions"],
    },
    {
      name: "Pamper Me Package",
      price: "R650",
      description: "Self-care essentials for ultimate relaxation",
      included: ["Classic manicure & pedicure", "Foot spa treatment", "Nail art on accent nails"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${servicesHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 text-center animate-fade-in">
          <h1 className="font-heading text-6xl md:text-7xl text-primary mb-4">Our Menu of Services</h1>
          <p className="font-script text-2xl text-cream">Curated treatments for every occasion</p>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 mb-12 bg-background h-auto p-2">
              <TabsTrigger
                value="nails"
                className="font-heading text-lg py-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Nail Studio
              </TabsTrigger>
              <TabsTrigger
                value="beauty"
                className="font-heading text-lg py-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Beauty Artistry
              </TabsTrigger>
              <TabsTrigger
                value="combos"
                className="font-heading text-lg py-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Special Combos
              </TabsTrigger>
            </TabsList>

            {/* Nail Studio Tab */}
            <TabsContent value="nails" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nailServices.map((service, index) => (
                  <div key={index} className="bg-background p-6 rounded-lg hover-lift border border-border">
                    <h3 className="font-heading text-2xl text-foreground-dark mb-2">{service.name}</h3>
                    <p className="text-primary font-semibold text-xl mb-3">{service.price}</p>
                    <p className="text-foreground-dark mb-6">{service.description}</p>
                    <Button asChild variant="default" size="sm" className="w-full">
                      <Link to="/book">Book This Service</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Beauty Artistry Tab */}
            <TabsContent value="beauty" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {beautyServices.map((service, index) => (
                  <div key={index} className="bg-background p-6 rounded-lg hover-lift border border-border">
                    <h3 className="font-heading text-2xl text-foreground-dark mb-2">{service.name}</h3>
                    <p className="text-primary font-semibold text-xl mb-3">{service.price}</p>
                    <p className="text-foreground-dark mb-6">{service.description}</p>
                    <Button asChild variant="default" size="sm" className="w-full">
                      <Link to="/book">Book This Service</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Special Combos Tab */}
            <TabsContent value="combos" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {comboPackages.map((pkg, index) => (
                  <div key={index} className="bg-background p-8 rounded-lg hover-lift border-2 border-primary">
                    <div className="mb-6">
                      <h3 className="font-heading text-3xl text-foreground-dark mb-2">{pkg.name}</h3>
                      <p className="text-primary font-bold text-2xl mb-3">{pkg.price}</p>
                      <p className="text-foreground-dark text-lg">{pkg.description}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground-dark mb-3">Package Includes:</h4>
                      <ul className="space-y-2">
                        {pkg.included.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1">✓</span>
                            <span className="text-foreground-dark">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button asChild variant="default" size="lg" className="w-full">
                      <Link to="/book">Book This Package</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl text-primary mb-6">Custom Packages Available</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Don't see exactly what you're looking for? We're happy to create a custom package tailored to your specific
              needs and budget. Whether it's for a group event, wedding party, or unique occasion, we'll work with you to
              design the perfect combination of services.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/book">Contact Us for Custom Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-center">
        <div className="container mx-auto px-6 animate-fade-in">
          <h2 className="font-heading text-5xl text-primary-foreground mb-6">Ready to Experience Luxury?</h2>
          <p className="text-primary-foreground text-xl mb-10 max-w-2xl mx-auto opacity-95">
            Book your appointment today and let us create magic
          </p>
          <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            <Link to="/book">Book Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
