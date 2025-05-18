import { Search, SearchIcon } from 'lucide-react'
import React from 'react'

export default function SearchInput() {


  return (
    <>
      <div className="hidden lg:block flex-1 max-w-xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for anything"
                  className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:border-gray-700 text-sm"
                  // value={searchQuery}
                  // onChange={(e) => setSearchQuery(e.target.value)}
                />
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              
             
              
            </div>
            
    </>
  )
}
