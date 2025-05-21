import BrowseCategories from '@/components/landing-page-contents/BrowseCategories'
import Communities from '@/components/landing-page-contents/Communitie'
import CtaSection from '@/components/landing-page-contents/CtaSection'
import FeaturedCourse from '@/components/landing-page-contents/FeaturedCourse'
import Hero from '@/components/Hero'
import { HowItWorks } from '@/components/landing-page-contents/HowItWorks'
import OverViewOfUsers from '@/components/landing-page-contents/OverViewOfUsers'
import { Testimonials } from '@/components/landing-page-contents/Testimonial'
import React from 'react'
import heroimage from "@/assets/hero-image2.png";
import { useTranslation } from 'react-i18next'

export default function LandingPage() {
   const{t} = useTranslation('hero')
   const baseText = "landingPagehero"
  return (
    
       <div className="relative">
     <Hero 
     title={t(`${baseText}.title`)}
     subtitle={t(`${baseText}.subtitle`)}
    //  primaryBtnLink=''
    primaryBtnText={t(`${baseText}.primaryBtn`)}
    secondaryBtnText={t(`${baseText}.secondaryBtn`)}
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
