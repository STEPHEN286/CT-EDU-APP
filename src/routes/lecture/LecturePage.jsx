import Hero from "@/components/Hero";
import Application from "@/components/lecture-page-contents/Application";
import Faq from "@/components/lecture-page-contents/Faq";
import HowItWorks from "@/components/lecture-page-contents/HowItWorks";
import Requirements from "@/components/lecture-page-contents/Requirements";
import SuccessStories from "@/components/lecture-page-contents/SuccessStories";
import hero from '@/assets/lect.png'
import WhyTeach from "@/components/lecture-page-contents/WhyTeach";
import Tools from "@/components/lecture-page-contents/Tools";

const LecturePage = () => {
  return (
    <div className=" bg-gray-50">
      <main className="">
        {/* Hero Section */}
        <Hero image={hero} 
        title={"Share your knowledge.Inspire learners worldwide."}
       subtitle="Join thousands of instructors who are transforming lives through education and building successful teaching careers on CT EDU."
        
        primaryBtnText="Start teaching today"
        
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
      </main>
    </div>
  );
};

export default LecturePage;
