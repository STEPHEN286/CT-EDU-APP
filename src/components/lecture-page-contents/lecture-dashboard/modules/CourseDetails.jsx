import { useFormContext } from "react-hook-form"
import { Settings, AlertCircle } from "lucide-react"

/**
 * Course Details Form Component
 * Simple form for basic course information
 */
const CourseDetails = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext()

  const description = watch("description", "")

  return (
    <div className="max-w-2xl">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-center gap-2 mb-6">
          <Settings className="h-5 w-5 text-blue-600" />
          <h2 className="text-lg font-semibold">Course Details</h2>
        </div>

        <div className="space-y-4">
          {/* Course Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Course Title *</label>
            <input
              {...register("title", {
                required: "Course title is required",
                minLength: { value: 5, message: "Title must be at least 5 characters" },
              })}
              placeholder="e.g., Complete Web Development Course"
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                errors.title ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.title && (
              <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Course Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
            <textarea
              {...register("description", {
                required: "Description is required",
                minLength: { value: 20, message: "Description must be at least 20 characters" },
              })}
              placeholder="What will students learn in this course?"
              rows={4}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 resize-none ${
                errors.description ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.description && (
              <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {errors.description.message}
              </p>
            )}
            <p className="text-xs text-gray-500 mt-1">{description.length} characters</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetails
