import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-hero relative overflow-hidden flex items-center">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-primary/15 rounded-full blur-xl animate-float" style={{ animationDelay: "0.5s" }}></div>
      </div>

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 animate-fade-in">
              <span className="text-primary font-medium">🚀 Innovation Meets Opportunity</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Code
              </span>
              <span className="text-foreground">Cratz</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              Where technology enthusiasts and entrepreneurs collide to create the future. Join us for an unforgettable journey of innovation, networking, and breakthrough ideas.
            </p>

            {/* Event Details */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-5 h-5 text-primary" />
                <span>Dec 15-17, 2024</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-secondary" />
                <span>Tech Hub, Silicon Valley</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-5 h-5 text-accent" />
                <span>500+ Participants</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-button text-lg px-8 py-6 animate-pulse-glow"
              >
                Register Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary/20 hover:bg-primary hover:text-primary-foreground transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-scale-in" style={{ animationDelay: "1s" }}>
            <div className="relative mx-auto w-full max-w-md">
              {/* Main Circle */}
              <div className="w-80 h-80 mx-auto bg-gradient-card backdrop-blur-sm border border-white/30 rounded-full shadow-glow flex items-center justify-center">
                <div className="w-60 h-60 bg-gradient-primary rounded-full shadow-button flex items-center justify-center animate-pulse-glow">
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold mb-2">2024</div>
                    <div className="text-lg">Innovation</div>
                    <div className="text-lg">Summit</div>
                  </div>
                </div>
              </div>
              
              {/* Orbiting Elements */}
              <div className="absolute top-10 -right-5 w-16 h-16 bg-secondary rounded-full shadow-card animate-float flex items-center justify-center text-white font-bold text-sm">
                AI
              </div>
              <div className="absolute bottom-10 -left-5 w-12 h-12 bg-accent rounded-full shadow-card animate-float flex items-center justify-center text-white font-bold text-xs" style={{ animationDelay: "1s" }}>
                ML
              </div>
              <div className="absolute top-1/2 -right-8 w-10 h-10 bg-primary rounded-full shadow-card animate-float" style={{ animationDelay: "2s" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;