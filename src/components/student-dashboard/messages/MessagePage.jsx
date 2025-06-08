import { useState } from "react"
import { MessageSearch } from "./Search"
import { MessagesList } from "./MessageList"
import { ChatWindow } from "./ChatWindow"

export function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(1)
  const [isMobileView, setIsMobileView] = useState(false)

  return (
    <div className="h-[calc(100vh-120px)] flex flex-col">
      <div className="mb-4">
        <h1 className="text-xl font-bold text-gray-900 mb-1">Messages</h1>
        <p className="text-sm text-gray-600">Connect with instructors and fellow students</p>
      </div>

      <div className="flex-1 bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
        <div className="flex h-full">
          {/* Messages List */}
          <div
            className={`${
              selectedConversation && isMobileView ? "hidden" : "block"
            } w-full md:w-72 border-r border-gray-200 flex flex-col`}
          >
            <MessageSearch />
            <MessagesList
              selectedConversation={selectedConversation}
              onSelectConversation={(id) => {
                setSelectedConversation(id)
                setIsMobileView(true)
              }}
            />
          </div>

          {/* Chat Window */}
          <div className={`${!selectedConversation && isMobileView ? "hidden" : "block"} flex-1 flex flex-col`}>
            {selectedConversation ? (
              <ChatWindow conversationId={selectedConversation} onBack={() => setIsMobileView(false)} />
            ) : (
              <div className="hidden md:flex flex-1 items-center justify-center text-gray-500">
                <div className="text-center">
                  <div className="text-3xl mb-3">💬</div>
                  <p className="text-base font-medium">Select a conversation</p>
                  <p className="text-sm text-gray-400">Choose from the list to start messaging</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
