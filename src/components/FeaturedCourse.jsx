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
    grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6
    overflow-x-auto md:overflow-x-visible
    flex 
    flex-nowrap md:grid
    snap-x snap-mandatory md:snap-none
    scroll-px-0
    pb-4 md:pb-0
    scroll-smooth
  "
>
  {coursesData.map(course => (
    <div 
      key={course.id} 
      className="snap-start min-w-[80%] sm:min-w-[60%] md:min-w-0 px-2 md:px-0 first:pl-0 md:first:pl-0 last:pr-4 md:last:pr-0"
    >
      <CourseCard course={course} />
    </div>
  ))}
</div>
      
    </div>
  )
}
