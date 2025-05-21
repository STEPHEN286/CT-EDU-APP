import Footer from '@/components/Footer'
import Header from '@/components/lecture-page-contents/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function LecturesLayout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer/>
    </>
  )
}
