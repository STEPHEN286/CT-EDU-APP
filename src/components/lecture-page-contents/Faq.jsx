import React, { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
    {
      question: "How much can I earn as an instructor?",
      answer:
        "Earnings vary based on course popularity, pricing, and engagement. Our top instructors earn six-figure incomes annually. On average, instructors earn between $2,000 to $5,000 per month for each successful course. You'll receive 70% revenue share for every course sale when a student purchases directly through your referral link, and 50% when LearnHub brings the student to your course.",
    },
    {
      question: "What support does LearnHub provide for course creation?",
      answer:
        "LearnHub provides comprehensive support including course planning templates, video production guidelines, promotional tools, and a dedicated instructor success team. We also offer regular webinars on course optimization, marketing strategies, and platform updates to help you succeed.",
    },
    {
      question: "How much time does it take to create a course?",
      answer:
        "The time investment varies depending on course complexity and your familiarity with content creation. On average, instructors spend 2-4 weeks creating their first course. This includes planning content, recording videos, creating assignments, and setting up the course page. We provide templates and guidelines to streamline the process.",
    },
    {
      question:
        "What technical requirements do I need to become an instructor?",
      answer:
        "You'll need a computer with a reliable internet connection, a good quality microphone (USB microphones start around $50), and video recording capability (can be a smartphone with HD video or webcam). For screen recordings, we recommend software like Camtasia, Screenflow, or OBS Studio. Our platform supports various file formats, and we provide technical guidelines to ensure quality.",
    },
    {
      question: "How does the payment process work?",
      answer:
        "Payments are processed monthly for all sales from the previous month. Once your account reaches the $50 minimum threshold, you'll receive payment via PayPal, Stripe, or direct bank transfer depending on your location. You can track all your sales and earnings in real-time through your instructor dashboard.",
    },
  ];

export default function Faq() {

    
  return (
     <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible>
              {faqItems.map((item, index) => (
  <AccordionItem key={index} value={`item-${index}`}>
    <AccordionTrigger>{item.question}</AccordionTrigger>
    <AccordionContent>
     {item.answer}
    </AccordionContent>
  </AccordionItem>

))}
</Accordion>
            </div>
          </div>
        </section>
  )
}
