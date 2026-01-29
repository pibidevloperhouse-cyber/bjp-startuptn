"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Lightbulb,
  Users,
  Heart,
  Rocket,
  ArrowRight,
  Building2,
  Laptop,
  Handshake,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxHero from "@/components/ParallaxHero";

const startupCategories = [
  "All",
  "Section 8 (Non-Profit)",
  "For-Profit",
  "Tech Startups",
  "Agri & Rural",
  "Social Impact",
  "Manufacturing",
  "Services",
];

const mockStartups = [
  {
    id: 1,
    name: "GreenHarvest TN",
    category: "Agri & Rural",
    description:
      "Connecting farmers directly to consumers through technology-driven supply chain.",
    stage: "Early",
    logo: "🌾",
  },
  {
    id: 2,
    name: "EduBridge",
    category: "Social Impact",
    description:
      "Making quality education accessible to rural students through hybrid learning.",
    stage: "Growth",
    logo: "📚",
  },
  {
    id: 3,
    name: "CleanTech Solutions",
    category: "Tech Startups",
    description: "IoT-based waste management system for urban municipalities.",
    stage: "Idea",
    logo: "♻️",
  },
  {
    id: 4,
    name: "Artisan Connect",
    category: "Section 8 (Non-Profit)",
    description:
      "Empowering traditional craftspeople through digital marketplaces.",
    stage: "Early",
    logo: "🎨",
  },
  {
    id: 5,
    name: "HealthFirst Mobile",
    category: "Services",
    description: "Mobile health clinics serving underserved communities.",
    stage: "Growth",
    logo: "🏥",
  },
  {
    id: 6,
    name: "TamilCraft Industries",
    category: "Manufacturing",
    description: "Modern manufacturing of traditional Tamil Nadu products.",
    stage: "Early",
    logo: "🏭",
  },
];

const Ecosystem = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredStartups =
    selectedCategory === "All"
      ? mockStartups
      : mockStartups.filter((s) => s.category === selectedCategory);

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Idea":
        return "bg-muted text-muted-foreground";
      case "Early":
        return "bg-primary/10 text-primary";
      case "Growth":
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
                Our Ecosystem
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A growing network of innovators, mentors, volunteers, and
                startups working together to build Tamil Nadu's entrepreneurial
                future.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxHero>

      <section className="py-8 border-b border-border/20 sticky top-[73px] bg-background/95 backdrop-blur-sm z-40">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="innovators" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto">
              <TabsTrigger
                value="innovators"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Lightbulb className="h-4 w-4 mr-2" />
                Innovators
              </TabsTrigger>
              <TabsTrigger
                value="mentors"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Users className="h-4 w-4 mr-2" />
                Mentors
              </TabsTrigger>
              <TabsTrigger
                value="volunteers"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Heart className="h-4 w-4 mr-2" />
                Volunteers
              </TabsTrigger>
              <TabsTrigger
                value="startups"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Rocket className="h-4 w-4 mr-2" />
                Startups
              </TabsTrigger>
            </TabsList>

            <TabsContent value="innovators" className="mt-12">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card className="border border-border/20 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Lightbulb className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-xl font-display font-semibold mb-2">
                        Students
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        College students with innovative ideas looking to
                        explore entrepreneurship.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border border-border/20 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Rocket className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-xl font-display font-semibold mb-2">
                        First-time Founders
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Aspiring entrepreneurs taking their first steps into the
                        startup world.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border border-border/20 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Building2 className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-xl font-display font-semibold mb-2">
                        Early-stage Innovators
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Founders with MVPs or prototypes seeking guidance to
                        scale.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border border-border/20 bg-primary/5 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex flex-col h-full justify-center items-center text-center">
                      <h3 className="text-xl font-display font-semibold mb-4">
                        Ready to Innovate?
                      </h3>
                      <Button className="bg-primary hover:bg-primary/90">
                        Apply as an Innovator
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="mentors" className="mt-12">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card className="border border-border/20 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Laptop className="h-8 w-8 text-secondary mb-4" />
                      <h3 className="text-xl font-display font-semibold mb-2">
                        Industry Experts
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Professionals with deep domain expertise in various
                        industries.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border border-border/20 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Rocket className="h-8 w-8 text-secondary mb-4" />
                      <h3 className="text-xl font-display font-semibold mb-2">
                        Founders
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Experienced entrepreneurs who've built successful
                        ventures.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border border-border/20 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Users className="h-8 w-8 text-secondary mb-4" />
                      <h3 className="text-xl font-display font-semibold mb-2">
                        Academicians
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Professors and researchers bridging academia and
                        industry.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border border-border/20 bg-secondary/5 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex flex-col h-full justify-center items-center text-center">
                      <h3 className="text-xl font-display font-semibold mb-4">
                        Share Your Expertise
                      </h3>
                      <Button className="bg-secondary hover:bg-secondary/90">
                        Join as a Mentor
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="volunteers" className="mt-12">
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card className="border border-border/20 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Heart className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-xl font-display font-semibold mb-2">
                        BJYM Volunteers
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Active BJYM members supporting the startup ecosystem.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border border-border/20 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Building2 className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-xl font-display font-semibold mb-2">
                        Campus Coordinators
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Student leaders driving innovation at their
                        institutions.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border border-border/20 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Handshake className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-xl font-display font-semibold mb-2">
                        Program Facilitators
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Helping organize and run events across districts.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border border-border/20 bg-primary/5 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex flex-col h-full justify-center items-center text-center">
                      <h3 className="text-xl font-display font-semibold mb-4">
                        Make a Difference
                      </h3>
                      <Button className="bg-primary hover:bg-primary/90">
                        Join as a Volunteer
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="startups" className="mt-12">
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-wrap gap-2 mb-8 justify-center">
                  {startupCategories.map((category) => (
                    <Button
                      key={category}
                      variant={
                        selectedCategory === category ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={
                        selectedCategory === category ? "bg-primary" : ""
                      }
                    >
                      {category}
                    </Button>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredStartups.map((startup) => (
                    <Card
                      key={startup.id}
                      className="border border-border/20 hover:shadow-lg transition-shadow"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-2xl">
                            {startup.logo}
                          </div>
                          <Badge className={getStageColor(startup.stage)}>
                            {startup.stage}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                          {startup.name}
                        </h3>
                        <Badge variant="outline" className="mb-3">
                          {startup.category}
                        </Badge>
                        <p className="text-sm text-muted-foreground">
                          {startup.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <div className="flex-1" />
    </div>
  );
};

export default Ecosystem;
