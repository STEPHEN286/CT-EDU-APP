"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, Mail, MessageSquare } from "lucide-react"



export default function HelpSection({ currentStep }) {
  const [isOpen, setIsOpen] = useState(true)

  const stepTips = {
    1: [
      "Use a professional photo for your profile",
      "Your bio should highlight your expertise and teaching style",
      "Be specific about your field of expertise",
    ],
    2: [
      "Include all relevant teaching experience, even informal ones",
      "Link to your professional profiles for credibility",
      "Mention any publications or research work",
    ],
    3: [
      "Be specific about your course objectives",
      "Structure your course outline in a logical progression",
      "Consider your target audience when describing difficulty level",
    ],
    4: [
      "Ensure your sample video demonstrates your teaching style",
      "Review all agreements carefully before submitting",
      "Check video quality and audio clarity",
    ],
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center">
          <HelpCircle className="h-5 w-5 mr-2 text-red-600" />
          Help & Resources
        </h3>
        <button onClick={() => setIsOpen(!isOpen)} className="text-sm text-gray-500 hover:text-red-600">
          {isOpen ? "Hide" : "Show"}
        </button>
      </div>

      {isOpen && (
        <>
          <div className="mb-6">
            <h4 className="font-medium mb-2">Tips for this step:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
              {stepTips[currentStep].map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="faq-1">
              <AccordionTrigger className="text-sm">What happens after I submit?</AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600">
                After submission, our team will review your application within 5-7 business days. You'll receive an
                email notification about the status of your application.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2">
              <AccordionTrigger className="text-sm">Can I edit my application later?</AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600">
                Yes, you can save your application as a draft and return to it later. Once submitted, you can request
                edits by contacting our support team.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3">
              <AccordionTrigger className="text-sm">What makes a strong application?</AccordionTrigger>
              <AccordionContent className="text-sm text-gray-600">
                Strong applications demonstrate clear expertise, teaching experience, well-structured course proposals,
                and high-quality sample videos that showcase your teaching style.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <h4 className="font-medium mb-3">Need more help?</h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center text-sm text-red-600 hover:text-red-800">
                <Mail className="h-4 w-4 mr-2" />
                Email Support
              </a>
              <a href="#" className="flex items-center text-sm text-red-600 hover:text-red-800">
                <MessageSquare className="h-4 w-4 mr-2" />
                Live Chat
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
