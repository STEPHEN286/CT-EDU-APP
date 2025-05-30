import { containerClass } from '@/utils/css-utils'
import React from 'react'
import { Card, CardContent } from '../ui/card'

export default function TailoredExperience() {
  return (
    <section className={`${containerClass} py-12`}>
        <div className="text-center mb-12">
            <h1 className=" text-2xl md:text-5xl font-bold mb-4">Tailored Experience</h1>
            <p className="text-lg text-gray-600">Explore our key features designed for every user</p>
        </div>
        
        <div className='grid   md:grid-cols-2 gap-6   max-w-3xl mx-auto auto-rows-fr'>
            <TailoredCard 
            
            imgUrl="https://i.imgur.com/GayzkEm.png"
                borderColor="border-red-900"
                title="Flexible Course Options"
                description="Select courses that suit your schedule"
            />
            <TailoredCard 
                borderColor="border-blue-500"
                title="Frequent Content Updates"
                description="Regular updates keep content fresh"
                imgUrl="https://i.imgur.com/O70mdH9.png"
            />
            
            <Card className="border-gray-100 row-span-2 p-8 flex items-center justify-center relative overflow-hidden">
                <img 
                    src="https://i.imgur.com/nrm5da0.png" 
                    alt="Happy student with books making OK gesture" 
                    className="w-full h-full object-cover rounded-lg"
                />
            </Card>
            
            <TailoredCard 
                borderColor="border-green-500"
                title="Customizable Learning Paths"
                description="Adapt learning based on your goals"
                 imgUrl="https://i.imgur.com/cWeHDS5.png"
            />
            <TailoredCard 
                borderColor="border-pink-400"
                title="Mobile Compatibility"
                description="Access courses from any device"
                imgUrl="https://i.imgur.com/xjAVQgT.png"
            />
            <TailoredCard 
                borderColor="border-purple-600"
                title="Comprehensive Analytics"
                description="Track your performance and progress"
                imgUrl="https://i.imgur.com/FPMA80v.png"
            />
            <TailoredCard 
                borderColor="border-yellow-500"
                title="Community Support"
                description="Connect with peers and mentors"
                imgUrl="https://i.imgur.com/PxXVsHt.png"
            />
        </div>
    </section>
  )
}

const TailoredCard = ({ borderColor, title, description, imgUrl }) => {
    return(
        <Card className={`border-2 ${borderColor}  p-6  text-black md:min-h-[180px] flex justify-center items-center md:justify-end md:items-start hover:scale-105 transition-transform`}>
            <CardContent className="p-0 flex  text-center justify-center flex-col w-full items-center  gap-5">
                <div className='h-15 w-15 md:h-20 md:w-20'>
        <img src={imgUrl} alt="" />
                </div>
                <div className="mt-auto">
                    <h3 className='font-bold text-sm md:text-lg mb-2 leading-tight'>
                        {title}
                    </h3>
                    <p className="text-sm opacity-90 leading-relaxed">{description}</p>
                </div>
            </CardContent>
        </Card>
    )
}