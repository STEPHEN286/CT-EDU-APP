"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Users, BookOpen, DollarSign, Star, TrendingUp, MessageSquare, Eye, Play, Filter, Search, Calendar, X } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

const summaryData = [
  {
    title: "Total Students",
    value: "2,847",
    change: "+12.5%",
    icon: Users,
    color: "text-blue-600",
  },
  {
    title: "Active Courses",
    value: "8",
    change: "+2",
    icon: BookOpen,
    color: "text-green-600",
  },
  // {
  //   title: "Total Earnings",
  //   value: "$12,450",
  //   change: "+23.1%",
  //   icon: DollarSign,
  //   color: "text-yellow-600",
  // },
  {
    title: "Average Rating",
    value: "4.8",
    change: "+0.2",
    icon: Star,
    color: "text-purple-600",
  },
]

// Complete data for different time periods
const allEnrollmentData = {
  "1-month": [
    { month: "Jun", enrollments: 67 }
  ],
  "3-months": [
    { month: "Apr", enrollments: 61 },
    { month: "May", enrollments: 55 },
    { month: "Jun", enrollments: 67 }
  ],
  "6-months": [
    { month: "Jan", enrollments: 45 },
    { month: "Feb", enrollments: 52 },
    { month: "Mar", enrollments: 48 },
    { month: "Apr", enrollments: 61 },
    { month: "May", enrollments: 55 },
    { month: "Jun", enrollments: 67 }
  ],
  "1-year": [
    { month: "Jul '23", enrollments: 38 },
    { month: "Aug '23", enrollments: 42 },
    { month: "Sep '23", enrollments: 35 },
    { month: "Oct '23", enrollments: 41 },
    { month: "Nov '23", enrollments: 39 },
    { month: "Dec '23", enrollments: 44 },
    { month: "Jan", enrollments: 45 },
    { month: "Feb", enrollments: 52 },
    { month: "Mar", enrollments: 48 },
    { month: "Apr", enrollments: 61 },
    { month: "May", enrollments: 55 },
    { month: "Jun", enrollments: 67 }
  ],
  "all-time": [
    { month: "Jan '22", enrollments: 15 },
    { month: "Apr '22", enrollments: 23 },
    { month: "Jul '22", enrollments: 28 },
    { month: "Oct '22", enrollments: 32 },
    { month: "Jan '23", enrollments: 35 },
    { month: "Apr '23", enrollments: 38 },
    { month: "Jul '23", enrollments: 38 },
    { month: "Oct '23", enrollments: 41 },
    { month: "Jan", enrollments: 45 },
    { month: "Apr", enrollments: 61 },
    { month: "Jun", enrollments: 67 }
  ]
}

// const allEarningsData = {
//   "1-month": [
//     { month: "Jun", earnings: 2450 }
//   ],
//   "3-months": [
//     { month: "Apr", earnings: 2400 },
//     { month: "May", earnings: 2200 },
//     { month: "Jun", earnings: 2450 }
//   ],
//   "6-months": [
//     { month: "Jan", earnings: 1800 },
//     { month: "Feb", earnings: 2100 },
//     { month: "Mar", earnings: 1950 },
//     { month: "Apr", earnings: 2400 },
//     { month: "May", earnings: 2200 },
//     { month: "Jun", earnings: 2450 }
//   ],
//   "1-year": [
//     { month: "Jul '23", earnings: 1200 },
//     { month: "Aug '23", earnings: 1350 },
//     { month: "Sep '23", earnings: 1100 },
//     { month: "Oct '23", earnings: 1400 },
//     { month: "Nov '23", earnings: 1250 },
//     { month: "Dec '23", earnings: 1600 },
//     { month: "Jan", earnings: 1800 },
//     { month: "Feb", earnings: 2100 },
//     { month: "Mar", earnings: 1950 },
//     { month: "Apr", earnings: 2400 },
//     { month: "May", earnings: 2200 },
//     { month: "Jun", earnings: 2450 }
//   ],
//   "all-time": [
//     { month: "Q1 '22", earnings: 800 },
//     { month: "Q2 '22", earnings: 1100 },
//     { month: "Q3 '22", earnings: 1300 },
//     { month: "Q4 '22", earnings: 1200 },
//     { month: "Q1 '23", earnings: 1400 },
//     { month: "Q2 '23", earnings: 1600 },
//     { month: "Q3 '23", earnings: 1350 },
//     { month: "Q4 '23", earnings: 1500 },
//     { month: "Q1 '24", earnings: 1950 },
//     { month: "Q2 '24", earnings: 2400 }
//   ]
// }

const allCourses = [
  {
    id: 1,
    title: "Complete React Development Course",
    students: 1250,
    rating: 4.8,
    status: "published",
    lastUpdated: "2 days ago",
    progress: 100,
    category: "web-development",
    level: "intermediate"
  },
  {
    id: 2,
    title: "Advanced JavaScript Concepts",
    students: 890,
    rating: 4.9,
    status: "published",
    lastUpdated: "1 week ago",
    progress: 100,
    category: "programming",
    level: "advanced"
  },
  {
    id: 3,
    title: "Node.js Backend Development",
    students: 0,
    rating: 0,
    status: "draft",
    lastUpdated: "3 days ago",
    progress: 65,
    category: "backend",
    level: "intermediate"
  },
  {
    id: 4,
    title: "Python for Beginners",
    students: 567,
    rating: 4.7,
    status: "published",
    lastUpdated: "5 days ago",
    progress: 100,
    category: "programming",
    level: "beginner"
  },
  {
    id: 5,
    title: "Database Design Fundamentals",
    students: 234,
    rating: 4.6,
    status: "published",
    lastUpdated: "1 week ago",
    progress: 100,
    category: "database",
    level: "beginner"
  }
]

const allMessages = [
  {
    id: 1,
    student: "Alice Johnson",
    course: "React Development",
    message: "How do I handle state management in complex components?",
    time: "2 hours ago",
    isNew: true,
    category: "question",
    priority: "medium"
  },
  {
    id: 2,
    student: "Bob Smith",
    course: "JavaScript Concepts",
    message: "Thank you for the detailed explanation on closures!",
    time: "5 hours ago",
    isNew: false,
    category: "feedback",
    priority: "low"
  },
  {
    id: 3,
    student: "Carol Davis",
    course: "React Development",
    message: "The project files are not downloading properly.",
    time: "1 day ago",
    isNew: true,
    category: "technical-issue",
    priority: "high"
  },
  {
    id: 4,
    student: "David Wilson",
    course: "Python for Beginners",
    message: "Could you explain the difference between lists and tuples?",
    time: "2 days ago",
    isNew: false,
    category: "question",
    priority: "medium"
  },
  {
    id: 5,
    student: "Emma Brown",
    course: "Database Design",
    message: "Great course! Looking forward to the advanced version.",
    time: "3 days ago",
    isNew: false,
    category: "feedback",
    priority: "low"
  }
]

export function InstructorDashboardOverview() {
  // Filter states
  const [courseFilters, setCourseFilters] = useState({
    status: "all",
    category: "all",
    level: "all",
    search: ""
  })

  const [messageFilters, setMessageFilters] = useState({
    status: "all",
    category: "all",
    priority: "all",
    search: ""
  })

  const [timeFilter, setTimeFilter] = useState("6-months")

  // Get chart data based on time filter
  const currentEnrollmentData = useMemo(() => {
    return allEnrollmentData[timeFilter] || allEnrollmentData["6-months"]
  }, [timeFilter])

  // const currentEarningsData = useMemo(() => {
  //   return allEarningsData[timeFilter] || allEarningsData["6-months"]
  // }, [timeFilter])

  // Filtered data
  const filteredCourses = useMemo(() => {
    return allCourses.filter(course => {
      const matchesStatus = courseFilters.status === "all" || course.status === courseFilters.status
      const matchesCategory = courseFilters.category === "all" || course.category === courseFilters.category
      const matchesLevel = courseFilters.level === "all" || course.level === courseFilters.level
      const matchesSearch = courseFilters.search === "" || 
        course.title.toLowerCase().includes(courseFilters.search.toLowerCase())
      
      return matchesStatus && matchesCategory && matchesLevel && matchesSearch
    })
  }, [courseFilters])

  const filteredMessages = useMemo(() => {
    return allMessages.filter(message => {
      const matchesStatus = messageFilters.status === "all" || 
        (messageFilters.status === "new" && message.isNew) ||
        (messageFilters.status === "read" && !message.isNew)
      const matchesCategory = messageFilters.category === "all" || message.category === messageFilters.category
      const matchesPriority = messageFilters.priority === "all" || message.priority === messageFilters.priority
      const matchesSearch = messageFilters.search === "" || 
        message.student.toLowerCase().includes(messageFilters.search.toLowerCase()) ||
        message.message.toLowerCase().includes(messageFilters.search.toLowerCase()) ||
        message.course.toLowerCase().includes(messageFilters.search.toLowerCase())
      
      return matchesStatus && matchesCategory && matchesPriority && matchesSearch
    })
  }, [messageFilters])

  const clearCourseFilters = () => {
    setCourseFilters({ status: "all", category: "all", level: "all", search: "" })
  }

  const clearMessageFilters = () => {
    setMessageFilters({ status: "all", category: "all", priority: "all", search: "" })
  }

  const hasActiveCourseFilters = courseFilters.status !== "all" || courseFilters.category !== "all" || 
    courseFilters.level !== "all" || courseFilters.search !== ""

  const hasActiveMessageFilters = messageFilters.status !== "all" || messageFilters.category !== "all" || 
    messageFilters.priority !== "all" || messageFilters.search !== ""

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Welcome back, John!</h1>
        <p className="text-muted-foreground">Here's what's happening with your courses today.</p>
      </div>

      {/* Global Time Filter */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calendar className="h-5 w-5" />
              Time Period
            </CardTitle>
            <Select value={timeFilter} onValueChange={setTimeFilter}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-month">Last Month</SelectItem>
                <SelectItem value="3-months">Last 3 Months</SelectItem>
                <SelectItem value="6-months">Last 6 Months</SelectItem>
                <SelectItem value="1-year">Last Year</SelectItem>
                <SelectItem value="all-time">All Time</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryData.map((item, index) => {
          const Icon = item.icon
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                <Icon className={`h-4 w-4 ${item.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{item.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">{item.change}</span> from last month
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1  gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Student Enrollments
            </CardTitle>
            <CardDescription>Monthly enrollment trends ({timeFilter})</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={currentEnrollmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="enrollments" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              Monthly Earnings
            </CardTitle>
            <CardDescription>Your earnings over the {timeFilter}</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={currentEarningsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}`, "Earnings"]} />
                <Bar dataKey="earnings" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card> */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Course Filters & List */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Your Courses
                </CardTitle>
                <CardDescription>Manage and track your course performance</CardDescription>
              </div>
              {hasActiveCourseFilters && (
                <Button variant="ghost" size="sm" onClick={clearCourseFilters}>
                  <X className="h-4 w-4 mr-1" />
                  Clear
                </Button>
              )}
            </div>
            
            {/* Course Filters */}
            <div className="space-y-3 pt-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search courses..."
                  value={courseFilters.search}
                  onChange={(e) => setCourseFilters(prev => ({ ...prev, search: e.target.value }))}
                  className="pl-10"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <Select value={courseFilters.status} onValueChange={(value) => setCourseFilters(prev => ({ ...prev, status: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="draft">Draft</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={courseFilters.category} onValueChange={(value) => setCourseFilters(prev => ({ ...prev, category: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="web-development">Web Dev</SelectItem>
                    <SelectItem value="programming">Programming</SelectItem>
                    <SelectItem value="backend">Backend</SelectItem>
                    <SelectItem value="database">Database</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={courseFilters.level} onValueChange={(value) => setCourseFilters(prev => ({ ...prev, level: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-4">
              {filteredCourses.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Filter className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>No courses match your filters</p>
                </div>
              ) : (
                filteredCourses.map((course) => (
                  <div key={course.id} className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-sm">{course.title}</h4>
                        <Badge variant={course.status === "published" ? "default" : "secondary"}>
                          {course.status}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {course.level}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {course.students} students
                        </span>
                        {course.rating > 0 && (
                          <span className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            {course.rating}
                          </span>
                        )}
                        <span>Updated {course.lastUpdated}</span>
                      </div>
                      {course.status === "draft" && (
                        <div className="mt-2">
                          <div className="flex items-center gap-2">
                            <Progress value={course.progress} className="flex-1 h-2" />
                            <span className="text-xs text-muted-foreground">{course.progress}%</span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Play className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Courses ({allCourses.length})
            </Button>
          </CardContent>
        </Card>

        {/* Message Filters & List */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Recent Messages
                </CardTitle>
                <CardDescription>Student questions and feedback</CardDescription>
              </div>
              {hasActiveMessageFilters && (
                <Button variant="ghost" size="sm" onClick={clearMessageFilters}>
                  <X className="h-4 w-4 mr-1" />
                  Clear
                </Button>
              )}
            </div>
            
            {/* Message Filters */}
            <div className="space-y-3 pt-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search messages..."
                  value={messageFilters.search}
                  onChange={(e) => setMessageFilters(prev => ({ ...prev, search: e.target.value }))}
                  className="pl-10"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <Select value={messageFilters.status} onValueChange={(value) => setMessageFilters(prev => ({ ...prev, status: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Messages</SelectItem>
                    <SelectItem value="new">New Only</SelectItem>
                    <SelectItem value="read">Read Only</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={messageFilters.category} onValueChange={(value) => setMessageFilters(prev => ({ ...prev, category: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="question">Questions</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                    <SelectItem value="technical-issue">Tech Issues</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={messageFilters.priority} onValueChange={(value) => setMessageFilters(prev => ({ ...prev, priority: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Priority</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-4">
              {filteredMessages.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Filter className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>No messages match your filters</p>
                </div>
              ) : (
                filteredMessages.map((message) => (
                  <div key={message.id} className="p-3 rounded-lg border">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm">{message.student}</span>
                        {message.isNew && (
                          <Badge variant="destructive" className="text-xs">
                            New
                          </Badge>
                        )}
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${
                            message.priority === 'high' ? 'border-red-500 text-red-500' :
                            message.priority === 'medium' ? 'border-yellow-500 text-yellow-500' :
                            'border-green-500 text-green-500'
                          }`}
                        >
                          {message.priority}
                        </Badge>
                      </div>
                      <span className="text-xs text-muted-foreground">{message.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">Course: {message.course}</p>
                    <p className="text-sm">{message.message}</p>
                  </div>
                ))
              )}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Messages ({allMessages.length})
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}