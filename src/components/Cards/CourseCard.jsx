// components/CourseCard.jsx

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users, Clock } from "lucide-react";

export default function CourseCard({ course }) {
  return (
     <Card key={course.id} className="overflow-hidden py-0 gap-0 transition-all duration-200 hover:shadow-lg">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader className="p-4">
              <div className="flex justify-between items-start">
                <Badge className="bg-red-200 hover:bg-red-700 text-red-400">{course.category}</Badge>
                <Badge variant="outline">{course.level}</Badge>
              </div>
              <h3 className="font-bold text-lg mt-2 line-clamp-2">{course.title}</h3>
              <p className="text-sm text-gray-500">by {course.instructor}</p>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-gray-600 line-clamp-2">{course.description}</p>
              <div className="flex items-center mt-3 text-sm">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 font-medium">{course.rating}</span>
                </div>
                <div className="flex items-center ml-4">
                  <Users className="h-4 w-4 text-gray-400" />
                  <span className="ml-1">{course.students.toLocaleString()}</span>
                </div>
                <div className="flex items-center ml-4">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="ml-1">{course.duration}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
              <div className="font-bold text-lg">${course.price}</div>
              <Button className="bg-red-600 hover:bg-red-700">Add to Cart</Button>
            </CardFooter>
          </Card>
  );
}
