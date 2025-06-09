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
              type="text"
              {...register("years_experience", {
                required: "Years of experience is required"
              })}
            />
            {errors.years_experience && (
              <p className="text-red-500 text-sm">{errors.years_experience.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="currentOccupation">Current Occupation *</Label>
            <Input
              {...register("current_occupation", {
                required: "Current occupation is required"
              })}
            />
            {errors.current_occupation && (
              <p className="text-red-500 text-sm">{errors.current_occupation.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="teachingExperience">Previous Teaching Experience *</Label>
          <Textarea
            className="min-h-[150px]"
            {...register("previous_experience", {
              required: "Previous teaching experience is required"
            })}
          />
          {errors.previous_experience && (
            <p className="text-red-500 text-sm">{errors.previous_experience.message}</p>
          )}
        </div>

        <div className="space-y-3">
          <Label>Relevant Certifications</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {certifications.map((cert) => (
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
