import { coursesData } from '@/data'
import { containerClass } from '@/utils/css-utils'
import React from 'react'
import CourseCard from '../Cards/CourseCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Link } from 'react-router-dom'

export default function FeaturedCourse() {
  return (
    <div className={`${containerClass} space-y-4 py-20`}>
      <div>
        <h2 className="text-3xl font-bold text-center">Featured Modules</h2>
        <p className="text-gray-500 mt-2 text-center">Explore our most popular modules</p>
      </div>

      <Tabs defaultValue="top" className="w-full">
      <div className="relative">
          <div className="overflow-x-auto scrollbar-hidden">
            <TabsList className="inline-flex h-10 items-center justify-center rounded-md bg-gray-100 p-1 text-gray-500 min-w-full">
              <TabsTrigger value="top" className="whitespace-nowrap">Top Modules</TabsTrigger>
              <TabsTrigger value="popular" className="whitespace-nowrap">Popular Modules</TabsTrigger>
              <TabsTrigger value="new" className="whitespace-nowrap">New Modules</TabsTrigger>
              <TabsTrigger value="trending" className="whitespace-nowrap">Trending</TabsTrigger>
              <TabsTrigger value="recommended" className="whitespace-nowrap">Recommended</TabsTrigger>
            </TabsList>
          </div>
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>

        <TabsContent value="top">
          <CourseSlider courses={coursesData.filter(course => course.isTop)} />
        </TabsContent>

        <TabsContent value="popular">
          <CourseSlider courses={coursesData.filter(course => course.isPopular)} />
        </TabsContent>

        <TabsContent value="new">
          <CourseSlider courses={coursesData.filter(course => course.isNew)} />
        </TabsContent>

        <TabsContent value="trending">
          <CourseSlider courses={coursesData.filter(course => course.isTrending)} />
        </TabsContent>

        <TabsContent value="recommended">
          <CourseSlider courses={coursesData.filter(course => course.isRecommended)} />
        </TabsContent>
      </Tabs>

      <div className='w-full flex justify-center'>
        <Link to="/courses" className='text-center bg-black text-white p-3 rounded-md font-semibold'>View More</Link>
      </div>
    </div>
  )
}

function CourseSlider({ courses }) {
  return (
    <div className="relative">
  <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory scroll-px-0 pb-4 scroll-smooth scrollbar-hidden gap-4">
    {courses.map((course) => (
      <div key={course.id} className="snap-start  max-w-[270px] md:min-w-[350px] md:max-w-[300px] flex-shrink-0">
        <CourseCard course={course} />
      </div>
    ))}
  </div>
  {/* <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
  <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div> */}
</div>
  )
}