import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users, Clock, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <Link to={`/course/`} className="block h-full">
      <Card className="h-full overflow-hidden pt-0 transition-all duration-200 hover:shadow-lg hover:scale-105 cursor-pointer flex flex-col">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={course.image || "/placeholder.svg?height=200&width=300"}
            alt={course.title}
            className="h-full w-full object-cover"
          />
        </div>
        <CardHeader className="p-4 flex-none">
          <div className="flex justify-between items-start mb-2">
            <Badge className="bg-red-600 hover:bg-red-700 text-white">{course.category}</Badge>
            <Badge variant="outline">{course.level}</Badge>
          </div>
          <h3 className="font-bold text-lg line-clamp-2 text-black">{course.title}</h3>
          <p className="text-sm text-gray-600">by {course.instructor}</p>
        </CardHeader>
        <CardContent className="p-4 pt-0 flex-grow">
          <p className="text-sm text-gray-600 line-clamp-2 mb-3">
            {course.description}
          </p>
          <div className="flex items-center text-sm gap-4">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-red-500 text-red-500 mr-1" />
              <span className="font-medium">{course.rating}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 text-gray-400 mr-1" />
              <span>{course.students.toLocaleString()}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-gray-400 mr-1" />
              <span>{course.duration}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center flex-none">
          <div className="font-bold text-lg text-black">${course.price}</div>
          <Button className="bg-red-600 hover:bg-red-700 text-white"><ShoppingCart /></Button>
        </CardFooter>
      </Card>
    </Link>
  );
}