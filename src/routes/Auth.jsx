import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Apple, Facebook } from "lucide-react"
import { Link } from "react-router-dom"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl w-full">
       
        <div className="hidden lg:flex items-center justify-center bg-red-600 rounded-lg shadow-md overflow-hidden">
          <div className="p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Welcome to Our Platform</h2>
            <p className="mb-6">Join thousands of learners and educators in our innovative e-learning community.</p>
            <div className="flex justify-center">
              {/* Replace with your actual image */}
              <img 
                src="https://images.pexels.com/photos/4144144/pexels-photo-4144144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="E-learning platform" 
                className="rounded-md object-cover h-64 w-full"
              />
            </div>
          </div>
        </div>

        {/* Form Container - Right Side */}
        <div className="max-w-md w-full mx-auto space-y-8 bg-white p-8 rounded-lg shadow-md">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Register now</h2>
            <p className="mt-2 text-sm text-gray-600">
              Join our innovative e-learning platform designed to empower learners and educators alike.
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="grid grid-cols-3 gap-3">
              <Button variant="outline" className="w-full hover:bg-red-50">
                <img src="https://img.icons8.com/color/512/google-logo.png" alt="Google" className="h-4 w-4 mr-2" />
                Google
              </Button>
              <Button variant="outline" className="w-full hover:bg-red-50">
                <Apple className="h-4 w-4 mr-2" />
                Apple
              </Button>
              <Button variant="outline" className="w-full hover:bg-red-50">
                <Facebook className="h-4 w-4 mr-2" />
                Facebook
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email / Username
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="mt-1"
                />
              </div>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="instructor">Instructor</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Button className="w-full bg-red-600 hover:bg-red-700">
                Sign up
              </Button>
            </div>

            <div className="text-center text-sm text-gray-600">
              <p className="text-xs">
                By signing up, you agree to our <a href="#" className="font-medium text-red-600 hover:text-red-500">Terms of Use</a> and <a href="#" className="font-medium text-red-600 hover:text-red-500">Privacy Policy</a>.
              </p>
            </div>

            <div className="text-center text-sm">
              <span className="text-gray-600">Already a member? </span>
              <Link to="/login" className="font-medium text-red-600 hover:text-red-500">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}