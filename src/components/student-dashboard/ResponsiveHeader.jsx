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
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function ResponsiveHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Mobile Menu Button - Only visible on mobile */}
        <div className="flex items-center lg:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0">
              <SheetHeader className="p-4 border-b">
                <SheetTitle className="text-red-600">CTI EDU HUB</SheetTitle>
                <SheetDescription>Navigation Menu</SheetDescription>
              </SheetHeader>
              {/* Mobile navigation content would go here */}
              <div className="p-4">
                <nav className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    Overview
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    My Courses
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Progress
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Browse Courses
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-lg sm:text-xl font-bold text-red-600">CTI EDU HUB</h1>
        </div>

        {/* Desktop Search Bar - Hidden on mobile */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="What knowledge do you seek?"
              className="pl-10 pr-12 py-2 w-full border-gray-300 rounded-full focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
            <Button
              size="sm"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-red-500 hover:bg-red-600 rounded-full h-8 w-8 p-0"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Search Toggle - Only visible on mobile */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="text-gray-600 hover:text-gray-900"
          >
            {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
          </Button>
        </div>

        {/* Right Navigation */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Help Icon - Hidden on small mobile */}
          <Button variant="ghost" size="icon" className="hidden sm:flex text-gray-600 hover:text-gray-900">
            <HelpCircle className="h-5 w-5" />
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900 relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </Button>

          {/* User Menu - Responsive */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>WA</AvatarFallback>
                </Avatar>
                {/* Hide name on small screens */}
                <span className="hidden lg:block">Wendy Ashley</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>
                <User className="h-4 w-4 mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="sm:hidden">
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

          {/* Desktop Log Out Button - Hidden on mobile */}
          <Button variant="outline" className="hidden lg:flex text-red-600 border-red-600 hover:bg-red-50">
            <LogOut className="h-4 w-4 mr-2" />
            Log Out
          </Button>
        </div>
      </div>

      {/* Mobile Search Bar - Toggleable */}
      {isSearchOpen && (
        <div className="md:hidden mt-4 pb-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="What knowledge do you seek?"
              className="pl-10 pr-12 py-2 w-full border-gray-300 rounded-full focus:ring-2 focus:ring-red-500 focus:border-red-500"
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
