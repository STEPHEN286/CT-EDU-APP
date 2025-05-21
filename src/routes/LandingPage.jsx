import BrowseCategories from '@/components/BrowseCategories'
import Communities from '@/components/Communitie'
import CtaSection from '@/components/CtaSection'
import FeaturedCourse from '@/components/FeaturedCourse'
import Hero from '@/components/Hero'
import { HowItWorks } from '@/components/HowItWorks'
import OverViewOfUsers from '@/components/OverViewOfUsers'
import { Testimonials } from '@/components/Testimonial'
import React from 'react'
import heroimage from "@/assets/hero-image2.png";

export default function LandingPage() {
  return (
    
       <div className="relative">
     <Hero 
     title="Transform the Way You Learn—Interactive, Engaging, Effective"
     subtitle="Sign up for our innovative e-learning platform to enhance your learning experience with customized courses tailored to your needs!"
    //  primaryBtnLink=''
    primaryBtnText="Explore Courses"
    secondaryBtnText="Enroll now"
    image={heroimage}
      />
      
     <Communities />
     <OverViewOfUsers />
     <BrowseCategories />
     <FeaturedCourse />

     <HowItWorks />
     <Testimonials />
     <CtaSection />
     {/* <Footer /> */}
    </div>
  )
}
