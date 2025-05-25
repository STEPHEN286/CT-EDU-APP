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
        <h2 className="text-3xl font-bold text-center">Featured Courses</h2>
        <p className="text-gray-500 mt-2 text-center">Explore our most popular courses</p>
      </div>

      <Tabs defaultValue="top" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-8">
          <TabsTrigger value="top">Top Courses</TabsTrigger>
          <TabsTrigger value="popular">Popular</TabsTrigger>
          <TabsTrigger value="new">New Release</TabsTrigger>
          <TabsTrigger value="trending">Trending</TabsTrigger>
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
        </TabsList>

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
    <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory scroll-px-0 pb-4 scroll-smooth scrollbar-hidden">
      {courses.map((course) => (
        <div key={course.id} className="snap-start px-2 first:pl-0 last:pr-4">
          <CourseCard course={course} />
        </div>
      ))}
    </div>
  )
}