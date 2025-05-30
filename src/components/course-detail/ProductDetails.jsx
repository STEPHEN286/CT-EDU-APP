import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Clock, Users, PlayCircle, CheckCircle, BookOpen, Award, Globe } from "lucide-react"

export default function CourseDetailsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Header */}
            <div className="mb-8">
              <Badge className="mb-3 bg-red-600 hover:bg-red-700 text-white">Web Development</Badge>
              <h1 className="text-4xl font-bold text-black mb-4">Complete Web Development Bootcamp</h1>
              <p className="text-gray-600 text-lg mb-6">
                Master HTML, CSS, JavaScript, React, and Node.js to become a full-stack developer
              </p>

              {/* Course Stats */}
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-red-500 text-red-500 mr-2" />
                  <span className="font-semibold">4.8</span>
                  <span className="text-gray-500 ml-1">(1,245 reviews)</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-500 mr-2" />
                  <span>12,453 students</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-500 mr-2" />
                  <span>48 hours</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-gray-500 mr-2" />
                  <span>English</span>
                </div>
              </div>
            </div>

            {/* Video Player */}
            <div className="mb-8">
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-black relative">
                <img
                  src="/placeholder.svg?height=400&width=800"
                  alt="Course preview"
                  className="h-full w-full object-cover opacity-70"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="lg" className="rounded-full w-20 h-20 bg-red-600 hover:bg-red-700">
                    <PlayCircle className="h-10 w-10" />
                  </Button>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                    Preview: Introduction to Web Development
                  </p>
                </div>
              </div>
            </div>

            {/* What You'll Learn */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-black">What You'll Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Build responsive websites with HTML5 & CSS3",
                    "Create interactive apps with JavaScript",
                    "Develop modern UIs with React",
                    "Build APIs with Node.js & Express",
                    "Work with databases (MongoDB & SQL)",
                    "Deploy applications to production",
                    "Implement user authentication",
                    "Write clean, maintainable code",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Course Content */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-black">Course Content</CardTitle>
                <p className="text-gray-600">5 sections • 45 lectures • 48 hours total</p>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      title: "Getting Started with Web Development",
                      lectures: 8,
                      duration: "2h 30m",
                      lessons: [
                        "Introduction to Web Development",
                        "Setting Up Your Environment",
                        "How the Web Works",
                        "Your First Web Page",
                      ],
                    },
                    {
                      title: "HTML Fundamentals",
                      lectures: 12,
                      duration: "4h 15m",
                      lessons: [
                        "HTML Document Structure",
                        "Working with Text",
                        "Links and Images",
                        "Forms and Input Elements",
                      ],
                    },
                    {
                      title: "CSS Styling & Layout",
                      lectures: 15,
                      duration: "6h 20m",
                      lessons: [
                        "CSS Basics and Selectors",
                        "Box Model and Layout",
                        "Flexbox and Grid",
                        "Responsive Design",
                      ],
                    },
                    {
                      title: "JavaScript Programming",
                      lectures: 18,
                      duration: "8h 45m",
                      lessons: [
                        "Variables and Data Types",
                        "Functions and Scope",
                        "DOM Manipulation",
                        "Async JavaScript",
                      ],
                    },
                    {
                      title: "React Development",
                      lectures: 20,
                      duration: "12h 30m",
                      lessons: [
                        "Introduction to React",
                        "Components and Props",
                        "State Management",
                        "Building a Complete App",
                      ],
                    },
                  ].map((section, index) => (
                    <AccordionItem key={index} value={`section-${index}`}>
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex justify-between items-center w-full text-left">
                          <span className="font-semibold text-black">{section.title}</span>
                          <span className="text-sm text-gray-500">
                            {section.lectures} lectures • {section.duration}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 pt-2">
                          {section.lessons.map((lesson, lessonIndex) => (
                            <div
                              key={lessonIndex}
                              className="flex items-center justify-between py-2 px-3 hover:bg-gray-50 rounded"
                            >
                              <div className="flex items-center">
                                <PlayCircle className="h-4 w-4 text-gray-400 mr-3" />
                                <span className="text-gray-700">{lesson}</span>
                              </div>
                              <span className="text-sm text-gray-500">15:30</span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Enrollment Card */}
              <Card className="border-2 border-red-100">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-black mb-2">$89.99</div>
                    <div className="text-gray-500 line-through">$199.99</div>
                    <Badge className="bg-red-600 text-white mt-2">55% OFF</Badge>
                  </div>

                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white mb-4 h-12 text-lg font-semibold">
                    Enroll Now
                  </Button>

                  <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-50">
                    Add to Wishlist
                  </Button>

                  <div className="mt-6 space-y-3 text-sm">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-gray-500 mr-3" />
                      <span>48 hours of content</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 text-gray-500 mr-3" />
                      <span>45 lessons</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 text-gray-500 mr-3" />
                      <span>Certificate of completion</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 text-gray-500 mr-3" />
                      <span>Lifetime access</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Instructor Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-black">Your Instructor</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/placeholder.svg?height=64&width=64" alt="John Smith" />
                      <AvatarFallback className="bg-red-100 text-red-600">JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-black">John Smith</h4>
                      <p className="text-sm text-gray-600 mb-2">Senior Full-Stack Developer</p>
                      <div className="flex items-center mb-2">
                        <Star className="h-4 w-4 fill-red-500 text-red-500" />
                        <span className="text-sm ml-1">4.9 instructor rating</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        10+ years experience building web applications for startups and Fortune 500 companies.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Course Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-black">This Course Includes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <PlayCircle className="h-4 w-4 text-red-600 mr-3" />
                      <span>48 hours of video</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 text-red-600 mr-3" />
                      <span>Downloadable resources</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="h-4 w-4 text-red-600 mr-3" />
                      <span>Certificate of completion</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 text-red-600 mr-3" />
                      <span>Access on mobile and desktop</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-red-600 mr-3" />
                      <span>Lifetime access</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
