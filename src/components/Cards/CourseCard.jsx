import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users, Clock, ShoppingCart, Euro } from "lucide-react";
import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <Link to={`/course`} className="block w-full md:max-w-[240px] ">
      <Card className="h-full !rounded  shadow-none border-0 p-0 overflow-hidden transition-all  hover:-translate-y-0.5 active:scale-[0.98] flex flex-col group">
        {/* Compact Image Container */}
        <div className="relative aspect-[3/2] w-full overflow-hidden">
          <img
            src={course.image || "/placeholder.svg?height=140&width=210"}
            alt={course.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <Badge className="absolute top-1.5 left-1.5 bg-red-600 text-white text-[10px] px-1.5 py-0.5 font-medium">
            {course.category}
          </Badge>
        </div>

        {/* Compact Content */}
        <div className="flex-grow flex flex-col p-2">
          <h3 className="font-semibold text-xs line-clamp-2 text-gray-900 leading-tight mb-1 group-hover:text-red-600 transition-colors">
            {course.title}
          </h3>
          <p className="text-[10px] text-gray-600 mb-2">by {course.instructor}</p>
          
          {/* Compact Stats */}
          <div className="flex items-center justify-between text-[10px] text-gray-500 mb-2">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <Star className="h-2.5 w-2.5 fill-yellow-400 text-yellow-400 mr-0.5" />
                <span className="font-medium text-gray-700">{course.rating}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-2.5 w-2.5 text-gray-400 mr-0.5" />
                <span>{course.students?.toLocaleString()}</span>
              </div>
            </div>
            <div className="flex items-center">
              <Clock className="h-2.5 w-2.5 text-gray-400 mr-0.5" />
              <span>{course.duration}</span>
            </div>
          </div>

          {/* Compact Footer */}
          <div className="flex justify-between items-center mt-auto">
            <div className="font-bold text-sm text-gray-900 flex items-center">
              <Euro size={13} className=" mr-0.5" />
             <p> {course.price}</p>
            </div>
            <Button 
              size="sm" 
              className="bg-red-600 hover:bg-red-700 text-white h-6 w-6 p-0"
            >
              <ShoppingCart className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
}