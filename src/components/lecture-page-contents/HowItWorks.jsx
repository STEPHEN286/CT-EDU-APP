import React from 'react'

export default function HowItWorks() {
  return (
     <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div className="mb-4 text-center">
                  <i className="fas fa-chalkboard-teacher text-red-600 text-4xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  Plan Your Course
                </h3>
                <p className="text-gray-600">
                  Choose a topic based on your expertise and market demand.
                  Structure your curriculum to provide value to students.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div className="mb-4 text-center">
                  <i className="fas fa-video text-red-600 text-4xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  Create Content
                </h3>
                <p className="text-gray-600">
                  Record high-quality video lectures, create engaging
                  assignments, and develop comprehensive resources for your
                  students.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div className="mb-4 text-center">
                  <i className="fas fa-rocket text-red-600 text-4xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">
                  Launch & Earn
                </h3>
                <p className="text-gray-600">
                  Publish your course, market it to your audience, and start
                  earning revenue with each enrollment. We handle payments and
                  platform maintenance.
                </p>
              </div>
            </div>
          </div>
        </section>
  )
}
