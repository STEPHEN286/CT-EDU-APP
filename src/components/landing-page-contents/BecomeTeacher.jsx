import { containerClass } from '@/utils/css-utils';
import { Check, EuroIcon } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';
import { 
  // DollarSign, 
  TrendingUp, 
  Users, 
  Wrench, 
  Megaphone 
} from "lucide-react";

export default function BecomeTeacher() {
 

  const featuresDataWithLucideIcons = [
    {
      id: 1,
      icon: EuroIcon,
      title: "Earn competitive revenue",
      description: "Generate substantial income through our platform"
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Grow your professional profile", 
      description: "Build and enhance your professional reputation"
    },
    {
      id: 3,
      icon: Users,
      title: "Engage with a vibrant community",
      description: "Connect with like-minded professionals and learners"
    },
    {
      id: 4,
      icon: Wrench,
      title: "Easy course creation tools",
      description: "Intuitive tools to create engaging educational content"
    },
    {
      id: 5,
      icon: Megaphone,
      title: "Reach 100K+ learners worldwide",
      description: "Access to a global audience of eager learners"
    }
  ];


  return (
    <section className={`${containerClass} py-20  `}>
      

      {/* Centered Card + Image */}
      <div className="flex justify-center items-center min-h-full  w-full">
        <div className="flex flex-col-reverse gap-5 md:flex-row items-center justify-center  md:justify-between">
          {/* Card */}
        <div className='max-w-md'>
          <div className='mb-3'>
                <h1 className=' text-2xl md:text-4xl font-bold text-center md:text-left'>Become an Instructor on <span className='text-red-600 '>CT EDU HUB</span></h1>
                <p className='text-center md:text-left text-xs'>Join a growing community of passionate instructors and share your expertise with eager learners</p>
             
          </div>


             <ul className="space-y-5 mb-7">
                {featuresDataWithLucideIcons.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <span className=" rounded-full p-1  flex  items-center justify-center">
                      <feature.icon color="red" size={30} />
                    </span>
                    <p>{feature.title}</p>
                  </li>
                ))}
              </ul>
   <Link to="/teach-on-ct" className='bg-red-600 text-white p-3  font-semibold mt-5 rounded-md'>Start teaching </Link>
        </div>

          {/* Image */}
          <div className="flex justify-center ">
            <img src="https://i.imgur.com/rnW9A6F.png" alt="Learning" className="max-w-[650px]  w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

