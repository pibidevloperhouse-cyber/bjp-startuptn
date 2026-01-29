import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Building2,
  Briefcase,
  Users,
  TrendingUp,
  CheckCircle,
  XCircle,
} from "lucide-react";
import Link from "next/link";

const DistrictDashboard = () => {
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
          <Button variant="outline" size="sm">
            Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold mb-2">
            District Dashboard
          </h1>
          <p className="text-muted-foreground">
            Chennai District - Admin Portal (Tamil Nadu)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">
                Total Startups
              </span>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-3xl font-bold">47</p>
            <p className="text-xs text-muted-foreground mt-1">
              12 approved, 8 pending
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">
                Job Postings
              </span>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-3xl font-bold">89</p>
            <p className="text-xs text-muted-foreground mt-1">
              Active positions
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Job Seekers</span>
              <Users className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-3xl font-bold">1,234</p>
            <p className="text-xs text-muted-foreground mt-1">
              Registered users
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Growth</span>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-3xl font-bold">+24%</p>
            <p className="text-xs text-muted-foreground mt-1">vs last month</p>
          </Card>
        </div>

        <Tabs defaultValue="startups" className="space-y-6">
          <TabsList>
            <TabsTrigger value="startups">Startup Approvals</TabsTrigger>
            <TabsTrigger value="jobs">Job Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="startups" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">
                Pending Startup Approvals
              </h2>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Startup Name</TableHead>
                    <TableHead>Founder</TableHead>
                    <TableHead>Sector</TableHead>
                    <TableHead>Stage</TableHead>
                    <TableHead>Submitted</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      FinNext Solutions
                    </TableCell>
                    <TableCell>Rajesh Verma</TableCell>
                    <TableCell>FinTech</TableCell>
                    <TableCell>
                      <Badge variant="outline">Early</Badge>
                    </TableCell>
                    <TableCell>2 days ago</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-secondary"
                        >
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-destructive"
                        >
                          <XCircle className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      HealthCare Plus
                    </TableCell>
                    <TableCell>Sneha Desai</TableCell>
                    <TableCell>HealthTech</TableCell>
                    <TableCell>
                      <Badge variant="outline">Idea</Badge>
                    </TableCell>
                    <TableCell>5 days ago</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-secondary"
                        >
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-destructive"
                        >
                          <XCircle className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Approved Startups</h2>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Startup Name</TableHead>
                    <TableHead>Sector</TableHead>
                    <TableHead>Stage</TableHead>
                    <TableHead>Pitch Ready</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      TechVenture AI
                    </TableCell>
                    <TableCell>AI & ML</TableCell>
                    <TableCell>
                      <Badge variant="outline">Growth</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-secondary text-secondary-foreground">
                        Yes
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button size="sm" variant="ghost">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">EduNext</TableCell>
                    <TableCell>EdTech</TableCell>
                    <TableCell>
                      <Badge variant="outline">Idea</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">No</Badge>
                    </TableCell>
                    <TableCell>
                      <Button size="sm" variant="ghost">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          <TabsContent value="jobs" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">
                Job Postings in Chennai
              </h2>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Job Title</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Applicants</TableHead>
                    <TableHead>Posted</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Full Stack Developer
                    </TableCell>
                    <TableCell>TechVenture AI</TableCell>
                    <TableCell>
                      <Badge variant="outline">Full-time</Badge>
                    </TableCell>
                    <TableCell>23</TableCell>
                    <TableCell>2 days ago</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Product Manager
                    </TableCell>
                    <TableCell>FinNext Solutions</TableCell>
                    <TableCell>
                      <Badge variant="outline">Full-time</Badge>
                    </TableCell>
                    <TableCell>31</TableCell>
                    <TableCell>1 week ago</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">District Analytics</h2>
              <p className="text-muted-foreground">
                Coming soon: Charts and detailed analytics
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DistrictDashboard;
