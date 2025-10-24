import { useState } from "react";
import { Button } from "@/components/ui/button";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const galleryItems = [
    { id: 1, image: gallery1, category: "nails", alt: "Rose gold and black geometric nail art" },
    { id: 2, image: gallery2, category: "makeup", alt: "Professional lash extensions and flawless makeup" },
    { id: 3, image: gallery3, category: "hair", alt: "Elegant updo with gold accessories" },
    { id: 4, image: gallery4, category: "nails", alt: "Luxury rose gold pedicure" },
    { id: 5, image: gallery1, category: "nails", alt: "Intricate nail art design" },
    { id: 6, image: gallery2, category: "makeup", alt: "Glamorous makeup and lashes" },
    { id: 7, image: gallery3, category: "hair", alt: "Professional hairstyling" },
    { id: 8, image: gallery4, category: "nails", alt: "Perfect pedicure results" },
    { id: 9, image: gallery1, category: "nails", alt: "Elegant nail designs" },
    { id: 10, image: gallery2, category: "makeup", alt: "Special event makeup" },
    { id: 11, image: gallery3, category: "hair", alt: "Bridal hair styling" },
    { id: 12, image: gallery4, category: "nails", alt: "Spa pedicure treatment" },
  ];

  const filters = [
    { id: "all", label: "All" },
    { id: "nails", label: "Nail Art" },
    { id: "makeup", label: "Lashes & Makeup" },
    { id: "hair", label: "Hairstyles" },
  ];

  const filteredItems =
    activeFilter === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center animate-fade-in">
          <h1 className="font-heading text-6xl md:text-7xl text-primary mb-4">Our Artistry</h1>
          <p className="font-script text-2xl text-muted-foreground">A showcase of our beautiful work</p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-background-light sticky top-20 z-40 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                size="lg"
                onClick={() => setActiveFilter(filter.id)}
                className="font-medium"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-6">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="break-inside-avoid animate-fade-in hover-lift group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 font-medium">{item.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No items found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-center">
        <div className="container mx-auto px-6 animate-fade-in">
          <h2 className="font-heading text-5xl text-primary-foreground mb-6">Be Our Next Masterpiece</h2>
          <p className="text-primary-foreground text-xl mb-10 max-w-2xl mx-auto opacity-95">
            Let us create stunning results for you. Book your appointment today!
          </p>
          <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            <a href="/book">Book Now</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
