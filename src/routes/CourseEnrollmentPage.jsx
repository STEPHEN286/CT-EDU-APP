import Cart from "@/components/Cart/Carts"
import EnrollPage from "@/components/Cart/EnrollPage"

export default function CourseEnrollmentPage() {
    // This would typically come from route params or props
    const selectedCourse = {
      id: 1,
      title: "AI Tracks",
      price: 7000,
      rating: 4.9,
      reviews: 1347,
      instructor: "Laura Green",
      image: "/placeholder.svg?height=150&width=250",
    }
  
    return (
      <main className="min-h-screen">
        <EnrollPage  />
      </main>
    )
  }