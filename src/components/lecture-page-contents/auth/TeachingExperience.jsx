"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useFormContext, Controller } from "react-hook-form";

export default function TeachingExperience() {
  const { register, control, formState: { errors } } = useFormContext();

  const certifications = [
    { id: "cert1", label: "Teaching Certification" },
    { id: "cert2", label: "Subject Matter Expert Certification" },
    { id: "cert3", label: "Online Teaching Certification" },
    { id: "cert4", label: "Industry Certification" },
    { id: "cert5", label: "Academic Degree" },
    { id: "cert6", label: "Professional License" },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Teaching Experience</h2>
      <p className="text-gray-600 mb-8">
        Tell us about your teaching background and qualifications.
      </p>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="yearsExperience">Years of Experience *</Label>
            <Input
              type="number"
              min="0"
              {...register("yearsExperience", {
                required: "This field is required",
                min: { value: 0, message: "Cannot be negative" },
              })}
            />
            {errors.yearsExperience && (
              <p className="text-red-500 text-sm">{errors.yearsExperience.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="currentOccupation">Current Occupation *</Label>
            <Input
              {...register("currentOccupation", {
                required: "Current occupation is required",
              })}
            />
            {errors.currentOccupation && (
              <p className="text-red-500 text-sm">{errors.currentOccupation.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="teachingExperience">Previous Teaching Experience *</Label>
          <Textarea
            className="min-h-[150px]"
            {...register("teachingExperience", {
              required: "Please describe your teaching experience",
              minLength: { value: 10, message: "Too short" },
            })}
          />
          {errors.teachingExperience && (
            <p className="text-red-500 text-sm">{errors.teachingExperience.message}</p>
          )}
        </div>

        <div className="space-y-3">
          <Label>Relevant Certifications</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {certifications.map((cert, index) => (
              <div key={cert.id} className="flex items-center space-x-2">
                <Controller
                  name={`certifications.${cert.label}`}
                  control={control}
                  defaultValue={false}
                  render={({ field }) => (
                    <Checkbox
                      id={cert.id}
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  )}
                />
                <Label htmlFor={cert.id} className="font-normal">
                  {cert.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="linkedinProfile">LinkedIn Profile URL (Optional)</Label>
          <Input
            type="url"
            {...register("linkedinProfile", {
              pattern: {
                value: /^https?:\/\/(www\.)?linkedin\.com\/.*$/i,
                message: "Please enter a valid LinkedIn URL",
              },
            })}
          />
          {errors.linkedinProfile && (
            <p className="text-red-500 text-sm">{errors.linkedinProfile.message}</p>
          )}
          <p className="text-xs text-gray-500">
            Adding your LinkedIn profile helps establish credibility with potential students.
          </p>
        </div>
      </div>
    </div>
  );
}
