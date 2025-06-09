"use client";

import { Button } from "@/components/ui/button";
import { useFormContext } from "react-hook-form";

export default function NavigationControls({
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
  isLoading,
  onSubmit, // Add this prop
}) {
  const methods = useFormContext();

  return (
    <div className="flex justify-between mt-10 pt-6 border-t border-gray-200">
      {currentStep > 1 ? (
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={isLoading}
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
          disabled={isLoading}
          className="bg-red-600 hover:bg-red-700 text-white"
        >
          Next
        </Button>
      ) : (
        <Button
          onClick={methods.handleSubmit(onSubmit)}
          disabled={isLoading}
          className="bg-red-600 hover:bg-red-700 text-white"
        >
          {isLoading ? "Submitting..." : "Submit Application"}
        </Button>
      )}
    </div>
  );
}