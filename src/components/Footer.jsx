import React from 'react'

   import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react"
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-black text-white  pb-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="/" className="flex items-center gap-2 text-xl font-bold">
              <span className="text-red-500">CT EDU HUB</span>
            </a>
            <p className="mt-4 text-gray-400">
              Empowering learners worldwide with quality education and personalized learning paths.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick as</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/modules" className="text-gray-400 hover:text-white">
                  Modules
                </Link>
              </li>
              <li>
                <Link to="/roadmaps" className="text-gray-400 hover:text-white">
                  Roadmaps
                </Link>
              </li>
              <li>
                <Link to="/instructors" className="text-gray-400 hover:text-white">
                  Instructors
                </Link>
              </li>
              {/* <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white">
                  Pricing
                </Link>
              </li> */}
              {/* <li>
                <Link to="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li> */}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/help" className="text-gray-400 hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Subscribe</h3>
            <p className="mt-4 text-gray-400">
              Subscribe to our newsletter to get updates on new modules and features.
            </p>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-l-md border-0 bg-white/10 px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="rounded-r-md bg-red-600 px-4 py-2 font-medium hover:bg-red-700">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Subscribe</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} CT EDU HUB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

 