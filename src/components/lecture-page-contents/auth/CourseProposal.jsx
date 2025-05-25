"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Trash2 } from "lucide-react"

export default function CourseProposal() {
  const [learningObjectives, setLearningObjectives] = useState(["", "", ""])

  const addObjective = () => {
    setLearningObjectives([...learningObjectives, ""])
  }

  const removeObjective = (index) => {
    const newObjectives = [...learningObjectives]
    newObjectives.splice(index, 1)
    setLearningObjectives(newObjectives)
  }

  const updateObjective = (index, value) => {
    const newObjectives = [...learningObjectives]
    newObjectives[index] = value
    setLearningObjectives(newObjectives)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Course Proposal</h2>
      <p className="text-gray-600 mb-8">Tell us about the course you'd like to teach on our platform.</p>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="courseTitle">Course Title *</Label>
          <Input id="courseTitle" placeholder="Enter a clear, descriptive title for your course" required />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="courseCategory">Course Category *</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="webDevelopment">Web Development</SelectItem>
                <SelectItem value="mobileDevelopment">Mobile Development</SelectItem>
                <SelectItem value="dataScience">Data Science & Analytics</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="business">Business & Entrepreneurship</SelectItem>
                <SelectItem value="personalDevelopment">Personal Development</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Course Level *</Label>
            <RadioGroup defaultValue="beginner">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="beginner" id="beginner" />
                <Label htmlFor="beginner" className="font-normal">
                  Beginner
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="intermediate" id="intermediate" />
                <Label htmlFor="intermediate" className="font-normal">
                  Intermediate
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="advanced" id="advanced" />
                <Label htmlFor="advanced" className="font-normal">
                  Advanced
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="courseDescription">Course Description *</Label>
          <Textarea
            id="courseDescription"
            placeholder="Provide a comprehensive description of your course, including what students will learn and why they should take it"
            className="min-h-[150px]"
            required
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label>Learning Objectives *</Label>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={addObjective}
              className="text-red-600 border-red-600 hover:bg-red-50"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add Objective
            </Button>
          </div>

          <p className="text-sm text-gray-600">List what students will be able to do after completing your course</p>

          <div className="space-y-3">
            {learningObjectives.map((objective, index) => (
              <div key={index} className="flex items-center gap-2">
                <Input
                  value={objective}
                  onChange={(e) => updateObjective(index, e.target.value)}
                  placeholder={`Objective ${index + 1}`}
                  className="flex-1"
                />
                {learningObjectives.length > 1 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeObjective(index)}
                    className="text-red-600 hover:bg-red-50 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="courseOutline">Course Outline *</Label>
          <Textarea
            id="courseOutline"
            placeholder="Provide a structured outline of your course, including modules, lessons, and key topics"
            className="min-h-[200px]"
            required
          />
          <p className="text-xs text-gray-500">
            A well-structured outline helps us understand the scope and organization of your course.
          </p>
        </div>
      </div>
    </div>
  )
}
