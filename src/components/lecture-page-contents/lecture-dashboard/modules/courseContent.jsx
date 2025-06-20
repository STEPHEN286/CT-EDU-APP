"use client"

import { useState } from "react"
import { useFormContext, useFieldArray } from "react-hook-form"
import {
  Video,
  FileText,
  File,
  Presentation,
  Table,
  Upload,
  X,
  HelpCircle,
  Plus,
  Trash2,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  ChevronRight,
} from "lucide-react"
import { LECTURE_TYPES } from "./FileTypes"

/**
 * Course Content Component
 * Manages sections and lectures with file uploads
 */
const CourseContent = () => {
  // Track which sections are collapsed in the UI
  const [collapsedSections, setCollapsedSections] = useState(new Set())

  // Get form methods from React Hook Form context
  const {
    control,
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext()

  // Initialize dynamic sections array using useFieldArray
  const {
    fields: sections,
    append: addSection,
    remove: removeSection,
  } = useFieldArray({
    control,
    name: "sections", // Changed from sectionName to sections
  })

  // Watch sections data for real-time updates
  const watchedSections = watch("sections") // Changed from sectionName to sections

  // Map lecture types to their corresponding icons
  const getIcon = (type) => {
    const icons = {
      video: <Video className="h-4 w-4 text-blue-600" />,
      pdf: <FileText className="h-4 w-4 text-red-500" />,
      word: <File className="h-4 w-4 text-blue-500" />,
      excel: <Table className="h-4 w-4 text-green-600" />,
      powerpoint: <Presentation className="h-4 w-4 text-orange-500" />,
      quiz: <HelpCircle className="h-4 w-4 text-purple-600" />,
    }
    return icons[type] || <File className="h-4 w-4 text-gray-500" />
  }

  // Handle file upload for a specific lecture
  const handleFileUpload = (sectionIndex, lectureIndex, file) => {
    setValue(`sections.${sectionIndex}.lectures.${lectureIndex}.file`, file, {
      shouldValidate: true, // ✅ trigger validation
      shouldDirty: true,
    });
  };

  // Add a new lecture to an existing section
  const addLecture = (sectionIndex) => {
    const currentLectures = watchedSections[sectionIndex]?.lectures || []
    setValue(`sections.${sectionIndex}.lectures`, [...currentLectures, { title: "", type: "video", file: null }])
  }

  // Remove a lecture from a section
  const removeLecture = (sectionIndex, lectureIndex) => {
    const currentLectures = watchedSections[sectionIndex]?.lectures || []
    const updatedLectures = currentLectures.filter((_, index) => index !== lectureIndex)
    setValue(`sections.${sectionIndex}.lectures`, updatedLectures)
  }

  // Toggle section collapse state
  const toggleCollapse = (index) => {
    setCollapsedSections((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  return (
    <div className="space-y-4">
      {/* Render all course sections */}
      {sections.map((section, sectionIndex) => {
        const sectionData = watchedSections?.[sectionIndex]
        const sectionError = errors.sections?.[sectionIndex]

        return (
          <div key={section.id} className="bg-white rounded-lg shadow-sm border">
            {/* Section Header */}
            <div className="bg-gray-50 p-4 border-b">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => toggleCollapse(sectionIndex)}
                  className="p-1 hover:bg-gray-200 rounded"
                >
                  {collapsedSections.has(sectionIndex) ? (
                    <ChevronRight className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>

                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                  {sectionIndex + 1}
                </div>

                <input
                  {...register(`sections.${sectionIndex}.title`, {
                    required: "Section title is required",
                  })}
                  placeholder="Section title"
                  className={`flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                    sectionError?.title ? "border-red-500" : "border-gray-300"
                  }`}
                />

                <span className="text-sm text-gray-500">{sectionData?.lectures?.length || 0} lectures</span>

                {sections.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeSection(sectionIndex)}
                    className="p-1 text-red-500 hover:bg-red-50 rounded"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>

              {sectionError?.title && (
                <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {sectionError.title.message}
                </p>
              )}
            </div>

            {/* Section Content - Only shown when not collapsed */}
            {!collapsedSections.has(sectionIndex) && (
              <div className="p-4">
                <div className="space-y-3">
                  {sectionData?.lectures?.map((lecture, lectureIndex) => {
                    const lectureError = errors.sections?.[sectionIndex]?.lectures?.[lectureIndex]

                    return (
                      <div key={lectureIndex} className="border rounded-lg p-4 bg-gray-50">
                        {/* Lecture Header */}
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-5 h-5 bg-gray-300 text-gray-700 rounded-full flex items-center justify-center text-xs">
                            {lectureIndex + 1}
                          </div>

                          <input
                            {...register(`sections.${sectionIndex}.lectures.${lectureIndex}.title`, {
                              required: "Lecture title is required",
                            })}
                            placeholder="Lecture title"
                            className={`flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-white ${
                              lectureError?.title ? "border-red-500" : "border-gray-300"
                            }`}
                          />

                          <select
                            {...register(`sections.${sectionIndex}.lectures.${lectureIndex}.type`, {
    onChange: (e) => {
 
      setValue(
        `sections.${sectionIndex}.lectures.${lectureIndex}.file`,
        null,
        { shouldValidate: true }
      );
    }
  })}
                            className="w-32 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-white text-sm"
                          >
                            {LECTURE_TYPES.map((type) => (
                              <option key={type.value} value={type.value}>
                                {type.label}
                              </option>
                            ))}
                          </select>

                          {sectionData?.lectures?.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeLecture(sectionIndex, lectureIndex)}
                              className="p-1 text-red-500 hover:bg-red-50 rounded"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          )}
                        </div>

                        {/* Validation Errors */}
                        {lectureError?.title && (
                          <p className="text-red-600 text-sm mb-2 flex items-center gap-1">
                            <AlertCircle className="h-4 w-4" />
                            {lectureError.title.message}
                          </p>
                        )}

                        {/* File Upload Section */}
                        <div>
                          {!lecture?.file ? (
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 hover:bg-blue-50 transition-colors">
                              <input
                                type="file"
                                accept={LECTURE_TYPES.find((t) => t.value === lecture?.type)?.accept}
                                onChange={(e) => {
                                  const file = e.target.files?.[0]
                                  if (file) handleFileUpload(sectionIndex, lectureIndex, file)
                                }}
                                className="hidden"
                                id={`file-${sectionIndex}-${lectureIndex}`}
                              />
                              <label
                                htmlFor={`file-${sectionIndex}-${lectureIndex}`}
                                className="cursor-pointer flex items-center justify-center gap-2"
                              >
                                <Upload className="h-5 w-5 text-gray-400" />
                                <span className="text-sm text-gray-600">Upload {lecture?.type || "video"} file</span>
                              </label>
                            </div>
                          ) : (
                            <div className="flex items-center justify-between p-3 bg-white border border-green-200 rounded-lg">
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                {getIcon(lecture?.type)}
                                <span className="text-sm font-medium">{lecture.file.name}</span>
                                <span className="text-xs text-gray-500">
                                  ({(lecture.file.size / 1024 / 1024).toFixed(1)} MB)
                                </span>
                              </div>
                              <button
                                type="button"
                                onClick={() => setValue(`sections.${sectionIndex}.lectures.${lectureIndex}.file`, null)}
                                className="p-1 hover:bg-gray-100 rounded"
                              >
                                <X className="h-4 w-4 text-gray-500" />
                              </button>
                            </div>
                          )}

                          {/* File validation */}
                          <input
                            type="hidden"
                            {...register(`sections.${sectionIndex}.lectures.${lectureIndex}.file`, {
                              required: "Please upload a file",
                            })}
                          />
                          {lectureError?.file && (
                            <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                              <AlertCircle className="h-4 w-4" />
                              {lectureError.file.message}
                            </p>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Add Lecture Button */}
                <button
                  type="button"
                  onClick={() => addLecture(sectionIndex)}
                  className="w-full mt-3 px-4 py-2 border border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                >
                  <Plus className="h-4 w-4" />
                  Add Lecture
                </button>
              </div>
            )}
          </div>
        )
      })}

      {/* Add Section Button */}
      <button
        type="button"
        onClick={() =>
          addSection({
            title: `Section ${sections.length + 1}`,
            lectures: [{ title: "", type: "video", file: null }],
          })
        }
        className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-medium"
      >
        <Plus className="h-5 w-5" />
        Add Section
      </button>
    </div>
  )
}

export default CourseContent
