import Hero from "@/components/Hero";
import Application from "@/components/lecture-page-contents/Application";
import Faq from "@/components/lecture-page-contents/Faq";
import HowItWorks from "@/components/lecture-page-contents/HowItWorks";
import Requirements from "@/components/lecture-page-contents/Requirements";
import SuccessStories from "@/components/lecture-page-contents/SuccessStories";
import hero from '@/assets/lecture.png'
import WhyTeach from "@/components/lecture-page-contents/WhyTeach";
import Tools from "@/components/lecture-page-contents/Tools";
import { useTranslation } from "react-i18next";

const LecturePage = () => {
  const {t} = useTranslation('hero')
  return (
  
      <>
        {/* Hero Section */}
        <Hero image={hero} 
      
      title={t("lecturesHero.title")}
      subtitle={t("lecturesHero.subtitle")}
      primaryBtnText={t("lecturesHero.primaryBtn")}
      primaryBtnLink="/teach-on-ct/register-instructor"
        
          />
          <WhyTeach />
        {/* Benefits Section */}

        {/* How It Works */}
        <HowItWorks />
<Tools />
        {/* Success Stories */}
        <SuccessStories />

        {/* Requirements Section */}
        <Requirements />

        {/* FAQ Accordion */}
        <Faq />

        {/* Application CTA */}
        <Application />
      </>
   
  );
};

export default LecturePage;
