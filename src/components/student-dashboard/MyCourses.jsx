
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Star, Clock, PlayCircle } from "lucide-react"

const allCourses = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    description: "Learn HTML, CSS, JavaScript, React, Node.js and more in this comprehensive course.",
    instructor: "Sarah Johnson, Senior Developer",
    progress: 30,
    status: "In Progress",
    rating: 4.8,
    duration: "40 hours",
    lessons: 120,
    completedLessons: 36,
    image: "https://img-c.udemycdn.com/course/750x422/1754098_e0df_3.jpg",
    category: "Development",
    level: "Beginner",
  },
  {
    id: 2,
    title: "Digital Marketing Mastery",
    description: "Learn SEO, social media marketing, email campaigns, and content strategy.",
    instructor: "John Doe, Marketing Expert",
    progress: 57,
    status: "In Progress",
    rating: 4.7,
    duration: "25 hours",
    lessons: 85,
    completedLessons: 48,
    image: "https://img-c.udemycdn.com/course/750x422/1754098_e0df_3.jpg",
    category: "Marketing",
    level: "Intermediate",
  },
  {
    id: 3,
    title: "Data Science And Machine Learning",
    description: "Master Python, data analysis, visualization, and machine learning algorithms.",
    instructor: "Michael Chen, Data Scientist",
    progress: 45,
    status: "In Progress",
    rating: 4.9,
    duration: "60 hours",
    lessons: 150,
    completedLessons: 67,
    image: "https://img-c.udemycdn.com/course/750x422/1754098_e0df_3.jpg",
    category: "Data Science",
    level: "Advanced",
  },
  {
    id: 4,
    title: "UI/UX Design Fundamentals",
    description: "Learn design principles, user research, wireframing, and prototyping.",
    instructor: "Emma Wilson, UX Designer",
    progress: 100,
    status: "Completed",
    rating: 4.6,
    duration: "30 hours",
    lessons: 95,
    completedLessons: 95,
    image: "https://img-c.udemycdn.com/course/750x422/1754098_e0df_3.jpg",
    category: "Design",
    level: "Beginner",
  },
  {
    id: 5,
    title: "Mobile App Development",
    description: "Build native mobile apps for iOS and Android using React Native.",
    instructor: "David Kim, Mobile Developer",
    progress: 15,
    status: "In Progress",
    rating: 4.5,
    duration: "45 hours",
    lessons: 110,
    completedLessons: 16,
    image: "https://img-c.udemycdn.com/course/750x422/1754098_e0df_3.jpg",
    category: "Development",
    level: "Intermediate",
  },
  {
    id: 6,
    title: "Cloud Computing with AWS",
    description: "Learn AWS services, cloud architecture, and deployment strategies.",
    instructor: "Lisa Rodriguez, Cloud Architect",
    progress: 80,
    status: "In Progress",
    rating: 4.8,
    duration: "35 hours",
    lessons: 90,
    completedLessons: 72,
    image: "https://img-c.udemycdn.com/course/750x422/1754098_e0df_3.jpg",
    category: "Cloud",
    level: "Advanced",
  },
]

export function MyCoursesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
 
      

        <main className=" ">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Courses</h1>
            <p className="text-gray-600">Track your learning progress and continue your courses</p>
          </div>

          {/* Filters and Search */}
          <div className="bg-white rounded-lg p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input placeholder="Search courses..." className="pl-10" />
                </div>
              </div>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="development">Development</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="data-science">Data Science</SelectItem>
                    <SelectItem value="cloud">Cloud</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="not-started">Not Started</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Course Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card className="">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-500">6</div>
                  <div className="text-sm text-gray-600">Total Courses</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-500">1</div>
                  <div className="text-sm text-gray-600">Completed</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">5</div>
                  <div className="text-sm text-gray-600">In Progress</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-500">47%</div>
                  <div className="text-sm text-gray-600">Avg Progress</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden p-0 hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-40 object-cover"
                  />
                  <Badge
                    className={`absolute top-2 left-2 ${
                      course.status === "Completed"
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-orange-500 hover:bg-orange-600"
                    }`}
                  >
                    {course.category}
                  </Badge>
                
                  {course.status === "Completed" && (
                    <div className="absolute inset-0 bg-green-500 bg-opacity-20 flex items-center justify-center">
                      <Badge className="bg-green-500 text-white">Completed</Badge>
                    </div>
                  )}
                </div>

                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{course.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{course.description}</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/placeholder.svg?height=24&width=24" />
                        <AvatarFallback>I</AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-gray-600">{course.instructor}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <PlayCircle className="h-3 w-3" />
                        <span>
                          {course.completedLessons}/{course.lessons} lessons
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>{course.rating}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                      <Button
                        className={`w-full ${
                          course.status === "Completed"
                            ? "bg-green-500 hover:bg-green-600"
                            : "bg-red-500 hover:bg-red-600"
                        }`}
                      >
                        {course.status === "Completed" ? "Review Course" : "Continue Learning"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    
  )
}
