import { courseSteps } from '@/data'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export default function HowItWorks() {
  return (
     <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              How It Works
            </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {courseSteps.map(({ step, icon:Icon, title, description }) => (
        <Card key={step} className="shadow-none border-0 ">
         
           
          <CardHeader className="text-center">
         <p className='w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto'> {step}</p>
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle className="text-xl mb-2">{title}</CardTitle>
            <p className="text-gray-600">{description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
          </div>
        </section>
  )
}
