

import { useState } from "react"
import {
  Bell,
  LayoutDashboard,
  BookOpen,
  Users,
  MessageSquare,
  FileQuestion,
  Settings,
  Search,
  Send,
  Paperclip,
  Smile,
  MoreVertical,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

export const MessagesPage = () => {
  const [activeChat, setActiveChat] = useState(null)
  const [inputValue, setInputValue] = useState("")
  const [showChatView, setShowChatView] = useState(false) // Changed to false by default

  const messages = [
    {
      id: "1",
      sender: "Course Admin", 
      avatar: "/placeholder.svg?height=50&width=50",
      content: "Your Web Development assignment has been reviewed. Check your feedback now!",
      time: "8:49 PM",
      unread: true,
    },
    {
      id: "2",
      sender: "Sarah Johnson",
      avatar: "/placeholder.svg?height=50&width=50", 
      content: "Great progress on the JavaScript module! Let me know if you have any questions.",
      time: "8:46 PM",
      unread: false,
    },
    {
      id: "3",
      sender: "System Notification",
      avatar: "/placeholder.svg?height=50&width=50",
      content: "New course materials are available for Data Science Fundamentals.",
      time: "8:06 PM", 
      unread: true,
    },
    {
      id: "4",
      sender: "Michael Chen",
      avatar: "/placeholder.svg?height=50&width=50",
      content: "Thanks for participating in today's group discussion!",
      time: "7:59 PM",
      unread: false,
    },
    {
      id: "5", 
      sender: "Tech Support",
      avatar: "/placeholder.svg?height=50&width=50",
      content: "Your access to the programming lab has been granted. You can now use the resources.",
      time: "7:45 PM",
      unread: true,
    },
  ]

  const conversations = {
    "1": {
      id: "1",
      contact: "Course Admin",
      avatar: "/placeholder.svg?height=50&width=50",
      messages: [
        {
          id: "1-1",
          sender: "Course Admin",
          content: "Hello! I've reviewed your Web Development assignment.",
          time: "8:30 PM",
          isMe: false,
        },
        {
          id: "1-2",
          sender: "You",
          content: "Thank you! How did I do?",
          time: "8:35 PM",
          isMe: true,
        },
        {
          id: "1-3",
          sender: "Course Admin",
          content: "Your Web Development assignment has been reviewed. Check your feedback now!",
          time: "8:49 PM",
          isMe: false,
        },
      ],
    },
    "2": {
      id: "2",
      contact: "Sarah Johnson",
      avatar: "/placeholder.svg?height=50&width=50",
      messages: [
        {
          id: "2-1",
          sender: "Sarah Johnson",
          content: "Hi there! How's your progress with the JavaScript module?",
          time: "8:30 PM",
          isMe: false,
        },
        {
          id: "2-2",
          sender: "You",
          content: "I'm making good progress! Just finished the functions section.",
          time: "8:40 PM",
          isMe: true,
        },
        {
          id: "2-3",
          sender: "Sarah Johnson",
          content: "Great progress on the JavaScript module! Let me know if you have any questions.",
          time: "8:46 PM",
          isMe: false,
        },
      ],
    },
    "3": {
      id: "3",
      contact: "System Notification",
      avatar: "/placeholder.svg?height=50&width=50",
      messages: [
        {
          id: "3-1",
          sender: "System Notification",
          content: "New course materials are available for Data Science Fundamentals.",
          time: "8:06 PM",
          isMe: false,
        },
      ],
    },
    "4": {
      id: "4",
      contact: "Michael Chen",
      avatar: "/placeholder.svg?height=50&width=50",
      messages: [
        {
          id: "4-1",
          sender: "Michael Chen",
          content: "The group discussion today was really productive!",
          time: "7:45 PM",
          isMe: false,
        },
        {
          id: "4-2",
          sender: "You",
          content: "Yes, I learned a lot from everyone's input.",
          time: "7:50 PM",
          isMe: true,
        },
        {
          id: "4-3",
          sender: "Michael Chen",
          content: "Thanks for participating in today's group discussion!",
          time: "7:59 PM",
          isMe: false,
        },
      ],
    },
    "5": {
      id: "5",
      contact: "Tech Support",
      avatar: "/placeholder.svg?height=50&width=50",
      messages: [
        {
          id: "5-1",
          sender: "Tech Support",
          content: "We've processed your request for lab access.",
          time: "7:30 PM",
          isMe: false,
        },
        {
          id: "5-2",
          sender: "You",
          content: "Great! When will I be able to access it?",
          time: "7:35 PM",
          isMe: true,
        },
        {
          id: "5-3",
          sender: "Tech Support",
          content: "Your access to the programming lab has been granted. You can now use the resources.",
          time: "7:45 PM",
          isMe: false,
        },
      ],
    },
  }

  const handleSendMessage = () => {
    if (inputValue.trim() === "" || !activeChat) return

    // In a real app, you would send the message to the server
    // and update the state with the new message
    setInputValue("")
  }

  const handleChatSelect = (chatId) => {
    setActiveChat(chatId)
    setShowChatView(true) // Show chat view when selecting a chat
  }

  const handleBackToList = () => {
    setShowChatView(false) // Show message list when clicking back
  }

  const unreadMessages = messages.filter((message) => message.unread)

  return (
    <div className="h-[calc(100vh-80px)] flex text-black">
      {/* Chat List */}
      <div
        className={cn(
          "w-full md:w-80 lg:w-96 border-r border-red-800 flex flex-col",
          "md:flex",
          showChatView ? "hidden md:flex" : "flex"
        )}
      >
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search or start a new chat"
              className="pl-10 pr-4 py-2 w-full bg-gray-50 border text-black"
            />
          </div>
        </div>

        <Tabs defaultValue="all" className="flex-1 overflow-hidden flex flex-col">
          <TabsList className="grid grid-cols-2 mx-4">
            <TabsTrigger value="all">All Messages</TabsTrigger>
            <TabsTrigger value="unread">Unread</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="flex-1 overflow-y-auto p-0 m-0">
            <div className="space-y-1">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex items-start p-4 border-b hover:bg-red-50/70 cursor-pointer",
                    activeChat === message.id && "bg-red-50/70",
                  )}
                  onClick={() => handleChatSelect(message.id)}
                >
                  <Avatar className="h-12 w-12 mr-3 flex-shrink-0">
                    <AvatarImage src={message.avatar || "/placeholder.svg"} alt={message.sender} />
                    <AvatarFallback>{message.sender.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-medium truncate">{message.sender}</h3>
                      <span className="text-xs text-gray-400 whitespace-nowrap ml-2">{message.time}</span>
                    </div>
                    <p className={cn("text-sm truncate", message.unread ? "text-gray-400" : "text-gray-800")}>
                      {message.content}
                    </p>
                  </div>
                  {message.unread && <div className="h-2 w-2 rounded-full bg-red-500 ml-2 mt-2"></div>}
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="unread" className="flex-1 overflow-y-auto p-0 m-0">
            <div className="space-y-1">
              {unreadMessages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex items-start border-b p-4 hover:bg-red-50 cursor-pointer",
                    activeChat === message.id && "bg-red-50",
                  )}
                  onClick={() => handleChatSelect(message.id)}
                >
                  <Avatar className="h-12 w-12 mr-3 flex-shrink-0">
                    <AvatarImage src={message.avatar || "/placeholder.svg"} alt={message.sender} />
                    <AvatarFallback>{message.sender.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-medium truncate">{message.sender}</h3>
                      <span className="text-xs text-gray-400 whitespace-nowrap ml-2">{message.time}</span>
                    </div>
                    <p className="text-sm truncate text-gray-400">{message.content}</p>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-red-500 ml-2 mt-2"></div>
                </div>
              ))}
              {unreadMessages.length === 0 && <div className="p-4 text-center text-gray-400">No unread messages</div>}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Chat View */}
      <div className={cn("flex-1 flex flex-col", "md:flex", !showChatView ? "hidden md:flex" : "flex")}>
        {activeChat && conversations[activeChat] ? (
          <>
            <div className="p-4 border-b border-red-800 flex justify-between items-center">
              <div className="flex items-center">
                <Button variant="ghost" size="icon" onClick={handleBackToList} className="mr-2 md:hidden">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage
                    src={conversations[activeChat].avatar || "/placeholder.svg"}
                    alt={conversations[activeChat].contact}
                  />
                  <AvatarFallback>{conversations[activeChat].contact.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <h2 className="font-bold">{conversations[activeChat].contact}</h2>
              </div>
              <div className="flex gap-2">
                <Button disabled title="under development" variant="ghost" size="icon" className="rounded-full">
                  <MoreVertical />
                </Button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {conversations[activeChat].messages.map((message) => (
                <div key={message.id} className={cn("flex", message.isMe ? "justify-end" : "justify-start")}>
                  <div
                    className={cn(
                      "max-w-[70%] rounded-lg p-3",
                      message.isMe ? "bg-red-400 text-white" : "bg-white text-black border",
                    )}
                  >
                    <p>{message.content}</p>
                    <div className={cn("text-xs mt-1", message.isMe ? "text-[#ffffffaa]" : "text-gray-400")}>
                      {message.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-[#2a2a2a] bg-white">
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Type a message"
                  className="border text-black"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage()
                    }
                  }}
                />
                <Button variant="ghost" size="icon" className="rounded-full bg-red-600 text-white" onClick={handleSendMessage}>
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-400">Select a chat to start messaging</div>
        )}
      </div>
    </div>
  )
}
