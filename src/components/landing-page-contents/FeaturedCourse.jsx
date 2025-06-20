// import { coursesData } from '@/data'
import { containerClass } from '@/utils/css-utils'
import React from 'react'
import CourseCard from '../Cards/CourseCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Link } from 'react-router-dom'
import { useFetchCourses } from '@/hooks/useFetchCourses'
// import { useFetchCourses } from '@/hooks/useModulesActions'

export default function FeaturedCourse() {
  const { course, isLoading, isError, error } = useFetchCourses();

  // console.log("Fetched courses:", course);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-[400px] text-red-500">
        Error: {error}
      </div>
    );
  }

  if (!course || course.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[400px] text-gray-500">
        No courses available
      </div>
    );
  }

  const topCourses = course.filter(course => course.featured_category === "top");
  const newCourses = course.filter(course => course.featured_category === "new");
  const popularCourses = course.filter(course => course.featured_category === "popular");

  console.log("popular", popularCourses)

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
              {newCourses.length > 0 && <TabsTrigger value="new" className="whitespace-nowrap">New Modules</TabsTrigger>}
              {topCourses.length > 0 && <TabsTrigger value="top" className="whitespace-nowrap">Top Modules</TabsTrigger>}
              {popularCourses.length > 0 && <TabsTrigger value="popular" className="whitespace-nowrap">Popular Modules</TabsTrigger>}
            </TabsList>
          </div>
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>

        {topCourses.length > 0 && (
          <TabsContent value="top">
            <CourseSlider courses={topCourses} />
          </TabsContent>
        )}

        {newCourses.length > 0 && (
          <TabsContent value="new">
            <CourseSlider courses={newCourses} />
          </TabsContent>
        )}

        {popularCourses.length > 0 && (
          <TabsContent value="popular">
            <CourseSlider courses={popularCourses} />
          </TabsContent>
        )}
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
    {courses?.map((course) => (
      <div key={course.id} className="snap-start  max-w-[270px] flex-shrink-0">
        <CourseCard course={course} />
      </div>
    ))}
  </div>
  {/* <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
  <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div> */}
</div>
  )
}