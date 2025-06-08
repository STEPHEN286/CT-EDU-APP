import Sidebar from '@/components/student-dashboard/Sidebar'
import { StudentDashboardHeader } from '@/components/student-dashboard/StudentDashboardHeader'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function StudentDashboardLayout() {
  return (
    <div className="h-screen bg-background">
      <StudentDashboardHeader />
    <div className=" flex overflow-hidden">
     
        <Sidebar />
      <main className=" overflow-auto ">
      <div className="flex-1 p-5">  <Outlet /></div>
       
      </main>
    </div>
  </div>
  )
}
