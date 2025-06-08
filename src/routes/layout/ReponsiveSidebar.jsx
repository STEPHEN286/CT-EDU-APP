import { BarChart3, BookOpen, TrendingUp, Globe, Users, MessageSquare, HelpCircle, Settings } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Link, useLocation } from "react-router-dom"

const sidebarItems = [
  { icon: BarChart3, label: "Overview", href: "/" },
  { icon: BookOpen, label: "My Courses", href: "/courses" },
  { icon: TrendingUp, label: "Progress", href: "/progress" },
  { icon: Globe, label: "Browse Courses", href: "/browse" },
  { icon: Users, label: "Community", href: "/community" },
  { icon: MessageSquare, label: "Messages", href: "/messages" },
  { icon: HelpCircle, label: "Q&A", href: "/qa" },
  { icon: Settings, label: "Settings", href: "/settings" },
]

export function ResponsiveSidebar() {
  const location = useLocation()
  const pathname = location.pathname

  return (
    <aside className="w-60 lg:w-64 bg-red-600 min-h-screen py-4 lg:py-6 lg:m-4 lg:rounded-lg">
      {/* User Profile */}
      <div className="bg-white rounded-lg p-3 mx-4 lg:mx-6 mb-6">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10 lg:h-12 lg:w-12">
            <AvatarImage src="/placeholder.svg?height=48&width=48" />
            <AvatarFallback>WA</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-gray-900 text-sm lg:text-base">Wendy Ashley</h3>
            <p className="text-xs lg:text-sm text-gray-600">Student</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-1 relative px-4 lg:px-6">
        {sidebarItems.map((item, index) => (
          <div key={index} className="relative">
            <Link to={item.href}>
              <Button
                variant="ghost"
                className={`w-full justify-start p-2 lg:p-3 transition-all duration-200 relative text-sm lg:text-base ${
                  pathname === item.href
                    ? "bg-white text-gray-900 rounded-l-full"
                    : "text-white hover:bg-red-500 rounded-lg"
                }`}
              >
                <item.icon className="mr-2 lg:mr-3 h-4 w-4 flex-shrink-0" />
                <span className="font-medium">{item.label}</span>

                {/* Curved notches for active state - Desktop only */}
                {pathname === item.href && (
                  <>
                    <div
                      className="hidden xl:block absolute -top-4 right-0 w-4 h-4 bg-red-600"
                      style={{ clipPath: "circle(50% at 0% 100%)" }}
                    />
                    <div
                      className="hidden xl:block absolute -bottom-4 right-0 w-4 h-4 bg-red-600"
                      style={{ clipPath: "circle(50% at 0% 0%)" }}
                    />
                  </>
                )}
              </Button>
            </Link>
          </div>
        ))}
      </nav>
    </aside>
  )
}
