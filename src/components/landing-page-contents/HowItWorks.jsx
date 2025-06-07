import { Card, CardContent } from "@/components/ui/card"
import { stepsData } from "@/data"
import { containerClass } from "@/utils/css-utils"
import { Search, BookOpen, Award } from "lucide-react"

export function HowItWorks() {
  return (
    <section className={`${containerClass} py-20`}>
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">How It Works</h1>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Join the platform in just a few simple steps:
        </p>
      </div>
        
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4  max-w-6xl mx-auto ">
        {stepsData.map((step, index) => {
          // Define grid classes for each step
          const gridClasses = {
            0: "col-span-1  lg:h-[500px]", 
            1: "col-span-1 lg:h-[450px]", 
            2: "col-span-1 lg:h-[400px]", 
            3: "col-span-1  lg:h-[350px]"  
          };

          return (
            <Card 
              key={step.id} 
              className={`${gridClasses[index]} md:h-[400px] border-2 p-3 border-red-600 shadow-none bg-gray-100 overflow-hidden rounded-xl`}
            >
              <CardContent className={`relative flex ${step.id % 2 === 0 && "flex-row-reverse"}  md:block p-0 h-full rounded-md  overflow-hidden`}>
                <div className={`bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${ step.id % 2=== 0 ? "left-2 top-2 " : "right-2 top-2" } absolute md:top-3 md:left-3  z-10`}>
                  {step.id}
                </div>
                <div className="h-full bg-blue-400">
                  <img 
                    src={step.image}
                    className="w-full h-full object-cover" 
                    alt={step.step} 
                  />
                </div>
                <div className=" flex flex-col justify-center  md:absolute bottom-4 left-4 right-4 bg-white p-3 rounded-md">
                  <h3 className="font-bold text-sm mb-1">{step.step}</h3>
                  <p className="text-xs text-gray-600">{step.description}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  )
}