import React from 'react'

export default function Benefits() {
  return (
   <section className="py-16 bg-white">
             <div className="container mx-auto px-4">
               <h2 className="text-3xl font-bold text-center mb-12">
                 Why Teach on LearnHub
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                   <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                     <i className="fas fa-dollar-sign text-red-600 text-3xl"></i>
                   </div>
                   <h3 className="text-xl font-semibold mb-3">Earn Money</h3>
                   <p className="text-gray-600">
                     Earn revenue share for every course sale. Our top instructors
                     make up to $100,000+ annually with their courses.
                   </p>
                 </div>
   
                 <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                   <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                     <i className="fas fa-globe text-red-600 text-3xl"></i>
                   </div>
                   <h3 className="text-xl font-semibold mb-3">Impact Lives</h3>
                   <p className="text-gray-600">
                     Reach millions of students around the world who are eager to
                     learn from your expertise and experience.
                   </p>
                 </div>
   
                 <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                   <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                     <i className="fas fa-lightbulb text-red-600 text-3xl"></i>
                   </div>
                   <h3 className="text-xl font-semibold mb-3">Share Expertise</h3>
                   <p className="text-gray-600">
                     Our platform provides all the tools to create engaging courses
                     with videos, quizzes, and assignments.
                   </p>
                 </div>
               </div>
             </div>
           </section>
   
  )
}
