"use client"

import { useState } from "react"
import { ArrowLeft, Send, Paperclip, Smile, MoreHorizontal, Info } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { formatDistanceToNow } from "date-fns"
import { ScrollArea } from "@/components/ui/scroll-area"

const messages = [
  {
    id: 1,
    sender: "Dr. Sarah Johnson",
    content: "Hi Wendy! I've reviewed your latest React assignment and I'm really impressed with your progress.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    isOwn: false,
    avatar: "/placeholder.svg?height=24&width=24",
    isInstructor: true,
  },
  {
    id: 2,
    sender: "You",
    content: "Thank you Dr. Johnson! I've been practicing the concepts we covered in class.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2 + 1000 * 60 * 5),
    isOwn: true,
    avatar: "/placeholder.svg?height=24&width=24",
    isInstructor: false,
  },
  {
    id: 3,
    sender: "Dr. Sarah Johnson",
    content:
      "Your component structure is much cleaner now, and you're using hooks effectively. I particularly liked how you implemented the context API for state management.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1.5),
    isOwn: false,
    avatar: "/placeholder.svg?height=24&width=24",
    isInstructor: true,
  },
  {
    id: 4,
    sender: "You",
    content: "I have a question about the useEffect hook. When should I include dependencies in the dependency array?",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1),
    isOwn: true,
    avatar: "/placeholder.svg?height=24&width=24",
    isInstructor: false,
  },
  {
    id: 5,
    sender: "Dr. Sarah Johnson",
    content:
      "Great question! You should include any value from component scope that's used inside the effect. This includes props, state, and any functions defined in the component.",
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    isOwn: false,
    avatar: "/placeholder.svg?height=24&width=24",
    isInstructor: true,
  },
  {
    id: 6,
    sender: "Dr. Sarah Johnson",
    content:
      "If you're seeing unexpected behavior, you might be missing a dependency or need to memoize a function with useCallback.",
    timestamp: new Date(Date.now() - 1000 * 60 * 29),
    isOwn: false,
    avatar: "/placeholder.svg?height=24&width=24",
    isInstructor: true,
  },
]


export function ChatWindow({ conversationId, onBack }) {
  const [newMessage, setNewMessage] = useState("")
  const [showInput, setShowInput] = useState(false)

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setNewMessage("")
    }
  }

  return (
    <div className="flex flex-col h-full  ">
      {/* Chat Header */}
      <div className="px-4 py-3 border-b border-gray-200 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" onClick={onBack} className="md:hidden h-7 w-7 p-0">
              <ArrowLeft className="h-4 w-4" />
            </Button>

            <div className="relative">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback className="text-xs">SJ</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 border border-white rounded-full"></div>
            </div>

            <div className="flex-1">
              <h3 className="font-medium text-gray-900 text-sm">Dr. Sarah Johnson</h3>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs px-1.5 py-0.5">
                  Instructor
                </Badge>
                <span className="text-xs text-gray-500">Web Development</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
              <Info className="h-3.5 w-3.5" />
            </Button>
            <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
              <MoreHorizontal className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </div>


     <div className="relative  grid grid-cols-1 h-full">
        <ScrollArea className="flex-1 p-4   ">
          <div className="space-y-3">
            {messages.map((message, index) => {
              const showAvatar = index === 0 || messages[index - 1].sender !== message.sender
              const isLastInGroup = index === messages.length - 1 || messages[index + 1].sender !== message.sender
  
              return (
                <div key={message.id} className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`flex items-end space-x-2 max-w-xs sm:max-w-md ${message.isOwn ? "flex-row-reverse space-x-reverse" : ""}`}
                  >
                    {!message.isOwn && showAvatar && (
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={message.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="text-xs">
                          {message.sender
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    )}
  
                    {!message.isOwn && !showAvatar && <div className="w-6" />}
  
                    <div
                      className={`px-3 py-2 text-sm ${
                        message.isOwn
                          ? "bg-blue-500 text-white rounded-l-lg rounded-tr-lg"
                          : message.isInstructor
                            ? "bg-white border border-gray-200 rounded-r-lg rounded-tl-lg shadow-sm"
                            : "bg-gray-200 rounded-r-lg rounded-tl-lg"
                      } ${!isLastInGroup ? (message.isOwn ? "rounded-br-sm" : "rounded-bl-sm") : ""}`}
                    >
                      {!message.isOwn && message.isInstructor && showAvatar && (
                        <div className="mb-1">
                          <span className="text-xs font-medium text-blue-600">{message.sender}</span>
                        </div>
                      )}
                      <p className="leading-relaxed">{message.content}</p>
                      {isLastInGroup && (
                        <p
                          className={`text-xs mt-1 ${
                            message.isOwn ? "text-blue-100" : message.isInstructor ? "text-gray-500" : "text-gray-600"
                          }`}
                        >
                          {formatDistanceToNow(message.timestamp, { addSuffix: true }).replace("about ", "")}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollArea>
        <div className="p-3 border-t border-gray-200 bg-white  left-0">
        <div className="flex items-center space-x-2">
          {/* <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Paperclip className="h-4 w-4" />
          </Button> */}

          <div className="flex-1 relative">
            <Input
              placeholder="Write a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="pr-8 h-8 text-sm"
            />
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
            >
              <Smile className="h-3.5 w-3.5" />
            </Button>
          </div>

          <Button
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            className="bg-blue-500 hover:bg-blue-600 h-8 w-8 p-0"
          >
            <Send className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
     </div>

      {/* Message Input */}
     
    </div>
  )
}
