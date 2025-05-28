export const allCourses = [
    {
      id: 1,
      title: "Complete React Development Course",
      students: 1250,
      rating: 4.8,
      status: "published",
      lastUpdated: "2 days ago",
      progress: 100,
      category: "Frontend",
      createdDate: new Date(2024, 0, 15),
      revenue: 15000,
    },
    {
      id: 2,
      title: "Advanced JavaScript Concepts",
      students: 890,
      rating: 4.9,
      status: "published",
      lastUpdated: "1 week ago",
      progress: 100,
      category: "Programming",
      createdDate: new Date(2024, 1, 20),
      revenue: 12000,
    },
    {
      id: 3,
      title: "Node.js Backend Development",
      students: 0,
      rating: 0,
      status: "draft",
      lastUpdated: "3 days ago",
      progress: 65,
      category: "Backend",
      createdDate: new Date(2024, 2, 10),
      revenue: 0,
    },
    {
      id: 4,
      title: "Python for Beginners",
      students: 567,
      rating: 4.6,
      status: "published",
      lastUpdated: "5 days ago",
      progress: 100,
      category: "Programming",
      createdDate: new Date(2024, 1, 5),
      revenue: 8500,
    },
    {
      id: 5,
      title: "Vue.js Masterclass",
      students: 234,
      rating: 4.7,
      status: "pending",
      lastUpdated: "1 day ago",
      progress: 90,
      category: "Frontend",
      createdDate: new Date(2024, 2, 25),
      revenue: 3500,
    },
  ]
  
  export const allMessages = [
    {
      id: 1,
      student: "Alice Johnson",
      course: "React Development",
      courseId: 1,
      message: "How do I handle state management in complex components?",
      time: "2 hours ago",
      isNew: true,
      timestamp: new Date(2024, 2, 28, 14, 0),
    },
    {
      id: 2,
      student: "Bob Smith",
      course: "JavaScript Concepts",
      courseId: 2,
      message: "Thank you for the detailed explanation on closures!",
      time: "5 hours ago",
      isNew: false,
      timestamp: new Date(2024, 2, 28, 11, 0),
    },
    {
      id: 3,
      student: "Carol Davis",
      course: "React Development",
      courseId: 1,
      message: "The project files are not downloading properly.",
      time: "1 day ago",
      isNew: true,
      timestamp: new Date(2024, 2, 27, 16, 0),
    },
    {
      id: 4,
      student: "David Wilson",
      course: "Python for Beginners",
      courseId: 4,
      message: "Could you explain list comprehensions again?",
      time: "2 days ago",
      isNew: false,
      timestamp: new Date(2024, 2, 26, 10, 0),
    },
  ]
  
  export const enrollmentData = [
    { month: "Jan", enrollments: 45, revenue: 1800, completions: 38 },
    { month: "Feb", enrollments: 52, revenue: 2100, completions: 45 },
    { month: "Mar", enrollments: 48, revenue: 1950, completions: 41 },
    { month: "Apr", enrollments: 61, revenue: 2400, completions: 55 },
    { month: "May", enrollments: 55, revenue: 2200, completions: 48 },
    { month: "Jun", enrollments: 67, revenue: 2450, completions: 59 },
  ]
  
  export const courseOptions = [
    { value: "all", label: "All Courses" },
    { value: "1", label: "Complete React Development Course" },
    { value: "2", label: "Advanced JavaScript Concepts" },
    { value: "3", label: "Node.js Backend Development" },
    { value: "4", label: "Python for Beginners" },
    { value: "5", label: "Vue.js Masterclass" },
  ]
  

    export const statusOptions = [
      { value: "all", label: "All Status" },
      { value: "published", label: "Published" },
      { value: "draft", label: "Draft" },
      { value: "pending", label: "Pending Review" },
    ]
  
  
  export const metricOptions = [
    { value: "all", label: "All Metrics" },
    { value: "enrollments", label: "Enrollments" },
    { value: "completions", label: "Completions" },
    { value: "revenue", label: "Revenue" },
    { value: "ratings", label: "Ratings" },
  ]