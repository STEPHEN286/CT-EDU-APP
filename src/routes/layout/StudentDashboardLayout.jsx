import { MobileSidebar } from '@/components/student-dashboard/MobileSidebar'
import { ResponsiveHeader } from '@/components/student-dashboard/ResponsiveHeader'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ResponsiveSidebar } from './ReponsiveSidebar'
import Sidebar from '@/components/student-dashboard/Sidebar'

export default function StudentDashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <ResponsiveHeader onMenuClick={() => setSidebarOpen(true)} />

      <div className="flex">
        {/* Desktop Sidebar - Hidden on mobile/tablet */}
        <div className="hidden xl:block">
          {/* <ResponsiveSidebar /> */}
          <Sidebar />
        </div>

        {/* Mobile/Tablet Sidebar */}
        <MobileSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content */}
        <main className="flex-1 p-3 sm:p-4 lg:p-6 min-h-screen w-full overflow-x-hidden"><Outlet /></main>
      </div>
    </div>
  )
}
