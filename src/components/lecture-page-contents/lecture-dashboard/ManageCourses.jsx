"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Search, MoreHorizontal, Eye, Edit, BarChart3, Users, Star, DollarSign, Play, Pause } from "lucide-react"

const coursesData = [
  {
    id: 1,
    title: "Complete React Development Course",
    category: "Programming",
    status: "published",
    students: 1250,
    rating: 4.8,
    reviews: 234,
    earnings: 8750,
    lastUpdated: "2024-06-15",
    thumbnail: "/placeholder.svg?height=120&width=200",
    progress: 100,
  },
  {
    id: 2,
    title: "Advanced JavaScript Concepts",
    category: "Programming",
    status: "published",
    students: 890,
    rating: 4.9,
    reviews: 156,
    earnings: 6230,
    lastUpdated: "2024-06-10",
    thumbnail: "/placeholder.svg?height=120&width=200",
    progress: 100,
  },
  {
    id: 3,
    title: "Node.js Backend Development",
    category: "Programming",
    status: "draft",
    students: 0,
    rating: 0,
    reviews: 0,
    earnings: 0,
    lastUpdated: "2024-06-20",
    thumbnail: "/placeholder.svg?height=120&width=200",
    progress: 65,
  },
  {
    id: 4,
    title: "Modern CSS and Flexbox",
    category: "Design",
    status: "published",
    students: 567,
    rating: 4.7,
    reviews: 89,
    earnings: 3969,
    lastUpdated: "2024-05-28",
    thumbnail: "/placeholder.svg?height=120&width=200",
    progress: 100,
  },
  {
    id: 5,
    title: "React Native Mobile Apps",
    category: "Mobile Development",
    status: "under-review",
    students: 0,
    rating: 0,
    reviews: 0,
    earnings: 0,
    lastUpdated: "2024-06-18",
    thumbnail: "/placeholder.svg?height=120&width=200",
    progress: 100,
  },
]

export function ManageCourses() {
  const [searchTerm, setSearchTerm] = useState("")
  const [courses, setCourses] = useState(coursesData)

  const filteredCourses = courses.filter((course) => course.title.toLowerCase().includes(searchTerm.toLowerCase()))

  const getStatusBadge = (status) => {
    switch (status) {
      case "published":
        return <Badge className="bg-green-100 text-green-800">Published</Badge>
      case "draft":
        return <Badge variant="secondary">Draft</Badge>
      case "under-review":
        return (
          <Badge variant="outline" className="border-yellow-500 text-yellow-700">
            Under Review
          </Badge>
        )
      case "rejected":
        return <Badge variant="destructive">Rejected</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const handleToggleStatus = (courseId) => {
    setCourses(
      courses.map((course) =>
        course.id === courseId ? { ...course, status: course.status === "published" ? "draft" : "published" } : course,
      ),
    )
  }

  const totalStudents = courses.reduce((sum, course) => sum + course.students, 0)
  const totalEarnings = courses.reduce((sum, course) => sum + course.earnings, 0)
  const publishedCourses = courses.filter((course) => course.status === "published").length

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Courses</h1>
        <p className="text-muted-foreground">Manage and track your course performance</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
            <Play className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{courses.length}</div>
            <p className="text-xs text-muted-foreground">{publishedCourses} published</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalStudents.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Across all courses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalEarnings.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Lifetime earnings</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {(
                courses.filter((c) => c.rating > 0).reduce((sum, c) => sum + c.rating, 0) /
                  courses.filter((c) => c.rating > 0).length || 0
              ).toFixed(1)}
            </div>
            <p className="text-xs text-muted-foreground">From student reviews</p>
          </CardContent>
        </Card>
      </div>

      {/* Courses Management */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Course Management</CardTitle>
              <CardDescription>View and manage all your courses</CardDescription>
            </div>
            <Button>Create New Course</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search your courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Students</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Earnings</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCourses.map((course) => (
                  <TableRow key={course.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <img
                          src={course.thumbnail || "/placeholder.svg"}
                          alt={course.title}
                          className="w-16 h-10 object-cover rounded"
                        />
                        <div>
                          <div className="font-medium">{course.title}</div>
                          <div className="text-sm text-muted-foreground">{course.category}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(course.status)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        {course.students.toLocaleString()}
                      </div>
                    </TableCell>
                    <TableCell>
                      {course.rating > 0 ? (
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{course.rating}</span>
                          <span className="text-muted-foreground text-sm">({course.reviews})</span>
                        </div>
                      ) : (
                        <span className="text-muted-foreground">No ratings</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />${course.earnings.toLocaleString()}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={course.progress} className="w-16" />
                        <span className="text-sm text-muted-foreground">{course.progress}%</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            View Course
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Course
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <BarChart3 className="mr-2 h-4 w-4" />
                            View Analytics
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleToggleStatus(course.id)}>
                            {course.status === "published" ? (
                              <>
                                <Pause className="mr-2 h-4 w-4" />
                                Unpublish
                              </>
                            ) : (
                              <>
                                <Play className="mr-2 h-4 w-4" />
                                Publish
                              </>
                            )}
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
