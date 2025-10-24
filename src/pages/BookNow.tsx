import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, MapPin, Phone, Mail, Home } from "lucide-react";

const BookNow = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    location: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const services = [
    "Classic Manicure",
    "Gel Manicure",
    "Acrylic Extensions",
    "Nail Art Design",
    "Classic Pedicure",
    "Gel Pedicure",
    "Lash Extensions",
    "Makeup Application",
    "Bridal Makeup",
    "Hair Styling",
    "Foot Spa Treatment",
    "The Glamour Package",
    "Special Event Package",
    "Bridal Luxury Package",
    "Pamper Me Package",
  ];

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Appointment Request Received!",
      description: "We'll contact you shortly to confirm your booking. Thank you!",
    });
    // Reset form
    setFormData({
      service: "",
      location: "",
      date: "",
      time: "",
      name: "",
      email: "",
      phone: "",
      notes: "",
    });
    setStep(1);
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.service !== "";
      case 2:
        return formData.location !== "";
      case 3:
        return formData.date !== "" && formData.time !== "";
      case 4:
        return formData.name !== "" && formData.email !== "" && formData.phone !== "";
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center animate-fade-in">
          <h1 className="font-heading text-6xl md:text-7xl text-primary mb-4">Book Your Appointment</h1>
          <p className="font-script text-2xl text-muted-foreground">Your transformation awaits</p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 bg-background-light">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Left Column - Booking Form */}
            <div className="bg-background p-8 rounded-lg shadow-xl">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-heading text-3xl text-cream">Request Appointment</h2>
                  <span className="text-primary font-semibold">Step {step} of 4</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-muted rounded-full h-2 mb-8">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(step / 4) * 100}%` }}
                  ></div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Choose Service */}
                {step === 1 && (
                  <div className="animate-fade-in space-y-4">
                    <Label htmlFor="service" className="text-lg font-semibold text-cream">
                      Choose Your Service
                    </Label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                      <SelectTrigger id="service" className="h-12">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="max-h-[300px] bg-background">
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Step 2: Choose Location */}
                {step === 2 && (
                  <div className="animate-fade-in space-y-4">
                    <Label htmlFor="location" className="text-lg font-semibold text-cream">
                      Choose Location
                    </Label>
                    <Select value={formData.location} onValueChange={(value) => setFormData({ ...formData, location: value })}>
                      <SelectTrigger id="location" className="h-12">
                        <SelectValue placeholder="Select location type" />
                      </SelectTrigger>
                      <SelectContent className="bg-background">
                        <SelectItem value="in-studio">In-Studio</SelectItem>
                        <SelectItem value="mobile">Mobile / Door-to-Door</SelectItem>
                      </SelectContent>
                    </Select>
                    {formData.location === "mobile" && (
                      <p className="text-sm text-muted-foreground mt-2">
                        We'll contact you to confirm your address and any travel fees.
                      </p>
                    )}
                  </div>
                )}

                {/* Step 3: Select Date & Time */}
                {step === 3 && (
                  <div className="animate-fade-in space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-lg font-semibold text-cream">
                        Preferred Date
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="h-12"
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time" className="text-lg font-semibold text-cream">
                        Preferred Time
                      </Label>
                      <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })}>
                        <SelectTrigger id="time" className="h-12">
                          <SelectValue placeholder="Select a time slot" />
                        </SelectTrigger>
                        <SelectContent className="bg-background">
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 4: Your Details */}
                {step === 4 && (
                  <div className="animate-fade-in space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-lg font-semibold text-cream">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-12"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-lg font-semibold text-cream">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-12"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-lg font-semibold text-cream">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="078 XXX XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-12"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes" className="text-lg font-semibold text-cream">
                        Additional Notes (Optional)
                      </Label>
                      <Textarea
                        id="notes"
                        placeholder="Any special requests or information we should know?"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-4 pt-6">
                  {step > 1 && (
                    <Button type="button" onClick={prevStep} variant="outline" size="lg" className="flex-1">
                      Back
                    </Button>
                  )}
                  {step < 4 ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      variant="default"
                      size="lg"
                      className="flex-1"
                      disabled={!isStepValid()}
                    >
                      Next
                    </Button>
                  ) : (
                    <Button type="submit" variant="cta" size="lg" className="flex-1" disabled={!isStepValid()}>
                      Request Appointment
                    </Button>
                  )}
                </div>
              </form>
            </div>

            {/* Right Column - Contact Details */}
            <div className="space-y-8">
              <div className="bg-background p-8 rounded-lg shadow-xl">
                <h3 className="font-heading text-2xl text-cream mb-6">Contact Details</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-cream mb-1">Phone</h4>
                      <p className="text-muted-foreground">078 325 4622</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-cream mb-1">Email</h4>
                      <p className="text-muted-foreground">info@opulentoasis.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-cream mb-1">Studio Address</h4>
                      <p className="text-muted-foreground">
                        Luxury Beauty District<br />
                        Johannesburg, South Africa
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-background p-8 rounded-lg shadow-xl">
                <h3 className="font-heading text-2xl text-cream mb-6">Operating Hours</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-cream font-medium">Monday - Friday</p>
                      <p className="text-muted-foreground text-sm">9:00 AM - 7:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-cream font-medium">Saturday</p>
                      <p className="text-muted-foreground text-sm">9:00 AM - 6:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-cream font-medium">Sunday</p>
                      <p className="text-muted-foreground text-sm">10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary p-8 rounded-lg shadow-xl">
                <div className="flex items-start gap-4">
                  <Home className="w-8 h-8 text-primary-foreground flex-shrink-0" />
                  <div>
                    <h3 className="font-heading text-2xl text-primary-foreground mb-2">Mobile Service</h3>
                    <p className="text-primary-foreground opacity-95">
                      For mobile appointments, we'll contact you to confirm your address and arrange the perfect time
                      for your at-home service.
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Placeholder */}
              <div className="bg-muted rounded-lg overflow-hidden h-64 flex items-center justify-center">
                <p className="text-muted-foreground">Google Maps Location</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookNow;
