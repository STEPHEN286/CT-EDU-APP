// components/CourseCard.jsx

import { Card, CardContent } from "@/components/ui/card"
// import { Code } from "lucide-react"

export default function SmallCard({ title, icon: Icon, count }) {
  return (
    <Card className="rounded   shadow-none border ">
      <CardContent className="flex flex-col items-center p-2 space-y-4">
        <div className="bg-red-100 p-4 rounded-full">
          <Icon className="h-4 w-4 md:w-6 md:h-6 text-red-600" />
        </div>
        <h3 className="md:text-lg font-medium text-center md:font-semibold text-black">{title}</h3>
        <p className="text-sm text-gray-500">{count} </p>
      </CardContent>
    </Card>
  )
}
