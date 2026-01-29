"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  Users,
  Image as ImageIcon,
  ExternalLink,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxHero from "@/components/ParallaxHero";

const galleryCategories = [
  "All",
  "Hackathons",
  "Workshops",
  "Campus Programs",
  "Summits",
  "Community",
];

const featuredEvent = {
  id: 0,
  title: "Tamil Nadu Startup Summit 2025",
  date: "March 15-16, 2025",
  time: "9:00 AM - 7:00 PM",
  location: "Chennai Trade Centre, Chennai",
  type: "Summit",
  description:
    "The flagship annual event bringing together 2000+ entrepreneurs, investors, mentors, and policymakers. Featuring keynotes, pitch competitions, and networking sessions.",
  highlights: [
    "50+ Speakers",
    "Pitch Competition",
    "Investor Meet",
    "Startup Expo",
  ],
};

const upcomingEvents = [
  {
    id: 1,
    title: "Startup Weekend Chennai",
    date: "February 15-17, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "IIT Madras Research Park",
    type: "Hackathon",
    description:
      "54-hour event where aspiring entrepreneurs pitch ideas, form teams, and launch startups.",
  },
  {
    id: 2,
    title: "Founder Fundamentals Workshop",
    date: "February 22, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Anna University, Chennai",
    type: "Workshop",
    description:
      "Learn the essentials of starting up - from ideation to MVP development.",
  },
  {
    id: 3,
    title: "Mentor Connect: Coimbatore",
    date: "March 1, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "PSG Tech, Coimbatore",
    type: "Networking",
    description:
      "Connect with industry mentors and get one-on-one guidance for your startup journey.",
  },
];

const pastEventsWithPhotos = [
  {
    id: 1,
    title: "Startup Bootcamp Madurai",
    date: "January 20-21, 2025",
    type: "Workshop",
    attendees: 150,
    photos: ["🎓", "💡", "🤝"],
    highlights:
      "2-day intensive bootcamp covering business models, pitching, and market validation.",
  },
  {
    id: 2,
    title: "Women in Entrepreneurship Summit",
    date: "January 15, 2025",
    type: "Summit",
    attendees: 200,
    photos: ["👩‍💼", "🌟", "🎤"],
    highlights:
      "Celebrating women founders with inspiring keynotes and success stories.",
  },
  {
    id: 3,
    title: "Agri-Tech Innovation Challenge",
    date: "December 12-14, 2024",
    type: "Hackathon",
    attendees: 120,
    photos: ["🌾", "🚜", "🌱"],
    highlights:
      "48-hour hackathon focused on agricultural technology solutions.",
  },
  {
    id: 4,
    title: "Campus Connect: Salem Edition",
    date: "December 5, 2024",
    type: "Campus Program",
    attendees: 300,
    photos: ["🎓", "💻", "🏛️"],
    highlights: "Outreach program across 5 colleges in Salem district.",
  },
];

const galleryImages = [
  {
    id: 1,
    category: "Hackathons",
    title: "Startup Weekend Chennai 2024",
    placeholder: "🚀",
    description: "Teams presenting final pitches",
  },
  {
    id: 2,
    category: "Workshops",
    title: "Design Thinking Workshop",
    placeholder: "💡",
    description: "Interactive prototyping session",
  },
  {
    id: 3,
    category: "Campus Programs",
    title: "Anna University Outreach",
    placeholder: "🎓",
    description: "Entrepreneurship awareness talk",
  },
  {
    id: 4,
    category: "Summits",
    title: "Annual Startup Summit",
    placeholder: "🏆",
    description: "Main stage keynote session",
  },
  {
    id: 5,
    category: "Community",
    title: "Mentor Networking Event",
    placeholder: "🤝",
    description: "One-on-one mentoring sessions",
  },
  {
    id: 6,
    category: "Hackathons",
    title: "Social Impact Hackathon",
    placeholder: "💪",
    description: "Teams brainstorming solutions",
  },
  {
    id: 7,
    category: "Workshops",
    title: "Pitch Perfect Training",
    placeholder: "🎤",
    description: "Live pitch practice rounds",
  },
  {
    id: 8,
    category: "Campus Programs",
    title: "IIT Madras Session",
    placeholder: "🏛️",
    description: "Research park tour",
  },
  {
    id: 9,
    category: "Summits",
    title: "Investor Connect",
    placeholder: "💼",
    description: "Startup-investor meetings",
  },
  {
    id: 10,
    category: "Community",
    title: "Rural Entrepreneur Program",
    placeholder: "🌱",
    description: "District-level workshops",
  },
  {
    id: 11,
    category: "Hackathons",
    title: "EdTech Challenge",
    placeholder: "📚",
    description: "Education innovation showcase",
  },
  {
    id: 12,
    category: "Workshops",
    title: "Financial Literacy Session",
    placeholder: "📊",
    description: "Startup finance fundamentals",
  },
];

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Hackathon":
        return "bg-primary/10 text-primary";
      case "Workshop":
        return "bg-secondary/10 text-secondary";
      case "Summit":
        return "bg-tertiary/10 text-tertiary";
      case "Networking":
        return "bg-highlight/20 text-tertiary";
      case "Campus Program":
        return "bg-secondary/10 text-secondary";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ParallaxHero className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold mb-6 text-gradient">
                Events & Gallery
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-muted-foreground">
                Discover our hackathons, workshops, campus programs, and
                community events shaping Tamil Nadu's startup ecosystem.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxHero>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <Card className="border-0 shadow-xl bg-gradient-to-br from-tertiary to-tertiary/90 max-w-5xl mx-auto overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="p-8 md:p-10">
                    <Badge className="bg-highlight text-tertiary mb-4">
                      Featured Event
                    </Badge>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                      {featuredEvent.title}
                    </h2>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <Calendar className="h-4 w-4" />
                        {featuredEvent.date}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <Clock className="h-4 w-4" />
                        {featuredEvent.time}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-white/80">
                        <MapPin className="h-4 w-4" />
                        {featuredEvent.location}
                      </div>
                    </div>
                    <p className="text-white/70 text-sm mb-6">
                      {featuredEvent.description}
                    </p>
                    <Button className="bg-white text-tertiary hover:bg-white/90">
                      Register Now
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                  <div className="bg-tertiary/50 p-8 md:p-10 flex flex-col justify-center">
                    <h4 className="text-white font-semibold mb-4">
                      Event Highlights
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {featuredEvent.highlights.map((highlight, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-white/90 text-sm"
                        >
                          <div className="w-2 h-2 rounded-full bg-highlight" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Upcoming Events
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join us at our upcoming events and be part of the innovation
                movement.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <ScrollReveal key={event.id} delay={index * 0.1}>
                <Card className="border border-border/20 bg-card hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <Badge className={`${getTypeColor(event.type)} w-fit mb-4`}>
                      {event.type}
                    </Badge>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                      {event.title}
                    </h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 text-primary" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary" />
                        {event.location}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">
                      {event.description}
                    </p>
                    <Button variant="outline" className="w-full mt-auto">
                      Learn More
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Past Events
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A look back at the events that have brought our community
                together.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {pastEventsWithPhotos.map((event, index) => (
              <ScrollReveal key={event.id} delay={index * 0.1}>
                <Card className="border border-border/20 overflow-hidden hover:shadow-lg transition-shadow h-full">
                  <div className="grid grid-cols-3 gap-1 h-32">
                    {event.photos.map((photo, i) => (
                      <div
                        key={i}
                        className="bg-muted flex items-center justify-center text-4xl"
                      >
                        {photo}
                      </div>
                    ))}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge
                        variant="outline"
                        className={getTypeColor(event.type)}
                      >
                        {event.type}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        {event.attendees}+
                      </div>
                    </div>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {event.highlights}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Photo Gallery
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Moments captured from our events and programs across Tamil Nadu.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {galleryCategories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-primary" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {filteredImages.map((image, index) => (
              <ScrollReveal key={image.id} delay={index * 0.05}>
                <Card className="border border-border/20 overflow-hidden group cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center text-5xl relative">
                    {image.placeholder}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                      <p className="text-sm font-semibold text-background">
                        {image.title}
                      </p>
                      <p className="text-xs text-background/80">
                        {image.description}
                      </p>
                      <Badge variant="secondary" className="mt-2 text-xs w-fit">
                        {image.category}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <Card className="border-0 shadow-xl bg-gradient-to-r from-primary to-secondary max-w-3xl mx-auto">
              <CardContent className="p-8 md:p-12 text-center">
                <Calendar className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                  Want to Host an Event?
                </h3>
                <p className="text-white/80 mb-6 max-w-xl mx-auto">
                  Partner with us to bring startup programs, workshops, and
                  hackathons to your campus or city.
                </p>
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Get in Touch
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Events;
