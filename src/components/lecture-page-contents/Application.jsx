import React from 'react'

export default function Application() {
  return (
   <section className="py-16 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Share Your Knowledge?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our community of instructors and start creating courses that
              change lives. Begin your teaching journey today.
            </p>
            <button className="bg-white text-red-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer">
              Start Teaching Today
            </button>
            <div className="mt-8 flex justify-center space-x-6">
              <a href="#" className="text-white hover:text-red-200 underline">
                Teaching Resources
              </a>
              <a href="#" className="text-white hover:text-red-200 underline">
                Instructor Community
              </a>
              <a href="#" className="text-white hover:text-red-200 underline">
                Support Center
              </a>
            </div>
          </div>
        </section>
  )
}
