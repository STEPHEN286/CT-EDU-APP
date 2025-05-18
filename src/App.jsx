import { RouterProvider } from "react-router-dom"
import BottomNavbar from "./components/bottom-navbar/BottomNavbar"
import BrowseCategories from "./components/BrowseCategories"
import CtaSection from "./components/CtaSection"
import FeaturedCourse from "./components/FeaturedCourse"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import { HowItWorks } from "./components/HowItWorks"
import { Testimonials } from "./components/Testimonial"
import routers from "./routes/MainRoute"


function App() {


  return (
    <RouterProvider router={routers}  />
    
    // </div>
  )
}

export default App
