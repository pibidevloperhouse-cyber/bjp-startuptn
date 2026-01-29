import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Eye,
  Heart,
  Lightbulb,
  Users,
  TrendingUp,
  CheckCircle,
  XCircle,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxHero from "@/components/ParallaxHero";

const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We believe every young mind holds the potential to create solutions that transform communities and industries.",
  },
  {
    icon: Users,
    title: "Collaborative Growth",
    description:
      "Success is built through partnerships, mentorship, and shared learning across our statewide network.",
  },
  {
    icon: Heart,
    title: "Inclusive Access",
    description:
      "Entrepreneurship opportunities should be accessible to youth from every district, regardless of background.",
  },
  {
    icon: TrendingUp,
    title: "Impact-Driven",
    description:
      "We measure success not just in startups launched, but in jobs created and communities strengthened.",
  },
];

const whatWeAre = [
  "A pre-incubation ecosystem for early-stage innovators",
  "A mentorship network connecting youth with industry experts",
  "A platform for skill-building and entrepreneurship education",
  "A statewide community of young changemakers",
  "A bridge between ideas and execution",
];

const whatWeAreNot = [
  "A funding or investment body",
  "A government scheme or subsidy program",
  "A placement agency or job portal",
  "A political organization",
  "A substitute for formal incubators or accelerators",
];

const Vision = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ParallaxHero className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold mb-6 text-gradient">
                Our Vision
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Building a generation of empowered young entrepreneurs who will
                shape Tamil Nadu's future through innovation, responsibility,
                and sustainable impact.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxHero>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                  Who We Are
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  BJYM Startup Cell - Tamil Nadu is a youth-driven initiative
                  focused on nurturing the entrepreneurial spirit among young
                  Indians. We are not a funding body or a political platform —
                  we are an ecosystem dedicated to transforming aspiring
                  innovators into confident, capable founders.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal delay={0}>
              <Card className="border-0 shadow-lg bg-card h-full">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <Target className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To create a structured pre-incubation ecosystem that equips
                    students, first-time founders, and early-stage innovators
                    with the mentorship, skills, and network needed to transform
                    their ideas into sustainable startups that create employment
                    and drive development across Tamil Nadu.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <Card className="border-0 shadow-lg bg-card h-full">
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                    <Eye className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To establish Tamil Nadu as a leading hub for youth
                    entrepreneurship by building a statewide network of
                    innovation-ready young founders, supported by experienced
                    mentors, and connected through a vibrant ecosystem that
                    celebrates creativity, resilience, and impact.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                Core Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do and shape how we work
                with our community.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="border border-border/20 bg-card hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ScrollReveal delay={0}>
              <Card className="border-0 shadow-lg bg-card h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
                    <CheckCircle className="h-7 w-7 text-secondary" />
                    What We Are
                  </h3>
                  <ul className="space-y-4">
                    {whatWeAre.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <Card className="border-0 shadow-lg bg-card h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
                    <XCircle className="h-7 w-7 text-destructive" />
                    What We Are Not
                  </h3>
                  <ul className="space-y-4">
                    {whatWeAreNot.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
