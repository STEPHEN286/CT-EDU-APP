import React from 'react'

export default function Requirements() {
  return (
    <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              What You Need to Get Started
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md flex">
                <div className="mr-4 text-green-500">
                  <i className="fas fa-check-circle text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Expertise & Knowledge
                  </h3>
                  <p className="text-gray-600">
                    Deep understanding of your subject matter and ability to
                    explain concepts clearly to beginners.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex">
                <div className="mr-4 text-green-500">
                  <i className="fas fa-check-circle text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Communication Skills
                  </h3>
                  <p className="text-gray-600">
                    Ability to present information in an engaging, clear manner
                    that resonates with students.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex">
                <div className="mr-4 text-green-500">
                  <i className="fas fa-check-circle text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Basic Equipment
                  </h3>
                  <p className="text-gray-600">
                    Computer, microphone, and camera for recording high-quality
                    video and audio content.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md flex">
                <div className="mr-4 text-green-500">
                  <i className="fas fa-check-circle text-2xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Time Commitment
                  </h3>
                  <p className="text-gray-600">
                    Dedication to create comprehensive course materials and
                    engage with your students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
