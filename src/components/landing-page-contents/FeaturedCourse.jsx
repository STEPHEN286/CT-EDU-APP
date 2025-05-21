import { coursesData } from '@/data'
import { containerClass } from '@/utils/css-utils'
import React from 'react'
import CourseCard from '../Cards/CourseCard'
import TestimonialCard from '../Cards/TestimonialCard'

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
      
      overflow-x-auto 
      snap-x snap-mandatory 
      scroll-px-0 
      pb-4 
      scroll-smooth
      scrollbar-hidden
    "
  >
    {coursesData.map((course) => (
      <div
        key={course.id}
        className=" snap-start px-2 first:pl-0 last:pr-4"
      >
      <CourseCard course={course} />
      </div>
    ))}
    
  </div>



<div className='w-full flex justify-center'><button className='text-center bg-black text-white p-3 rounded-md font-semibold'>view More</button></div>

</div>

      
  
  )
}
