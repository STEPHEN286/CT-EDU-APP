

import { Search, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function MessageSearch() {
  return (
    <div className="p-3 sm:p-4 border-b border-gray-200">
      <div className="flex items-center space-x-2 sm:space-x-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Search conversations..." className="pl-10 text-sm" />
        </div>
        <Button size="sm" className="bg-red-500 hover:bg-red-600 px-2 sm:px-3">
          <Plus className="h-4 w-4 sm:mr-2" />
          <span className="hidden sm:inline">New</span>
        </Button>
      </div>
    </div>
  )
}
