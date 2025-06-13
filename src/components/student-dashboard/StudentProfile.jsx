
import {
  Search,
  Bell,
  LogOut,
  BarChart3,
  BookOpen,
  TrendingUp,
  Globe,
  Users,
  MessageSquare,
  HelpCircle,
  Settings,
  Clock,
  Award,
  Target,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"



const statsCards = [
  {
    title: "Total Courses",
    value: "12",
    subtitle: "+2 this week",
    icon: BookOpen,
    color: "text-red-500",
  },
  {
    title: "Total Hours",
    value: "47.2",
    subtitle: "+6.5 hrs this week",
    icon: Clock,
    color: "text-red-500",
  },
  {
    title: "Total Certificates",
    value: "6",
    subtitle: "+1 this month",
    icon: Award,
    color: "text-red-500",
  },
  {
    title: "Total Points",
    value: "3,195",
    subtitle: "+200 this week",
    icon: Target,
    color: "text-red-500",
  },
]

const courses = [
  {
    title: "Web Development Bootcamp",
    description: "Learn HTML, CSS, JavaScript, React, Node.js and more in this comprehensive course.",
    instructor: "Sarah Johnson, Senior Developer",
    progress: 30,
    status: "In Progress",
    rating: 4.8,
    image: "/placeholder.svg?height=120&width=200",
    category: "Development",
  },
  {
    title: "Digital Marketing Mastery",
    description: "Learn SEO, social media marketing, email campaigns, and content strategy.",
    instructor: "John Doe, Marketing Expert",
    progress: 57,
    status: "In Progress",
    rating: 4.7,
    image: "/placeholder.svg?height=120&width=200",
    category: "Marketing",
  },
  {
    title: "Data Science And Machine Learning",
    description: "Master Python, data analysis, visualization, and machine learning algorithms.",
    instructor: "Michael Chen, Data Scientist",
    progress: 45,
    status: "In Progress",
    rating: 4.9,
    image: "/placeholder.svg?height=120&width=200",
    category: "Data Science",
  },
]

export function StudentOverview() {
  const isSessionValid = sessionStorage.getItem("session");
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
       

        {/* Main Content */}
        <main className="flex-1">
          {/* Welcome Section - With View More Button */}
          <div className="bg-white rounded-lg p-6 mb-6">
            <div className=" md:flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back,  {JSON.parse(sessionStorage.getItem('session'))?.name || 
               JSON.parse(sessionStorage.getItem('session'))?.full_name || 
               JSON.parse(sessionStorage.getItem('session'))?.username || 
               'User'}</h2>
                <p className="text-gray-600">Ready to continue your learning journey?</p>
              </div>

              <div className="flex space-x-8">
             
                <div className="text-center">
                  <div className="relative w-20 h-20 mx-auto mb-2">
                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="2"
                        strokeDasharray="82, 100"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-green-500">82%</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Today's Goal</p>
                </div>

                {/* Overall Progress */}
                <div className="text-center">
                  <div className="relative w-20 h-20 mx-auto mb-2">
                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="2"
                        strokeDasharray="56, 100"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-red-500">56%</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">Overall Progress</p>
                </div>
              </div>
            </div>
          </div>

          {/* Continue Learning Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Continue Learning</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {statsCards.map((card, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <card.icon className={`h-5 w-5 ${card.color}`} />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gray-600">{card.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{card.value}</p>
                      <p className="text-xs text-gray-500">{card.subtitle}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Course Progress Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Course Progress</h3>
              <Link  to="/profile/my-course" variant="ghost" className="text-red-500 hover:text-red-600">
                View All
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      width={400}
                      height={200}
                      className="w-full h-32 object-cover"
                    />
                    <Badge className="absolute top-2 left-2 bg-orange-500 hover:bg-orange-600">{course.category}</Badge>
                  </div>

                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{course.title}</h4>
                        <p className="text-sm text-gray-600 line-clamp-2">{course.description}</p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="/placeholder.svg?height=24&width=24" />
                          <AvatarFallback>I</AvatarFallback>
                        </Avatar>
                        <span className="text-xs text-gray-600">{course.instructor}</span>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">
                            {course.progress}% lessons completed ({course.progress}%)
                          </span>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs">{course.rating}</span>
                          </div>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                        <Button className="w-full bg-red-500 hover:bg-red-600">Continue</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
