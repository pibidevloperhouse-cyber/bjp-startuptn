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
import { Search, MapPin, Briefcase, IndianRupee, Clock } from "lucide-react";
import Link from "next/link";

const MOCK_JOBS = [
  {
    id: 1,
    title: "Full Stack Developer",
    startup: "TechVenture AI",
    location: "Chennai",
    type: "Full-time",
    salary: "₹6-10 LPA",
    skills: ["React", "Node.js", "PostgreSQL"],
    posted: "2 days ago",
    applicants: 23,
  },
  {
    id: 2,
    title: "Marketing Intern",
    startup: "AgroConnect",
    location: "Coimbatore",
    type: "Internship",
    salary: "₹15k/month",
    skills: ["Social Media", "Content Writing", "SEO"],
    posted: "5 days ago",
    applicants: 45,
  },
  {
    id: 3,
    title: "UI/UX Designer",
    startup: "EduNext",
    location: "Remote",
    type: "Part-time",
    salary: "₹4-6 LPA",
    skills: ["Figma", "User Research", "Prototyping"],
    posted: "1 week ago",
    applicants: 17,
  },
];

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-16 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-display text-center font-bold text-gradient"
          >
            BJP Startup Cell - Tamil Nadu
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/startups"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Startups
            </Link>
            <Link href="/jobs" className="text-sm font-medium text-primary">
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

      <section className="bg-gradient-to-b from-secondary/5 to-background py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-gradient">
            Tamil Nadu Job Portal
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Find exciting opportunities in Tamil Nadu's startup ecosystem across
            38 districts
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <Card className="p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="chennai">Chennai</SelectItem>
                <SelectItem value="coimbatore">Coimbatore</SelectItem>
                <SelectItem value="madurai">Madurai</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
              </SelectContent>
            </Select>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="fulltime">Full-time</SelectItem>
                <SelectItem value="parttime">Part-time</SelectItem>
                <SelectItem value="internship">Internship</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        <div className="space-y-4">
          {MOCK_JOBS.map((job) => (
            <Card
              key={job.id}
              className="p-6 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center text-white font-bold">
                      {job.startup[0]}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {job.startup}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-4">
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1"
                    >
                      <MapPin className="h-3 w-3" />
                      {job.location}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1"
                    >
                      <Briefcase className="h-3 w-3" />
                      {job.type}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1"
                    >
                      <IndianRupee className="h-3 w-3" />
                      {job.salary}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {job.skills.map((skill) => (
                      <Badge
                        key={skill}
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {job.posted}
                    </span>
                    <span>{job.applicants} applicants</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Button className="whitespace-nowrap">Apply Now</Button>
                  <Button variant="outline" className="whitespace-nowrap">
                    Save Job
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Jobs;
