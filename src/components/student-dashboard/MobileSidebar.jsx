"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  BookOpen,
  TrendingUp,
  Globe,
  Users,
  MessageSquare,
  HelpCircle,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function MobileSidebar({ isOpen, onClose }) {
  if (!isOpen) return null

  const sidebarItems = [
    { icon: BarChart3, label: "Overview", to: "/profile" },
    { icon: BookOpen, label: "My Courses", to: "/profile/my-course" },
    { icon: TrendingUp, label: "Progress", to: "/profile/my-progress" },
    { icon: Globe, label: "Browse Courses", to: "/profile/browse-c" },
  //   { icon: Users, label: "Community", to: "/profile/community" },
    { icon: MessageSquare, label: "Messages", to: "/profile/messages" },
    { icon: HelpCircle, label: "Q&A", to: "/profile/questions-answers" },
    { icon: Settings, label: "Settings", to: "/profile/settings" },
  ];

  return (
    <>
      {/* Overlay */}
      <div className="xl:hidden fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />

      {/* Sidebar */}
      <div className="xl:hidden fixed left-0 top-0 z-50 h-full w-64 transform transition-transform bg-red-600">
        <div className="relative h-full p-4">
          {/* User Profile */}
          <div className="bg-white rounded-lg p-2 mb-6">
            <div className="flex items-center space-x-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src="https://res.cloudinary.com/disgj6wx5/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1749112593/wqjzuhigvtueb1ttxfsf.jpg" />
                <AvatarFallback>WA</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-gray-900">Wendy Ashley</h3>
                <p className="text-sm text-gray-600">Student</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="space-y-2">
              {sidebarItems.map((item, index) => (
                <li key={index} className="list-none">
                  <NavLink
                    end
                    to={item.to}
                    className={({ isActive }) => {
                      return `flex items-center rounded-s-full relative p-3 ${
                        isActive 
                          ? "bg-white text-black active-li"
                          : "text-white hover:bg-white hover:text-black"
                      }`;
                    }}
                    onClick={onClose}
                  >
                    <item.icon className="mr-3 h-4 w-4" />
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-red-500 h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  )
}
