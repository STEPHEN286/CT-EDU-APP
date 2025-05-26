import Footer from '@/components/Footer'
import Header from '@/components/lecture-page-contents/Header'
import ScrollToTop from '@/utils/ScrollTop'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function LecturesLayout() {
  return (
    <>
      <ScrollToTop />
    <Header />
    <Outlet />
    <Footer/>
    </>
  )
}
