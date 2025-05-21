// components/Requirements.js
import React from "react";
// data/requirements.js
 const requirements = [
  {
    title: "Expertise & Knowledge",
    description:
      "Deep understanding of your subject matter and ability to explain concepts clearly to beginners.",
  },
  {
    title: "Communication Skills",
    description:
      "Ability to present information in an engaging, clear manner that resonates with students.",
  },
  {
    title: "Basic Equipment",
    description:
      "Computer, microphone, and camera for recording high-quality video and audio content.",
  },
  {
    title: "Time Commitment",
    description:
      "Dedication to create comprehensive course materials and engage with your students.",
  },
];


export default function Requirements() {
  return (
    <section id="requirement" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          What You Need to Get Started
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {requirements.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg  flex"
            >
              <div className="mr-4 text-green-500">
                <i className="fas fa-check-circle text-2xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
