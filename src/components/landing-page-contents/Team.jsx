import { containerClass } from "@/utils/css-utils";
import React, { useRef } from "react";
import { Card, CardContent } from "../ui/card";
import { ChevronLeft, ChevronRight, Facebook } from "lucide-react";
import CustomSwiper from "../CustomSwiper";
import { SwiperSlide } from "swiper/react";
import { stepsData } from "@/data";

export default function Team() {
  const swiperRef = useRef();
  
  return (
    <section className={`${containerClass}`}>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 items-center">
        <div className=" mx-auto text-center mb-6">
          <h1 className="font-bold text-3xl">Our Team</h1>
          <p>Learn from industry professionals with years of experience</p>
        </div>
        <div className="lg:col-span-2">
          <div className="hidden  relative lg:flex justify-end items-center gap-2 mb-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          
          <CustomSwiper
            ref={swiperRef}
            swiperProps={{
                className:"relative  ",
                onSwiper:(swiper) => (swiperRef.current = swiper),
            //   navigation: true,
              pagination: false,
              breakpoints: {
                0: { slidesPerView: 1 },
                640: { slidesPerView: 3, spaceBetween: 10 },
                1024: { slidesPerView: 3,  spaceBetween:10 },
              },
            }}
          >
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="p-2 lg:hidden absolute top-1/2 right- left=0 z-20 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
            >
                 <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="p-2 lg:hidden absolute top-1/2 right-0 z-20 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            {stepsData.map((step) => (
              <SwiperSlide key={step.id} className="w-fit px-10  md:p-0   lg:px-0 ">
                <Card className="max-w-[300px] md:max-w-[250px]   w-full rounded-xl border-1 border-red-600 shadow-none">
                  <CardContent className="flex flex-col items-center gap-3">
                    <div className="h-25 w-25 overflow-hidden rounded-full bg-gray-300">
                      <img
                        src={step.image}
                        className="h-full w-full object-cover"
                        alt=""
                      />
                    </div>
                    <h1 className="font-bold text-1xl">Stephen Adjei Kwofie</h1>
                    <p className="font-semibold text-sm text-red-600">
                      Computer Science Professor
                    </p>
                    <p className="text-sm">
                      Phosfluorescently transition best-of-breed action items
                      rather than efficient information. Uniquely exploit
                      turnkey relationships through.
                    </p>
                    <div className="flex">
                      <Facebook />
                      <Facebook />
                      <Facebook />
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </CustomSwiper>
        </div>
      </div>
    </section>
  );
}