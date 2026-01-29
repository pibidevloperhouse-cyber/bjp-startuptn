import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  GraduationCap,
  TrendingUp,
  Heart,
  MapPin,
  Clock,
  ArrowRight,
  Users,
  Lightbulb,
  Target,
} from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const whyJoinUs = [
  {
    icon: Lightbulb,
    title: "Work on Impact",
    description: "Help shape the entrepreneurial future of Tamil Nadu's youth.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with passionate individuals who believe in youth empowerment.",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Develop leadership skills and grow with the ecosystem.",
  },
  {
    icon: Target,
    title: "Purpose-Driven",
    description: "Every day you'll be making a tangible difference in people's lives.",
  },
];

const openRoles = [
  {
    title: "District Coordinator",
    type: "Full-time",
    location: "Multiple Districts",
    description: "Lead startup ecosystem activities in your district, coordinate with local institutions and mentors.",
  },
  {
    title: "Program Lead - Mentorship",
    type: "Full-time",
    location: "Chennai",
    description: "Design and manage mentorship programs, build mentor network, track founder progress.",
  },
  {
    title: "Outreach & Partnerships",
    type: "Full-time",
    location: "Chennai / Remote",
    description: "Build partnerships with colleges, industry bodies, and ecosystem stakeholders.",
  },
  {
    title: "Content & Communications",
    type: "Full-time",
    location: "Chennai",
    description: "Create compelling content, manage social media, and lead community engagement.",
  },
];

const internships = [
  {
    title: "Campus Ambassador",
    duration: "6 months",
    description: "Represent BJYM Startup Cell at your campus and organize events.",
  },
  {
    title: "Content Intern",
    duration: "3 months",
    description: "Create social media content, blogs, and event documentation.",
  },
  {
    title: "Operations Intern",
    duration: "3 months",
    description: "Support program coordination and event management.",
  },
];

const pathways = [
  {
    step: 1,
    title: "Volunteer",
    description: "Start by volunteering at events and local activities",
  },
  {
    step: 2,
    title: "Campus Coordinator",
    description: "Lead initiatives at your institution",
  },
  {
    step: 3,
    title: "District Lead",
    description: "Take ownership of district-level programs",
  },
  {
    step: 4,
    title: "State Team",
    description: "Join the core team driving statewide impact",
  },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-6">
              <span className="underline-tricolor text-foreground">Careers With Us</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join our mission to empower young innovators across Tamil Nadu. We're looking for passionate 
              individuals who believe in the power of youth entrepreneurship.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Why Work With BJYM Startup Cell</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              More than a job, it's an opportunity to shape the entrepreneurial landscape of Tamil Nadu.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyJoinUs.map((item, index) => (
              <Card key={index} className="border border-border/20 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Open Roles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Current opportunities to join our growing team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {openRoles.map((role, index) => (
              <Card key={index} className="border-0 shadow-lg bg-card hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="outline">{role.type}</Badge>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">{role.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4" />
                    {role.location}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{role.description}</p>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Apply Now
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Internships & Fellowships</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Gain hands-on experience while contributing to Tamil Nadu's startup ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {internships.map((internship, index) => (
              <Card key={index} className="border border-border/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                    <GraduationCap className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{internship.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Clock className="h-4 w-4" />
                    {internship.duration}
                  </div>
                  <p className="text-sm text-muted-foreground">{internship.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">Volunteer-to-Leadership Pathway</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start as a volunteer and grow into a leadership role through our structured pathway.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4">
              {pathways.map((pathway, index) => (
                <div key={index} className="relative">
                  <Card className="border border-border/20 h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold">
                        {pathway.step}
                      </div>
                      <h3 className="font-display font-semibold text-foreground mb-2">{pathway.title}</h3>
                      <p className="text-xs text-muted-foreground">{pathway.description}</p>
                    </CardContent>
                  </Card>
                  {index < pathways.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-primary to-secondary max-w-xl mx-auto">
              <CardContent className="p-8 text-center">
                <Heart className="h-10 w-10 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-display font-bold text-white mb-2">Ready to Make an Impact?</h3>
                <p className="text-white/80 mb-6">
                  Whether you're looking for a role, internship, or want to volunteer, we'd love to hear from you.
                </p>
                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                  Express Interest
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
