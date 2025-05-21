import React from 'react'
import SmallCard from '../Cards/SmallCard'
import { Card, CardContent, CardHeader } from '../ui/card'
import { whyTeach } from '@/data'
import { Item } from '@radix-ui/react-select'
import { containerClass } from '@/utils/css-utils'

export default function WhyTeach() {
  return (
    <section id="why-teach" className={`${containerClass}  py-20 space-y-3 `}>
        <div className='md:w-1/2 mx-auto space-y-2' >
            <h3 className='text-center text-2xl md:text-4xl font-bold'>Why teach on LearnHub?</h3>
            <p className='text-center'>Our platform gives you the tools and support you need to create engaging courses and build a successful teaching business.</p>
        </div>

       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center  w-full'>
  {whyTeach.map((item, index) => (
    <Card 
      key={index}
      className="w-[300px] h-[300px] bg-red-50/15 shadow-none border-0 gap-0 md:space-y-3"
    >
      <CardHeader>
        <div className='space-y-4'>
          <p className='bg-red-100 p-4 w-fit rounded-full text-red-600'>
            <item.icon size={20} />
          </p>
          <h4 className='text-xl font-bold mb-2'>
            {item.title}
          </h4>
        </div>
      </CardHeader>
      <CardContent>
        <p className='font-medium text-gray-500'>{item.description}</p>
      </CardContent>
    </Card>
  ))}
</div>

    </section>
  )
}
