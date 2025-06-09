import { Button } from "@/components/ui/button"
import { Mail, ClipboardCheck } from "lucide-react"
import { Link } from "react-router-dom"

export default function ApplicationReview() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 py-30">
        {/* Loading Spinner */}
        <div className="relative w-16 md:w-24 h-16 md:h-24 mb-6 md:mb-8">
          <div className="absolute inset-0 border-2 border-gray-100 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-t-2 border-red-500 rounded-full "></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <ClipboardCheck className="h-8 w-8 text-red-500" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-center text-black mb-2 md:mb-3">Application Under Review</h1>
        <p className="text-sm md:text-base text-gray-600 text-center mb-8 md:mb-12 max-w-md px-4">
          We are currently reviewing your application. This process typically takes 2-3 business days.
        </p>

       

        {/* Application Details */}
        <div className="w-full max-w-xs md:max-w-2xl border border-gray-200 rounded-lg overflow-hidden mb-8 md:mb-12">
          <div className="grid grid-cols-2 border-b border-gray-200">
            <div className="p-3 md:p-4 text-xs md:text-sm text-gray-600">Application Reference</div>
            <div className="p-3 md:p-4 text-xs md:text-sm font-medium text-gray-900">#APP-2023-12345</div>
          </div>
          <div className="grid grid-cols-2 border-b border-gray-200">
            <div className="p-3 md:p-4 text-xs md:text-sm text-gray-600">Submitted Date</div>
            <div className="p-3 md:p-4 text-xs md:text-sm font-medium text-gray-900">December 15, 2023</div>
          </div>
          <div className="grid grid-cols-2">
            <div className="p-3 md:p-4 text-xs md:text-sm text-gray-600">Estimated Completion</div>
            <div className="p-3 md:p-4 text-xs md:text-sm font-medium text-gray-900">December 18, 2023</div>
          </div>
        </div>

        {/* Support Section */}
        <div className="text-center">
          <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">Need assistance?</p>
          <Button variant="outline" className="border-gray-300 text-sm md:text-base">
            <a href="mailto:aseyed3ka@gmail.com" className="flex items-center">
              <Mail className="h-3 w-3 md:h-4 md:w-4 mr-2" />
              Contact Support
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
