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
          className={`flex items-center p-4 hover:bg-gray-50 cursor-pointer transition-all duration-200 ${
            selectedConversation === conversation.id ? "bg-red-50" : ""
          }`}
        >
          {/* Avatar Section */}
          <div className="relative flex-shrink-0">
            <Avatar className="h-12 w-12">
              <AvatarImage src={conversation.avatar} alt={conversation.name} />
              <AvatarFallback>
                {conversation.name.split(" ").map((n) => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            {conversation.online && (
              <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-white" />
            )}
          </div>

          {/* Message Content */}
          <div className="flex-1 min-w-0 ml-4">
            <div className="flex items-baseline justify-between">
              <h3 className="text-sm font-medium text-gray-900 truncate">
                {conversation.name}
              </h3>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500 whitespace-nowrap">
                  {formatDistanceToNow(conversation.timestamp, { addSuffix: true })}
                </span>
                {conversation.unread > 0 && (
                  <span className="flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-red-500 rounded-full">
                    {conversation.unread}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-1 flex items-center space-x-2">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                {conversation.role}
              </Badge>
              <span className="text-xs text-gray-500 truncate">{conversation.course}</span>
            </div>

            <p className="mt-1 text-sm text-gray-600 truncate">
              {conversation.lastMessage}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
