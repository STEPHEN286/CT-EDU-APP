import React from 'react'
import { containerClass } from '@/utils/css-utils'
import {  navMenu } from '@/data'
import SmallCard from '../Cards/SmallCard'
import { toSlug } from '@/utils/actions'
import { Link } from 'react-router-dom'
import { Bot, Brain, GraduationCap, Factory, LineChart, DollarSign, LayoutDashboard, Users, Briefcase, Target } from 'lucide-react'

const categoryIcons = {
  'AI Tracks': Bot,
  'Specialized AI Training': Brain,
  'Foundation Level': GraduationCap,
  'Manufacturing Analytics': Factory,
  'Advanced Analytics': LineChart,
  'Financial Services Analytics': DollarSign,
  'Dashboard Development': LayoutDashboard,
  'Executive Development': Users,
  'Tech Leadership': Briefcase,
  'Sales Training': Target,
  'Sales Development': Target,
  'Interim Management': Briefcase
}

export default function BrowseCategories() {
  return (
    <div className={`${containerClass}  py-20 space-y-8`}>
      <div>
          <h1 className='text-xl font-bold text-center'>Browse Modules</h1>
          <p className='text-sm text-gray-500 text-center'>Explore our wide range of modules across different categories</p>
      </div>
      <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
        {
           
              navMenu.map(category => (
              <Link
                key={category.title} 
                to={`/categories/${toSlug(category.title)}`}
                className="block "
              >
                <SmallCard
                  title={category.title} 
                  icon={categoryIcons[category.title]} 
                  count={`${category.modules.length} modules`} 
                />
              </Link>
            ))
        
       
        }
      </div>
    </div>
  )
}
