// components/TestimonialCard.tsx

import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function TestimonialCard() {
  return (
    <Card className="flex justify-between rounded-xl border border-gray-200 shadow p-0 overflow-hidden">
      {/* Left Image */}
      <div className="w-[160px] h-[160px] shrink-0">
        <img
          src="https://media.istockphoto.com/id/469551758/photo/happy-young-it-professional-at-her-desk.jpg?s=612x612&w=0&k=20&c=l_6MTpx33o-QwqX1o9wNEo3wv0hOdz6GOiqzgR3TsRQ=" // Make sure this image is in your public folder
          alt="Jenny Wilson"
          width={160}
          height={160}
          className="object-cover w-full h-full rounded-l-xl"
        />
      </div>

      {/* Right Content */}
      <div className="flex flex-col justify-center p-5 space-y-3">
        {/* Stars */}
        <div className="flex space-x-1 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} fill="currentColor" stroke="currentColor" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-sm text-gray-700 max-w-md">
          "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want."
        </p>

        {/* Name and Title */}
        <div className="text-sm">
          <span className="font-semibold text-black">Jenny Wilson</span>{" "}
          <span className="text-gray-500">Graphic Designer</span>
        </div>
      </div>
    </Card>
  );
}
