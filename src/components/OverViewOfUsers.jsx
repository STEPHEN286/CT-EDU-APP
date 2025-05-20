import { containerClass } from '@/utils/css-utils'
import { CheckCircle, GraduationCap, Section } from 'lucide-react'
import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import { userRolesCards } from '@/data'

export default function OverViewOfUsers() {
  return (
  <section className={`${containerClass}`}>
        <div>
         
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
         {
                userRolesCards.map(user => (
                 <Card className=" shadow-none gap-3" >
                    <CardHeader >
                       <p className='bg-red-600  w-fit p-3 rounded text-white '> <GraduationCap size={30}  /></p>
                    <h3 className='font-semibold'>For {user.role}</h3>
                    </CardHeader>
                <CardContent >
                <ul className='space-y-1'>
                    {
                     user.features.map(feature =>(
                           
                                 
                                <li className='flex items-center space-x-2'><CheckCircle size={15} /> <p>{feature} </p></li>
                            
                        ))
                    }
                </ul>

                </CardContent>
            </Card>
                ))
            }
           
        </div>
  </section>
  )
}
