"use client"

import { useState, useEffect } from "react"
import { useNavigate, NavLink } from "react-router-dom"
import { Search, HelpCircle, Bell, LogOut, Menu, X, User, Home } from "lucide-react"
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
import {
  BarChart3,
  BookOpen,
  TrendingUp,
  Globe,
  Users,
  MessageSquare,
  Settings,
} from "lucide-react";

const sidebarItems = [
  { icon: BarChart3, label: "Overview", to: "/profile" },
  { icon: BookOpen, label: "My Courses", to: "/profile/my-course" },
  { icon: TrendingUp, label: "Progress", to: "/profile/my-progress" },
  { icon: Globe, label: "Browse Courses", to: "/profile/browse-c" },
  { icon: MessageSquare, label: "Messages", to: "/profile/messages" },
  { icon: HelpCircle, label: "Q&A", to: "/profile/questions-answers" },
  { icon: Settings, label: "Settings", to: "/profile/settings" },
];

export function ResponsiveHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    // Check session on component mount
    checkSession()
  }, [])

  const checkSession = () => {
    try {
      const sessionData = sessionStorage.getItem('session')
      
      if (!sessionData) {
        // No session found, redirect to login
        navigate('/login')
        return
      }

      // Parse session data
      const userData = JSON.parse(sessionData)
      setUser(userData)
      
    } catch (error) {
      console.error('Error parsing session data:', error)
      // Invalid session, redirect to login
      navigate('/auth/login')
    }
  }

  const handleLogout = () => {
    // Clear session
    sessionStorage.removeItem('session')
    // Redirect to login
    navigate('/auth/login')
  }

  // Get user initials for avatar
  const getUserInitials = (name) => {
    if (!name) return 'U'
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
  }

  // If no user data yet, show loading or return null
  if (!user) {
    return (
      <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-center">
          <div>Loading...</div>
        </div>
      </header>
    )
  }

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
                <NavLink to="/" className="text-red-600">CTI EDU HUB</NavLink>
                <SheetDescription>Navigation Menu</SheetDescription>
              </SheetHeader>
              {/* Mobile navigation content */}
              <div className="p-4">
                <nav>
                  <ul className="space-y-2">
                    {/* Home link in mobile menu */}
                    <li className="list-none">
                      <NavLink
                        to="/"
                        className="flex items-center rounded-s-full relative p-3 hover:text-black"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Home className="mr-3 h-4 w-4" />
                        Home
                      </NavLink>
                    </li>
                    {sidebarItems.map((item, index) => (
                      <li key={index} className="list-none">
                        <NavLink
                          end
                          to={item.to}
                          className={({ isActive }) => {
                            return `flex items-center rounded-s-full relative p-3 ${
                              isActive 
                                ? " text-black "
                                : " hover:text-black"
                            }`;
                          }}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <item.icon className="mr-3 h-4 w-4" />
                          {item.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo and Home Link */}
        <div className="flex items-center space-x-4">
          <NavLink to="/" className="text-lg sm:text-xl font-bold text-red-600">
            CTI EDU HUB
          </NavLink>
          <NavLink 
            to="/" 
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <Home className="h-5 w-5" />
          </NavLink>
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

          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user?.profile_picture || "/placeholder.svg?height=32&width=32"} />
                    <AvatarFallback>{getUserInitials(user?.name || user?.full_name || user?.username)}</AvatarFallback>
                  </Avatar>
                  {/* Show name on larger mobile screens */}
                  <span className="hidden sm:block lg:hidden text-sm">
                    {user?.name || user?.full_name || user?.username || 'User'}
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <div className="px-2 py-1.5 text-sm text-gray-500 border-b">
                  {user?.email}
                </div>
                <DropdownMenuItem>
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="sm:hidden">
                  <HelpCircle className="h-4 w-4 mr-2" />
                  Help & Support
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop User Info and Log Out Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user?.profile_picture || "/placeholder.svg?height=32&width=32"} />
                <AvatarFallback>{getUserInitials(user?.name || user?.full_name || user?.username)}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900">
                  {user?.name || user?.full_name || user?.username || 'User'}
                </span>
                <span className="text-xs text-gray-500">
                  {user?.email}
                </span>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              className="text-red-600 border-red-600 hover:bg-red-50"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Log Out
            </Button>
          </div>
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