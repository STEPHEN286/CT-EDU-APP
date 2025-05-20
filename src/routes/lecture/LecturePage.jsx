import Hero from "@/components/Hero";
import Application from "@/components/lecture-page-contents/Application";
import Faq from "@/components/lecture-page-contents/Faq";
import HowItWorks from "@/components/lecture-page-contents/HowItWorks";
import Requirements from "@/components/lecture-page-contents/Requirements";
import SuccessStories from "@/components/lecture-page-contents/SuccessStories";

const LecturePage = () => {
  return (
    <div className=" bg-gray-50">
      <main className="">
        {/* Hero Section */}
        <Hero />
        {/* Benefits Section */}

        {/* How It Works */}
        <HowItWorks />

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
