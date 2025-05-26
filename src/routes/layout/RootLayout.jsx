import BottomNavbar from '@/components/bottom-navbar/BottomNavbar'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ScrollToTop from '@/utils/ScrollTop'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className=' w-full'>
        <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <BottomNavbar />
      <Footer />
    </div>
  )
}
