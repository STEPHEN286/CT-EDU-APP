"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Send, MessageSquare, HelpCircle, Clock, CheckCircle } from "lucide-react"

const messagesData = [
  {
    id: 1,
    student: "Alice Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    course: "Complete React Development Course",
    subject: "Question about useState hook",
    message:
      "Hi! I'm having trouble understanding when to use useState vs useReducer. Could you explain the difference?",
    timestamp: "2 hours ago",
    isNew: true,
    type: "question",
    replies: 0,
  },
  {
    id: 2,
    student: "Bob Smith",
    avatar: "/placeholder.svg?height=40&width=40",
    course: "Advanced JavaScript Concepts",
    subject: "Thank you for the explanation",
    message: "Your explanation about closures was really helpful. I finally understand how they work!",
    timestamp: "5 hours ago",
    isNew: false,
    type: "feedback",
    replies: 1,
  },
  {
    id: 3,
    student: "Carol Davis",
    avatar: "/placeholder.svg?height=40&width=40",
    course: "Complete React Development Course",
    subject: "Project files not downloading",
    message: "I'm trying to download the project files for section 5, but the link doesn't seem to work. Can you help?",
    timestamp: "1 day ago",
    isNew: true,
    type: "technical",
    replies: 0,
  },
]

const qnaData = [
  {
    id: 1,
    student: "David Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    course: "Complete React Development Course",
    question: "What's the difference between props and state in React?",
    timestamp: "3 hours ago",
    isAnswered: false,
    upvotes: 5,
  },
  {
    id: 2,
    student: "Emma Brown",
    avatar: "/placeholder.svg?height=40&width=40",
    course: "Advanced JavaScript Concepts",
    question: "How do I handle asynchronous operations in JavaScript?",
    timestamp: "1 day ago",
    isAnswered: true,
    upvotes: 12,
  },
]

export function ManageMessages() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMessage, setSelectedMessage] = useState(null)
  const [replyText, setReplyText] = useState("")

  const filteredMessages = messagesData.filter(
    (message) =>
      message.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.course.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const newMessagesCount = messagesData.filter((msg) => msg.isNew).length
  const unansweredQuestionsCount = qnaData.filter((q) => !q.isAnswered).length

  const handleSendReply = () => {
    if (replyText.trim()) {
      
        
      setReplyText("")
      setSelectedMessage(null)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Messages & Q&A</h1>
        <p className="text-muted-foreground">Communicate with your students and answer their questions</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{newMessagesCount}</div>
            <p className="text-xs text-muted-foreground">Unread messages</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{messagesData.length}</div>
            <p className="text-xs text-muted-foreground">All conversations</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unanswered Q&A</CardTitle>
            <HelpCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{unansweredQuestionsCount}</div>
            <p className="text-xs text-muted-foreground">Need responses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Response Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.5h</div>
            <p className="text-xs text-muted-foreground">Average response</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="messages" className="space-y-4">
        <TabsList>
          <TabsTrigger value="messages">Direct Messages ({messagesData.length})</TabsTrigger>
          <TabsTrigger value="qna">Q&A ({qnaData.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="messages">
          <Card>
            <CardHeader>
              <CardTitle>Direct Messages</CardTitle>
              <CardDescription>Private messages from your students</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search messages..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-4">
                {filteredMessages.map((message) => (
                  <div key={message.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={message.avatar || "/placeholder.svg"} alt={message.student} />
                          <AvatarFallback>
                            {message.student
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{message.student}</span>
                            {message.isNew && (
                              <Badge variant="destructive" className="text-xs">
                                New
                              </Badge>
                            )}
                            <Badge variant="outline" className="text-xs">
                              {message.type}
                            </Badge>
                          </div>
                          <div className="text-sm text-muted-foreground">{message.course}</div>
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                    </div>

                    <h4 className="font-medium mb-2">{message.subject}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{message.message}</p>

                    <div className="flex items-center justify-between">
                      <div className="text-xs text-muted-foreground">
                        {message.replies > 0 ? `${message.replies} replies` : "No replies yet"}
                      </div>
                      <Button
                        size="sm"
                        onClick={() => setSelectedMessage(message.id)}
                        variant={selectedMessage === message.id ? "default" : "outline"}
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Reply
                      </Button>
                    </div>

                    {selectedMessage === message.id && (
                      <div className="mt-4 p-4 bg-muted rounded-lg">
                        <Textarea
                          placeholder="Type your reply..."
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                          className="mb-3"
                        />
                        <div className="flex gap-2">
                          <Button onClick={handleSendReply}>Send Reply</Button>
                          <Button variant="outline" onClick={() => setSelectedMessage(null)}>
                            Cancel
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="qna">
          <Card>
            <CardHeader>
              <CardTitle>Q&A Section</CardTitle>
              <CardDescription>Public questions from students in your courses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {qnaData.map((question) => (
                  <div key={question.id} className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={question.avatar || "/placeholder.svg"} alt={question.student} />
                          <AvatarFallback>
                            {question.student
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{question.student}</span>
                            {question.isAnswered ? (
                              <Badge className="text-xs bg-green-100 text-green-800">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Answered
                              </Badge>
                            ) : (
                              <Badge variant="destructive" className="text-xs">
                                <HelpCircle className="h-3 w-3 mr-1" />
                                Needs Answer
                              </Badge>
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground">{question.course}</div>
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">{question.timestamp}</span>
                    </div>

                    <p className="text-sm mb-3">{question.question}</p>

                    <div className="flex items-center justify-between">
                      <div className="text-xs text-muted-foreground">{question.upvotes} upvotes</div>
                      <Button size="sm" variant="outline">
                        <Send className="h-4 w-4 mr-2" />
                        Answer
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
