import { Card, CardContent } from "@/components/ui/card"
import { containerClass } from "@/utils/css-utils"
import { Star } from "lucide-react"
import Swipper from "./Swipper"
import { testimonials } from "@/data"



export function Testimonials() {
  return (
    <section className={`${containerClass}`}>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">What Our Students Say</h2>
        <p className="text-gray-500 mt-2">Hear from our community of learners</p>
      </div>

      <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8 pb-15">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="border-1 border-gray-50">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="mr-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="md:hidden" ><Swipper /></div>
    </section>
  )
}
