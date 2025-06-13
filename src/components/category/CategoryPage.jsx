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
import Breadcrumbs from "../ui/Breadcrums"

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
            {/* <Link to="/" className="flex items-center text-gray-600 hover:text-red-600">
              <ChevronLeft className="h-4 w-4 mr-1" />
              BACK
            </Link> */}
            <Breadcrumbs />
            <span className="mx-2 text-gray-400">/</span>
            {/* <span className="text-black font-medium">{category.title}</span> */}
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

