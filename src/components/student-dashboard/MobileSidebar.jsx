"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"


export function MobileSidebar({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div className="xl:hidden fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />

      {/* Sidebar */}
      <div className="xl:hidden fixed left-0 top-0 z-50 h-full w-64 transform transition-transform">
        <div className="relative h-full">
          <ResponsiveSidebar />
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-red-500 h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  )
}
