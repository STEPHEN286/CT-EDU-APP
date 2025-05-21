
import CustomSwiper from "../CustomSwiper";

import { SwiperSlide } from "swiper/react";
import { Card, CardContent, CardHeader } from "../ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const successStories = [
  {
    name: "Michael Chen",
    category: "Data Science",
    earnings: "$127,500",
    students: "15,000+",
    quote:
      "Teaching on LearnHub transformed my career. I've reached students in 137 countries while generating more income than my previous full-time job.",
    image:
      "https://readdy.ai/api/search-image?query=Professional%2520male%2520data%2520science%2520instructor%2520with%2520glasses%2520and%2520casual%2520professional%2520attire%2520smiling%2520at%2520camera%2520neutral%2520studio%2520background%2520high%2520quality%2520portrait%2520photo%2520realistic%2520confident%2520pose%2520warm%2520lighting&width=150&height=150&seq=101&orientation=squarish",
  },
  {
    name: "Sarah Johnson",
    category: "Web Development",
    earnings: "$95,200",
    students: "12,300+",
    quote:
      "I started with one beginner JavaScript course. Three years later, I've built a thriving teaching business that allows me to work from anywhere in the world.",
    image:
      "https://readdy.ai/api/search-image?query=Professional%2520female%2520web%2520development%2520instructor%2520with%2520long%2520dark%2520hair%2520and%2520casual%2520professional%2520attire%2520smiling%2520at%2520camera%2520neutral%2520studio%2520background%2520high%2520quality%2520portrait%2520photo%2520realistic%2520confident%2520pose%2520warm%2520lighting&width=150&height=150&seq=102&orientation=squarish",
  },
  {
    name: "David Park",
    category: "UX/UI Design",
    earnings: "$84,600",
    students: "9,800+",
    quote:
      "The platform tools make it easy to create professional courses. My design courses now generate more income than my client work, giving me freedom to choose projects I love.",
    image:
      "https://readdy.ai/api/search-image?query=Professional%2520male%2520design%2520instructor%2520with%2520modern%2520glasses%2520and%2520casual%2520professional%2520attire%2520smiling%2520at%2520camera%2520neutral%2520studio%2520background%2520high%2520quality%2520portrait%2520photo%2520realistic%2520confident%2520pose%2520warm%2520lighting&width=150&height=150&seq=103&orientation=squarish",
  },
];

export default function SuccessStories() {
  
  return (
    <section className="py-16 bg-red-50/12">
      <div className="container mx-auto px-4">
        <div className="md:w-1/2 mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Instructor Success Stories
          </h2>
          <p className="text-center text-gray-400">Join thousands of instructors who have transformed their careers by teaching on LearnHub.</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <CustomSwiper className="">
            {successStories.map((story) => (
              <SwiperSlide className="!flex justify-center  items-center   w-full py-10 px-5">
                <Card className="max-w-md shadow-none border-0">
                  <CardHeader className="flex items-center">
                    <Avatar>
                      <AvatarImage src={story.image} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col justify-start text-left ">
                      <p className="font-semibold">{story.name}</p>
                      <small className="text-gray-400">{story.category}</small>
                      </div>
                  </CardHeader>
                  <CardContent className="text-left">"{story.quote}"</CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </CustomSwiper>
        </div>
      </div>
    </section>
  );
}
