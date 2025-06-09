import React from 'react'

export default function BrowseCourse() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Browse Courses</h1>
      <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
        <p className="text-lg text-yellow-800">
          This feature is currently under development
        </p>
        <p className="text-sm text-yellow-700 mt-2">
          We're working hard to bring you an amazing course browsing experience. Check back soon!
        </p>
      </div>
    </div>
  )
}
