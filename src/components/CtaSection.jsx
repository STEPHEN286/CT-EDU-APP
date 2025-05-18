import React from 'react'
import { Button } from './ui/button'

export default function CtaSection() {
  return (
   <section className="bg-black py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Learning Journey?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already advancing their careers with LearnHub.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700">
            Sign Up Now
          </Button>
        </div>
      </section>
  )
}
