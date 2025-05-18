import BrowseCategories from '@/components/BrowseCategories'
import Communities from '@/components/Communitie'
import CtaSection from '@/components/CtaSection'
import FeaturedCourse from '@/components/FeaturedCourse'
import Hero from '@/components/Hero'
import { HowItWorks } from '@/components/HowItWorks'
import { Testimonials } from '@/components/Testimonial'
import React from 'react'

export default function LandingPage() {
  return (
    
       <div className="relative">
     <Hero />
     <Communities />
     <BrowseCategories />
     <FeaturedCourse />
     <HowItWorks />
     <Testimonials />
     <CtaSection />
     {/* <Footer /> */}
    </div>
  )
}
