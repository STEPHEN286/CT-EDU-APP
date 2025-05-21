import { Card, CardContent } from "@/components/ui/card"
import { containerClass } from "@/utils/css-utils"
import { Star } from "lucide-react"

import { testimonials } from "@/data"
import CustomSwiper from './CustomSwiper';
import { SwiperSlide } from 'swiper/react';
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";


export function Testimonials() {
  return (
    <section className="bg-red-50 py-16">

    <div className={`container mx-auto`}>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">What Our Students Say</h2>
          <p className="text-gray-500 mt-2">Hear from our community of learners</p>
        </div>
  
       
         <TestimonialSlider />
        
    </div>
      
    </section>
  )
}









function TestimonialSlider() {
  return (
    <div className="max-w-4xl mx-auto">
      <CustomSwiper className="">
        {testimonials.map((testimonial) => (
         <SwiperSlide key={testimonial.id}   className="!flex justify-center items-center  w-full py-10 px-5">
    <Card className=" max-w-md shadow-none border-0 ">
      <CardContent className="">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
  
      
        <p className="text-gray-700 mb-6 text-left">"{testimonial.content}"</p>
  
      
        <div className="flex items-center">
         <Avatar>
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
          <div>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </SwiperSlide>
  
        ))}
      </CustomSwiper>
    </div>
  );
}


