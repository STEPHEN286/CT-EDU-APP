import React from "react";

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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { Link, NavLink } from "react-router-dom";

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
export default function Sidebar() {
  return (
    <aside className="min-w-60 m-4 rounded-lg bg-red-600 min-h-screen py-6 overflow-hidden ">
      {/* User Profile */}
      <div className="bg-white rounded-lg p-2  mx-6  mb-6">
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
      <nav className=" ml-6">
        <ul className="space-y-2 ">
            {sidebarItems.map((item, index) => (
              <li key={index} className="list-none">
                <NavLink
                  end
                  to={item.to}
                  className={({ isActive }) => {
                    return `flex items-center rounded-s-full  relative p-3 ${
                      isActive 
                        ? "bg-white text-black active-li"
                        : "text-white hover:bg-white hover:text-black"
                    }`;
                  }}
                >
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.label}
                 
             
                </NavLink>
              </li>
            ))}
        </ul>
      </nav>
    </aside>
  );
}
