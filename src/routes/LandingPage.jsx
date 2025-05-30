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
import BecomeTeacher from '@/components/landing-page-contents/BecomeTeacher'
import Pricing from '@/components/landing-page-contents/Pricing'
import TailoredExperience from '@/components/landing-page-contents/TailoredExperience'
import Team from '@/components/landing-page-contents/Team'

export default function LandingPage() {
   const{t} = useTranslation('hero')
   const baseText = "landingPagehero"
  return (
    
       <>
     <Hero 
     title={t(`${baseText}.title`)}
     subtitle={t(`${baseText}.subtitle`)}
     primaryBtnLink='/courses'
    primaryBtnText={t(`${baseText}.primaryBtn`)}
    secondaryBtnText={t(`${baseText}.secondaryBtn`)}
    image="https://i.imgur.com/YKu5Vrb.png"
      />
      
     <Communities />
     <OverViewOfUsers />
     <FeaturedCourse />
<BecomeTeacher />
<TailoredExperience />
<Pricing />
     <BrowseCategories />
<Team />
     <HowItWorks />
     <Testimonials />
     <CtaSection />
     {/* <Footer /> */}
    </>
  )
}
