"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  BookOpen,
  Upload,
  Plus,
  Trash2,
  Video,
  FileText,
  ImageIcon,
  Settings,
  Save,
  Eye,
  ChevronRight,
} from "lucide-react"

export function CreateCourse() {
  const [currentStep, setCurrentStep] = useState(1)
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
        lectures: [{ id: 1, title: "", type: "video", duration: "" }],
      },
    ],
  })

  const totalSteps = 4
  const progress = (currentStep / totalSteps) * 100

  const handleInputChange = (field, value) => {
    setCourseData((prev) => ({ ...prev, [field]: value }))
  }

  const handleArrayChange = (field, index, value) => {
    setCourseData((prev) => ({
      ...prev,
      [field]: prev[field].map((item, i) => (i === index ? value : item)),
    }))
  }

  const addArrayItem = (field) => {
    setCourseData((prev) => ({
      ...prev,
      [field]: [...prev[field], ""],
    }))
  }

  const removeArrayItem = (field, index) => {
    setCourseData((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }))
  }

  const addSection = () => {
    const newSection = {
      id: Date.now(),
      title: "",
      lectures: [{ id: Date.now(), title: "", type: "video", duration: "" }],
    }
    setCourseData((prev) => ({
      ...prev,
      curriculum: [...prev.curriculum, newSection],
    }))
  }

  const addLecture = (sectionIndex) => {
    const newLecture = { id: Date.now(), title: "", type: "video", duration: "" }
    setCourseData((prev) => ({
      ...prev,
      curriculum: prev.curriculum.map((section, index) =>
        index === sectionIndex ? { ...section, lectures: [...section.lectures, newLecture] } : section,
      ),
    }))
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Create New Course</h1>
        <p className="text-muted-foreground">Build and publish your course step by step</p>
      </div>

      {/* Progress Bar */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium">Course Creation Progress</span>
            <span className="text-sm text-muted-foreground">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>Basic Info</span>
            <span>Content</span>
            <span>Curriculum</span>
            <span>Settings</span>
          </div>
        </CardContent>
      </Card>

      <Tabs value={`step-${currentStep}`} className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="step-1" onClick={() => setCurrentStep(1)}>
            Basic Info
          </TabsTrigger>
          <TabsTrigger value="step-2" onClick={() => setCurrentStep(2)}>
            Content
          </TabsTrigger>
          <TabsTrigger value="step-3" onClick={() => setCurrentStep(3)}>
            Curriculum
          </TabsTrigger>
          <TabsTrigger value="step-4" onClick={() => setCurrentStep(4)}>
            Settings
          </TabsTrigger>
        </TabsList>

        {/* Step 1: Basic Information */}
        <TabsContent value="step-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Basic Course Information
              </CardTitle>
              <CardDescription>Start with the fundamentals of your course</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Course Title *</Label>
                  <Input
                    id="title"
                    placeholder="Enter a compelling course title"
                    value={courseData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subtitle">Course Subtitle</Label>
                  <Input
                    id="subtitle"
                    placeholder="A brief subtitle that describes your course"
                    value={courseData.subtitle}
                    onChange={(e) => handleInputChange("subtitle", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Course Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide a detailed description of your course"
                    rows={6}
                    value={courseData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="programming">Programming</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="photography">Photography</SelectItem>
                        <SelectItem value="music">Music</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="level">Course Level *</Label>
                    <Select onValueChange={(value) => handleInputChange("level", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                        <SelectItem value="all-levels">All Levels</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="language">Language *</Label>
                    <Select onValueChange={(value) => handleInputChange("language", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="spanish">Spanish</SelectItem>
                        <SelectItem value="french">French</SelectItem>
                        <SelectItem value="german">German</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Step 2: Course Content */}
        <TabsContent value="step-2">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="h-5 w-5" />
                  Course Media
                </CardTitle>
                <CardDescription>Upload your course thumbnail and promotional video</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Course Thumbnail *</Label>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground mb-2">Upload course thumbnail</p>
                      <Button variant="outline" size="sm">
                        Choose File
                      </Button>
                      <p className="text-xs text-muted-foreground mt-2">JPG, PNG (1280x720 recommended)</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Promotional Video</Label>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                      <Video className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground mb-2">Upload promotional video</p>
                      <Button variant="outline" size="sm">
                        Choose File
                      </Button>
                      <p className="text-xs text-muted-foreground mt-2">MP4 (2-3 minutes recommended)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Learning Objectives</CardTitle>
                <CardDescription>What will students learn from your course?</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {courseData.learningObjectives.map((objective, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        placeholder={`Learning objective ${index + 1}`}
                        value={objective}
                        onChange={(e) => handleArrayChange("learningObjectives", index, e.target.value)}
                      />
                      {courseData.learningObjectives.length > 1 && (
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => removeArrayItem("learningObjectives", index)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                  <Button variant="outline" onClick={() => addArrayItem("learningObjectives")} className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Learning Objective
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
                <CardDescription>What do students need to know or have before taking your course?</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {courseData.requirements.map((requirement, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        placeholder={`Requirement ${index + 1}`}
                        value={requirement}
                        onChange={(e) => handleArrayChange("requirements", index, e.target.value)}
                      />
                      {courseData.requirements.length > 1 && (
                        <Button variant="outline" size="icon" onClick={() => removeArrayItem("requirements", index)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                  <Button variant="outline" onClick={() => addArrayItem("requirements")} className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Requirement
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Step 3: Curriculum */}
        <TabsContent value="step-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Course Curriculum
              </CardTitle>
              <CardDescription>Structure your course content into sections and lectures</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {courseData.curriculum.map((section, sectionIndex) => (
                  <div key={section.id} className="border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="outline">Section {sectionIndex + 1}</Badge>
                      <Input
                        placeholder="Section title"
                        value={section.title}
                        onChange={(e) => {
                          const newCurriculum = [...courseData.curriculum]
                          newCurriculum[sectionIndex].title = e.target.value
                          setCourseData((prev) => ({ ...prev, curriculum: newCurriculum }))
                        }}
                        className="flex-1"
                      />
                    </div>

                    <div className="space-y-2 ml-4">
                      {section.lectures.map((lecture) => (
                        <div key={lecture.id} className="flex items-center gap-2 p-2 border rounded">
                          <Video className="h-4 w-4 text-muted-foreground" />
                          <Input placeholder="Lecture title" value={lecture.title} className="flex-1" />
                          <Select defaultValue="video">
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="video">Video</SelectItem>
                              <SelectItem value="article">Article</SelectItem>
                              <SelectItem value="quiz">Quiz</SelectItem>
                            </SelectContent>
                          </Select>
                          <Input placeholder="Duration" className="w-24" />
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                      <Button variant="outline" size="sm" onClick={() => addLecture(sectionIndex)} className="ml-6">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Lecture
                      </Button>
                    </div>
                  </div>
                ))}

                <Button variant="outline" onClick={addSection} className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Section
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Step 4: Settings */}
        <TabsContent value="step-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Course Settings
              </CardTitle>
              <CardDescription>Configure pricing and publication settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="price">Course Price (USD) *</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="0.00"
                    value={courseData.price}
                    onChange={(e) => handleInputChange("price", e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">Set to 0 for free course</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="target-audience">Target Audience</Label>
                  <Textarea
                    id="target-audience"
                    placeholder="Who is this course designed for?"
                    value={courseData.targetAudience}
                    onChange={(e) => handleInputChange("targetAudience", e.target.value)}
                  />
                </div>
              </div>

              <Separator />

              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium">Ready to publish?</h3>
                  <p className="text-sm text-muted-foreground">
                    Your course will be submitted for review before going live
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">
                    <Save className="h-4 w-4 mr-2" />
                    Save Draft
                  </Button>
                  <Button variant="outline">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                  <Button>Submit for Review</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
          disabled={currentStep === 1}
        >
          Previous
        </Button>
        <Button
          onClick={() => setCurrentStep(Math.min(totalSteps, currentStep + 1))}
          disabled={currentStep === totalSteps}
        >
          Next
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}