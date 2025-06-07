import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { navMenu } from "@/data";
// import { useInstructorForm } from "@/hooks/useInstructorForm";
import { Upload, X } from "lucide-react";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
// import { useFormContext } from 'react-hook-form'

export default function PersonalInfo() {
  const [photoPreview, setPhotoPreview] = useState(null);

  const {
    register,
    formState: { errors },
    setValue
  } = useFormContext();

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setPhotoPreview(e.target?.result)
      }
      reader.readAsDataURL(file)
    }
  }
  const handleRemovePhoto = () => {
    if (photoPreview) {
      URL.revokeObjectURL(photoPreview);
    }
    setPhotoPreview(null);
    setValue("profilePhoto", null, { shouldValidate: true });
  };

  return (
    <div>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
        <p className="text-gray-600 mb-8">
          Tell us about yourself. This information will be visible to students
          on your instructor profile.
        </p>

        <div className="space-y-6">
        <div className="space-y-2 relative">
          <Label>Profile Photo *</Label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
            {photoPreview ? (
              <div className="relative">
                <img
                  src={photoPreview || "/placeholder.svg"}
                  alt="Profile preview"
                  className="w-32 h-32 rounded-full object-cover"
                />
                <button
                  onClick={handleRemovePhoto}
                  className="absolute -top-2 -right-2 bg-red-100 text-red-600 rounded-full p-1"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <>
                <Upload className="h-10 w-10 text-gray-400 mb-2" />
                <p className="text-sm text-gray-600 mb-2">Drag and drop your photo here, or click to browse</p>
                <p className="text-xs text-gray-500">JPG or PNG, 1:1 ratio recommended, minimum 400x400 pixels</p>
              </>
            )}
            <input
              type="file"
              id="profilePhoto"
              className={photoPreview ? "hidden" : "absolute inset-0 w-full h-full opacity-0 cursor-pointer"}
              accept="image/*"
              onChange={handlePhotoUpload}
            />
          </div>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                placeholder="Enter your full name"
                {...register("full_name", { required: "Full name is required" })}
              />
              {errors.full_name && (
                <p className="text-sm text-red-500">
                  {errors.full_name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="professionalTitle">Professional Title *</Label>
              <Input
                id="professionalTitle"
                placeholder="e.g. Software Engineer, Data Scientist"
                // {...register("professionalTitle", {
                //   required: "Professional title is required",
                // })}
              />
              {errors.professionalTitle && (
                <p className="text-sm text-red-500">
                  {errors.professionalTitle.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="fieldOfExpertise">Field of Expertise *</Label>
              <Select
                // onValueChange={(value) =>
                //   register("fieldOfExpertise").onChange({ target: { value } })
                // }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your field" />
                </SelectTrigger>
                <SelectContent>
                  {
                    navMenu.map(module =>(
                      <SelectItem key={module.title} value={module.title}>
                     {module.title}
                    </SelectItem>
                    ))
                  }
                 
                 
                  
                </SelectContent>
              </Select>
              {errors.fieldOfExpertise && (
                <p className="text-sm text-red-500">
                  {errors.fieldOfExpertise.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Professional Bio *</Label>
            <Textarea
              id="bio"
              placeholder="Tell us about your professional background, expertise, and teaching philosophy (200-500 words)"
              className="min-h-[150px]"
              {...register("bio", {
                required: "Bio is required",
                minLength: {
                  value: 50,
                  message: "Bio must be at least 200 characters",
                },
                maxLength: {
                  value: 500,
                  message: "Bio must not exceed 500 characters",
                },
              })}
            />
            {errors.bio && (
              <p className="text-sm text-red-500">{errors.bio.message}</p>
            )}
            <p className="text-xs text-gray-500">
              This bio will appear on your instructor profile and course pages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
