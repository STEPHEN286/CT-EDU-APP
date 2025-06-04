import { Stepper } from "@/components/lecture-page-contents/auth/Stepper";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import PersonalInfo from "@/components/lecture-page-contents/auth/PersonalInfo";
import TeachingExperience from "@/components/lecture-page-contents/auth/TeachingExperience";
import NavigationControls from "./NavigationControl";
import CourseProposal from "@/components/lecture-page-contents/auth/CourseProposal";
import VideoAgreement from "@/components/lecture-page-contents/auth/VideoAgreement";
import HelpSection from "@/components/lecture-page-contents/HelperSection";

export default function RegisterInstructor() {
  const methods = useForm({ mode: "onBlur" }); // or 'onChange'
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const next = async () => {
    const valid = await methods.trigger();
    if (valid) setStep((prev) => prev + 1);
  };

  const back = () => setStep((prev) => prev - 1);

  const onSubmit = methods.handleSubmit((data) => {
    console.log("Submitted Data:", data);
  
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
              <div className="w-full ">
                <div className="bg-white rounded-lg shadow-md p-6 relative">
                  <div className="mt-8">{renderStep()}</div>

                  <NavigationControls
                    totalSteps={totalSteps}
                    onNext={next}
                    onPrevious={back}
                    currentStep={step}
                    isLastStep={step === totalSteps}
                  />
                </div>
              </div>

              {/* <div className="lg:w-1/4">
                <HelpSection currentStep={step} />
              </div> */}
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
