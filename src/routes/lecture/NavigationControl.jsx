"use client";

import { Button } from "@/components/ui/button";
import { useFormContext } from "react-hook-form";

export default function NavigationControls({
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
}) {
  const methods = useFormContext();

  const onSubmit = (data) => {
    // Handle final form submission
    console.log("All form data:", data);
  };
  return (
    <div className="flex justify-between mt-10 pt-6 border-t border-gray-200">
      {currentStep > 1 ? (
        <Button
          variant="outline"
          onClick={onPrevious}
          className="border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          Previous
        </Button>
      ) : (
        <div></div>
      )}

      {currentStep < totalSteps ? (
        <Button
          onClick={onNext}
          className="bg-red-600 hover:bg-red-700 text-white"
        >
          Next
        </Button>
      ) : (
        <Button
          onClick={methods.handleSubmit(onSubmit)}
          className="bg-red-600 hover:bg-red-700 text-white"
        >
          Submit Application
        </Button>
      )}
    </div>
  );
}
