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
import { useNavigate } from "react-router-dom";

export default function RegisterInstructor() {
  const { mutate, error, isError, isPending, isSuccess, data } = usePostInstructors();
  const methods = useForm({ mode: "onBlur" });
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  const navigate = useNavigate();

  // Handle success/error states
  useEffect(() => {
    if (isError) {
      console.error("Form submission error:", error);
      alert("Error: " + (error?.message || "Unknown error occurred"));
    }
  }, [isError, error]);

  useEffect(() => {
    if (isSuccess) {
      navigate("/teach-on-ct/application-review");
    }
  }, [isSuccess, navigate]);

  const next = async () => {
    const valid = await methods.trigger();
    if (valid) setStep((prev) => prev + 1);
  };

  const back = () => setStep((prev) => prev - 1);

  const onSubmit = async (data) => {
    // Manual validation for required files
    if (!data.sample_video|| (data.sample_video instanceof FileList && data.sample_video.length === 0)) {
      alert("Please upload a sample video");
      return;
    }
    
    if (!data.resume || (data.resume instanceof FileList && data.resume.length === 0)) {
      alert("Please upload your resume");
      return;
    }

    if (!data.profile_photo || (data.profile_photo instanceof FileList && data.profile_photo.length === 0)) {
      alert("Please upload a profile photo");
      return;
    }
    
    // Transform data to match API requirements
    const transformedData = {
      full_name: data.full_name || "",
      email: data.email || "",
      professional_title: data.professional_title || "",
      professional_bio: data.professional_bio || "",
      years_experience: data.years_experience || "",
      current_occupation: data.current_occupation || "",
      previous_experience: data.previous_experience || "",
      
      // Handle certifications - convert object to comma-separated string
      certifications: data.certifications ? 
        Object.keys(data.certifications).filter(key => data.certifications[key]).join(',') : "",
      course_title: data.course_title || "",
      course_category: data.course_category || "",
      course_level: data.course_level || "Beginner",
      course_description: data.course_description || "",
      course_outline: data.course_outline || "",
      // Handle file uploads - extract File from FileList if needed
      profile_photo: data.profile_photo instanceof FileList ? data.profile_photo[0] : data.profile_photo,
      resume: data.resume instanceof FileList ? data.resume[0] : data.resume,
      sample_video: data.sample_video instanceof FileList ? data.sample_data[0] : data.sample_video,
    };
    
    console.log("Transformed data for API:", transformedData);
    
    // Final validation check
    const isValid = await methods.trigger();
    if (!isValid) {
      console.log("Form validation failed");
      alert("Please fill in all required fields");
      return;
    }
    
    try {
      mutate(transformedData);
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

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
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600 mx-auto"></div>
                      <p className="mt-2 text-sm text-gray-600">Submitting application...</p>
                    </div>
                  </div>
                )}

                {/* Show error message */}
                {isError && (
                  <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-red-800 text-sm">
                      {error?.message || "Error submitting application. Please try again."}
                    </p>
                  </div>
                )}

                {/* Show success message */}
                {isSuccess && (
                  <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md">
                    <p className="text-green-800 text-sm">
                      {data?.success || "Application submitted successfully!"}
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
                  onSubmit={onSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}