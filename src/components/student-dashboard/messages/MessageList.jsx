

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { formatDistanceToNow } from "date-fns"

const conversations = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Instructor",
    course: "Web Development Bootcamp",
    lastMessage: "Your React project looks great! I've left detailed feedback on your component structure.",
    timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    unread: 2,
    avatar: "/placeholder.svg?height=40&width=40",
    online: true,
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    role: "Instructor",
    course: "Data Science And Machine Learning",
    lastMessage: "I've reviewed your Python assignment. Let's discuss your approach to the clustering algorithm.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    unread: 0,
    avatar: "/placeholder.svg?height=40&width=40",
    online: false,
  },
  {
    id: 3,
    name: "John Doe",
    role: "Instructor",
    course: "Digital Marketing Masterclass",
    lastMessage: "Your campaign strategy looks promising. I've extended the deadline for the final submission.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 hours ago
    unread: 1,
    avatar: "/placeholder.svg?height=40&width=40",
    online: true,
  },
  {
    id: 4,
    name: "Lisa Rodriguez",
    role: "Instructor",
    course: "Cloud Computing with AWS",
    lastMessage: "I saw your question about AWS Lambda. Let's schedule a quick call to discuss your architecture.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    unread: 0,
    avatar: "/placeholder.svg?height=40&width=40",
    online: false,
  },
  {
    id: 5,
    name: "Emma Wilson",
    role: "Instructor",
    course: "UI/UX Design Fundamentals",
    lastMessage: "Your portfolio design is excellent! I've shared some resources for improving the user flow.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
    unread: 0,
    avatar: "/placeholder.svg?height=40&width=40",
    online: false,
  },
]



export function MessagesList({ selectedConversation, onSelectConversation }) {
  return (
    <div className="flex-1 overflow-y-auto">
      {conversations.map((conversation) => (
        <div
          key={conversation.id}
          onClick={() => onSelectConversation(conversation.id)}
          className={`p-3 sm:p-4 border-b border-gray-100 cursor-pointer transition-colors hover:bg-gray-50 ${
            selectedConversation === conversation.id ? "bg-red-50 border-red-200" : ""
          }`}
        >
          <div className="flex items-start space-x-3">
            <div className="relative">
              <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
                <AvatarImage src={conversation.avatar || "/placeholder.svg"} />
                <AvatarFallback>
                  {conversation.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              {conversation.online && (
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">{conversation.name}</h3>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                    {conversation.role}
                  </Badge>
                </div>
                <div className="flex items-center space-x-2">
                  {conversation.unread > 0 && (
                    <Badge className="bg-red-500 text-white text-xs min-w-[20px] h-5 flex items-center justify-center">
                      {conversation.unread}
                    </Badge>
                  )}
                  <span className="text-xs text-gray-500">
                    {formatDistanceToNow(conversation.timestamp, { addSuffix: true })}
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mb-1 truncate">{conversation.course}</p>
              <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
