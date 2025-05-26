import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Star, Users, Clock, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import CourseCard from "../Cards/CourseCard"
import { coursesData, navMenu } from "@/data"
import { containerClass } from "@/utils/css-utils"

export default function CoursesPage() {
  return (
    <div className={`${containerClass} container mx-auto px-4 py-8`}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">All Courses</h1>
          <p className="text-gray-500 mt-1">Browse our extensive collection of courses</p>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <Select defaultValue="newest">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="lg:hidden">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Filter Courses</SheetTitle>
              </SheetHeader>
              <div className="py-4 overflow-auto">
                <FilterSidebar />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="hidden lg:block w-64 flex-shrink-0">
          <FilterSidebar />
        </div>
        <div className="flex-1">
          <div className="mb-6">
            <Input type="search" placeholder="Search courses..." className="w-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 place-self-center lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {coursesData.map((course, i) => (
              // <CourseCard key={i} />
              <CourseCard course={course}   key={i}  />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="mr-2">
              Previous
            </Button>
            <Button variant="outline" className="mx-1">
              1
            </Button>
            <Button className="mx-1 bg-red-600 hover:bg-red-700">2</Button>
            <Button variant="outline" className="mx-1">
              3
            </Button>
            <Button variant="outline" className="ml-2">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function FilterSidebar() {
  return (
    <div className="space-y-6 px-2 md:p-0 ">
      <div>
        <h3 className="font-medium mb-3">Categories</h3>
        <div className="space-y-2">
          {navMenu.map((category) => (
            <div key={category.title} className="flex items-center">
              <Checkbox id={`category-${category.title}`} />
              <label htmlFor={`category-${category.title}`} className="ml-2 text-sm">
                {category.title}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-3">Level</h3>
        <div className="space-y-2">
          {["Beginner", "Intermediate", "Advanced", "All Levels"].map((level) => (
            <div key={level} className="flex items-center">
              <Checkbox id={`level-${level}`} />
              <label htmlFor={`level-${level}`} className="ml-2 text-sm">
                {level}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-3">Price</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <Checkbox id="price-free" />
            <label htmlFor="price-free" className="ml-2 text-sm">
              Free
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox id="price-paid" />
            <label htmlFor="price-paid" className="ml-2 text-sm">
              Paid
            </label>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between mb-2">
            <span className="text-sm">$0</span>
            <span className="text-sm">$200</span>
          </div>
          <Slider defaultValue={[0, 100]} max={200} step={1} />
          <div className="flex justify-between mt-2">
            <div className="border rounded px-2 py-1 text-sm w-20 text-center">$0</div>
            <div className="border rounded px-2 py-1 text-sm w-20 text-center">$100</div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-3">Rating</h3>
        <div className="space-y-2">
          {[4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center">
              <Checkbox id={`rating-${rating}`} />
              <label htmlFor={`rating-${rating}`} className="ml-2 text-sm flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
                <span className="ml-1">& up</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      <Button className="w-full bg-red-600 hover:bg-red-700">Apply Filters</Button>
      <Button variant="outline" className="w-full">
        Reset
      </Button>
    </div>
  )
}

// function CourseCard() {
//   return (
//     <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg">
//       <div className="aspect-video w-full overflow-hidden">
//         <img
//           src="/placeholder.svg?height=200&width=300"
//           alt="Course thumbnail"
//           className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
//         />
//       </div>
//       <CardHeader className="p-4">
//         <div className="flex justify-between items-start">
//           <Badge className="bg-red-600 hover:bg-red-700">Development</Badge>
//           <Badge variant="outline">Beginner</Badge>
//         </div>
//         <h3 className="font-bold text-lg mt-2 line-clamp-2">Complete Web Development Bootcamp</h3>
//         <p className="text-sm text-gray-500">by John Smith</p>
//       </CardHeader>
//       <CardContent className="p-4 pt-0">
//         <p className="text-sm text-gray-600 line-clamp-2">
//           Learn HTML, CSS, JavaScript, React, Node.js and more to become a full-stack developer
//         </p>
//         <div className="flex items-center mt-3 text-sm">
//           <div className="flex items-center">
//             <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
//             <span className="ml-1 font-medium">4.8</span>
//           </div>
//           <div className="flex items-center ml-4">
//             <Users className="h-4 w-4 text-gray-400" />
//             <span className="ml-1">12,453</span>
//           </div>
//           <div className="flex items-center ml-4">
//             <Clock className="h-4 w-4 text-gray-400" />
//             <span className="ml-1">48 hours</span>
//           </div>
//         </div>
//       </CardContent>
//       <CardFooter className="p-4 pt-0 flex justify-between items-center">
//         <div className="font-bold text-lg">$89.99</div>
//         <Button className="bg-red-600 hover:bg-red-700">Add to Cart</Button>
//       </CardFooter>
//     </Card>
//   )
// }
