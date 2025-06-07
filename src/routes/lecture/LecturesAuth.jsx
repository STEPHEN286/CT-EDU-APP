import { Stepper } from "@/components/lecture-page-contents/auth/Stepper";
import React, { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import PersonalInfo from "@/components/lecture-page-contents/auth/PersonalInfo";
import TeachingExperience from "@/components/lecture-page-contents/auth/TeachingExperience";
import NavigationControls from "./NavigationControl";
import CourseProposal from "@/components/lecture-page-contents/auth/CourseProposal";
import VideoAgreement from "@/components/lecture-page-contents/auth/VideoAgreement";
import HelpSection from "@/components/lecture-page-contents/HelperSection";
import { usePostInstructors } from "@/hooks/useRegisterInstructors";

export default function RegisterInstructor() {
  const { mutate, error, isError, isPending } = usePostInstructors();
  const methods = useForm({ mode: "onBlur" });
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  // Add effect to handle success/error states
  useEffect(() => {
    if (isError) {
      console.error("Form submission error:", error);
      // You might want to show an error message to the user
    }
  }, [isError, error]);

  const next = async () => {
    const valid = await methods.trigger();
    if (valid) setStep((prev) => prev + 1);
  };

  const back = () => setStep((prev) => prev - 1);

  const onSubmit = methods.handleSubmit(async (data) => {
    console.log("Form Data before submission:", data);
    
    // Manual validation for required files
    if (!data.sampleVideo || Object.keys(data.sampleVideo).length === 0) {
      alert("Please upload a sample video");
      return;
    }
    
    if (!data.resume || Object.keys(data.resume).length === 0) {
      alert("Please upload your resume");
      return;
    }
    
    // Transform data to match API requirements
    const transformedData = {
      full_name: data.full_name,
      email: data.email,
      phone: data.phone || "", // Add phone field
      bio: data.bio || "", // Add bio field
      years_experience: data.years_experience,
      current_occupation: data.current_occupation,
      previous_experience: data.previous_experience,
      // Convert certifications object to array of strings
      certifications: Object.keys(data.certifications || {}).filter(key => data.certifications[key]),
      course_title: data.course_title,
      course_category: data.course_category,
      course_level: data.course_level || "Beginner", // Add course_level
      course_description: data.course_description,
      course_outline: data.course_outline,
      resume: data.resume,
      sample_video: data.sampleVideo, // Fix field name
      // Optional fields
      additionalComments: data.additionalComments,
      termsAgreement: data.termsAgreement,
      instructorGuidelines: data.instructorGuidelines
    };
    
    console.log("Transformed data for API:", transformedData);
    
    // Validate the final step before submission
    const isValid = await methods.trigger();
    if (!isValid) {
      console.log("Form validation failed");
      return;
    }
    
    try {
      mutate(transformedData);
    } catch (error) {
      console.error("Submission error:", error);
    }
  });

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <TeachingExperience />;
      case 3:
        return <CourseProposal />;
      case 4:
        return <VideoAgreement />;
      default:
        return null;
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <div className="min-h-screen">
          <div className="container mx-auto px-4 py-8 flex-grow">
            <Stepper currentStep={step} />

            <div className="flex gap-6 mt-8">
              <div className="w-full">
                <div className="bg-white rounded-lg shadow-md p-6 relative">
                  {/* Show loading state */}
                  {isPending && (
                    <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                        <p className="mt-2 text-sm text-gray-600">Submitting application...</p>
                      </div>
                    </div>
                  )}

                  {/* Show error message */}
                  {isError && (
                    <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
                      <p className="text-red-800 text-sm">
                        Error submitting application. Please try again.
                      </p>
                    </div>
                  )}

                  <div className="mt-8">{renderStep()}</div>

                  <NavigationControls
                    totalSteps={totalSteps}
                    onNext={next}
                    onPrevious={back}
                    currentStep={step}
                    isLastStep={step === totalSteps}
                    isLoading={isPending}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}