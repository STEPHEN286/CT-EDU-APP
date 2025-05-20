import React, { useState } from 'react'


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
      const [activeStory, setActiveStory] = useState(0);
    
      const nextStory = () => {
        setActiveStory((prev) => (prev + 1) % successStories.length);
      };
    
      const prevStory = () => {
        setActiveStory(
          (prev) => (prev - 1 + successStories.length) % successStories.length,
        );
      };
  return (
   <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Instructor Success Stories
            </h2>
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-xl p-8 md:p-10 shadow-md">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <img
                    src={successStories[activeStory].image}
                    alt={successStories[activeStory].name}
                    className="w-32 h-32 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-xl">
                          {successStories[activeStory].name}
                        </h4>
                        <p className="text-red-600">
                          {successStories[activeStory].category} Instructor
                        </p>
                      </div>
                      <div className="flex space-x-6 mt-4 md:mt-0">
                        <div>
                          <p className="text-gray-500 text-sm">
                            Annual Earnings
                          </p>
                          <p className="font-bold text-lg">
                            {successStories[activeStory].earnings}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500 text-sm">Students</p>
                          <p className="font-bold text-lg">
                            {successStories[activeStory].students}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex text-yellow-400 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>
                    <p className="text-gray-700 italic text-lg">
                      "{successStories[activeStory].quote}"
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-8 space-x-2">
                {successStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStory(index)}
                    className={`w-3 h-3 rounded-full ${activeStory === index ? "bg-red-600" : "bg-gray-300"} !rounded-button whitespace-nowrap cursor-pointer`}
                    aria-label={`Go to story ${index + 1}`}
                  ></button>
                ))}
              </div>
              <button
                onClick={prevStory}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
              >
                <i className="fas fa-chevron-left text-gray-600"></i>
              </button>
              <button
                onClick={nextStory}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center hover:bg-gray-100 !rounded-button whitespace-nowrap cursor-pointer"
              >
                <i className="fas fa-chevron-right text-gray-600"></i>
              </button>
            </div>
          </div>
        </section>
  )
}
