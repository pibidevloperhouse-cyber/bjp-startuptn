"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Download,
  TrendingUp,
  Building2,
  Users,
  Briefcase,
  BarChart3,
  ArrowLeft,
} from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Link from "next/link";

const DISTRICTS = [
  "Ariyalur",
  "Chengalpattu",
  "Chennai",
  "Coimbatore",
  "Cuddalore",
  "Dharmapuri",
  "Dindigul",
  "Erode",
  "Kallakurichi",
  "Kancheepuram",
  "Kanyakumari",
  "Karur",
  "Krishnagiri",
  "Madurai",
  "Mayiladuthurai",
  "Nagapattinam",
  "Namakkal",
  "Nilgiris",
  "Perambalur",
  "Pudukkottai",
  "Ramanathapuram",
  "Ranipet",
  "Salem",
  "Sivaganga",
  "Tenkasi",
  "Thanjavur",
  "Theni",
  "Thoothukudi",
  "Tiruchirappalli",
  "Tirunelveli",
  "Tirupathur",
  "Tiruppur",
  "Tiruvallur",
  "Tiruvannamalai",
  "Tiruvarur",
  "Vellore",
  "Viluppuram",
  "Virudhunagar",
];

const districtData = DISTRICTS.map((district) => ({
  district,
  startups: Math.floor(Math.random() * 200) + 50,
  jobs: Math.floor(Math.random() * 1000) + 200,
  jobSeekers: Math.floor(Math.random() * 2000) + 500,
  funding: Math.floor(Math.random() * 50) + 10,
  growth: Math.floor(Math.random() * 40) - 10,
}));

const categoryData = [
  { name: "Technology", value: 1250, color: "hsl(var(--primary))" },
  { name: "Healthcare", value: 850, color: "hsl(var(--secondary))" },
  { name: "Agriculture", value: 720, color: "hsl(var(--tertiary))" },
  { name: "Education", value: 650, color: "hsl(var(--accent))" },
  { name: "Manufacturing", value: 580, color: "hsl(var(--muted))" },
  { name: "Others", value: 450, color: "hsl(var(--primary) / 0.6)" },
];

const monthlyGrowth = [
  { month: "Jan", startups: 380, jobs: 2400, funding: 150 },
  { month: "Feb", startups: 420, jobs: 2800, funding: 180 },
  { month: "Mar", startups: 490, jobs: 3200, funding: 220 },
  { month: "Apr", startups: 580, jobs: 3800, funding: 280 },
  { month: "May", startups: 670, jobs: 4400, funding: 340 },
  { month: "Jun", startups: 750, jobs: 5000, funding: 410 },
];

const topDistricts = districtData
  .sort((a, b) => b.startups - a.startups)
  .slice(0, 10);

export default function StateAdminDashboard() {
  const [selectedTab, setSelectedTab] = useState("overview");

  const totalStartups = districtData.reduce((sum, d) => sum + d.startups, 0);
  const totalJobs = districtData.reduce((sum, d) => sum + d.jobs, 0);
  const totalJobSeekers = districtData.reduce(
    (sum, d) => sum + d.jobSeekers,
    0,
  );
  const totalFunding = districtData.reduce((sum, d) => sum + d.funding, 0);

  const exportToCSV = () => {
    const headers = [
      "District",
      "Startups",
      "Jobs Posted",
      "Job Seekers",
      "Funding (Cr)",
      "Growth %",
    ];
    const rows = districtData.map((d) => [
      d.district,
      d.startups,
      d.jobs,
      d.jobSeekers,
      d.funding,
      d.growth,
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `tamil-nadu-startup-report-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-16 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
                  State Admin Dashboard
                </h1>
                <p className="text-sm text-muted-foreground">
                  Tamil Nadu Startup Ecosystem Overview
                </p>
              </div>
            </div>
            <Button onClick={exportToCSV} className="gap-2">
              <Download className="h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Startups
              </CardTitle>
              <Building2 className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">
                {totalStartups.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Across 38 districts
              </p>
            </CardContent>
          </Card>

          <Card className="border-secondary/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Jobs Created
              </CardTitle>
              <Briefcase className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">
                {totalJobs.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Active job postings
              </p>
            </CardContent>
          </Card>

          <Card className="border-tertiary/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Job Seekers</CardTitle>
              <Users className="h-4 w-4 text-tertiary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-tertiary">
                {totalJobSeekers.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Registered candidates
              </p>
            </CardContent>
          </Card>

          <Card className="border-accent/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Funding
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">
                ₹{totalFunding} Cr
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Investment raised
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="districts">Districts</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Top 10 Districts by Startups
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={topDistricts}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="hsl(var(--border))"
                      />
                      <XAxis dataKey="district" tick={{ fontSize: 12 }} />
                      <YAxis />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                        }}
                      />
                      <Bar
                        dataKey="startups"
                        fill="hsl(var(--primary))"
                        radius={[8, 8, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Startups by Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }: any) =>
                          `${name} ${(percent * 100).toFixed(0)}%`
                        }
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Monthly Growth Trends</CardTitle>
                <CardDescription>
                  Tracking startup registrations, jobs, and funding
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <LineChart data={monthlyGrowth}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="hsl(var(--border))"
                    />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="startups"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="jobs"
                      stroke="hsl(var(--secondary))"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="funding"
                      stroke="hsl(var(--tertiary))"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="districts">
            <Card>
              <CardHeader>
                <CardTitle>All 38 Districts of Tamil Nadu</CardTitle>
                <CardDescription>
                  Comprehensive district-wise breakdown
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>District</TableHead>
                        <TableHead className="text-right">Startups</TableHead>
                        <TableHead className="text-right">
                          Jobs Posted
                        </TableHead>
                        <TableHead className="text-right">
                          Job Seekers
                        </TableHead>
                        <TableHead className="text-right">
                          Funding (Cr)
                        </TableHead>
                        <TableHead className="text-right">Growth %</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {districtData.map((district) => (
                        <TableRow key={district.district}>
                          <TableCell className="font-medium">
                            {district.district}
                          </TableCell>
                          <TableCell className="text-right">
                            {district.startups}
                          </TableCell>
                          <TableCell className="text-right">
                            {district.jobs.toLocaleString()}
                          </TableCell>
                          <TableCell className="text-right">
                            {district.jobSeekers.toLocaleString()}
                          </TableCell>
                          <TableCell className="text-right">
                            ₹{district.funding}
                          </TableCell>
                          <TableCell
                            className={`text-right font-semibold ${district.growth >= 0 ? "text-secondary" : "text-destructive"}`}
                          >
                            {district.growth > 0 ? "+" : ""}
                            {district.growth}%
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Job Creation vs Startups</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={topDistricts}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="hsl(var(--border))"
                      />
                      <XAxis dataKey="district" tick={{ fontSize: 12 }} />
                      <YAxis />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                        }}
                      />
                      <Legend />
                      <Bar
                        dataKey="startups"
                        fill="hsl(var(--primary))"
                        radius={[8, 8, 0, 0]}
                      />
                      <Bar
                        dataKey="jobs"
                        fill="hsl(var(--secondary))"
                        radius={[8, 8, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Funding Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={topDistricts}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="hsl(var(--border))"
                      />
                      <XAxis dataKey="district" tick={{ fontSize: 12 }} />
                      <YAxis />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                        }}
                      />
                      <Bar
                        dataKey="funding"
                        fill="hsl(var(--tertiary))"
                        radius={[8, 8, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>District Performance Metrics</CardTitle>
                <CardDescription>
                  Startups, jobs, and job seekers across all districts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={districtData.slice(0, 15)}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="hsl(var(--border))"
                    />
                    <XAxis
                      dataKey="district"
                      tick={{ fontSize: 10 }}
                      height={80}
                    />
                    <YAxis />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="startups"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="jobSeekers"
                      stroke="hsl(var(--tertiary))"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer border-primary/20">
                <CardHeader>
                  <CardTitle>Quarterly Report</CardTitle>
                  <CardDescription>Q2 2024 Performance Summary</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        New Startups
                      </span>
                      <span className="font-semibold text-primary">+1,250</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Jobs Created
                      </span>
                      <span className="font-semibold text-secondary">
                        +8,500
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Funding Raised
                      </span>
                      <span className="font-semibold text-tertiary">
                        ₹410 Cr
                      </span>
                    </div>
                    <Button className="w-full mt-4" onClick={exportToCSV}>
                      <Download className="h-4 w-4 mr-2" />
                      Download Report
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer border-secondary/20">
                <CardHeader>
                  <CardTitle>District-wise Analysis</CardTitle>
                  <CardDescription>
                    Comprehensive district metrics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Total Districts
                      </span>
                      <span className="font-semibold">38</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Top Performer
                      </span>
                      <span className="font-semibold text-primary">
                        {topDistricts[0].district}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Avg Growth
                      </span>
                      <span className="font-semibold text-secondary">
                        +18.5%
                      </span>
                    </div>
                    <Button className="w-full mt-4" onClick={exportToCSV}>
                      <Download className="h-4 w-4 mr-2" />
                      Download Analysis
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer border-tertiary/20">
                <CardHeader>
                  <CardTitle>Sector-wise Report</CardTitle>
                  <CardDescription>
                    Industry distribution analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Leading Sector
                      </span>
                      <span className="font-semibold text-primary">
                        Technology
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Total Categories
                      </span>
                      <span className="font-semibold">6+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Diversity Index
                      </span>
                      <span className="font-semibold text-secondary">85%</span>
                    </div>
                    <Button className="w-full mt-4" onClick={exportToCSV}>
                      <Download className="h-4 w-4 mr-2" />
                      Download Report
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer border-accent/20">
                <CardHeader>
                  <CardTitle>Employment Report</CardTitle>
                  <CardDescription>Job market analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Active Jobs
                      </span>
                      <span className="font-semibold text-secondary">
                        {totalJobs.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Candidates
                      </span>
                      <span className="font-semibold text-tertiary">
                        {totalJobSeekers.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Placement Rate
                      </span>
                      <span className="font-semibold text-primary">72%</span>
                    </div>
                    <Button className="w-full mt-4" onClick={exportToCSV}>
                      <Download className="h-4 w-4 mr-2" />
                      Download Report
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
