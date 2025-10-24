import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Award, Users } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";
import introImage from "@/assets/intro-image.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${aboutHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 text-center animate-fade-in">
          <h1 className="font-heading text-6xl md:text-7xl text-primary mb-4">Our Philosophy</h1>
          <p className="font-script text-2xl text-cream">Where passion meets perfection</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <h2 className="font-heading text-5xl text-foreground-dark">
                Our <span className="text-gradient-gold">Story</span>
              </h2>
              <p className="text-foreground-dark text-lg leading-relaxed">
                Opulent Oasis Studio was born from a simple belief: that every person deserves to feel beautiful,
                confident, and pampered. Founded with a passion for artistry and a commitment to excellence, we've
                created a sanctuary where luxury beauty meets personalized care.
              </p>
              <p className="text-foreground-dark text-lg leading-relaxed">
                What sets us apart is our unwavering dedication to quality. From the premium products we use to the
                skilled techniques we employ, every aspect of our service is designed to exceed expectations. We don't
                just provide beauty treatments—we create transformative experiences.
              </p>
              <p className="text-foreground-dark text-lg leading-relaxed">
                Our team consists of certified beauty professionals who are not only experts in their craft but also
                passionate about making you feel special. Whether it's intricate nail art, flawless makeup, or our
                innovative mobile studio service, we bring artistry and care to everything we do.
              </p>
            </div>

            <div className="animate-fade-in">
              <img
                src={introImage}
                alt="Our story"
                className="rounded-lg shadow-2xl w-full h-[700px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-5xl text-primary mb-4">What We Stand For</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-card p-8 rounded-lg hover-lift text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl text-card-foreground mb-4">Passion for Beauty</h3>
              <p className="text-muted-foreground leading-relaxed">
                We treat every client as our canvas, bringing creativity, skill, and genuine care to each service. Your
                satisfaction is our masterpiece.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-card p-8 rounded-lg hover-lift text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl text-card-foreground mb-4">Uncompromising Quality</h3>
              <p className="text-muted-foreground leading-relaxed">
                We use only premium, salon-grade products and stay current with the latest techniques to deliver results
                that last.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-card p-8 rounded-lg hover-lift text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl text-card-foreground mb-4">Personalized Care</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every client is unique, and so are our services. We listen, understand, and customize each experience to
                your individual needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="font-heading text-5xl mb-6">Our Mission</h2>
            <p className="text-xl leading-relaxed opacity-95 mb-8">
              To empower individuals through exceptional beauty services that enhance confidence and celebrate
              individuality. We strive to be more than a salon—we aim to be your trusted beauty partner, offering
              accessible luxury whether you visit us in-studio or choose our mobile service.
            </p>
            <p className="font-script text-2xl">
              "Beauty is not just about looking good—it's about feeling incredible."
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-5xl text-foreground-dark mb-4">Why Choose Opulent Oasis?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-heading text-xl text-foreground-dark mb-2">Expert Team</h4>
                <p className="text-foreground-dark">Certified professionals with years of experience and ongoing training</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-heading text-xl text-foreground-dark mb-2">Premium Products</h4>
                <p className="text-foreground-dark">Only the highest quality, trusted brands for lasting results</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-heading text-xl text-foreground-dark mb-2">Hygiene Standards</h4>
                <p className="text-foreground-dark">Impeccable cleanliness and sterilization protocols for your safety</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-heading text-xl text-foreground-dark mb-2">Flexible Service</h4>
                <p className="text-foreground-dark">In-studio or mobile—beauty on your terms, your schedule</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-heading text-xl text-foreground-dark mb-2">Personalized Consultations</h4>
                <p className="text-foreground-dark">We listen to your vision and bring it to life</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-heading text-xl text-foreground-dark mb-2">Affordable Luxury</h4>
                <p className="text-foreground-dark">Premium quality at prices that make sense</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal text-center">
        <div className="container mx-auto px-6 animate-fade-in">
          <h2 className="font-heading text-5xl text-primary mb-6">Experience the Difference</h2>
          <p className="text-cream text-xl mb-10 max-w-2xl mx-auto">
            Join our community of satisfied clients and discover what true beauty care feels like
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/book">Book Appointment</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-cream text-cream hover:bg-cream hover:text-charcoal">
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
