import React from "react";
import { containerClass } from "@/utils/css-utils";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Hero({
  title,
  subtitle,
  image,
  primaryBtnText = "",
  primaryBtnLink = "#",
  secondaryBtnText = "",
  secondaryBtnLink = "#",
}) {
  return (
    <section className=" w-full mt-30 md:mt-10 py-10 md:py-16 relative overflow-hidden">
      <div className={`${containerClass} relative z-10`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col space-y-6 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {title}
            </h1>

            <p className="text-gray-600 text-base md:text-lg">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to={primaryBtnLink} className="px-6 py-3 bg-red-600 text-white rounded-md text-sm hover:bg-red-700 transition">
                {primaryBtnText}
              </Link>
              
              {secondaryBtnText && (
                <Link to={secondaryBtnLink} className="px-6 py-3 border border-red-600 text-red-600 rounded-md text-sm hover:bg-red-50 transition">
                  {secondaryBtnText}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Absolute positioned image */}
      <div className=" hidden md:block absolute right-10 lg:right-30 top-1/2 -translate-y-1/2 w-full md:w-[50%] lg:w-[30%] h-full">
        <img 
          src={image} 
          alt="Hero" 
          className="w-full h-full object-contain object-right"
        />
      </div>
    </section>
  );
}