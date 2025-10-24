import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Home, Sparkles, CheckCircle2 } from "lucide-react";
import mobileHero from "@/assets/mobile-studio-hero.jpg";

const MobileStudio = () => {
  const serviceAreas = [
    "Sandton", "Rosebank", "Johannesburg CBD", "Randburg", "Fourways",
    "Hyde Park", "Melrose", "Parktown", "Midrand", "Centurion"
  ];

  const mobileServices = [
    { name: "All Nail Services", description: "Manicures, pedicures, gel, acrylics, nail art" },
    { name: "Makeup Application", description: "Event makeup, bridal makeup, birthday glam" },
    { name: "Lash Extensions", description: "Classic, volume, and hybrid lash extensions" },
    { name: "Hair Styling", description: "Updos, blowouts, and special event styling" },
    { name: "Spa Treatments", description: "Foot spa and relaxation treatments" },
    { name: "Package Deals", description: "All our special combo packages available at home" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${mobileHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 text-center animate-fade-in">
          <h1 className="font-heading text-6xl md:text-7xl text-primary mb-6">Your Private Oasis, Delivered</h1>
          <p className="font-script text-3xl text-cream mb-8">
            The full salon experience in the comfort of your home
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/book">Book Your Mobile Appointment</Link>
          </Button>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-5xl text-foreground-dark mb-6">
              Why <span className="text-gradient-gold">Travel</span>?
            </h2>
            <p className="text-foreground-dark text-lg leading-relaxed mb-6">
              Imagine getting ready for your special event without the stress of rushing to a salon. Or treating yourself
              to luxury pampering while relaxing in your own space. That's the magic of our Mobile Studio service.
            </p>
            <p className="text-foreground-dark text-lg leading-relaxed">
              We bring all the expertise, premium products, and professional equipment directly to your door. Whether it's
              for a wedding, birthday party, girls' night, or simply because you deserve it—we make luxury beauty
              effortlessly accessible.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-5xl text-primary mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg">Simple, convenient, and stress-free</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="text-center animate-slide-up">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
                <Calendar className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="font-heading text-2xl text-primary">1</span>
              </div>
              <h3 className="font-heading text-2xl text-card-foreground mb-3">Book Online</h3>
              <p className="text-muted-foreground">
                Choose your service, select a date and time, and confirm your mobile appointment through our easy booking
                system.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
                <MapPin className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="font-heading text-2xl text-primary">2</span>
              </div>
              <h3 className="font-heading text-2xl text-card-foreground mb-3">We Arrive</h3>
              <p className="text-muted-foreground">
                Our professional beauty team arrives at your location with all equipment, premium products, and everything
                needed for your service.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
                <Sparkles className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="font-heading text-2xl text-primary">3</span>
              </div>
              <h3 className="font-heading text-2xl text-card-foreground mb-3">Relax & Enjoy</h3>
              <p className="text-muted-foreground">
                Sit back in your own comfortable space while we work our magic. No travel, no hassle—just pure pampering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Home className="w-8 h-8 text-primary-foreground" />
              <h2 className="font-heading text-4xl text-primary-foreground">We Service Your Area</h2>
            </div>
            <p className="text-primary-foreground text-lg mb-8 opacity-95">
              Currently serving the following neighborhoods and surrounding areas:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area, index) => (
                <span
                  key={index}
                  className="bg-primary-foreground text-primary px-4 py-2 rounded-full text-sm font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="text-primary-foreground text-sm mt-8 opacity-90">
              Don't see your area? Contact us—we may be able to accommodate special requests!
            </p>
          </div>
        </div>
      </section>

      {/* Mobile Services Menu */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-5xl text-foreground-dark mb-4">Available Mobile Services</h2>
            <p className="text-foreground-dark text-lg">All our premium services, delivered to you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {mobileServices.map((service, index) => (
              <div key={index} className="bg-background p-6 rounded-lg hover-lift border border-border">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-xl text-foreground-dark mb-2">{service.name}</h3>
                    <p className="text-foreground-dark text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-foreground-dark text-lg mb-6">
              All services available at the same prices as in-studio, with a small travel fee based on distance.
            </p>
            <Button asChild variant="default" size="lg">
              <Link to="/services">View Full Service Menu & Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-5xl text-primary mb-12 text-center">Why Choose Mobile Studio?</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-heading text-xl text-card-foreground mb-2">Convenience</h4>
                  <p className="text-muted-foreground">Save time and avoid traffic. We come to you.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-heading text-xl text-card-foreground mb-2">Comfort</h4>
                  <p className="text-muted-foreground">Relax in your own space with your favorite music and ambiance.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-heading text-xl text-card-foreground mb-2">Perfect for Events</h4>
                  <p className="text-muted-foreground">
                    Ideal for weddings, bridal parties, birthdays, and group celebrations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-heading text-xl text-card-foreground mb-2">Privacy</h4>
                  <p className="text-muted-foreground">Enjoy one-on-one attention in your private setting.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-heading text-xl text-card-foreground mb-2">Flexibility</h4>
                  <p className="text-muted-foreground">
                    Book services at times that work for you, including evenings and weekends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal text-center">
        <div className="container mx-auto px-6 animate-fade-in">
          <h2 className="font-heading text-5xl text-primary mb-6">Ready for Door-to-Door Luxury?</h2>
          <p className="text-cream text-xl mb-10 max-w-2xl mx-auto">
            Experience the convenience of professional beauty services in your own home
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/book">Book Your Mobile Appointment</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MobileStudio;
