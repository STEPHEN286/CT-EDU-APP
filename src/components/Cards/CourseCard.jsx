// components/CourseCard.jsx

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users, Clock, ShoppingCart } from "lucide-react";

export default function CourseCard({ course }) {
  return (
     <Card key={course.id} className="max-w-[356px] w-54 h-full  overflow-hidden rounded shadow-none py-0 gap-0 transition-all duration-200 hover:shadow-lg">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardHeader className="px-4">
              <div className=" pt-2 flex justify-start items-center">
                <Badge variant="outline">{course.level}</Badge>
                <div className="flex items-center ml-4 text-gray-400">
                  <Clock size={10} className=" " />
                  <span className="ml-1 text-[10px] font-light">{course.duration}</span>
                </div>
              </div>
              <h3 className="font-bold text-sm mt-2 line-clamp-2">{course.title}</h3>
              <p className="text-[12px] text-gray-500"> {course.instructor}</p>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-gray-600 line-clamp-2">{course.description}</p>
              <div className="flex items-center mt-3 text-sm">
                <div className="flex items-center">
                  <Star  size={10}  className=" fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 text-[10px]  font-light ">{course.rating}</span>
                </div>
                <div className="flex items-center ml-4">
                  <Users size={10} className=" text-gray-40 " />
                  <small className="ml-1 text-[10px]  font-light">{course.students.toLocaleString()}</small>
                </div>
                
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
              <div className="font-bold text-lg">${course.price}</div>
              <Button className="bg-red-600 hover:bg-red-700"><ShoppingCart /></Button>
            </CardFooter>
          </Card>
  );
}
