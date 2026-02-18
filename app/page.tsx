import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import ParallaxHero from "@/components/ParallaxHero";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const stats = [
  { value: "5,000", label: "Target Startups", color: "text-primary" },
  { value: "38", label: "Districts Covered", color: "text-tertiary" },
  { value: "1L+", label: "Jobs to Create", color: "text-secondary" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ParallaxHero className="flex-1 py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Tamil Nadu BJYM Startup Cell
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold mb-6 leading-tight">
                <span className="text-tertiary leading-[1]">
                  Youth Entrepreneurship &
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary leading-[1] via-primary to-secondary bg-clip-text text-transparent">
                  Innovation Enablement
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary leading-[1] to-secondary bg-clip-text text-transparent">
                  Platform
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg md:text-xl text-tertiary/80 mb-10 max-w-3xl mx-auto leading-relaxed">
                A structured initiative supporting youth to convert ideas,
                social challenges, and research into startups, employment
                opportunities, and sustainable economic growth.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <Link href="/vision">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold rounded-full px-8 py-6 text-base shadow-lg shadow-primary/20"
                  >
                    Who We Are
                    <Sparkles className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/ecosystem">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-tertiary text-tertiary hover:bg-tertiary hover:text-white font-semibold rounded-full px-8 py-6 text-base"
                  >
                    Let's Work Together
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
              {stats.map((stat, index) => (
                <ScrollReveal key={index} delay={0.4 + index * 0.1}>
                  <div className="text-center">
                    <p
                      className={`text-4xl md:text-5xl font-display font-bold ${stat.color}`}
                    >
                      {stat.value}
                    </p>
                    <p className="text-sm text-tertiary/70 mt-1 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.7}>
              <div className="mt-16 max-w-5xl mx-auto">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary/20">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxHero>
    </div>
  );
};

export default Index;
