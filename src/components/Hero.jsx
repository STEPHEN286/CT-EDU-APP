import React from "react";
import { containerClass } from "@/utils/css-utils";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Hero({
  title,
  subtitle,
  image,
  primaryBtnText = "",
  primaryBtnLink = "#",
  secondaryBtnText = "",
  secondaryBtnLink = "#",
  className,
}) {
  return (
    <section
      className={cn(
        "relative w-full md:min-h-[80vh] py-20  md:py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-red-50 via-white to-gray-50",
        className
      )}
    >
      <div className={`${containerClass} relative z-10 h-full`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full min-h-[60vh]">
          {/* Content */}
          <div className="flex flex-col space-y-6 text-center lg:text-left max-w-2xl mx-auto lg:mx-0 order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {title}
            </h1>

            <p className="text-gray-600 text-lg sm:text-xl md:text-2xl leading-relaxed">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              {primaryBtnText && (
                <Link to={primaryBtnLink}>
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg h-auto shadow-lg hover:shadow-xl transition-all duration-200">
                    {primaryBtnText}
                  </Button>
                </Link>
              )}

              {secondaryBtnText && (
                <Link to={secondaryBtnLink}>
                  <Button
                    variant="outline"
                    className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 text-lg h-auto transition-all duration-200"
                  >
                    {secondaryBtnText}
                  </Button>
                </Link>
              )}
            </div>

          
          </div>

          {/* Hero Image */}
          {image && (
            <div className="relative order-1 lg:order-2">
              <div className="relative aspect-square lg:aspect-auto lg:h-[500px] xl:h-[600px] rounded-2xl overflow-hidden ">
                <img src={image} alt="Hero" className="w-full h-full object-cover" />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div> */}
                
               

               
              </div>

              {/* Background decoration */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-200 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-xl"></div>
            </div>
          )}
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}