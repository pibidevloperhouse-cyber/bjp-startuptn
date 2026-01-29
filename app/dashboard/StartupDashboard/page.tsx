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
import { BarChart3, Briefcase, Users, Eye, Plus, Edit } from "lucide-react";
import Link from "next/link";

const StartupDashboard = () => {
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
            Startup Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage your startup profile and job postings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">
                Profile Views
              </span>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-3xl font-bold">1,234</p>
            <p className="text-xs text-muted-foreground mt-1">
              +12% from last month
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Active Jobs</span>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-3xl font-bold">3</p>
            <p className="text-xs text-muted-foreground mt-1">
              2 positions open
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">
                Applications
              </span>
              <Users className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-3xl font-bold">85</p>
            <p className="text-xs text-muted-foreground mt-1">
              23 new this week
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Status</span>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </div>
            <Badge className="bg-secondary text-secondary-foreground">
              Pitch Ready
            </Badge>
            <p className="text-xs text-muted-foreground mt-1">
              Approved by admin
            </p>
          </Card>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList>
            <TabsTrigger value="profile">My Profile</TabsTrigger>
            <TabsTrigger value="jobs">Job Postings</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Startup Profile</h2>
                <Button variant="outline">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Basic Information</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-muted-foreground">
                        Startup Name:
                      </span>
                      <p className="font-medium">TechVenture AI</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Founder:</span>
                      <p className="font-medium">Rahul Sharma</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Sector:</span>
                      <p className="font-medium">AI & ML</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">District:</span>
                      <p className="font-medium">Chennai</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Stage:</span>
                      <p className="font-medium">Growth</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Traction & Team</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-muted-foreground">Team Size:</span>
                      <p className="font-medium">15 members</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Traction:</span>
                      <p className="font-medium">50+ clients, ₹2Cr ARR</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Website:</span>
                      <p className="font-medium text-primary">techventure.ai</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">
                        Registration:
                      </span>
                      <p className="font-medium">MH12345678</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="jobs" className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Job Postings</h2>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Job
                </Button>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Position</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Applicants</TableHead>
                    <TableHead>Posted</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Full Stack Developer
                    </TableCell>
                    <TableCell>Full-time</TableCell>
                    <TableCell>23</TableCell>
                    <TableCell>2 days ago</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="bg-secondary/10 text-secondary"
                      >
                        Active
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      UI/UX Designer
                    </TableCell>
                    <TableCell>Part-time</TableCell>
                    <TableCell>45</TableCell>
                    <TableCell>1 week ago</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="bg-secondary/10 text-secondary"
                      >
                        Active
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Recent Applications</h2>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Candidate</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Applied</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Amit Kumar</TableCell>
                    <TableCell>Full Stack Developer</TableCell>
                    <TableCell>1 day ago</TableCell>
                    <TableCell>
                      <Badge variant="outline">New</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        Review
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Priya Patel</TableCell>
                    <TableCell>UI/UX Designer</TableCell>
                    <TableCell>2 days ago</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="bg-secondary/10 text-secondary"
                      >
                        Shortlisted
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StartupDashboard;
