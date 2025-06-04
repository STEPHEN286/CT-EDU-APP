import { containerClass } from "@/utils/css-utils";
import { Check, GraduationCap } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import image from "../../assets/lect.png";

const features = [
  "Learn at your own pace",
  "Track your progress",
  "Interact with instructors",
  "Earn verified certificates",
];

export default function OverViewOfUsers() {
  return (
    <section className={`${containerClass} min-h-screen`}>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Unlock Your Learning Potential</h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Explore highly-rated modules from expert instructors around the globe
        </p>
      </div>

      {/* Centered Card + Image */}
      <div className="flex justify-center items-center     min-h-[60vh]  w-full">
        <div className="flex flex-col-reverse md:flex-row justify-between   items-center gap-10">
          {/* Card */}
          <Card className="max-w-sm shadow-none border-0">
            <CardHeader>
              <p className=" w-fit rounded text-red-600">
                <GraduationCap size={40} />
              </p>
              <h3 className="font-semibold text-2xl">For Student</h3>
            </CardHeader>
            <CardContent>
              <ul className="space-y-5">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <span className="bg-red-600 rounded-full p-1 flex items-center justify-center">
                      <Check color="white" size={10} />
                    </span>
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Image */}
          <div className="flex justify-center ">
            <img src="https://i.imgur.com/wBMCg7v.png" alt="Learning" className="max-w-[350px]  w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
