"use client"

import React, { useState } from "react"
import {
  BookOpen,
  Upload,
  Plus,
  Trash2,
  Video,
  FileText,
  ChevronRight,
  Play,
  X,
  Edit,
  Eye,
} from "lucide-react"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { navMenu } from "@/data"
import LectureInput from "./modules/LectureInput"


export default function CreateCourse() {
  const [currentStep, setCurrentStep] = useState(1)
  const [previewVideo, setPreviewVideo] = useState(null)
  const [courseData, setCourseData] = useState({
    title: "",
    subtitle: "",
    description: "",
    category: "",
    level: "",
    language: "",
    price: "",
    thumbnail: null,
    promoVideo: null,
    learningObjectives: [""],
    requirements: [""],
    targetAudience: "",
    curriculum: [
      {
        id: 1,
        title: "",
        lectures: [{ id: 1, title: "", type: "video", duration: "", videoFile: null, videoUrl: null }],
      },
    ],
  })

  const totalSteps = 2

  const handleInputChange = (field, value) => {
    setCourseData((prev) => ({ ...prev, [field]: value }))
  }

  const addSection = () => {
    const newSection = {
      id: Date.now(),
      title: "",
      lectures: [{ id: Date.now(), title: "", type: "video", duration: "", videoFile: null, videoUrl: null }],
    }
    setCourseData((prev) => ({
      ...prev,
      curriculum: [...prev.curriculum, newSection],
    }))
  }

  const addLecture = (sectionIndex) => {
    const newLecture = { id: Date.now(), title: "", type: "video", duration: "", videoFile: null, videoUrl: null }
    setCourseData((prev) => ({
      ...prev,
      curriculum: prev.curriculum.map((section, index) =>
        index === sectionIndex ? { ...section, lectures: [...section.lectures, newLecture] } : section,
      ),
    }))
  }

  const removeLecture = (sectionIndex, lectureId) => {
    setCourseData((prev) => ({
      ...prev,
      curriculum: prev.curriculum.map((section, index) =>
        index === sectionIndex 
          ? { ...section, lectures: section.lectures.filter(lecture => lecture.id !== lectureId) }
          : section
      ),
    }))
  }

  const updateLecture = (sectionIndex, lectureId, field, value) => {
    setCourseData((prev) => ({
      ...prev,
      curriculum: prev.curriculum.map((section, index) =>
        index === sectionIndex
          ? {
              ...section,
              lectures: section.lectures.map(lecture =>
                lecture.id === lectureId ? { ...lecture, [field]: value } : lecture
              ),
            }
          : section
      ),
    }))
  }

  const handleVideoSelect = (sectionIndex, lectureId, event) => {
    const file = event.target.files[0]
    if (file) {
      const videoUrl = URL.createObjectURL(file)
      updateLecture(sectionIndex, lectureId, 'videoFile', file)
      updateLecture(sectionIndex, lectureId, 'videoUrl', videoUrl)
    }
  }

  const handleVideoChange = (sectionIndex, lectureId) => {
    const fileInput = document.getElementById(`video-input-${sectionIndex}-${lectureId}`)
    fileInput?.click()
  }

  const handleVideoRemove = (sectionIndex, lectureId) => {
    const lecture = courseData.curriculum[sectionIndex].lectures.find(l => l.id === lectureId)
    if (lecture?.videoUrl) {
      URL.revokeObjectURL(lecture.videoUrl)
    }
    updateLecture(sectionIndex, lectureId, 'videoFile', null)
    updateLecture(sectionIndex, lectureId, 'videoUrl', null)
  }

  const openVideoPreview = (videoUrl, lectureTitle) => {
    setPreviewVideo({ url: videoUrl, title: lectureTitle })
  }

  const closeVideoPreview = () => {
    setPreviewVideo(null)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-gray-600" />
            <h1 className="text-2xl font-bold text-gray-900">Create New Module</h1>
          </div>
          
          {/* Progress Tabs */}
          <div className="mt-6 flex space-x-4">
            <button
              onClick={() => setCurrentStep(1)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentStep === 1 
                  ? 'bg-black text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Basic Info
            </button>
            <button
              onClick={() => setCurrentStep(2)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentStep === 2 
                  ? 'bg-black text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Content
            </button>
          </div>
        </div>

        {/* Step 1: Basic Information */}
        { currentStep === 1 && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Basic Module Information</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Module Title *
                </label>
                <input
                  type="text"
                  placeholder="Enter a compelling module title"
                  value={courseData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                />
              </div>
        

             

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Module Description *
                </label>
                <textarea
                  placeholder="Provide a detailed description of your module"
                  rows={6}
                  value={courseData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Module *
                  </label>
                  <select
                    value={courseData.category}
                    onChange={(e) => handleInputChange("category", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  >
                    <option value="">Select module</option>
                    {navMenu.map(module => (
                      
                      <option key={module.modules} value={module.title}>{module.title}</option>
                    ))
                  }
                  </select>
                </div>
            </div>
          </div>
          </div>
        )}
        

        {/* Step 2: Course Content */}
        {currentStep === 2 && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center gap-2 mb-6">
              <FileText className="h-5 w-5 text-gray-600" />
              <h2 className="text-xl font-semibold">Module Curriculum</h2>
            </div>
            
            <div className="space-y-6 max-h-96 overflow-y-auto pr-2">
             <LectureInput />
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
            disabled={currentStep === totalSteps}
            className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Video Preview  */}
        {previewVideo && (
          <Dialog open={!!previewVideo} onOpenChange={() => closeVideoPreview()}>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>{previewVideo.title}</DialogTitle>
                <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </DialogClose>
              </DialogHeader>

              <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4">
                <video
                  src={previewVideo.url}
                  controls
                  className="w-full h-full"
                  autoPlay
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              <DialogFooter>
                <Button variant="secondary" onClick={closeVideoPreview}>
                  Close
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </div>
        
    </div>
    
  
  )
}