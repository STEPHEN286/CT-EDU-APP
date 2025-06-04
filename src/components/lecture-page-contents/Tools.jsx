import React from 'react'
import dash from "@/assets/dash.png"

export default function Tools() {
  return (
 <section id='tools' className="bg-red-50/9 min-h-screen w-full flex items-center">
  <div className={`${containerClass} w-full h-full`}>
    <div className="grid grid-cols-1 gap-10 md:gap-5  md:grid-cols-2 h-full items-center">
      
      <div className="w-full h-full bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl  ">
        <AspectRatio ratio={16 / 9} className="rounded-xl overflow-hidden">
          <img 
            src="https://i.imgur.com/IQnkdVR.png" 
            alt="Dashboard Analytics" 
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300" 
          />
        </AspectRatio>
      </div>

      <div className=" w-full h-full">
        <FeaturesCards />
      </div>

    </div>
  </div>
</section>



  )
}



import { Card, CardContent } from "@/components/ui/card"
import { LineChart, MessageCircle, DollarSign } from "lucide-react"
import { containerClass } from '@/utils/css-utils'
import { AspectRatio } from '../ui/aspect-ratio'

 function FeaturesCards() {
  const features = [
    {
      icon: <LineChart className=" w-5 h-5" />,
      title: "Comprehensive analytics",
      description: "Easily see how students are doing, how your modules perform, and what can be improved — all in one simple dashboard   ",
    },
    {
      icon: <MessageCircle className=" w-5 h-5" />,
      title: "Student feedback",
      description: "Gather insights from student reviews and ratings to continuously improve your modules.",
    },
    // {
    //   icon: <DollarSign className=" w-5 h-5" />,
    //   title: "Flexible monetization",
    //     description: "Choose from multiple revenue models: one-time purchases, subscriptions, or bundle offerings.",
    // },
  ];

  return (
    <div className="px-2">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Powerful tools to grow your teaching business
      </h2>
      <div className="space-y-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-4">
            <p className="mt-1 text-red-600">{feature.icon}</p>
            <div>
              <h3 className="font-semibold text-base md:text-lg">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
