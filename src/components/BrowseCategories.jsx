import React from 'react'
import { containerClass } from '@/utils/css-utils'
import { courses } from '@/data'
import SmallCard from './Cards/SmallCard'

export default function BrowseCategories() {
  return (
    <div className={`${containerClass}  py-20 space-y-8`}>
      <div>
          <h1 className='text-xl font-bold text-center'>Browse Category</h1>
          <p className='text-sm text-gray-500 text-center'>Explore our wide range of courses across different categories</p>
      </div>
      <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
        {
            courses.map(course => (
                <SmallCard key={course.id} title={course.title} icon={course.icon} count={course.courseCount} />
            ))
        }
      </div>
    </div>
  )
}
