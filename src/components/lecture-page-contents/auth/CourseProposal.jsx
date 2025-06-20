"use client";

import { Label } from "@/components/ui/label";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useFormContext, Controller } from "react-hook-form";

// import FeaturedCourse from "@/components/landing-page-contents/FeaturedCourse";
import { useFetchCoursesCategories } from "@/hooks/useModulesActions";


export default function CourseProposal() {
  const {data} = useFetchCoursesCategories();

  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex items-center justify-center ">
      <div className="max-w-3xl w-full  p-8 rounded-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Course Proposal</h2>
          <p className="text-gray-600 mb-8">
            Tell us about the course you'd like to teach on our platform.
          </p>
        </div>

        <div className="space-y-6 mx-auto ">
          <div className="space-y-2 h-fit  w-full  flex justify-center flex-col items-center p-3">
            <Label htmlFor="courseCategory" className="text-lg">Course  Category*</Label>
            <Controller
              control={control}
              name="course_id"
              rules={{ required: "Course category is required" }}
              render={({ field }) => (
                <Select    className=" "  onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="!h-15 w-[50%] ">
                    <SelectValue placeholder="Select a Course" />
                  </SelectTrigger>
                  <SelectContent className="">
                    {data?.map(course => (
                      <SelectItem value={course.id}>{course.title}</SelectItem>

                    ))}
                    
                    
                  </SelectContent>
                </Select>
              )}
            />
            {errors.course_category && (
              <p className="text-red-500 text-sm">{errors.course_category.message}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
