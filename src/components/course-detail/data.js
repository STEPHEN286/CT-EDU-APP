// Course Data Arrays

// What You'll Learn items
export const learningOutcomes = [
    "Build responsive websites with HTML5 & CSS3",
    "Create interactive apps with JavaScript", 
    "Develop modern UIs with React",
    "Build APIs with Node.js & Express",
    "Work with databases (MongoDB & SQL)",
    "Deploy applications to production",
    "Implement user authentication",
    "Write clean, maintainable code",
  ];
  
  // Course sections with lessons
  export const courseSections = [
    {
      id: 1,
      title: "Getting Started with Web Development",
      lectures: 8,
      duration: "2h 30m",
      lessons: [
        { id: 1, title: "Introduction to Web Development", duration: "15:30" },
        { id: 2, title: "Setting Up Your Environment", duration: "20:45" },
        { id: 3, title: "How the Web Works", duration: "18:20" },
        { id: 4, title: "Your First Web Page", duration: "25:15" },
        { id: 5, title: "Understanding HTML Structure", duration: "22:10" },
        { id: 6, title: "Basic CSS Styling", duration: "19:30" },
        { id: 7, title: "Developer Tools Introduction", duration: "16:45" },
        { id: 8, title: "Project: Personal Portfolio Setup", duration: "32:15" }
      ]
    },
    {
      id: 2,
      title: "HTML Fundamentals",
      lectures: 12,
      duration: "4h 15m",
      lessons: [
        { id: 9, title: "HTML Document Structure", duration: "20:30" },
        { id: 10, title: "Working with Text", duration: "18:45" },
        { id: 11, title: "Links and Images", duration: "22:15" },
        { id: 12, title: "Forms and Input Elements", duration: "28:30" },
        { id: 13, title: "Tables and Lists", duration: "19:20" },
        { id: 14, title: "Semantic HTML Elements", duration: "24:10" },
        { id: 15, title: "HTML5 New Features", duration: "21:45" },
        { id: 16, title: "Accessibility Best Practices", duration: "26:30" },
        { id: 17, title: "HTML Validation", duration: "15:20" },
        { id: 18, title: "Meta Tags and SEO", duration: "23:15" },
        { id: 19, title: "HTML Project Planning", duration: "17:30" },
        { id: 20, title: "Project: Restaurant Website", duration: "37:45" }
      ]
    },
    {
      id: 3,
      title: "CSS Styling & Layout",
      lectures: 15,
      duration: "6h 20m",
      lessons: [
        { id: 21, title: "CSS Basics and Selectors", duration: "25:30" },
        { id: 22, title: "Box Model and Layout", duration: "30:15" },
        { id: 23, title: "Flexbox and Grid", duration: "35:45" },
        { id: 24, title: "Responsive Design", duration: "28:20" },
        { id: 25, title: "CSS Variables and Custom Properties", duration: "22:10" },
        { id: 26, title: "Animations and Transitions", duration: "26:30" },
        { id: 27, title: "CSS Preprocessors (Sass)", duration: "24:45" },
        { id: 28, title: "CSS Frameworks Overview", duration: "20:15" },
        { id: 29, title: "Mobile-First Design", duration: "23:30" },
        { id: 30, title: "CSS Grid Advanced", duration: "29:20" },
        { id: 31, title: "CSS Best Practices", duration: "18:45" },
        { id: 32, title: "Browser Compatibility", duration: "21:15" },
        { id: 33, title: "CSS Debugging", duration: "19:30" },
        { id: 34, title: "Performance Optimization", duration: "24:20" },
        { id: 35, title: "Project: E-commerce Layout", duration: "41:30" }
      ]
    },
    {
      id: 4,
      title: "JavaScript Programming",
      lectures: 18,
      duration: "8h 45m",
      lessons: [
        { id: 36, title: "Variables and Data Types", duration: "28:15" },
        { id: 37, title: "Functions and Scope", duration: "32:30" },
        { id: 38, title: "DOM Manipulation", duration: "35:45" },
        { id: 39, title: "Async JavaScript", duration: "40:20" },
        { id: 40, title: "Objects and Arrays", duration: "30:15" },
        { id: 41, title: "Event Handling", duration: "26:30" },
        { id: 42, title: "ES6+ Features", duration: "34:45" },
        { id: 43, title: "Error Handling", duration: "22:15" },
        { id: 44, title: "Local Storage and Session Storage", duration: "24:30" },
        { id: 45, title: "Fetch API and AJAX", duration: "38:20" },
        { id: 46, title: "JSON Data Handling", duration: "20:15" },
        { id: 47, title: "Regular Expressions", duration: "25:45" },
        { id: 48, title: "JavaScript Modules", duration: "27:30" },
        { id: 49, title: "Testing JavaScript Code", duration: "29:15" },
        { id: 50, title: "Debugging Techniques", duration: "23:20" },
        { id: 51, title: "JavaScript Best Practices", duration: "21:45" },
        { id: 52, title: "Project: Interactive Calculator", duration: "35:30" },
        { id: 53, title: "Project: Weather App", duration: "45:15" }
      ]
    },
    {
      id: 5,
      title: "React Development",
      lectures: 20,
      duration: "12h 30m",
      lessons: [
        { id: 54, title: "Introduction to React", duration: "30:15" },
        { id: 55, title: "Components and Props", duration: "35:30" },
        { id: 56, title: "State Management", duration: "40:45" },
        { id: 57, title: "Building a Complete App", duration: "55:20" },
        { id: 58, title: "JSX and Virtual DOM", duration: "28:15" },
        { id: 59, title: "Event Handling in React", duration: "32:30" },
        { id: 60, title: "React Hooks", duration: "45:15" },
        { id: 61, title: "useEffect and Lifecycle", duration: "38:20" },
        { id: 62, title: "Context API", duration: "34:45" },
        { id: 63, title: "React Router", duration: "42:30" },
        { id: 64, title: "Forms in React", duration: "36:15" },
        { id: 65, title: "API Integration", duration: "48:30" },
        { id: 66, title: "State Management with Redux", duration: "52:45" },
        { id: 67, title: "Testing React Components", duration: "41:20" },
        { id: 68, title: "React Performance Optimization", duration: "39:15" },
        { id: 69, title: "Styling in React", duration: "33:30" },
        { id: 70, title: "Deployment Strategies", duration: "37:45" },
        { id: 71, title: "React Best Practices", duration: "29:30" },
        { id: 72, title: "Project: Social Media Dashboard", duration: "65:20" },
        { id: 73, title: "Project: Task Management App", duration: "58:45" }
      ]
    }
  ];
  
  // Course features/includes
  export const courseFeatures = [
    { icon: "PlayCircle", text: "48 hours of video" },
    { icon: "BookOpen", text: "Downloadable resources" },
    { icon: "Award", text: "Certificate of completion" },
    { icon: "Globe", text: "Access on mobile and desktop" },
    { icon: "Clock", text: "Lifetime access" }
  ];
  
  // Course stats
  export const courseStats = [
    { icon: "Star", text: "4.8", subtext: "(1,245 reviews)" },
    { icon: "Users", text: "12,453 students" },
    { icon: "Clock", text: "48 hours" },
    { icon: "Globe", text: "English" }
  ];
  
  // Instructor information
  export const instructor = {
    name: "John Smith",
    title: "Senior Full-Stack Developer",
    avatar: "/placeholder.svg?height=64&width=64",
    initials: "JS",
    rating: 4.9,
    description: "10+ years experience building web applications for startups and Fortune 500 companies."
  };
  
  // Course basic information
  export const courseInfo = {
    category: "Web Development",
    title: "Complete Web Development Bootcamp",
    description: "Master HTML, CSS, JavaScript, React, and Node.js to become a full-stack developer",
    price: 89.99,
    originalPrice: 199.99,
    discount: "55% OFF",
    totalSections: 5,
    totalLectures: 73,
    totalHours: "48 hours",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  };