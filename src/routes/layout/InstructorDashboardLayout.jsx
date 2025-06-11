import { InstructorSidebar } from "@/components/lecture-page-contents/lecture-dashboard/InstructorSideBar"
import { InstructorTopBar } from "@/components/lecture-page-contents/lecture-dashboard/InstructorTopBar"
import { useState } from "react"
import { Outlet } from "react-router-dom"

export function InstructorDashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="h-screen flex flex-col">
      <InstructorTopBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className=" flex flex-1 overflow-hidden">
        <InstructorSidebar
          isOpen={sidebarOpen}
          setIsOpen={setSidebarOpen}
        />
        <main className="flex-1 overflow-auto bg-gray-50/80">
          <div className="p-5">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
