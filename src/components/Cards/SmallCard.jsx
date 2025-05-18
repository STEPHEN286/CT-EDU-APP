// components/CourseCard.jsx

import { Card, CardContent } from "@/components/ui/card"
// import { Code } from "lucide-react"

export default function SmallCard({ title, icon: Icon, count }) {
  return (
    <Card className="rounded border-none  ">
      <CardContent className="flex flex-col items-center p-2 space-y-4">
        <div className="bg-red-100 p-4 rounded-full">
          <Icon className="w-6 h-6 text-red-600" />
        </div>
        <h3 className="text-lg font-semibold text-black">{title}</h3>
        <p className="text-sm text-gray-500">{count} courses</p>
      </CardContent>
    </Card>
  )
}
