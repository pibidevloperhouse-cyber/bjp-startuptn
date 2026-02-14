"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Linkedin, Twitter, Mail, Instagram, Facebook } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxHero from "@/components/ParallaxHero";
import Image from "next/image";
import Link from "next/link";
import ParagraphReadMore from "@/components/ParagraphReadMore";

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
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  facebook?: string;
  email?: string;
}

const coreCommittee: TeamMember[] = [
  {
    id: 1,
    name: "Vigneshwar K",
    role: "Startup Outreach & College Engagement",
    domain: "Strategic Leadership",
    summary: "Driving statewide innovation ecosystem development",
    bio: "As the Founder of Routabit, I’m on a mission to transform how people experience India. Routabit is a platform that connects motorcycle enthusiasts with hidden cultural treasures, GI-tagged crafts, and offbeat destinations, fostering rural tourism and sustainable travel. By empowering rural communities and promoting local economies, Routabit creates travel experiences that are not just adventurous but deeply meaningful. <br /> I’ve worked with the Directorate General of Lighthouses and Lightships (DGLL) on lighthouse tourism and with the Archaeological Survey of India (ASI) to promote heritage tourism. These projects align with my goal of mapping India’s lost heritage and preserving our cultural legacy for generations to come. <br /> I served as a faculty member at the Loyola Institute of Business Administration, where I honed my passion for education, research, and thought leadership. Over the years, I developed 7 groundbreaking marketing theories and 4 innovative HR theories, earning recognition in the India Book of Records, Asia Book of Records, World Book of Records, and the Guinness Book of Records.<br /> My expertise has been sought on global platforms, including roles as an Advisory Council Member for Harvard Business Review and India Expert for Chegg Academy. These experiences reinforced my commitment to innovation and problem-solving on a global scale. <br /> I’ve also served as a corporate trainer, collaborating with organizations like Hyundai Motors, Indian Oil Corporation HQ, DMI and MMI Congregations, and Carisma Solutions. These experiences have allowed me to bring practical insights into leadership, innovation, and team development. <br /> With a unique blend of academic depth, entrepreneurial vision, and social impact, I am committed to building a future that celebrates innovation, heritage, and inclusion.",
    focusAreas: [
      "Ecosystem Strategy",
      "Government Liaison",
      "Industry Partnerships",
    ],
    contribution:
      "Every traveler who’s ventured beyond the tourist map knows this truth: the soul of India doesn’t live in its cities — it hums in the stories whispered by its villages, sculpted in the forgotten stones of ancient temples, and sung in the dialects that change every hundred kilometers. <br /> Routabit’s vision is rooted in this very essence. It’s about helping travelers reconnect with the “real” India — the one that thrives in rural heartlands, where artisans still weave stories into their crafts, where recipes are heirlooms, and where heritage is not a monument, but a way of life. <br /> Through immersive experiences and cultural discovery, Routabit encourages travelers to slow down, listen, and learn — transforming journeys into acts of preservation. <br /> Tourism has always been one of the world’s most powerful economic engines. Yet, in India, much of that potential remains untapped — especially in rural regions where craftsmen, guides, and small businesses survive on seasonal footfall and word of mouth. <br /> Routabit’s philosophy is simple but transformative: travel can revive. <br /> Every explorer who stays in a rural homestay, supports a local artisan, or attends a traditional festival isn’t just passing through — they’re investing in a living economy, empowering communities to sustain their heritage with pride and dignity. <br /> By shining light on lesser-known destinations and encouraging mindful, sustainable exploration, Routabit helps shift tourism’s impact from crowded city centers to the people and places that need it most. <br /> Recognized under the Startup India Seed Fund Scheme (SISFS), Routabit continues its mission to turn exploration into empowerment — where every traveler becomes a storyteller, every journey a revival, and every destination a chance to help India rediscover itself. <br /> Because the future of travel isn’t about finding new places — it’s about rediscovering who we are.",
    initials: "VK",
    twitter: "https://x.com/iamvigneshwar_k?",
    linkedin: "https://www.linkedin.com/in/vignu/",
    instagram: "https://www.instagram.com/vigneshwar_kannan",
    facebook: "https://www.facebook.com/profile.php?id=61572236648134",
    orbit: 1,
  },
  {
    id: 2,
    name: "Sarath Kumar R M",
    role: "CSR & Strategic Partnerships",
    domain: "Mentorship & Training",
    summary: "Building structured pathways for founder success",
    bio: "After graduating in engineering, I embarked on a career path as a business development manager in the education industry, where I honed my skills in relationship-building, strategy development, and market analysis and CSR projects. <br /> In 2019, fueled by a passion for innovation and a desire to create tangible impact, I took a bold leap into R&D for improvising Learning ability of special children (Autistic & ADHD). Result to that, I have successfully filed a patent for the work and presented 5 articles in various universities. <br /> Drawing upon my background in business development I started Steel Business, I approached this new venture with a strategic mindset, identifying market opportunities and forging key partnerships. <br /> Fast forward to 2024, and I am proud to announce that our steel business has achieved a remarkable turnover of INR 10 crore. Due to personal reasons, I handed over this to my partner and moved on. <br /> As we look ahead, I am excited to continue leveraging my entrepreneurial spirit and industry expertise to drive further growth and success. ",
    focusAreas: ["Mentor Network", "Curriculum Design", "Founder Development"],
    contribution:
      "Introducing Curious Crew: Your Partner in Empowering Non-Profits <br /> Curious Crew is not just a company; it is a collective vision nurtured by individuals from diverse backgrounds united by a common mission. At Curious Crew, we provide exemplary services and unwavering support to small- scale non-profits and budding enterprises poised for growth. Our forte lies in offering comprehensive advisory services, bespoke website development, and digital solutions engineered to enhance market visibility. Moreover, we extend our assistance by crafting impactful fundraising campaigns tailored to local causes. <br /> As a cohesive unit, we stand ready to furnish IT services, management solutions, and consultancy to non-profits across India. At Curious Crew, we embody a team of inquisitive minds driven to deliver nothing short of excellence in service. <br /> Our Commitment to Non-Governmental Organizations (NGOs) <br /> ✓ Baseline Survey: We conduct meticulous baseline surveys to lay the groundwork for informed decision making. <br /> ✓ Project Planning & Budgeting: Our adept team excels in devising comprehensive project plans and budgetary frameworks aligned with organizational goals. <br /> ✓ Project Implementation: We assume the mantle of project execution with diligence and precision, ensuring seamless implementation from inception to fruition. <br /> ✓ Social Auditing in the Field: We undertake thorough social audits in the field to gauge project impact and efficacy. <br /> ✓ Reporting: Transparent and detailed reporting mechanisms ensure accountability and facilitate informed decision-making. <br /> Aligned with Sustainable Development Goals (SDGs), all our endeavors are geared towards fostering sustainable development and social progress. <br /> Noteworthy Projects: <br /> In the fiscal year 2021-2022, we spearheaded an educational initiative in Tamil Nadu targeting the learning gap among students in grades 1 to 5. Through the implementation of Activity-Based Learning (ABL) books in English and Mathematics, we reached over 10,000 beneficiaries across 18 districts of Tamil Nadu. <br /> In 2022-2023, we undertook project monitoring and conducted baseline surveys for forthcoming initiatives. <br /> In 2023-2024, we successfully completed educational projects in Tamil Nadu and Maharashtra, benefiting over 20,000 individuals. <br /> These projects encompassed the distribution of learning kits for Integrated Child Development Services (ICDS) centers and science kits for schools. <br /> Our Approach: <br /> 1. Full-Cycle Project Implementation: Acting on behalf of NGOs, we oversee projects from inception to completion, assuming responsibility for on-the-ground operations. <br /> 2. Expertise-Driven Solutions: Leveraging the expertise of our team, we adeptly navigate project complexities, ensuring successful outcomes. <br /> 3. Timely Execution: Our streamlined processes enable prompt project completion without compromising quality or efficacy. <br /> Partner with Curious Crew today and embark on a transformative journey towards organizational growth and social impact.",
    initials: "SK",
    linkedin: "https://www.linkedin.com/in/sarath-kumar-511bb5153",
    orbit: 1,
  },
  {
    id: 3,
    name: "Mohan kumar V",
    role: "Branding & Communications",
    domain: "Government Relations",
    summary: "Navigating regulatory frameworks for startups",
    bio: "Mohan is a trans disciplinary creative force working at the intersection of design, innovation, healing, and human transformation. With a background in architecture, industrial design his career is a map of deep explorations across creative, intellectual, and spiritual domains. <br /> He is the founder of PEZA, a modular ecosystem for creative systems thinking — where design isn’t decoration, it’s a tool for realignment, awakening, and transformation. <br /> Mohan doesn’t just solve problems. He redesigns the conditions in which problems exist.",
    focusAreas: [
      "Policy Advocacy",
      "Regulatory Compliance",
      "Government Schemes",
    ],
    contribution:
      "PEZA is a modular, transdisciplinary studio built for creative systems thinking. <br /> We don’t design things. We engineer shifts — in form, function, and consciousness. <br /> We operate through six integrated verticals, each a tool in the ritual of transformation: <br /> PDS — Design Studio <br /> Architecture | Interiors | Branding | Experiential Space-Making From physical spaces to narrative systems, we craft environments that communicate, elevate, and transform. <br /> PFL — Fab Lab <br /> Prototyping | CNC | 3D Printing | Precision Manufacturing We build what others imagine. From concept to physical reality — fast, modular, and high-fidelity. <br /> PR&D — Research & Development <br /> IP Consulting | Reports | Product Roadmapping The lab within the lab — where ideas get dissected, decoded, and made future-proof. <br /> PHS — Healing Services <br /> Acupuncture | Magnetotherapy | Spatial Energy Design Where science meets subtlety. We apply energy medicine to spaces, people, and systems. <br /> PM — Metamorphosis <br /> Career Counseling | Leadership Development | Self-Exploration Helping individuals and teams evolve their inner architecture to meet their outer potential. <br /> PTS — Tech Services <br /> Blockchain | AI | IoT | Smart Environments Welcome to the PEZAVERSE — our experimental frontier for techdriven consciousness design. <br /> Core Ethos <br /> Design isn’t surface. It’s soul. We treat every project as a transformational system — connected, adaptive, and alive.",
    initials: "MK",
    facebook: "https://www.facebook.com/profile.php?id=61583507312817",
    twitter: "https://x.com/vmohan_bjp",
    instagram:
      "https://www.instagram.com/vmohan_bjp?igsh=MWtsYmVpYWtydG0yMA%3D%3D&utm_source=qr",
    linkedin: "https://www.linkedin.com/in/vmk0619/",
    orbit: 1,
  },
  {
    id: 4,
    name: "Prithiviraj B",
    role: "Social Media & Digital Outreach",
    domain: "Government Relations",
    summary: "Navigating regulatory frameworks for startups",
    bio: "I am from Pollachi , from a Farming background .I worked in abroad for few years and returned to india to start my own venture , I started by 2021 in the name <br /> The Coconut Company and successfully running my business into Coconut Exports ",
    focusAreas: [
      "Policy Advocacy",
      "Regulatory Compliance",
      "Government Schemes",
    ],
    contribution:
      "I am exporting Coconuts around 25+ countries with an annual Revenue of 25CR <br /> Also started up the Fertilizer company few months back <br /> I have been converted 1000 acres of barren lands into Agri lands in last 2 years <br /> I have been going for Guest lectures and public speaking for various colleges and Agri events ,Still now addressed more than 30,000 students all over india and moving forward to bring the young generation into startups",
    initials: "PB",
    facebook: "https://www.facebook.com/share/14Moi2ABJGK/",
    twitter: "https://x.com/prithivi_agri?s=21",
    instagram:
      "https://www.instagram.com/prithivi_agripreneur?igsh=MWV3eGVkeHczZ2Nlaw%3D%3D&utm_source=qr",
    linkedin:
      "https://www.linkedin.com/in/prithivi-raj-coconutexporter?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    orbit: 1,
  },
  {
    id: 5,
    name: "Sivakumar R",
    role: "IT, Data & Reporting Systems",
    domain: "Government Relations",
    summary: "Navigating regulatory frameworks for startups",
    bio: "Basically I have been working as MDM - IT Solution Architect and owning IT Consulting firm based out of Coimbatore. <br /> Apart from IT Firm , have been running two Non-IT business. ",
    focusAreas: [
      "Policy Advocacy",
      "Regulatory Compliance",
      "Government Schemes",
    ],
    contribution:
      "1. Founder - IT Consulting firm for Enterprise Level Customers. <br /> 2. Founder - Coco Pith Manufacturing Company. <br /> 3. Founder - Apparel / GlassRecycling Firm.",
    initials: "SR",
    linkedin: "https://www.linkedin.com/in/siva-kumar-79031423a/",
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
                  // whileHover={{ scale: 1.15 }}
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
                  // whileHover={{ scale: 1.15 }}
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
                  // whileHover={{ scale: 1.15 }}
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
              className="w-full max-w-5xl"
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

                <CardContent className="p-6 overflow-y-scroll max-h-[60vh]">
                  {/* <Badge className="bg-primary/10 text-primary mb-4">
                    {selectedMember.domain}
                  </Badge> */}
                  <p className="text-sm font-semibold text-foreground mb-2">
                    About
                  </p>

                  <ParagraphReadMore bio={selectedMember.bio} />
                  {/* 
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
                  </div> */}

                  <div className="mb-6 mt-6">
                    <p className="text-sm font-semibold text-foreground mb-2">
                      Key Achievements
                    </p>
                    <ParagraphReadMore bio={selectedMember.contribution} />
                  </div>

                  <div className="flex gap-2">
                    {selectedMember.twitter && (
                      <Link href={selectedMember.twitter} target="_blank">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-9 w-9"
                        >
                          <Twitter className="h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                    {selectedMember.linkedin && (
                      <Link href={selectedMember.linkedin} target="_blank">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-9 w-9"
                        >
                          <Linkedin className="h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                    {selectedMember.instagram && (
                      <Link href={selectedMember.instagram} target="_blank">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-9 w-9"
                        >
                          <Instagram className="h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                    {selectedMember.facebook && (
                      <Link href={selectedMember.facebook} target="_blank">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-9 w-9"
                        >
                          <Facebook className="h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                    {selectedMember.email && (
                      <Link href={`mailto:${selectedMember.email}`}>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-9 w-9"
                        >
                          <Mail className="h-4 w-4" />
                        </Button>
                      </Link>
                    )}
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
