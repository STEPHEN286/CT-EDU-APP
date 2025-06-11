"use client"

import { useState } from "react"
import { QAThreadModal } from "./question-answer/QAThreadModal"
import {
  HelpCircle,
  CheckCircle,
  AlertCircle,
  Search,
  Filter,
  MessageSquare,
  Calendar,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"

const questions = [
  {
    id: 1,
    title: "How to handle async operations in React hooks?",
    content:
      "I'm struggling with managing async operations inside useEffect. Sometimes I get warnings about memory leaks and I'm not sure how to properly clean up. Could you provide some examples of best practices?",
    student: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg",
      initials: "SC",
    },
    course: "Complete React Development Course",
    category: "React Hooks",
    status: "pending",
    createdAt: "2 hours ago",
  },
  {
    id: 2,
    title: "Best practices for state management in large applications?", 
    content:
      "I'm working on a large React application and I'm wondering about the best approaches for state management. Should I use Redux, Zustand, or stick with React Context? What are the trade-offs?",
    student: {
      name: "Michael Rodriguez",
      avatar: "/placeholder.svg", 
      initials: "MR",
    },
    course: "Advanced JavaScript Concepts",
    category: "State Management",
    status: "answered",
    createdAt: "1 day ago",
  },
  {
    id: 3,
    title: "Understanding JavaScript closures with practical examples",
    content:
      "I've read about closures multiple times but I still don't fully grasp when and why to use them. Could you provide some real-world examples where closures are actually useful?",
    student: {
      name: "Emily Johnson",
      avatar: "/placeholder.svg",
      initials: "EJ",
    },
    course: "Advanced JavaScript Concepts", 
    category: "JavaScript Fundamentals",
    status: "pending",
    createdAt: "3 days ago",
  },
  {
    id: 4,
    title: "Node.js authentication with JWT tokens",
    content:
      "I'm implementing authentication in my Node.js app using JWT tokens. How should I handle token refresh and what's the best way to store tokens securely on the client side?",
    student: {
      name: "David Kim",
      avatar: "/placeholder.svg",
      initials: "DK",
    },
    course: "Node.js Backend Development",
    category: "Authentication", 
    status: "answered",
    createdAt: "5 hours ago",
  },
]

const getStatusColor = (status) => {
  switch (status) {
    case "answered":
      return "bg-emerald-100 text-emerald-700 border-emerald-200"
    case "pending":
      return "bg-amber-100 text-amber-700 border-amber-200"
    default:
      return "bg-gray-100 text-gray-700 border-gray-200"
  }
}

const getStatusIcon = (status) => {
  switch (status) {
    case "answered":
      return CheckCircle
    case "pending":
      return AlertCircle
    default:
      return HelpCircle
  }
}

export default function QAPage() {
  const [selectedQuestion, setSelectedQuestion] = useState(null)
  const [isThreadModalOpen, setIsThreadModalOpen] = useState(false)

  const handleViewThread = (question) => {
    setSelectedQuestion(question)
    setIsThreadModalOpen(true)
  }

  const handleCloseThread = () => {
    setIsThreadModalOpen(false)
    setSelectedQuestion(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8">
        {/* Header */}
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Questions & Answers</h1>
          <p className="text-sm md:text-base text-gray-600">Help your students by answering their questions and providing guidance</p>
        </div>

        {/* Filters and Search */}
        <Card className="bg-white border border-gray-200/60 shadow-sm">
          <CardContent className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search questions..."
                  className="pl-10 bg-gray-50 border-gray-200 focus:bg-white transition-colors w-full"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Select defaultValue="all-courses">
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-courses">All Courses</SelectItem>
                    <SelectItem value="react">React Development</SelectItem>
                    <SelectItem value="javascript">Advanced JavaScript</SelectItem>
                    <SelectItem value="nodejs">Node.js Backend</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all-status">
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-status">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="answered">Answered</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Questions List */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="bg-white border border-gray-200 p-1 rounded-lg shadow-sm w-full flex flex-wrap md:flex-nowrap">
            <TabsTrigger
              value="all"
              className="flex-1 rounded-md data-[state=active]:bg-gray-600 data-[state=active]:text-white"
            >
              All Questions
            </TabsTrigger>
            <TabsTrigger
              value="pending"
              className="flex-1 rounded-md data-[state=active]:bg-gray-600 data-[state=active]:text-white"
            >
              Pending
            </TabsTrigger>
            <TabsTrigger
              value="answered"
              className="flex-1 rounded-md data-[state=active]:bg-gray-600 data-[state=active]:text-white"
            >
              Answered
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {questions.map((question) => {
              const StatusIcon = getStatusIcon(question.status)
              return (
                <Card
                  key={question.id}
                  className="bg-white border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <CardContent className="p-4 md:p-6">
                    <div className="space-y-4">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap gap-2 mb-2">
                            <Badge
                              className={`px-2 py-1 text-xs font-medium border ${getStatusColor(question.status)}`}
                            >
                              <StatusIcon className="h-3 w-3 mr-1" />
                              {question.status.toUpperCase()}
                            </Badge>
                            <Badge variant="outline" className="text-xs px-2 py-1">
                              {question.category}
                            </Badge>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{question.title}</h3>
                          <p className="text-sm md:text-base text-gray-600 line-clamp-2">{question.content}</p>
                        </div>
                      </div>

                      <Separator />

                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={question.student.avatar} />
                            <AvatarFallback>{question.student.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{question.student.name}</p>
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                              <Calendar className="h-3 w-3" />
                              {question.createdAt}
                            </div>
                          </div>
                        </div>
                        <Button
                          className="w-full sm:w-auto gap-2"
                          onClick={() => handleViewThread(question)}
                        >
                          <MessageSquare className="h-4 w-4" />
                          {question.status === "pending" ? "Answer" : "View Answer"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </TabsContent>

          <TabsContent value="pending" className="space-y-4">
            {questions
              .filter((q) => q.status === "pending")
              .map((question) => (
                <Card key={question.id} className="bg-white border border-amber-200 shadow-sm">
                  <CardContent className="p-4 md:p-6">
                    <div className="space-y-4">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <Badge className="bg-amber-100 text-amber-700 border-amber-200 px-2 py-1 text-xs font-medium mb-2">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            PENDING
                          </Badge>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{question.title}</h3>
                          <p className="text-sm md:text-base text-gray-600">{question.content}</p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={question.student.avatar} />
                            <AvatarFallback>{question.student.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{question.student.name}</p>
                            <p className="text-xs text-gray-500">{question.createdAt}</p>
                          </div>
                        </div>
                        <Button
                          className="w-full sm:w-auto"
                          onClick={() => handleViewThread(question)}
                        >
                          Answer Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>

          <TabsContent value="answered" className="space-y-4">
            {questions
              .filter((q) => q.status === "answered")
              .map((question) => (
                <Card key={question.id} className="bg-white border border-emerald-200 shadow-sm">
                  <CardContent className="p-4 md:p-6">
                    <div className="space-y-4">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 px-2 py-1 text-xs font-medium mb-2">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            ANSWERED
                          </Badge>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{question.title}</h3>
                          <p className="text-sm md:text-base text-gray-600">{question.content}</p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={question.student.avatar} />
                            <AvatarFallback>{question.student.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">{question.student.name}</p>
                            <p className="text-xs text-gray-500">{question.createdAt}</p>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          className="w-full sm:w-auto"
                          onClick={() => handleViewThread(question)}
                        >
                          View Answer
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>
        </Tabs>
      </div>

      {/* Thread Modal */}
      {selectedQuestion && (
        <QAThreadModal isOpen={isThreadModalOpen} onClose={handleCloseThread} question={selectedQuestion} />
      )}
    </div>
  )
}
