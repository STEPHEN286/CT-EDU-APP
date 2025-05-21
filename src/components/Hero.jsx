import React from "react";
import { containerClass } from "@/utils/css-utils";
import { useTranslation } from "react-i18next";

export default function Hero({
  title,
  subtitle,
  image,
  primaryBtnText = "",
  primaryBtnLink = "#",
  secondaryBtnText = "",
  secondaryBtnLink = "#",
}) 

{
 
  return (
  <section className="bg-white w-full py-10 md:py-16">
  <div className={`${containerClass} grid grid-cols-1 md:grid-cols-2 gap-10 items-center`}>
    
    <div className="flex flex-col space-y-6 text-center md:text-left">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
        {title}
      </h1>

      <p className="text-gray-600 text-base md:text-lg">
       {subtitle}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <a href="#" className="px-6 py-3 bg-red-600 text-white rounded-md text-sm hover:bg-red-700 transition">
          {primaryBtnText}
        </a>
       
         { secondaryBtnText && <a href="#" className="px-6 py-3 border border-red-600 text-red-600 rounded-md text-sm hover:bg-red-50 transition">
            {secondaryBtnText}
          </a>}
       
      </div>
    </div>

    <div className="hidden md:block">
      <img src={image} alt="Hero" className="w-full max-h-[400px] object-contain" />
    </div>
  </div>
</section>

  );
}
