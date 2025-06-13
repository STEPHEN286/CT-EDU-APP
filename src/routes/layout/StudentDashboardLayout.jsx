import { MobileSidebar } from '@/components/student-dashboard/MobileSidebar'
import { ResponsiveHeader } from '@/components/student-dashboard/ResponsiveHeader'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '@/components/student-dashboard/Sidebar'

export default function StudentDashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const isSessionValid = sessionStorage.getItem("session");
  console.log("session",isSessionValid)
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <ResponsiveHeader onMenuClick={() => setSidebarOpen(true)} />

      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <div className="fixed h-screen">
            <Sidebar />
          </div>
        </div>

        {/* Mobile Sidebar */}
        <MobileSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content */}
        <main className="flex-1 p-3 sm:p-4 lg:p-6 min-h-screen w-full overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
