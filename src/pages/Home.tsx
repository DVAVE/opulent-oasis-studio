import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Wand2, Home as HomeIcon, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import introImage from "@/assets/intro-image.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 animate-fade-in">
          <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl text-primary mb-6">
            Experience Opulent Beauty
          </h1>
          <p className="font-script text-2xl md:text-3xl text-cream mb-10">
            Your oasis of luxury and style
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/book">
              Book Your Transformation <ChevronRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <img
                src={introImage}
                alt="Luxury spa treatment"
                className="rounded-lg shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
            <div className="space-y-6 animate-fade-in">
              <h2 className="font-heading text-5xl text-foreground-dark">
                Welcome to Your <span className="text-gradient-gold">Sanctuary</span>
              </h2>
              <p className="text-foreground-dark text-lg leading-relaxed">
                At Opulent Oasis Studio, we believe beauty is an art form. Our expert team specializes in creating
                stunning nail designs, flawless makeup applications, and luxurious spa treatments that leave you
                feeling refreshed and radiant.
              </p>
              <p className="text-foreground-dark text-lg leading-relaxed">
                Whether you're preparing for a special occasion or simply indulging in self-care, we provide an
                experience that transcends ordinary beauty services. Every detail is crafted to perfection.
              </p>
              <Button asChild variant="default" size="lg" className="mt-4">
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-5xl text-primary mb-4">Our Signature Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our curated collection of luxury beauty treatments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-card p-8 rounded-lg hover-lift hover-glow animate-scale-in">
              <div className="text-primary mb-4">
                <Sparkles className="w-12 h-12" />
              </div>
              <h3 className="font-heading text-2xl text-card-foreground mb-3">Nail Artistry</h3>
              <p className="text-muted-foreground mb-6">
                From classic manicures to intricate nail art, gel extensions, and acrylic designs. Every nail is a
                canvas for beauty.
              </p>
              <Link to="/services" className="text-primary hover:text-primary-glow transition-colors font-medium">
                Explore Nail Services →
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-card p-8 rounded-lg hover-lift hover-glow animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-primary mb-4">
                <Wand2 className="w-12 h-12" />
              </div>
              <h3 className="font-heading text-2xl text-card-foreground mb-3">Lash & Makeup</h3>
              <p className="text-muted-foreground mb-6">
                Professional makeup application, lash extensions, and hairstyling for birthdays, weddings, and special
                events.
              </p>
              <Link to="/services" className="text-primary hover:text-primary-glow transition-colors font-medium">
                View Beauty Services →
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-card p-8 rounded-lg hover-lift hover-glow animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-primary mb-4">
                <HomeIcon className="w-12 h-12" />
              </div>
              <h3 className="font-heading text-2xl text-card-foreground mb-3">Mobile Studio</h3>
              <p className="text-muted-foreground mb-6">
                Experience luxury in the comfort of your home. We bring our complete salon experience directly to your
                doorstep.
              </p>
              <Link to="/mobile-studio" className="text-primary hover:text-primary-glow transition-colors font-medium">
                Learn More →
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="default" size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mobile Studio USP */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="font-heading text-5xl mb-6">Luxury, Delivered to Your Doorstep</h2>
            <p className="font-script text-2xl mb-8">Your private oasis, wherever you are</p>
            <p className="text-lg mb-10 opacity-90 leading-relaxed">
              Why travel when we can bring the full salon experience to you? Our mobile studio service offers all the
              luxury treatments you love in the comfort and convenience of your own space. Perfect for busy
              professionals, special events, or simply enjoying beauty services at home.
            </p>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/mobile-studio">Explore Mobile Studio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-5xl text-foreground-dark mb-4">Our Artistry</h2>
            <p className="text-foreground-dark text-lg max-w-2xl mx-auto">
              Explore our portfolio of stunning transformations
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <img src={gallery1} alt="Nail art design" className="rounded-lg w-full h-64 object-cover hover-lift" />
            <img src={gallery2} alt="Lash extensions" className="rounded-lg w-full h-64 object-cover hover-lift" />
            <img src={gallery3} alt="Elegant hairstyle" className="rounded-lg w-full h-64 object-cover hover-lift" />
            <img src={gallery4} alt="Pedicure service" className="rounded-lg w-full h-64 object-cover hover-lift" />
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="default" size="lg">
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-5xl text-primary mb-4">Client Love</h2>
            <p className="text-muted-foreground text-lg">What our clients say about us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg hover-lift">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-xl">★</span>
                ))}
              </div>
              <p className="text-card-foreground mb-6 italic">
                "Absolutely stunning nail work! The attention to detail is impeccable, and the atmosphere is so
                relaxing. I won't go anywhere else!"
              </p>
              <p className="text-primary font-semibold">— Thandi M.</p>
            </div>

            <div className="bg-card p-8 rounded-lg hover-lift">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-xl">★</span>
                ))}
              </div>
              <p className="text-card-foreground mb-6 italic">
                "The mobile service is a game-changer! Getting ready for my wedding at home was so convenient and
                stress-free. Highly recommend!"
              </p>
              <p className="text-primary font-semibold">— Lerato K.</p>
            </div>

            <div className="bg-card p-8 rounded-lg hover-lift">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-xl">★</span>
                ))}
              </div>
              <p className="text-card-foreground mb-6 italic">
                "Professional, talented, and such warm service. My lash extensions look amazing and have lasted
                beautifully. Five stars!"
              </p>
              <p className="text-primary font-semibold">— Naledi P.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-charcoal text-center">
        <div className="container mx-auto px-6 animate-fade-in">
          <h2 className="font-heading text-5xl text-primary mb-6">Ready to Bloom?</h2>
          <p className="text-cream text-xl mb-10 max-w-2xl mx-auto">
            Book your appointment today and experience the opulence you deserve
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/book">Book Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
