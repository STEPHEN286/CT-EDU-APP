"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useFormContext, Controller } from "react-hook-form";

export default function CourseProposal() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Course Proposal</h2>
      <p className="text-gray-600 mb-8">
        Tell us about the course you'd like to teach on our platform.
      </p>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="courseTitle">Course Title *</Label>
          <Input
            id="courseTitle"
            {...register("courseTitle", { required: "Course title is required" })}
            placeholder="Enter a clear, descriptive title for your course"
          />
          {errors.courseTitle && (
            <p className="text-red-500 text-sm">{errors.courseTitle.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="courseCategory">Course Category *</Label>
            <Controller
              control={control}
              name="courseCategory"
              rules={{ required: "Course category is required" }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="webDevelopment">Web Development</SelectItem>
                    <SelectItem value="mobileDevelopment">Mobile Development</SelectItem>
                    <SelectItem value="dataScience">Data Science & Analytics</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="business">Business & Entrepreneurship</SelectItem>
                    <SelectItem value="personalDevelopment">Personal Development</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.courseCategory && (
              <p className="text-red-500 text-sm">{errors.courseCategory.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Course Level *</Label>
            <Controller
              control={control}
              name="courseLevel"
              rules={{ required: "Please select a course level" }}
              render={({ field }) => (
                <RadioGroup value={field.value} onValueChange={field.onChange}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="beginner" id="beginner" />
                    <Label htmlFor="beginner" className="font-normal">
                      Beginner
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="intermediate" id="intermediate" />
                    <Label htmlFor="intermediate" className="font-normal">
                      Intermediate
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="advanced" id="advanced" />
                    <Label htmlFor="advanced" className="font-normal">
                      Advanced
                    </Label>
                  </div>
                </RadioGroup>
              )}
            />
            {errors.courseLevel && (
              <p className="text-red-500 text-sm">{errors.courseLevel.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="courseDescription">Course Description *</Label>
          <Textarea
            id="courseDescription"
            {...register("courseDescription", {
              required: "Course description is required",
              minLength: {
                value: 20,
                message: "Description should be at least 20 characters",
              },
            })}
            placeholder="Provide a comprehensive description of your course..."
            className="min-h-[150px]"
          />
          {errors.courseDescription && (
            <p className="text-red-500 text-sm">{errors.courseDescription.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="courseOutline">Course Outline *</Label>
          <Textarea
            id="courseOutline"
            {...register("courseOutline", {
              required: "Course outline is required",
              minLength: {
                value: 20,
                message: "Outline should be at least 20 characters",
              },
            })}
            placeholder="Provide a structured outline of your course..."
            className="min-h-[200px]"
          />
          {errors.courseOutline && (
            <p className="text-red-500 text-sm">{errors.courseOutline.message}</p>
          )}
          <p className="text-xs text-gray-500">
            A well-structured outline helps us understand the scope and organization of your course.
          </p>
        </div>
      </div>
    </div>
  );
}
