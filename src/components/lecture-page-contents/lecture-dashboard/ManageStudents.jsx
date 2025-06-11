"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Search, MessageSquare, Mail, MoreHorizontal, Users, BookOpen, Clock, Award } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const studentsData = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@email.com",
    avatar: "/placeholder.svg?height=40&width=40",
    enrolledCourses: ["Complete React Development Course", "Advanced JavaScript Concepts"],
    totalProgress: 75,
    lastActive: "2 hours ago",
    joinDate: "2024-01-15",
    completedCourses: 1,
    totalWatchTime: "45h 30m",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@email.com",
    avatar: "/placeholder.svg?height=40&width=40",
    enrolledCourses: ["Complete React Development Course"],
    totalProgress: 45,
    lastActive: "1 day ago",
    joinDate: "2024-02-10",
    completedCourses: 0,
    totalWatchTime: "28h 15m",
  },
  {
    id: 3,
    name: "Carol Davis",
    email: "carol.davis@email.com",
    avatar: "/placeholder.svg?height=40&width=40",
    enrolledCourses: ["Advanced JavaScript Concepts", "Modern CSS and Flexbox"],
    totalProgress: 90,
    lastActive: "3 hours ago",
    joinDate: "2023-11-20",
    completedCourses: 2,
    totalWatchTime: "67h 45m",
  },
  {
    id: 4,
    name: "David Wilson",
    email: "david.wilson@email.com",
    avatar: "/placeholder.svg?height=40&width=40",
    enrolledCourses: ["Complete React Development Course"],
    totalProgress: 15,
    lastActive: "1 week ago",
    joinDate: "2024-03-05",
    completedCourses: 0,
    totalWatchTime: "12h 20m",
  },
]






export function ManageStudents() {
  const [searchTerm, setSearchTerm] = useState("")
  const [students] = useState(studentsData)

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Calculate dynamic values
  const totalStudents = students.length
  const activeStudents = students.filter(
    (student) => student.lastActive.includes("hour") || student.lastActive.includes("day"),
  ).length
  const avgProgress = Math.round(students.reduce((sum, student) => sum + student.totalProgress, 0) / students.length)
  const totalCompletions = students.reduce((sum, student) => sum + student.completedCourses, 0)
  

  // Calculate dynamic values

  const summaryCards = [
    {
      title: "Total Students",
      value: totalStudents,
      description: "Total enrolled students",
      icon: Users,
      color: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        textDark: "text-blue-700"
      }
    },
    {
      title: "Active Students", 
      value: activeStudents,
      description: "Students active this week",
      icon: Clock,
      color: {
        bg: "bg-green-100",
        text: "text-green-600", 
        textDark: "text-green-700"
      }
    },
    {
      title: "Avg. Progress",
      value: `${avgProgress}%`,
      description: "Average course completion rate",
      icon: BookOpen,
      color: {
        bg: "bg-purple-100",
        text: "text-purple-600",
        textDark: "text-purple-700"
      }
    },
    {
      title: "Completions",
      value: totalCompletions,
      description: "Total courses completed",
      icon: Award,
      color: {
        bg: "bg-orange-100", 
        text: "text-orange-600",
        textDark: "text-orange-700"
      }
    }
  ]
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Students</h1>
        <p className="text-muted-foreground">Track and engage with your students</p>
      </div>

      {/* Summary Cards */}
   

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {summaryCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Card key={index} className={`${card.color.bg} shadow-none border-0`}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                <Icon className={`h-4 w-4 ${card.color.text}`} />
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-bold ${card.color.textDark}`}>{card.value}</div>
                <p className={`text-xs ${card.color.text}`}>{card.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Students Table */}
      <Card>
        <CardHeader>
          <CardTitle>Student Overview</CardTitle>
          <CardDescription>Monitor your students' progress and engagement</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Mail className="h-4 w-4 mr-2" />
              Send Announcement
            </Button>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student</TableHead>
                  <TableHead>Enrolled Modulea</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Watch Time</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                          <AvatarFallback>
                            {student.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{student.name}</div>
                          <div className="text-sm text-muted-foreground">{student.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        {student.enrolledCourses.map((course, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {course.length > 20 ? `${course.substring(0, 20)}...` : course}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <Progress value={student.totalProgress} className="w-20" />
                        <span className="text-xs text-muted-foreground">{student.totalProgress}%</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">{student.totalWatchTime}</div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm text-muted-foreground">{student.lastActive}</div>
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
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Send Message
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Mail className="mr-2 h-4 w-4" />
                            Send Email
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <BookOpen className="mr-2 h-4 w-4" />
                            View Progress
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
