"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import {
  CheckCircle,
  Clock,
  AlertCircle,
  HelpCircle,
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Calendar,
  Award,
  Flag,
  MoreHorizontal,
  Send,
  Heart,
  Bookmark,
  Share,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"

export function QAThreadModal({ isOpen, onClose, question }) {

  const [newAnswer, setNewAnswer] = useState("")
  // const [newComment, setNewComment] = useState("")
  // const [activeCommentId, setActiveCommentId] = useState(null)

  // const getPriorityColor = (priority) => {
  //   switch (priority) {
  //     case "high":
  //       return "bg-red-100 text-red-700 border-red-200"
  //     case "medium":
  //       return "bg-amber-100 text-amber-700 border-amber-200"
  //     case "low":
  //       return "bg-green-100 text-green-700 border-green-200"
  //     default:
  //       return "bg-gray-100 text-gray-700 border-gray-200"
  //   }
  // }


  const getStatusIcon = (status) => {
    switch (status) {
      case "answered":
        return CheckCircle
      case "in-progress":
        return Clock
      case "pending":
        return AlertCircle
      default:
        return HelpCircle
    }
  }
  // const getStatusColor = (status) => {
  //   switch (status) {
  //     case "answered":
  //       return "bg-emerald-100 text-emerald-700 border-emerald-200"
  //     case "in-progress":
  //       return "bg-blue-100 text-blue-700 border-blue-200"
  //     case "pending":
  //       return "bg-amber-100 text-amber-700 border-amber-200"
  //     default:
  //       return "bg-gray-100 text-gray-700 border-gray-200"
  //   }
  // }

  const StatusIcon = getStatusIcon(question.status)

  const handleSubmitAnswer = () => {
    if (newAnswer.trim()) {
      // Handle answer submission
      console.log("Submitting answer:", newAnswer)
      setNewAnswer("")
    }
  }

  // const handleSubmitComment = (responseId) => {
  //   if (newComment.trim()) {
  //     // Handle comment submission
  //     console.log("Submitting comment for response:", responseId, newComment)
  //     setNewComment("")
  //     setActiveCommentId(null)
  //   }
  // }

  const mockResponses = [
    {
      id: 1,
      content: `Great question! Here's a comprehensive approach to handling async operations in React hooks:

**1. Basic useEffect with async/await:**
\`\`\`javascript
useEffect(() => {
  let isMounted = true;
  
  const fetchData = async () => {
    try {
      const response = await fetch('/api/data');
      const data = await response.json();
      
      if (isMounted) {
        setData(data);
      }
    } catch (error) {
      if (isMounted) {
        setError(error.message);
      }
    }
  };
  
  fetchData();
  
  return () => {
    isMounted = false;
  };
}, []);
\`\`\`

**2. Using AbortController for cleanup:**
\`\`\`javascript
useEffect(() => {
  const controller = new AbortController();
  
  const fetchData = async () => {
    try {
      const response = await fetch('/api/data', {
        signal: controller.signal
      });
      const data = await response.json();
      setData(data);
    } catch (error) {
      if (error.name !== 'AbortError') {
        setError(error.message);
      }
    }
  };
  
  fetchData();
  
  return () => controller.abort();
}, []);
\`\`\`

The key is always cleaning up to prevent memory leaks and state updates on unmounted components.`,
      author: {
        name: "John Doe",
        avatar: "/placeholder.svg",
        initials: "JD",
        role: "Instructor",
      },
      createdAt: "1 hour ago",
      votes: 15,
      isAccepted: true,
      comments: [
        {
          id: 1,
          content: "This is exactly what I was looking for! The AbortController approach is really clean.",
          author: {
            name: "Sarah Chen",
            avatar: "/placeholder.svg",
            initials: "SC",
          },
          createdAt: "45 minutes ago",
        },
        {
          id: 2,
          content: "Could you also show an example with custom hooks?",
          author: {
            name: "Mike Johnson",
            avatar: "/placeholder.svg",
            initials: "MJ",
          },
          createdAt: "30 minutes ago",
        },
      ],
    },
    {
      id: 2,
      content: `Here's an additional pattern using a custom hook that might be helpful:

\`\`\`javascript
function useAsyncData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    let cancelled = false;
    
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        
        if (!cancelled) {
          setData(result);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };
    
    fetchData();
    
    return () => {
      cancelled = true;
    };
  }, [url]);
  
  return { data, loading, error };
}
\`\`\`

This pattern is reusable and handles cleanup automatically.`,
      author: {
        name: "Emily Rodriguez",
        avatar: "/placeholder.svg",
        initials: "ER",
        role: "Teaching Assistant",
      },
      createdAt: "2 hours ago",
      votes: 8,
      isAccepted: false,
      comments: [],
    },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[80vw] xl:max-w-6xl max-h-[90vh] p-0">
        <DialogHeader className="p-4 sm:p-6 pb-4 border-b border-gray-100">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge variant="outline" className="text-xs px-2 py-1">
                  {question.category}
                </Badge>
              </div>
              <DialogTitle className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">{question.title}</DialogTitle>
            </div>
            <div className="flex items-center gap-2">
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="flex-1 max-h-[calc(90vh-200px)]">
          <div className="p-4 sm:p-6 space-y-6">
            {/* Original Question */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Avatar className="h-10 w-10 sm:h-12 sm:w-12 border-2 border-gray-200">
                  <AvatarImage src={question.student.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="bg-indigo-100 text-indigo-700 font-medium">
                    {question.student.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-semibold text-gray-900">{question.student.name}</span>
                    <Badge variant="outline" className="text-xs">
                      Student
                    </Badge>
                    <span className="text-sm text-gray-500">•</span>
                    <span className="text-sm text-gray-500">{question.course}</span>
                    <span className="text-sm text-gray-500">•</span>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="h-3 w-3" />
                      {question.createdAt}
                    </div>
                  </div>
                  <div className="prose prose-sm max-w-none">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{question.content}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 mt-4">
                    <div className="flex flex-wrap gap-1">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Responses */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {mockResponses.length} Answer{mockResponses.length !== 1 ? "s" : ""}
                </h3>
              </div>

              {mockResponses.map((response) => (
                <div key={response.id} className="space-y-4">
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <Avatar className="h-10 w-10 sm:h-12 sm:w-12 border-2 border-gray-200">
                      <AvatarImage src={response.author.avatar || "/placeholder.svg"} />
                      <AvatarFallback className="bg-emerald-100 text-emerald-700 font-medium">
                        {response.author.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="font-semibold text-gray-900">{response.author.name}</span>
                        <Badge
                          variant="outline"
                          className={`text-xs ${response.author.role === "Instructor" ? "bg-indigo-50 text-indigo-700 border-indigo-200" : "bg-gray-50"}`}
                        >
                          {response.author.role}
                        </Badge>
                        {response.isAccepted && (
                          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 text-xs">
                            <Award className="h-3 w-3 mr-1" />
                            Accepted Answer
                          </Badge>
                        )}
                        <span className="text-sm text-gray-500">•</span>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Calendar className="h-3 w-3" />
                          {response.createdAt}
                        </div>
                      </div>
                      <div className="prose prose-sm max-w-none mb-4">
                        <div className="text-gray-700 leading-relaxed whitespace-pre-wrap font-mono text-xs sm:text-sm bg-gray-50 p-3 sm:p-4 rounded-lg overflow-x-auto">
                          {response.content}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Separator />
                </div>
              ))}
            </div>

            {/* New Answer Form */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Your Answer</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Avatar className="h-10 w-10 sm:h-12 sm:w-12 border-2 border-gray-200">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-indigo-100 text-indigo-700 font-medium">JD</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-3">
                  <Textarea
                    placeholder="Write your answer here... "
                    value={newAnswer}
                    onChange={(e) => setNewAnswer(e.target.value)}
                    className="min-h-[120px] resize-none"
                  />
                  <div className="flex flex-col sm:flex-row justify-end items-center gap-2">
                    <div className="flex gap-2 w-full sm:w-auto">
                      <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                        Save Draft
                      </Button>
                      <Button size="sm" onClick={handleSubmitAnswer} disabled={!newAnswer.trim()} className="gap-2 flex-1 sm:flex-none">
                        <Send className="h-4 w-4" />
                        Post Answer
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
