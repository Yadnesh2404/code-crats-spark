import { useState } from "react";
import { Calendar, Clock, MapPin, Users2, Trophy, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const TimelineSection = () => {
  const [activeDay, setActiveDay] = useState(1);

  const timelineData = [
    {
      day: 1,
      date: "December 15, 2024",
      title: "Opening & Keynotes",
      events: [
        {
          time: "09:00 AM",
          title: "Registration & Welcome Coffee",
          description: "Network with fellow innovators",
          icon: Users2,
          location: "Main Lobby"
        },
        {
          time: "10:30 AM",
          title: "Opening Keynote",
          description: "Future of Technology & Entrepreneurship",
          icon: Rocket,
          location: "Main Auditorium"
        },
        {
          time: "02:00 PM",
          title: "Tech Showcase",
          description: "Latest innovations and breakthroughs",
          icon: Trophy,
          location: "Exhibition Hall"
        }
      ]
    },
    {
      day: 2,
      date: "December 16, 2024",
      title: "Workshops & Competitions",
      events: [
        {
          time: "09:00 AM",
          title: "AI/ML Workshop",
          description: "Hands-on machine learning session",
          icon: Rocket,
          location: "Tech Lab A"
        },
        {
          time: "11:00 AM",
          title: "Startup Pitch Competition",
          description: "Present your ideas to investors",
          icon: Trophy,
          location: "Main Stage"
        },
        {
          time: "03:00 PM",
          title: "Networking Session",
          description: "Connect with industry leaders",
          icon: Users2,
          location: "Networking Lounge"
        }
      ]
    },
    {
      day: 3,
      date: "December 17, 2024",
      title: "Finals & Awards",
      events: [
        {
          time: "10:00 AM",
          title: "Final Presentations",
          description: "Teams present their solutions",
          icon: Trophy,
          location: "Main Auditorium"
        },
        {
          time: "02:00 PM",
          title: "Awards Ceremony",
          description: "Celebrating the winners",
          icon: Trophy,
          location: "Main Stage"
        },
        {
          time: "04:00 PM",
          title: "Closing & Future Connections",
          description: "Building lasting partnerships",
          icon: Users2,
          location: "Main Lobby"
        }
      ]
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-primary font-medium">📅 Event Schedule</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Event Timeline
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three days of intensive learning, networking, and innovation. Each day brings new opportunities to grow and connect.
          </p>
        </div>

        {/* Day Selection Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-2 shadow-card">
            {timelineData.map((day) => (
              <Button
                key={day.day}
                variant={activeDay === day.day ? "default" : "ghost"}
                className={`mx-1 px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeDay === day.day 
                    ? "bg-gradient-primary text-white shadow-button" 
                    : "hover:bg-primary/10"
                }`}
                onClick={() => setActiveDay(day.day)}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Day {day.day}
              </Button>
            ))}
          </div>
        </div>

        {/* Timeline Content */}
        <div className="max-w-4xl mx-auto">
          {timelineData
            .filter((day) => day.day === activeDay)
            .map((day) => (
              <div key={day.day} className="animate-fade-in">
                {/* Day Header */}
                <div className="text-center mb-12 p-8 bg-gradient-card backdrop-blur-sm rounded-2xl shadow-card border border-white/20">
                  <h3 className="text-3xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                    {day.title}
                  </h3>
                  <p className="text-lg text-muted-foreground">{day.date}</p>
                </div>

                {/* Events Timeline */}
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

                  {day.events.map((event, index) => (
                    <div
                      key={index}
                      className="relative flex items-start mb-8 group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-6 w-4 h-4 bg-gradient-primary rounded-full shadow-glow z-10 group-hover:scale-125 transition-transform duration-300"></div>

                      {/* Event Card */}
                      <div className="ml-16 flex-1">
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-card border border-white/30 hover:shadow-glow hover:scale-[1.02] transition-all duration-300 group">
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                            <div className="flex items-center gap-3 mb-2 md:mb-0">
                              <div className="p-2 bg-gradient-primary rounded-lg">
                                <event.icon className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <h4 className="text-xl font-semibold text-foreground">
                                  {event.title}
                                </h4>
                                <p className="text-muted-foreground">
                                  {event.description}
                                </p>
                              </div>
                            </div>
                            
                            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4 text-primary" />
                                {event.time}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4 text-secondary" />
                                {event.location}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 shadow-card border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Ready to Join Us?
            </h3>
            <p className="text-muted-foreground mb-6">
              Don't miss out on this incredible opportunity to learn, network, and innovate with the best minds in tech.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-button"
            >
              Register for CodeCratz 2024
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;