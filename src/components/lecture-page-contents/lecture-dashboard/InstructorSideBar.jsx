import { useState } from "react";
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
  ChevronDown,
  ChevronUp,
  Eye,
  Upload,
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
    label: "Modules",
    icon: BookOpen,
    hasDropdown: true,
    children: [
      {
        id: "create-course",
        label: "Upload Module",
        icon: Upload,
        path: "/dashboard/create-course",
      },
      {
        id: "view-courses",
        label: "View Modules",
        icon: Eye,
        path: "/dashboard/my-courses",
      },
    ],
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
    path: "/dashboard/quiz",
  },
  {
    id: "announcements",
    label: "Announcements",
    icon: Megaphone,
    path: "/dashboard/announcements",
  },
  {
    id: "profile",
    label: "Settings",
    icon: Settings,
    path: "/dashboard/profile",
  },
];

export function InstructorSidebar({ isOpen, setIsOpen }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (itemId) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const isChildActive = (children) => {
    return children?.some(child => currentPath === child.path);
  };

  const isParentActive = (item) => {
    if (item.hasDropdown) {
      return isChildActive(item.children);
    }
    return currentPath === item.path || (item.id === "dashboard" && currentPath === "/dashboard");
  };

  return (
    <div
      className={cn(
        "bg-card border-r transition-all duration-300 flex flex-col",
        isOpen ? "w-64" : "w-16 overflow-hidden"
      )}
    >
      <div className="p-2">
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

      <nav className="flex-1 px-2 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = isParentActive(item);
          const hasChildren = item.hasDropdown && item.children;
          const isDropdownOpen = openDropdowns[item.id];

          return (
            <div key={item.id} className="w-full">
              {hasChildren ? (
                // Dropdown Menu Item
                <div>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => {
                      if (isOpen) {
                        toggleDropdown(item.id);
                      }
                    }}
                  >
                    <Icon className="h-4 w-4" />
                    {isOpen && (
                      <>
                        <span className="ml-2 flex-1 text-left">{item.label}</span>
                        {isDropdownOpen ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </>
                    )}
                  </Button>

                  {/* Dropdown Content */}
                  {isOpen && isDropdownOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => {
                        const ChildIcon = child.icon;
                        const isChildActiveItem = currentPath === child.path;
                        return (
                          <Link
                            key={child.id}
                            to={child.path}
                            className="block"
                          >
                            <Button
                              variant={isChildActiveItem ? "default" : "ghost"}
                              size="sm"
                              className="w-full justify-start"
                            >
                              <ChildIcon className="h-3 w-3" />
                              <span className="ml-2 text-sm">{child.label}</span>
                            </Button>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : (
                // Regular Menu Item
                <Link
                  to={item.path}
                  className="block"
                >
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className="w-full justify-start"
                  >
                    <Icon className="h-4 w-4" />
                    {isOpen && <span className="ml-2">{item.label}</span>}
                  </Button>
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}