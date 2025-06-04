"use client";

import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { navMenu } from "@/data";
// import { ArrowRight } from "lucide-react"

export default function TrainingProgramAccordion() {
  return (
    <div className=" min-h-screen ">
      <div className="mb-12   pt-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Training Program Overview
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Comprehensive professional development tracks designed to enhance your
          skills and accelerate your career growth.
        </p>

        <div className="max-w-6xl mx-auto p-6 ">
          <Accordion
            type="single"
            collapsible
            className="w-full mx-auto gap-2 grid grid-cols-2"
            defaultValue="item-1"
          >
            {navMenu.map((program) => (
              <AccordionItem key={program.title} value={program.title}>
                <AccordionTrigger className="bg-red-600 hover:!text-decoration-none px-3 text-white font-bold">
                  {program.title}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <ul className="list-none pl-6">
                    {program.modules.map((item) => (
                      <li
                        key={item.code}
                        className="text-gray-700 p-4 hover:bg-red-50 rounded-md transition-colors duration-200 cursor-pointer flex items-center border-b gap-2 before:content-['•'] before:text-red-600 before:text-lg"
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

       
      </div>

      <div className="mt-16 bg-red-600 ">
          <Card className="!bg-transparent border-0 rounded-0 shadow-none text-white ">
         
              <div className="p-8 md:p-12 flex flex-col justify-center  items-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
                <p className="mb-8 text-red-100 text-lg">
                  Join thousands of professionals who have transformed their careers through our comprehensive training
                  programs.
                </p>
                <Button className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-4  h-auto text-lg ">
                  Enroll Now
                </Button>
              </div>
            
            
          </Card>
        </div>
    </div>
  );
}
