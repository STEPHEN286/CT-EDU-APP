 // src/hooks/useDashboardFilters.js
import { useState } from "react"
import { allCourses } from "@/data/dashboardData"

export function useDashboardFilters() {
  const [dateRange, setDateRange] = useState({
    from: new Date(new Date().setMonth(new Date().getMonth() - 6)),
    to: new Date(),
  })
  const [selectedCourse, setSelectedCourse] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedMetric, setSelectedMetric] = useState("enrollments")

  const getFilteredChartData = () => {
    // Filter data based on date range
    const filteredData = allCourses
      .filter(course => {
        if (selectedCourse !== "all" && course.id !== selectedCourse) return false
        if (selectedStatus !== "all" && course.status !== selectedStatus) return false
        return true
      })
      .map(course => ({
        month: course.lastUpdated,
        enrollments: course.students,
        revenue: course.students * 99, // Example calculation
        ratings: course.rating,
      }))

    return filteredData
  }

  const getSummaryData = () => {
    const filteredCourses = allCourses.filter(course => {
      if (selectedCourse !== "all" && course.id !== selectedCourse) return false
      if (selectedStatus !== "all" && course.status !== selectedStatus) return false
      return true
    })

    return {
      totalStudents: filteredCourses.reduce((sum, course) => sum + course.students, 0),
      totalCourses: filteredCourses.length,
      totalRevenue: filteredCourses.reduce((sum, course) => sum + (course.students * 99), 0),
      avgRating: filteredCourses.reduce((sum, course) => sum + course.rating, 0) / filteredCourses.length || 0,
    }
  }

  return {
    dateRange,
    setDateRange,
    selectedCourse,
    setSelectedCourse,
    selectedStatus,
    setSelectedStatus,
    selectedMetric,
    setSelectedMetric,
    getFilteredChartData,
    getSummaryData,
  }
}