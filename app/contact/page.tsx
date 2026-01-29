import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxHero from "@/components/ParallaxHero";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ParallaxHero className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold mb-4 text-gradient">
                Get in Touch
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-tertiary/70 leading-relaxed">
                Have questions about our startup ecosystem? Want to partner with
                us? We'd love to hear from you.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxHero>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            <ScrollReveal direction="left">
              <Card className="border border-border/20">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-display font-bold text-tertiary mb-6">
                    Send us a message
                  </h2>
                  <form className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-tertiary mb-2 block">
                          First Name
                        </label>
                        <Input
                          placeholder="John"
                          className="border-border/30"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-tertiary mb-2 block">
                          Last Name
                        </label>
                        <Input placeholder="Doe" className="border-border/30" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-tertiary mb-2 block">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        className="border-border/30"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-tertiary mb-2 block">
                        Subject
                      </label>
                      <Input
                        placeholder="How can we help?"
                        className="border-border/30"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-tertiary mb-2 block">
                        Message
                      </label>
                      <Textarea
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        className="border-border/30"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold rounded-full py-6"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>

            <div className="space-y-8">
              <ScrollReveal direction="right">
                <div>
                  <h2 className="text-2xl font-display font-bold text-tertiary mb-6">
                    Contact Information
                  </h2>
                  <p className="text-tertiary/70 leading-relaxed">
                    Reach out to us through any of the following channels. Our
                    team is ready to assist you in your startup journey.
                  </p>
                </div>
              </ScrollReveal>

              <div className="space-y-6">
                <ScrollReveal direction="right" delay={0.1}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-tertiary mb-1">
                        Address
                      </h3>
                      <p className="text-tertiary/70 text-sm">
                        BJYM Startup Cell
                        <br />
                        Tamil Nadu, India
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={0.2}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-tertiary mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:contact@bjymstartupcell.in"
                        className="text-primary hover:underline text-sm"
                      >
                        contact@bjymstartupcell.in
                      </a>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={0.3}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-tertiary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-tertiary mb-1">
                        Phone
                      </h3>
                      <p className="text-tertiary/70 text-sm">Coming Soon</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal direction="right" delay={0.4}>
                <div className="h-48 rounded-2xl bg-muted/50 border border-border/20 flex items-center justify-center">
                  <p className="text-tertiary/50 text-sm">
                    Map integration coming soon
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
