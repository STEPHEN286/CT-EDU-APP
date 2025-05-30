import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  BookOpen,
  Plus,
  Users,
  MessageSquare,
  Star,
  DollarSign,
  Megaphone,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    id: "my-courses",
    label: "My Courses",
    icon: BookOpen,
    path: "/dashboard/my-courses",
  },
  {
    id: "create-course",
    label: "Create Course",
    icon: Plus,
    path: "/dashboard/create-course",
  },
  {
    id: "students",
    label: "Students",
    icon: Users,
    path: "/dashboard/students",
  },
  {
    id: "messages",
    label: "Messages",
    icon: MessageSquare,
    path: "/dashboard/messages",
  },
  {
    id: "earnings",
    label: "Q & A",
    icon: BookOpen,
    path: "/dashboard/earnings",
  },
  {
    id: "announcements",
    label: "Announcements",
    icon: Megaphone,
    path: "/dashboard/announcements",
  },
  {
    id: "profile",
    label: "Profile & Settings",
    icon: Settings,
    path: "/dashboard/profile",
  },
];

export function InstructorSidebar({
 
  isOpen,
  setIsOpen,
}) 
{
  const location = useLocation()
  const currentPath = location.pathname
  return (
    <div
      className={cn(
        "bg-card border-r  transition-all duration-300 flex flex-col",
        isOpen ? "w-64" : "w-16 overflow-hidden"
      )}
    >
      <div className="">
      <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="h-8 w-8"
          >
            {isOpen ? (
              <ChevronLeft className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>
      </div>

      <nav className="flex-1  space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = currentPath === item.path || (item.id === "dashboard" && currentPath === "/dashboard")
          return (
            <Link
              key={item.id}
              to={item.path}
              className={cn(
                "w-full",
                !isOpen && "px-2"
              )}
              
            >
             <Button
                variant={isActive ? "default" : "ghost"}
                className="w-full justify-start"
              >
                <Icon className="h-4 w-4" />
                {isOpen && <span className="ml-2">{item.label}</span>}
              </Button>
            </Link>
          )
        })}
      </nav>
    </div>
  );
}
