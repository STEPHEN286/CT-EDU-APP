"use client"

import { useState } from "react"
import { useForm, FormProvider } from "react-hook-form"
import { BookOpen, Settings, CloudUpload, AlertCircle } from "lucide-react"

import CourseDetails from "./modules/CourseDetails"
import CourseContent from "./modules/courseContent"
import { usePostCourseUpload } from "@/hooks/useCoursesActions"
import { useUser } from "@/hooks/useUser"

/**
 * Main Course Builder Component
 * Simple React Hook Form implementation with validation
 */
const LectureInput = () => {
  const [activeTab, setActiveTab] = useState("details")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {user} = useUser ()

  // Initialize React Hook Form with simple validation
  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      // Course details
      title: "",
      description: "",
    
    
      // Course sections
      sections: [
        {
          title: "Introduction",
          lectures: [{ title: "", type: "video", file: null }],
        },
      ],
    },
  })

  const {
    handleSubmit,
    watch,
    formState: { errors },
  } = methods

  // Watch form data for statistics
  const formData = watch()
  const isFormReady = () => {
    const { title, description,  sections } = formData
  
    const hasCourseDetails =
      title?.trim() &&
      description?.trim() 
      
    
  
    const hasCourseContent =
      sections?.length > 0 &&
      sections.every(
        (section) =>
          section.title?.trim() &&
          section.lectures?.length > 0 &&
          section.lectures.every((lecture) => lecture.title?.trim() && lecture.file)
      )
  
    return hasCourseDetails && hasCourseContent
  }
  
  // Get statistics
  const getTotalFiles = () => {
    return (
      formData.sections?.reduce((total, section) => {
        return total + (section?.lectures?.filter((lecture) => lecture?.file)?.length || 0)
      }, 0) || 0
    )
  }

  const getTotalLectures = () => {
    return (
      formData.sections?.reduce((total, section) => {
        return total + (section?.lectures?.length || 0)
      }, 0) || 0
    )
  }



  const {mutate} = usePostCourseUpload()

  // Form submission handler

  // console.log("user", user.id)
  const onSubmit = async (data) => {
    const formData = {
      category_id : user.category_id,
      instructor_id: user.id,
      ...data
    }
    mutate(formData)
    console.log("course" , formData)
  }

  return (
    <FormProvider {...methods}>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white border-b shadow-sm">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Course Builder</h1>
                <p className="text-sm text-gray-600">
                  {formData.sections?.length || 0} sections • {getTotalLectures()} lectures • {getTotalFiles()} files
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit(onSubmit)}
                disabled={!isFormReady() || isSubmitting}
  className={`px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors ${
    isFormReady() && !isSubmitting
      ? "bg-green-600 hover:bg-green-700 text-white"
      : "bg-gray-300 text-gray-500 cursor-not-allowed"
  }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Creating...
                  </>
                ) : (
                  <>
                    <CloudUpload className="h-4 w-4" />
                    Create Course
                  </>
                )}
              </button>
            </div>

            {/* Tabs */}
            <div className="mt-4 border-b">
              <nav className="-mb-px flex space-x-8">
                <button
                  type="button"
                  onClick={() => setActiveTab("details")}
                  className={`py-3 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                    activeTab === "details"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <Settings className="h-4 w-4" />
                  Course Details
                  {errors.title || errors.description || errors.category || errors.level || errors.price ? (
                    <AlertCircle className="h-4 w-4 text-red-500" />
                  ) : null}
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("content")}
                  className={`py-3 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                    activeTab === "content"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <BookOpen className="h-4 w-4" />
                  Course Content
                  {getTotalFiles() > 0 && (
                    <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">
                      {getTotalFiles()}
                    </span>
                  )}
                  {errors.sections ? <AlertCircle className="h-4 w-4 text-red-500" /> : null}
                </button>
              </nav>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 py-6">
          {activeTab === "details" && <CourseDetails />}
          {activeTab === "content" && <CourseContent />}
        </div>
      </div>
    </FormProvider>
  )
}

export default LectureInput
