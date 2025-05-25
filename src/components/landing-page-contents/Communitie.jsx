import { containerClass } from '@/utils/css-utils';
import React from 'react';

const communities = [
  "https://cdn.iconscout.com/icon/free/png-256/free-google-logo-icon-download-in-svg-png-gif-file-formats--brand-brands-pack-logos-icons-189807.png",
  "https://cdn.iconscout.com/icon/free/png-512/free-cisco-icon-download-in-svg-png-gif-file-formats--logo-brand-world-logos-vol-1-pack-icons-282320.png?f=webp&w=512",
  "https://cdn.iconscout.com/icon/free/png-512/free-zoom-logo-icon-download-in-svg-png-gif-file-formats--app-logos-icons-2050545.png?f=webp&w=512",
  "https://cdn.iconscout.com/icon/free/png-512/free-slack-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-language-logos-pack-icons-1174997.png?f=webp&w=512",
  "https://cdn.iconscout.com/icon/free/png-512/free-ibm-icon-download-in-svg-png-gif-file-formats--brand-logo-world-logos-vol-2-pack-icons-282120.png?f=webp&w=512"
];

export default function Communities() {
  return (
    <div className={`${containerClass} py-20`}>
      <h1 className='text-2xl md:text-3xl font-bold text-center mb-8'>
        We collaborate with <span className='text-red-600'>15+ prominent companies</span>
      </h1>
      <div className='grid grid-cols-2  md:grid-cols-2 lg:grid-cols-5  md:gap-8 place-items-center'>
        {communities.map((image, index) => (
          <img  

            key={index} 
            src={image} 
            alt='company logo' 
            className='w-20 h-20   object-fill  hover:grayscale-0 transition-all duration-300'
          />
        ))}
      </div>
    </div>
  );
}