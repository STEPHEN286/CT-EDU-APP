import { Card, CardContent } from "@/components/ui/card"
import { howItWorks } from "@/data"
import { containerClass } from "@/utils/css-utils"
import { Search, BookOpen, Award } from "lucide-react"

export function HowItWorks() {
  return (
    <section className={`${containerClass} py-20`}>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">How LearnHub Works</h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Our platform makes it easy to find, purchase, and complete courses that match your learning goals
        </p>
      </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-4 w-full max-w-7xl px-4">
    {howItWorks.map((step) => (
      <Card key={step.id} className="border-0 py-4 shadow-none w-full bg-gray-100">
        <CardContent className="flex flex-col items-center text-center">
          <div className="rounded-full bg-red-100 p-4 mb-4">
            <step.icon className="h-8 w-8 text-red-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
          <p className="text-gray-600">{step.description}</p>
        </CardContent>
      </Card>
    ))}
  </div>
    </section>
  )
}
