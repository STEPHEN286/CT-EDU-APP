import { Star } from "lucide-react"
import { testimonials } from "@/data"
import { SwiperSlide } from 'swiper/react'
import CustomSwiper from "../CustomSwiper"
import { Card, CardContent } from "../ui/card"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { AvatarImage } from "../ui/avatar"

export function Testimonials() {
  return (
    <section className="py-8 md:py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Success Stories</h2>
          <p className="text-base md:text-lg text-gray-600">Hear from our learners and educators</p>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  )
}

function TestimonialSlider() {
  return (
    <div className="max-w-6xl mx-auto">
    <CustomSwiper
      className="testimonial-slider !py-12 md:!py-20"
      swiperProps={{
        navigation: true,
        spaceBetween: 16,
        breakpoints: {
          0: { slidesPerView: 1, spaceBetween: 12 },
          640: { slidesPerView: 1, spaceBetween: 16 },
          1024: { slidesPerView: 2, spaceBetween: 20 },
        },
      }}
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id} className="!bg-transparent">
          <Card className="min-h-[400px] md:h-80 md:min-h-0 bg-white p-0 border-0 hover:shadow-xl transition-shadow duration-300 mx-2">
            <CardContent className="p-0 h-full">
              <div className="flex flex-col items-center justify-start md:justify-center md:flex-row h-full">
                {/* Profile Image - Mobile */}
                <div className="w-full md:hidden pt-6">
                  <Avatar className="w-20 h-20 mx-auto">
                    <AvatarImage src={testimonial.image} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>

                {/* Profile Image - Desktop */}
                <div className="hidden md:block md:w-48 flex-shrink-0 h-80 rounded-l-lg overflow-hidden">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="md:flex-1 p-6 md:p-8 flex flex-col text-center md:text-left justify-center">
                  {/* Rating */}
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 md:w-5 h-4 md:h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-gray-700 mb-4 md:mb-6 text-base md:text-lg leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author Info */}
                  <div>
                    <h4 className="font-semibold text-gray-900 text-base md:text-lg mb-1">{testimonial.name}</h4>
                    <p className="text-sm md:text-base text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </CustomSwiper>
  </div>
  )
}