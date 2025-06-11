"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Bell, Menu, MessageSquare, DollarSign } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
	LayoutDashboard,
	BookOpen,
	Plus,
	Users,
	// MessageSquare,
	Star,
	// DollarSign,
	Megaphone,
	Settings,
	ChevronLeft,
	ChevronRight,
	ChevronDown,
	ChevronUp,
	Eye,
	Upload,
} from "lucide-react";
import { NavLink } from "react-router-dom"
const menuItems = [
	{
		id: "dashboard",
		label: "Dashboard",
		icon: LayoutDashboard,
		path: "/instructor-dashboard",
	},
	{
		id: "instructor-dashboard/my-courses",
		label: "Modules",
		icon: BookOpen,
		hasDropdown: true,
		children: [
			{
				id: "create-course",
				label: "Upload Module",
				icon: Upload,
				path: "/instructor-dashboard/create-course",
			},
			{
				id: "view-courses",
				label: "View Modules",
				icon: Eye,
				path: "/instructor-dashboard/my-courses",
			},
		],
	},
	{
		id: "dashboard/students",
		label: "Students",
		icon: Users,
		path: "/instructor-dashboard/students",
	},
	{
		id: "messages",
		label: "Messages",
		icon: MessageSquare,
		path: "/instructor-dashboard/messages",
	},
	{
		id: "earnings",
		label: "Q & A",
		icon: BookOpen,
		path: "/instructor-dashboard/quiz",
	},
	{
		id: "announcements",
		label: "Announcements",
		icon: Megaphone,
		path: "/instructor-dashboard/announcements",
	},
	{
		id: "profile",
		label: "Settings",
		icon: Settings,
		path: "/instructor-dashboard/profile",
	},
];
export function InstructorTopBar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  return (
    <header className="bg-card border-b px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[240px] sm:w-[300px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex-1 px-2 py-4 space-y-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.id}>
                      {item.hasDropdown ? (
                        <div className="space-y-1">
                          <Button
                            variant="ghost" 
                            className="w-full justify-start text-gray-900"
                          >
                            <Icon className="h-4 w-4 flex-shrink-0" />
                            <span className="ml-3">{item.label}</span>
                          </Button>
                          <div className="ml-4 space-y-1">
                            {item.children.map((child) => {
                              const ChildIcon = child.icon;
                              return (
                                <NavLink
                                  key={child.id}
                                  to={child.path}
                                  end
                                  className="block"
                                  onClick={() => setIsSheetOpen(false)}
                                >
                                  <Button
                                    variant="ghost"
                                    size="sm" 
                                    className="w-full justify-start"
                                  >
                                    <ChildIcon className="h-3 w-3 flex-shrink-0" />
                                    <span className="ml-2 text-sm">{child.label}</span>
                                  </Button>
                                </NavLink>
                              );
                            })}
                          </div>
                        </div>
                      ) : (
                        <NavLink 
                          to={item.path}
                          onClick={() => setIsSheetOpen(false)}
                        >
                          <Button
                            variant="ghost"
                            className="w-full justify-start text-gray-900"
                          >
                            <Icon className="h-4 w-4 flex-shrink-0" />
                            <span className="ml-3">{item.label}</span>
                          </Button>
                        </NavLink>
                      )}
                    </div>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>

          <div className="hidden sm:block">
            <h2 className="text-lg font-semibold text-primary">
              Instructor Portal
            </h2>
          </div>
          
          <div className="relative w-full max-w-[200px] sm:max-w-sm md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Quick Stats */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* <div className="flex items-center space-x-2 px-3 py-1 bg-green-100 text-green-800 rounded-full">
              <DollarSign className="h-4 w-4" />
              <span className="text-sm font-medium">$2,450</span>
            </div> */}
          </div>

          <Button variant="ghost" size="icon" className="relative hidden sm:inline-flex">
            <MessageSquare className="h-4 w-4" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">5</Badge>
          </Button>
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">5</Badge>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Instructor" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">John Davis</p>
                  <p className="text-xs leading-none text-muted-foreground">john.davis@email.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View Public Profile</DropdownMenuItem>
              <DropdownMenuItem>Help & Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
