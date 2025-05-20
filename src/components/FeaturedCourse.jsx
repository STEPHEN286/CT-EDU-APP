import { coursesData } from '@/data'
import { containerClass } from '@/utils/css-utils'
import React from 'react'
import CourseCard from './Cards/CourseCard'
import TestimonialCard from './Cards/TestimonialCard'

export default function FeaturedCourse() {
  return (
    <div className={`${containerClass} space-y-4` }>
       <div>
          <h2 className="text-3xl font-bold">Featured Courses</h2>
          <p className="text-gray-500 mt-2">Explore our most popular courses</p>
        </div>

     


  <div
    className="
      flex 
      flex-nowrap 
      gap-6 
      overflow-x-auto 
      snap-x snap-mandatory 
      scroll-px-0 
      pb-4 
      scroll-smooth
    "
  >
    {coursesData.map((course) => (
      <div
        key={course.id}
        className="snap-start min-w-[80%] sm:min-w-[60%] lg:min-w-[40%] px-2 first:pl-0 last:pr-4"
      >
        <CourseCard course={course} />
      </div>
    ))}
  </div>
</div>

      
  
  )
}
