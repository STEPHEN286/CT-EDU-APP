"use client"

import { useState } from "react"
import { Search, HelpCircle, Bell, LogOut, Menu, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



export function ResponsiveHeader({ onMenuClick }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 px-3 sm:px-4 lg:px-6 py-3 sm:py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Mobile Menu Button & Logo */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <Button variant="ghost" size="icon" onClick={onMenuClick} className="xl:hidden h-8 w-8 sm:h-10 sm:w-10">
            <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <h1 className="text-base sm:text-lg lg:text-xl font-bold text-red-600">
            <span className="hidden sm:inline">CTI EDU HUB</span>
            <span className="sm:hidden">CTI</span>
          </h1>
        </div>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex flex-1 max-w-sm lg:max-w-md xl:max-w-lg mx-4 lg:mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="What knowledge do you seek?"
              className="pl-10 pr-12 py-2 w-full border-gray-300 rounded-full focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm"
            />
            <Button
              size="sm"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-red-500 hover:bg-red-600 rounded-full h-7 w-7 sm:h-8 sm:w-8 p-0"
            >
              <Search className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Search Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-gray-600 hover:text-gray-900 h-8 w-8 sm:h-10 sm:w-10"
          >
            {isSearchOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Search className="h-4 w-4 sm:h-5 sm:w-5" />}
          </Button>
        </div>

        {/* Right Navigation */}
        <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4">
          {/* Help Icon */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden lg:flex text-gray-600 hover:text-gray-900 h-8 w-8 lg:h-10 lg:w-10"
          >
            <HelpCircle className="h-4 w-4 lg:h-5 lg:w-5" />
          </Button>

          {/* Notifications */}
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-600 hover:text-gray-900 relative h-8 w-8 sm:h-10 sm:w-10"
          >
            <Bell className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-3 w-3 sm:h-4 sm:w-4 flex items-center justify-center text-[10px] sm:text-xs">
              3
            </span>
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center space-x-1 sm:space-x-2 text-gray-700 hover:text-gray-900 h-8 sm:h-10 px-2 sm:px-3"
              >
                <Avatar className="h-6 w-6 sm:h-8 sm:w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback className="text-xs sm:text-sm">WA</AvatarFallback>
                </Avatar>
                <span className="hidden lg:block text-sm">Wendy Ashley</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>
                <User className="h-4 w-4 mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="lg:hidden">
                <HelpCircle className="h-4 w-4 mr-2" />
                Help & Support
              </DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                <LogOut className="h-4 w-4 mr-2" />
                Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Desktop Log Out Button */}
          <Button
            variant="outline"
            className="hidden xl:flex text-red-600 border-red-600 hover:bg-red-50 text-sm px-3 py-2"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Log Out
          </Button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="md:hidden mt-3 pb-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="What knowledge do you seek?"
              className="pl-10 pr-12 py-2 w-full border-gray-300 rounded-full focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm"
              autoFocus
            />
            <Button
              size="sm"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-red-500 hover:bg-red-600 rounded-full h-8 w-8 p-0"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
