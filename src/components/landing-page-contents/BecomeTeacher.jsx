import { containerClass } from '@/utils/css-utils';
import { Check } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

export default function BecomeTeacher() {
 

const features = [
  "Learn at your own pace",
  "Track your progress",
  "Interact with instructors",
  "Earn verified certificates",
];


  return (
    <section className={`${containerClass} py-20  `}>
      

      {/* Centered Card + Image */}
      <div className="flex justify-center items-center min-h-full  w-full">
        <div className="flex flex-col-reverse gap-5 md:flex-row items-center justify-center  md:justify-between">
          {/* Card */}
        <div className='max-w-md'>
          <div className='mb-3'>
                <h1 className=' text-2xl md:text-4xl font-bold text-center md:text-left'>Become an Instructors on <span className='text-red-600 '>CT EDU HUB</span></h1>
                <p className='text-center md:text-left text-xs'>Join a growing community of passionate instructors and share your expertise with eager learners</p>
             
          </div>


             <ul className="space-y-5 mb-7">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <span className="bg-red-600 rounded-full p-1 flex items-center justify-center">
                      <Check color="white" size={10} />
                    </span>
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
   <Link to="/teach-on-ct" className='bg-red-500 text-white p-2  font-semibold mt-5 rounded-md'>Start teaching </Link>
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

