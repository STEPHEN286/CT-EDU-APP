

import { InstructorSidebar } from "@/components/lecture-page-contents/lecture-dashboard/InstructorSideBar"
import { InstructorTopBar } from "@/components/lecture-page-contents/lecture-dashboard/InstructorTopBar"
import { useState } from "react"


import { Outlet } from "react-router-dom"




export function InstructorDashboardLayout() {
  // const [activePage, setActivePage] = useState("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(true)

 

  return (
    <div className="flex h-screen bg-background">
      <InstructorSidebar
        // activePage={activePage}
        // setActivePage={setActivePage}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <InstructorTopBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
