import { CheckCircle } from "lucide-react"

const steps = [
   { number: 1, label: "Personal Information" },
    { number: 2, label: "Teaching Experience" },
    { number: 3, label: "Course Proposal" },
    { number: 4, label: "Video & Agreement" },
]

export function Stepper({ currentStep }){
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Desktop View */}
      <div className="hidden md:block w-full max-w-4xl mt-20">
        <div className="flex items-center">
          {steps.map((step, index) => (
            <div key={step.number} className="flex-1  h-full relative">
              {index < steps.length - 1 && (
                <div
                  className={`absolute top-1/3 left-1/2 w-full h-0.5 transform -translate-y-1/2 ${
                    currentStep > step.number ? "bg-green-500" : "bg-gray-300"
                  }`}
                ></div>
              )}
              <div className="flex flex-col items-center relative z-10">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentStep === step.number
                      ? "bg-red-600 text-white"
                      : currentStep > step.number
                        ? "bg-green-500 text-white"
                        : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {currentStep > step.number ? <CheckCircle className="h-6 w-6" /> : <span>{step.number}</span>}
                </div>
                <span
                  className={`mt-2 text-sm font-medium ${
                    currentStep === step.number
                      ? "text-red-600"
                      : currentStep > step.number
                        ? "text-green-500"
                        : "text-gray-500"
                  }`}
                >
                  {step?.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="w-full max-w-sm mt-30 px-4 md:hidden">
        <div className="flex flex-col items-center mb-4">
          <span className="text-sm font-medium text-gray-500">
            Step {currentStep} of {steps.length}
          </span>
          <span className="text-sm font-medium text-gray-700 mt-1">
            {steps[currentStep - 1]?.label}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-red-600 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}
