"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, MapPin, TrendingUp, Users, CheckCircle } from "lucide-react";
import Link from "next/link";

const MOCK_STARTUPS = [
  {
    id: 1,
    name: "TechVenture AI",
    founder: "Rahul Sharma",
    sector: "AI & ML",
    district: "Chennai",
    stage: "Growth",
    description: "Building AI-powered solutions for enterprise automation",
    teamSize: 15,
    isPitchReady: true,
    traction: "50+ clients, ₹2Cr ARR",
  },
  {
    id: 2,
    name: "AgroConnect",
    founder: "Priya Patel",
    sector: "AgriTech",
    district: "Coimbatore",
    stage: "Early",
    description: "Connecting farmers directly with urban consumers",
    teamSize: 8,
    isPitchReady: true,
    traction: "1000+ farmers onboarded",
  },
  {
    id: 3,
    name: "EduNext",
    founder: "Amit Kumar",
    sector: "EdTech",
    district: "Madurai",
    stage: "Idea",
    description: "Vernacular language learning platform for rural students",
    teamSize: 5,
    isPitchReady: false,
    traction: "Pilot in 10 schools",
  },
];

const Startups = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sectorFilter, setSectorFilter] = useState("all");
  const [districtFilter, setDistrictFilter] = useState("all");
  const [stageFilter, setStageFilter] = useState("all");

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-16 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-display font-bold text-gradient"
          >
            BJP Startup Cell - Tamil Nadu
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/startups" className="text-sm font-medium text-primary">
              Startups
            </Link>
            <Link
              href="/jobs"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Jobs
            </Link>
            <Link
              href="/auth"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-gradient">
            Tamil Nadu Startup Directory
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Discover innovative startups building the future across 38 districts
            of Tamil Nadu
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <Card className="p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search startups..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={sectorFilter} onValueChange={setSectorFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Sector" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sectors</SelectItem>
                <SelectItem value="ai">AI & ML</SelectItem>
                <SelectItem value="agritech">AgriTech</SelectItem>
                <SelectItem value="edtech">EdTech</SelectItem>
                <SelectItem value="fintech">FinTech</SelectItem>
              </SelectContent>
            </Select>
            <Select value={districtFilter} onValueChange={setDistrictFilter}>
              <SelectTrigger>
                <SelectValue placeholder="District" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Districts</SelectItem>
                <SelectItem value="chennai">Chennai</SelectItem>
                <SelectItem value="coimbatore">Coimbatore</SelectItem>
                <SelectItem value="madurai">Madurai</SelectItem>
                <SelectItem value="salem">Salem</SelectItem>
                <SelectItem value="tiruchirappalli">Tiruchirappalli</SelectItem>
              </SelectContent>
            </Select>
            <Select value={stageFilter} onValueChange={setStageFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Stage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Stages</SelectItem>
                <SelectItem value="idea">Idea</SelectItem>
                <SelectItem value="early">Early</SelectItem>
                <SelectItem value="growth">Growth</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_STARTUPS.map((startup) => (
            <Card
              key={startup.id}
              className="p-6 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">{startup.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    by {startup.founder}
                  </p>
                </div>
                {startup.isPitchReady && (
                  <Badge className="bg-secondary text-secondary-foreground">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Pitch Ready
                  </Badge>
                )}
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                {startup.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">{startup.sector}</Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {startup.district}
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  {startup.stage}
                </Badge>
              </div>

              <div className="border-t border-border pt-4 mb-4">
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    {startup.teamSize} members
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>Traction:</strong> {startup.traction}
                </p>
              </div>

              <Button className="w-full" variant="outline">
                View Profile
              </Button>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Startups;
