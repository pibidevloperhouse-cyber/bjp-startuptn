"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Linkedin, Twitter, Mail } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxHero from "@/components/ParallaxHero";
import Image from "next/image";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  domain: string;
  summary: string;
  bio: string;
  focusAreas: string[];
  contribution: string;
  initials: string;
  orbit: 1 | 2 | 3;
}

const coreCommittee: TeamMember[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "State Coordinator",
    domain: "Strategic Leadership",
    summary: "Driving statewide innovation ecosystem development",
    bio: "15+ years experience in startup ecosystem development. Former incubation lead at IIT Madras Research Park.",
    focusAreas: [
      "Ecosystem Strategy",
      "Government Liaison",
      "Industry Partnerships",
    ],
    contribution:
      "Architecting the state-level framework for youth entrepreneurship and coordinating district-level activities.",
    initials: "RK",
    orbit: 1,
  },
  {
    id: 2,
    name: "Priya Venkatesh",
    role: "Program Director",
    domain: "Mentorship & Training",
    summary: "Building structured pathways for founder success",
    bio: "Serial entrepreneur with 3 successful exits. Passionate about nurturing first-generation founders.",
    focusAreas: ["Mentor Network", "Curriculum Design", "Founder Development"],
    contribution:
      "Designing comprehensive mentorship programs and building a network of 200+ industry mentors.",
    initials: "PV",
    orbit: 1,
  },
  {
    id: 3,
    name: "Vikram Narayanan",
    role: "Policy Advisor",
    domain: "Government Relations",
    summary: "Navigating regulatory frameworks for startups",
    bio: "Former IAS officer with deep expertise in startup policy. Instrumental in drafting state startup policies.",
    focusAreas: [
      "Policy Advocacy",
      "Regulatory Compliance",
      "Government Schemes",
    ],
    contribution:
      "Helping startups leverage government schemes and navigate regulatory requirements.",
    initials: "VN",
    orbit: 1,
  },
];

const operationalTeam: TeamMember[] = [
  {
    id: 4,
    name: "Arun Shankar",
    role: "Outreach Head",
    domain: "Campus & Community",
    summary: "Connecting youth across 38 districts",
    bio: "Former AICTE innovation officer. Extensive network across Tamil Nadu's educational institutions.",
    focusAreas: [
      "Campus Programs",
      "District Coordination",
      "Youth Engagement",
    ],
    contribution:
      "Establishing partnerships with 150+ colleges and launching district-level innovation chapters.",
    initials: "AS",
    orbit: 2,
  },
  {
    id: 5,
    name: "Kavitha Rajan",
    role: "Communications Lead",
    domain: "Brand & Media",
    summary: "Amplifying startup success stories",
    bio: "Digital marketing specialist with expertise in startup branding. Previously led communications at TiE Chennai.",
    focusAreas: ["Content Strategy", "Social Media", "Event Branding"],
    contribution:
      "Building the BJYM Startup Cell brand presence and showcasing ecosystem success stories.",
    initials: "KR",
    orbit: 2,
  },
  {
    id: 6,
    name: "Suresh Mohan",
    role: "Technology Advisor",
    domain: "Tech & Innovation",
    summary: "Guiding technology-first startup solutions",
    bio: "CTO of a funded SaaS startup. Active mentor in the Chennai startup ecosystem for 8 years.",
    focusAreas: [
      "Tech Stack Guidance",
      "Product Development",
      "AI/ML Applications",
    ],
    contribution:
      "Advising startups on technology decisions and connecting them with tech resources.",
    initials: "SM",
    orbit: 2,
  },
  {
    id: 7,
    name: "Deepa Krishnan",
    role: "Partnerships Head",
    domain: "Industry & Investors",
    summary: "Building bridges between startups and opportunities",
    bio: "Investment professional with experience at leading VC firms. Strong network in the investor community.",
    focusAreas: [
      "Investor Relations",
      "Corporate Partnerships",
      "Funding Guidance",
    ],
    contribution:
      "Facilitating connections between portfolio startups and potential investors and partners.",
    initials: "DK",
    orbit: 2,
  },
  {
    id: 8,
    name: "Meera Sundaram",
    role: "Women Founders Lead",
    domain: "Women Entrepreneurship",
    summary: "Championing women-led startups across Tamil Nadu",
    bio: "Founder of a successful D2C brand. Advocate for gender diversity in entrepreneurship.",
    focusAreas: ["Women in Tech", "Inclusive Funding", "Founder Support"],
    contribution:
      "Launching initiatives to support 500+ women entrepreneurs with mentorship and funding access.",
    initials: "MS",
    orbit: 2,
  },
];

const extendedTeam: TeamMember[] = [
  {
    id: 9,
    name: "Karthik Balaji",
    role: "District Coordinator - North",
    domain: "Regional Operations",
    summary: "Expanding ecosystem reach in northern districts",
    bio: "Grassroots organizer with 10 years of experience in youth movements and community building.",
    focusAreas: ["District Chapters", "Local Partnerships", "Talent Pipeline"],
    contribution:
      "Establishing startup cells in 12 northern districts and building local mentor networks.",
    initials: "KB",
    orbit: 3,
  },
  {
    id: 10,
    name: "Lakshmi Devi",
    role: "District Coordinator - South",
    domain: "Regional Operations",
    summary: "Strengthening startup culture in southern districts",
    bio: "Former college professor turned entrepreneur. Strong connections with educational institutions.",
    focusAreas: [
      "Academic Partnerships",
      "Student Startups",
      "Rural Innovation",
    ],
    contribution:
      "Launching innovation labs in 10 southern district colleges and supporting rural entrepreneurs.",
    initials: "LD",
    orbit: 3,
  },
  {
    id: 11,
    name: "Sanjay Ramesh",
    role: "Finance & Compliance Head",
    domain: "Finance & Legal",
    summary: "Ensuring financial governance and startup compliance",
    bio: "Chartered Accountant with expertise in startup finance. Advisor to 50+ funded startups.",
    focusAreas: [
      "Financial Planning",
      "Legal Compliance",
      "Investor Documentation",
    ],
    contribution:
      "Providing financial guidance and ensuring proper governance for ecosystem operations.",
    initials: "SR",
    orbit: 3,
  },
  {
    id: 12,
    name: "Anitha Murali",
    role: "Events & Hackathons Lead",
    domain: "Events & Engagement",
    summary: "Creating platforms for innovation and networking",
    bio: "Event management professional with experience organizing 100+ startup events and hackathons.",
    focusAreas: ["Hackathons", "Demo Days", "Networking Events"],
    contribution:
      "Organizing quarterly hackathons and the annual BJYM Startup Summit.",
    initials: "AM",
    orbit: 3,
  },
  {
    id: 13,
    name: "Ravi Chandran",
    role: "Incubation Manager",
    domain: "Startup Incubation",
    summary: "Nurturing early-stage startups to market readiness",
    bio: "Former startup founder with incubation management experience at T-Hub and NSRCEL.",
    focusAreas: ["Incubation Programs", "MVP Development", "Market Validation"],
    contribution:
      "Running the 6-month incubation program and supporting 30+ startups annually.",
    initials: "RC",
    orbit: 3,
  },
  {
    id: 14,
    name: "Divya Prakash",
    role: "Social Media Manager",
    domain: "Digital Presence",
    summary: "Building online community and digital engagement",
    bio: "Social media strategist with expertise in building engaged communities for startups and organizations.",
    focusAreas: [
      "Community Building",
      "Content Creation",
      "Influencer Outreach",
    ],
    contribution:
      "Growing the ecosystem's social media presence to 100K+ followers across platforms.",
    initials: "DP",
    orbit: 3,
  },
];

const allMembers = [...coreCommittee, ...operationalTeam, ...extendedTeam];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [hoveredMember, setHoveredMember] = useState<TeamMember | null>(null);
  const [orbitAngles, setOrbitAngles] = useState({
    orbit1: 0,
    orbit2: 0,
    orbit3: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setOrbitAngles((prev) => ({
        orbit1: prev.orbit1 + 0.08,
        orbit2: prev.orbit2 - 0.12,
        orbit3: prev.orbit3 + 0.18,
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const handleClose = () => {
    setSelectedMember(null);
  };

  const getOrbitColor = (orbit: number) => {
    switch (orbit) {
      case 1:
        return "from-primary to-primary/80";
      case 2:
        return "from-secondary to-secondary/80";
      case 3:
        return "from-tertiary to-tertiary/80";
      default:
        return "from-primary to-primary/80";
    }
  };

  const getOrbitPosition = (
    index: number,
    total: number,
    radius: number,
    baseAngle: number,
  ) => {
    const angle = (index * 2 * Math.PI) / total + (baseAngle * Math.PI) / 180;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y };
  };

  const isSlowed = selectedMember !== null || hoveredMember !== null;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ParallaxHero className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold mb-4 text-gradient">
                Our Team
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A living ecosystem of leaders, advisors, and coordinators
                working in harmony to build Tamil Nadu's startup future.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxHero>

      <section className="hidden lg:block py-8 flex-1">
        <div className="container mx-auto px-4">
          <div className="relative w-full max-w-4xl mx-auto aspect-square">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="absolute w-[95%] h-[95%] rounded-full border border-dashed border-tertiary/20"
                animate={{ rotate: isSlowed ? 0 : 360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute w-[65%] h-[65%] rounded-full border border-dashed border-secondary/25"
                animate={{ rotate: isSlowed ? 0 : -360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute w-[38%] h-[38%] rounded-full border border-dashed border-primary/30"
                animate={{ rotate: isSlowed ? 0 : 360 }}
                transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <AnimatePresence>
              {(selectedMember || hoveredMember) && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <svg className="w-full h-full">
                    <defs>
                      <linearGradient
                        id="connectionGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          stopColor="hsl(var(--primary))"
                          stopOpacity="0.6"
                        />
                        <stop
                          offset="100%"
                          stopColor="hsl(var(--secondary))"
                          stopOpacity="0.6"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <motion.div
                className="relative"
                animate={{
                  scale: selectedMember ? 1.1 : 1,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl animate-pulse" />
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 blur-md" />

                <div className="relative w-24 h-24 rounded-full bg-white shadow-2xl flex items-center justify-center p-4 border-2 border-border/20">
                  <Image
                    fill
                    src={"/logo.png"}
                    alt="BJYM Startup Cell"
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </div>

            {coreCommittee.map((member, index) => {
              const { x, y } = getOrbitPosition(
                index,
                coreCommittee.length,
                18,
                orbitAngles.orbit1,
              );
              const isActive =
                selectedMember?.id === member.id ||
                hoveredMember?.id === member.id;

              return (
                <motion.button
                  key={member.id}
                  className="absolute z-10"
                  style={{
                    left: `calc(50% + ${x}%)`,
                    top: `calc(50% + ${y}%)`,
                    transform: "translate(-50%, -50%)",
                  }}
                  whileHover={{ scale: 1.15 }}
                  onClick={() => handleMemberClick(member)}
                  onMouseEnter={() => setHoveredMember(member)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <div
                    className={`relative w-14 h-14 rounded-full bg-gradient-to-br ${getOrbitColor(1)} flex items-center justify-center text-white font-bold shadow-lg transition-all duration-300 ${isActive ? "ring-4 ring-primary/50 scale-110" : ""}`}
                  >
                    {member.initials}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-white/20"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}
                  </div>
                  <p className="text-xs text-center mt-1 text-muted-foreground font-medium whitespace-nowrap">
                    {member.name.split(" ")[0]}
                  </p>
                </motion.button>
              );
            })}

            {operationalTeam.map((member, index) => {
              const { x, y } = getOrbitPosition(
                index,
                operationalTeam.length,
                31,
                orbitAngles.orbit2,
              );
              const isActive =
                selectedMember?.id === member.id ||
                hoveredMember?.id === member.id;

              return (
                <motion.button
                  key={member.id}
                  className="absolute z-10"
                  style={{
                    left: `calc(50% + ${x}%)`,
                    top: `calc(50% + ${y}%)`,
                    transform: "translate(-50%, -50%)",
                  }}
                  whileHover={{ scale: 1.15 }}
                  onClick={() => handleMemberClick(member)}
                  onMouseEnter={() => setHoveredMember(member)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <div
                    className={`relative w-12 h-12 rounded-full bg-gradient-to-br ${getOrbitColor(2)} flex items-center justify-center text-white font-bold shadow-lg transition-all duration-300 ${isActive ? "ring-4 ring-secondary/50 scale-110" : ""}`}
                  >
                    {member.initials}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-white/20"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}
                  </div>
                  <p className="text-xs text-center mt-1 text-muted-foreground font-medium whitespace-nowrap">
                    {member.name.split(" ")[0]}
                  </p>
                </motion.button>
              );
            })}

            {extendedTeam.map((member, index) => {
              const { x, y } = getOrbitPosition(
                index,
                extendedTeam.length,
                45,
                orbitAngles.orbit3,
              );
              const isActive =
                selectedMember?.id === member.id ||
                hoveredMember?.id === member.id;

              return (
                <motion.button
                  key={member.id}
                  className="absolute z-10"
                  style={{
                    left: `calc(50% + ${x}%)`,
                    top: `calc(50% + ${y}%)`,
                    transform: "translate(-50%, -50%)",
                  }}
                  whileHover={{ scale: 1.15 }}
                  onClick={() => handleMemberClick(member)}
                  onMouseEnter={() => setHoveredMember(member)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <div
                    className={`relative w-11 h-11 rounded-full bg-gradient-to-br ${getOrbitColor(3)} flex items-center justify-center text-white text-sm font-bold shadow-lg transition-all duration-300 ${isActive ? "ring-4 ring-tertiary/50 scale-110" : ""}`}
                  >
                    {member.initials}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-white/20"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}
                  </div>
                  <p className="text-xs text-center mt-1 text-muted-foreground font-medium whitespace-nowrap">
                    {member.name.split(" ")[0]}
                  </p>
                </motion.button>
              );
            })}
          </div>

          <div className="flex justify-center gap-8 mt-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground">
                Core Committee
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-secondary" />
              <span className="text-sm text-muted-foreground">
                Operational Leads
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-tertiary" />
              <span className="text-sm text-muted-foreground">
                Extended Team
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:hidden py-8">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl animate-pulse" />
                <div className="relative w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center p-3 border-2 border-border/20">
                  <Image
                    src={"/logo.png"}
                    alt="BJYM Startup Cell"
                    className="object-contain"
                    fill
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mb-8 flex flex-col items-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <h3 className="text-lg font-display font-bold text-foreground">
                  Core Committee
                </h3>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {coreCommittee.map((member) => (
                  <button
                    key={member.id}
                    onClick={() => handleMemberClick(member)}
                    className="flex-shrink-0 flex flex-col items-center"
                  >
                    <div
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${getOrbitColor(1)} flex items-center justify-center text-white font-bold shadow-md`}
                    >
                      {member.initials}
                    </div>
                    <p className="text-xs text-center mt-2 text-muted-foreground font-medium">
                      {member.name.split(" ")[0]}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mb-8 flex flex-col items-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-secondary" />
                <h3 className="text-lg font-display font-bold text-foreground">
                  Operational Leads
                </h3>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {operationalTeam.map((member) => (
                  <button
                    key={member.id}
                    onClick={() => handleMemberClick(member)}
                    className="flex-shrink-0 flex flex-col items-center"
                  >
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${getOrbitColor(2)} flex items-center justify-center text-white font-bold shadow-md`}
                    >
                      {member.initials}
                    </div>
                    <p className="text-xs text-center mt-2 text-muted-foreground font-medium">
                      {member.name.split(" ")[0]}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="mb-8 flex flex-col items-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-tertiary" />
                <h3 className="text-lg font-display font-bold text-foreground">
                  Extended Team
                </h3>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {extendedTeam.map((member) => (
                  <button
                    key={member.id}
                    onClick={() => handleMemberClick(member)}
                    className="flex-shrink-0 flex flex-col items-center"
                  >
                    <div
                      className={`w-11 h-11 rounded-full bg-gradient-to-br ${getOrbitColor(3)} flex items-center justify-center text-white text-sm font-bold shadow-md`}
                    >
                      {member.initials}
                    </div>
                    <p className="text-xs text-center mt-2 text-muted-foreground font-medium">
                      {member.name.split(" ")[0]}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="w-full max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <Card className="border-0 shadow-2xl bg-card overflow-hidden">
                <div
                  className={`p-6 bg-gradient-to-br ${getOrbitColor(selectedMember.orbit)} text-white relative`}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/20"
                    onClick={handleClose}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold">
                      {selectedMember.initials}
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold">
                        {selectedMember.name}
                      </h3>
                      <p className="text-white/80">{selectedMember.role}</p>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <Badge className="bg-primary/10 text-primary mb-4">
                    {selectedMember.domain}
                  </Badge>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {selectedMember.bio}
                  </p>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-foreground mb-2">
                      Focus Areas
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.focusAreas.map((area, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground mb-2">
                      Contribution
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {selectedMember.contribution}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="h-9 w-9">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-9 w-9">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-9 w-9">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Team;
