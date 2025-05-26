import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Users, Clock, Filter, Search, ChevronLeft } from "lucide-react"
import { Link, useParams } from "react-router-dom"
import { navMenu } from "@/data"
import CourseCard from "../Cards/CourseCard"
import { containerClass } from "@/utils/css-utils"

// Create a lookup object by slug
const categoryData = Object.fromEntries(navMenu.map(cat => [cat.slug, cat]))

export default function CategoryPage() {
  const { slug } = useParams()
  const category = categoryData[slug]

  if (!category) {
    return <div>Category not found</div>
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        <div className={`${containerClass} container mx-auto px-4 py-8`}>
          {/* Breadcrumb */}
          <div className="flex items-center mb-6">
            <Link to="/courses" className="flex items-center text-gray-600 hover:text-red-600">
              <ChevronLeft className="h-4 w-4 mr-1" />
              All Courses
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-black font-medium">{category.title}</span>
          </div>

          {/* Category Header */}
          <div className="mb-8">
            <div className={`bg-red-600 text-white p-8 rounded-lg mb-6`}>
              <h1 className="text-4xl font-bold mb-3">{category.title}</h1>
              <div className="flex items-center text-lg">
                <span className="font-semibold">{category.modules.length} modules</span>
                <span className="mx-2">•</span>
                <span>All skill levels</span>
              </div>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="search"
                  placeholder={`Search ${category.title.toLowerCase()} modules...`}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Select defaultValue="popular">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Badge variant="secondary" className="bg-red-100 text-red-700 hover:bg-red-200">
              All Levels
            </Badge>
            <Badge variant="outline">Beginner</Badge>
            <Badge variant="outline">Intermediate</Badge>
            <Badge variant="outline">Advanced</Badge>
            
          </div>

          {/* Module Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 mb-8">
  {category.modules.map((mod) => {
    const course = {
      id: mod.code,
      title: mod.name,
      description: mod.topics,
      instructor: "CT Education",
      level: "All Levels",
      duration: mod.duration,
      rating: 4.8,
      students: 355,
      price: 44.99,
      image: `https://effvision.com/wp-content/uploads/2024/06/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg`
    }
    return <CourseCard key={mod.code} course={course} />
  })}
</div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2">
            <Button variant="outline" disabled>
              Previous
            </Button>
            <Button className="bg-red-600 hover:bg-red-700 text-white">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <span className="px-2">...</span>
            <Button variant="outline">10</Button>
            <Button variant="outline">Next</Button>
          </div>
        </div>
      </div>
    </>
  )
}

// function ModuleCard({ module, category }) {
//   return (
//     <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg hover:scale-105 cursor-pointer">
//       <div className="aspect-video w-full overflow-hidden bg-gray-100 flex items-center justify-center">
//         <span className="text-2xl font-bold text-red-600">{category.title[0]}</span>
//       </div>
//       <CardHeader className="p-4">
//         <div className="flex justify-between items-start mb-2">
//           <Badge className="bg-red-600 hover:bg-red-700 text-white">
//             {category.title}
//           </Badge>
//           <Badge variant="outline">All Levels</Badge>
//         </div>
//         <h3 className="font-bold text-lg line-clamp-2 text-black">{module.name}</h3>
//         <p className="text-sm text-gray-600">{module.duration}</p>
//       </CardHeader>
//       <CardContent className="p-4 pt-0">
//         <p className="text-sm text-gray-600 line-clamp-2 mb-3">
//           {module.topics}
//         </p>
//         <div className="flex items-center text-sm gap-4">
//           <div className="flex items-center">
//             <Star className="h-4 w-4 fill-red-500 text-red-500 mr-1" />
//             <span className="font-medium">4.8</span>
//           </div>
//           <div className="flex items-center">
//             <Users className="h-4 w-4 text-gray-400 mr-1" />
//             <span>{Math.floor(Math.random() * 10000) + 1000}</span>
//           </div>
//           <div className="flex items-center">
//             <Clock className="h-4 w-4 text-gray-400 mr-1" />
//             <span>{module.duration}</span>
//           </div>
//         </div>
//       </CardContent>
//       <CardFooter className="p-4 pt-0 flex justify-between items-center">
//         <div className="font-bold text-lg text-black">${Math.floor(Math.random() * 100) + 29}.99</div>
//         <Button className="bg-red-600 hover:bg-red-700 text-white">Enroll Now</Button>
//       </CardFooter>
//     </Card>
//   )
// }