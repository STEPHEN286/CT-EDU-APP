"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { navMenu } from "@/data";

export default function TrainingProgramDialog() {
  return (
    <div className="min-h-screen">
      <div className="mb-12 pt-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Training Program Overview
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Comprehensive professional development tracks designed to enhance your
          skills and accelerate your career growth.
        </p>

        <div className="max-w-6xl mx-auto p-6">
          <div className="grid grid-cols-2 gap-4">
            {navMenu.map((program) => (
              <Dialog key={program.title}>
                <DialogTrigger asChild>
                  <Button className="w-full bg-red-600 text-white font-bold hover:bg-red-700">
                    {program.title}
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-white max-w-[95vw] sm:max-w-[90vw] lg:max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader className="pb-4">
                    <DialogTitle className="text-xl sm:text-2xl font-bold text-center text-gray-800">
                      {program.title}
                    </DialogTitle>
                  </DialogHeader>

                  <div className="px-2 sm:px-4">
                    {/* Mobile Layout (Stack Vertically) */}
                    <div className="block sm:hidden">
                      <div className="text-center mb-6">
                        <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full font-medium text-sm shadow-md">
                          Learning Path
                        </div>
                      </div>

                      <div className="space-y-4">
                        {program.modules.map((track, index) => (
                          <div key={index} className="flex items-start gap-4 group">
                            <div className="flex-shrink-0 w-8 h-8 bg-white border-2 border-red-500 rounded-full flex items-center justify-center text-red-500 font-medium text-sm transition-all duration-200 group-hover:bg-red-500 group-hover:text-white mt-1">
                              {index + 1}
                            </div>
                            <div className="flex-1 bg-gray-50 rounded-xl px-4 py-3 shadow-sm border border-gray-200 transition-all duration-200 hover:shadow-md hover:border-red-200 hover:bg-red-50">
                              <h4 className="text-gray-800 font-medium text-sm">{track.name}</h4>
                              <p className="text-xs text-gray-500 mt-1">
                                {track.code} • {track.duration}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Desktop Layout (Horizontal with Lines) */}
                    <div className="hidden sm:block">
                      <div className="flex items-start gap-4 lg:gap-8">
                        {/* Left Button */}
                        <div className="flex-shrink-0 pt-2">
                          <div className="bg-red-500 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-full font-medium text-sm shadow-md whitespace-nowrap">
                            Learning Path
                          </div>
                        </div>

                        {/* Right Content */}
                        <div className="flex-1 min-w-0">
                          <div className="relative">
                            {/* Vertical Line */}
                            <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-red-500"></div>

                            {/* Track Items */}
                            <div className="space-y-4 lg:space-y-6">
                              {program.modules.map((track, index) => (
                                <div key={index} className="flex items-center gap-4 lg:gap-6 group">
                                  {/* Number Circle */}
                                  <div className="relative z-10 w-8 h-8 bg-white border-2 border-red-500 rounded-full flex items-center justify-center text-red-500 font-medium text-sm transition-all duration-200 group-hover:bg-red-500 group-hover:text-white flex-shrink-0">
                                    {index + 1}
                                  </div>

                                  {/* Horizontal Line */}
                                  <div className="w-4 lg:w-8 h-0.5 bg-red-500 flex-shrink-0"></div>

                                  {/* Track Card */}
                                  <div className="flex-1 bg-gray-50 rounded-xl px-4 lg:px-6 py-3 lg:py-4 shadow-sm border border-gray-200 transition-all duration-200 hover:shadow-md hover:border-red-200 hover:bg-red-50 min-w-0">
                                    <h4 className="text-gray-800 font-medium text-sm lg:text-base truncate">
                                      {track.name}
                                    </h4>
                                    <p className="text-xs lg:text-sm text-gray-500 mt-1">
                                      {track.code} • {track.duration}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 bg-red-600">
        <Card className="!bg-transparent border-0 rounded-0 shadow-none text-white">
          <div className="p-8 md:p-12 flex flex-col justify-center items-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
            <p className="mb-8 text-red-100 text-lg">
              Join thousands of professionals who have transformed their careers through our comprehensive training
              programs.
            </p>
            <Button className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-4 h-auto text-lg">
              Enroll Now
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
