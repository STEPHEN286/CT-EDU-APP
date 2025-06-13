import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Clock, Users } from "lucide-react"
import { Link } from "react-router-dom"
// import Navbar from "@/components/navbar"
import { navMenu } from "@/data"

export default function CategoriesPage() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black mb-4">Course Categories</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of specialized courses designed for modern professionals
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <Badge variant="secondary" className="text-sm">
                <Users className="h-3 w-3 mr-1" />
                {navMenu.length} Categories
              </Badge>
              <Badge variant="secondary" className="text-sm">
                <BookOpen className="h-3 w-3 mr-1" />
                {navMenu.reduce((total, category) => total + category.modules.length, 0)} Total Courses
              </Badge>
            </div>
          </div>

         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {navMenu.map((category) => {
              const moduleCount = category.modules.length;
              const totalWeeks = category.modules.reduce((total, module) => {
                const duration = module.duration;
                const weeks = duration.includes("Week")
                  ? Number.parseInt(duration.split(" ")[0])
                  : duration.includes("Month")
                    ? Number.parseInt(duration.split(" ")[0]) * 4
                    : 2;
                return total + weeks;
              }, 0);

              return (
                <Link key={category.title} to={`/categories/${category.slug}`}>
                  <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group h-full border-0 shadow-md">
                    <CardContent className="p-6">
                      {/* Category Icon */}
                      <div className="bg-gradient-to-br from-red-500 to-red-600 w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300 shadow-lg">
                        <BookOpen className="h-8 w-8 text-white" />
                      </div>

                      {/* Category Title */}
                      <h3 className="font-bold text-lg text-black mb-2 group-hover:text-red-600 transition-colors text-center">
                        {category.title}
                      </h3>

                      {/* Category Description */}
                      <p className="text-sm text-gray-600 mb-4 text-center line-clamp-2">
                        Comprehensive courses in {category.title}
                      </p>

                      {/* Stats */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span className="flex items-center">
                            <BookOpen className="h-3 w-3 mr-1" />
                            {moduleCount} modules
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />~{totalWeeks}w total
                          </span>
                        </div>
                      </div>

                      {/* Action */}
                      <div className="flex items-center justify-center text-red-600 group-hover:translate-x-1 transition-transform">
                        <span className="text-sm font-medium">Explore Category</span>
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>

          {/* Featured Categories */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-black mb-8 text-center">Popular Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {navMenu.slice(0, 3).map((category) => (
                <Link key={category.title} to={`/categories/${category.slug}`}>
                  <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group border-red-100 hover:border-red-200">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                          <BookOpen className="h-6 w-6 text-red-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-black group-hover:text-red-600 transition-colors">
                            {category.title}
                          </h3>
                          <p className="text-sm text-gray-500">{category.modules.length} modules available</p>
                        </div>
                        <ArrowRight className="h-5 w-5 text-red-600 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-black mb-4">Can't find what you're looking for?</h2>
            <p className="text-gray-600 mb-6">Browse all our courses or contact us for custom training solutions</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <Button className="bg-red-600 hover:bg-red-700 text-white shadow-lg">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Browse All Courses
                </Button>
              </Link>
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
