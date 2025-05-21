// data/courses.js

import {
  Code,
  PenTool,
  BarChart2,
  Database,
  Camera,
  Brush,
  Music,
  Globe,
  Bot,
  Shield,
  Home,
  Heart,
  User,
  GraduationCap,
  Globe2,
  DollarSign,
  Lightbulb,
  PenBoxIcon,
  Video,
  Rocket,
} from "lucide-react";

import { Search, BookOpen, Award } from "lucide-react";
export const courses = [
  {
    id: 1,
    title: "Web Development",
    courseCount: "88,000",
    icon: Code,
  },
  {
    id: 2,
    title: "Graphic Design",
    courseCount: "35,000",
    icon: Brush,
  },
  {
    id: 3,
    title: "Digital Marketing",
    courseCount: "41,500",
    icon: BarChart2,
  },
  {
    id: 4,
    title: "Data Science",
    courseCount: "50,000",
    icon: Database,
  },
  {
    id: 5,
    title: "Photography",
    courseCount: "22,000",
    icon: Camera,
  },
  {
    id: 6,
    title: "Music & Audio",
    courseCount: "14,300",
    icon: Music,
  },
  {
    id: 7,
    title: "Writing & Content",
    courseCount: "27,000",
    icon: PenTool,
  },
  {
    id: 8,
    title: "Language Learning",
    courseCount: "19,800",
    icon: Globe,
  },
  {
    id: 9,
    title: "AI & Machine Learning",
    courseCount: "33,700",
    icon: Bot,
  },
  {
    id: 10,
    title: "Cyber Security",
    courseCount: "17,400",
    icon: Shield,
  },
];
export const languages = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
];

// export const navItems = [
//   {
//     label: 'Home',
//     icon: <Home size={24} />,
//     key: 'home'
//   },
//   {
//     label: 'Search',
//     icon: <Search size={24} />,
//     key: 'search'
//   },
//   {
//     label: 'Wishlist',
//     icon: <Heart size={24} />,
//     key: 'wishlist'
//   },
//   {
//     label: 'Profile',
//     icon: <User size={24} />,
//     key: 'profile'
//   }
// ];

export const coursesData = [
  {
    id: 1,
    title: "The Complete Web Development Bootcamp",
    instructor: "Angela Yu",
    category: "Web Development",
    level: "Beginner",
    rating: 4.8,
    students: 125000,
    price: 49.99,
    duration: "45h",
    description:
      "Learn HTML, CSS, JavaScript, Node.js, MongoDB and more to become a full-stack web developer.",
    image: "https://i.imgur.com/zSu7yvT.jpeg",
    isFeatured: true,
    bestseller: true,
    tags: ["HTML", "CSS", "JavaScript", "Node.js"],
    language: "English",
    subtitles: ["Spanish", "German", "French"],
    updatedAt: "2025-03-12",
    videoPreviewUrl: "https://youtu.be/sample1",
  },
  {
    id: 2,
    title: "Mastering Python for Data Science",
    instructor: "Jose Portilla",
    category: "Data Science",
    level: "Intermediate",
    rating: 4.7,
    students: 89000,
    price: 39.99,
    duration: "30h",
    description:
      "Explore data science concepts and build practical Python projects in Pandas, NumPy and Scikit-learn.",
    image: "https://i.imgur.com/zSu7yvT.jpeg",
    isFeatured: true,
    bestseller: false,
    tags: ["Python", "Pandas", "Machine Learning"],
    language: "English",
    subtitles: ["Portuguese", "Hindi"],
    updatedAt: "2025-02-05",
    videoPreviewUrl: "https://youtu.be/sample2",
  },
  {
    id: 3,
    title: "UI/UX Design with Figma: Beginner to Pro",
    instructor: "Daniel Scott",
    category: "Design",
    level: "Beginner",
    rating: 4.6,
    students: 67000,
    price: 29.99,
    duration: "20h",
    description:
      "Design stunning apps and websites using Figma. Learn layout, components, prototyping and handoff.",
    image: "https://i.imgur.com/zSu7yvT.jpeg",
    isFeatured: false,
    bestseller: true,
    tags: ["UI", "UX", "Figma", "Design Systems"],
    language: "English",
    subtitles: ["French"],
    updatedAt: "2024-12-19",
    videoPreviewUrl: "https://youtu.be/sample3",
  },
  {
    id: 4,
    title: "React Native - The Practical Guide",
    instructor: "Maximilian Schwarzmüller",
    category: "Mobile Development",
    level: "Intermediate",
    rating: 4.8,
    students: 105000,
    price: 54.99,
    duration: "35h",
    description:
      "Build native mobile apps for iOS and Android using React Native and Expo.",
    image: "https://i.imgur.com/zSu7yvT.jpeg",
    isFeatured: true,
    bestseller: true,
    tags: ["React Native", "Expo", "Mobile"],
    language: "English",
    subtitles: ["German", "Spanish"],
    updatedAt: "2025-01-08",
    videoPreviewUrl: "https://youtu.be/sample4",
  },
  {
    id: 5,
    title: "Cybersecurity for Beginners",
    instructor: "Nathan House",
    category: "IT & Software",
    level: "Beginner",
    rating: 4.5,
    students: 78000,
    price: 34.99,
    duration: "25h",
    description:
      "Understand cyber threats, ethical hacking, firewalls, encryption and how to secure systems.",
    image: "https://i.imgur.com/zSu7yvT.jpeg",
    isFeatured: false,
    bestseller: false,
    tags: ["Cybersecurity", "Hacking", "Encryption"],
    language: "English",
    subtitles: ["Arabic", "Japanese"],
    updatedAt: "2024-11-01",
    videoPreviewUrl: "https://youtu.be/sample5",
  },
  {
    id: 6,
    title: "Advanced JavaScript Concepts",
    instructor: "Andrew Mead",
    category: "Web Development",
    level: "Advanced",
    rating: 4.9,
    students: 52000,
    price: 59.99,
    duration: "28h",
    description:
      "Master modern JavaScript including ES6+, OOP, Async/Await, Functional Programming and Design Patterns.",
    image: "https://i.imgur.com/zSu7yvT.jpeg",
    isFeatured: true,
    bestseller: true,
    tags: ["JavaScript", "ES6", "Async Programming"],
    language: "English",
    subtitles: ["Spanish", "Russian"],
    updatedAt: "2025-04-15",
    videoPreviewUrl: "https://youtu.be/sample6",
  },
  {
    id: 7,
    title: "Machine Learning A-Z with Python",
    instructor: "Kirill Eremenko",
    category: "Data Science",
    level: "Intermediate",
    rating: 4.7,
    students: 115000,
    price: 49.99,
    duration: "42h",
    description:
      "Hands-on machine learning with Python. Master regression, classification, clustering and deep learning.",
    image: "https://i.imgur.com/zSu7yvT.jpeg",
    isFeatured: true,
    bestseller: true,
    tags: ["Machine Learning", "TensorFlow", "Scikit-learn"],
    language: "English",
    subtitles: ["Chinese", "Portuguese"],
    updatedAt: "2025-03-01",
    videoPreviewUrl: "https://youtu.be/sample7",
  },
  {
    id: 8,
    title: "Complete Digital Marketing Course",
    instructor: "Rob Percival",
    category: "Marketing",
    level: "Beginner",
    rating: 4.6,
    students: 83000,
    price: 29.99,
    duration: "22h",
    description:
      "Master SEO, Google Ads, Facebook Ads, Email Marketing, YouTube Marketing and Analytics.",
    image: "https://i.imgur.com/zSu7yvT.jpeg",
    isFeatured: false,
    bestseller: false,
    tags: ["SEO", "Social Media", "Google Ads"],
    language: "English",
    subtitles: ["Italian", "Turkish"],
    updatedAt: "2024-10-10",
    videoPreviewUrl: "https://youtu.be/sample8",
  },
  {
    id: 9,
    title: "Flutter & Dart - Complete Guide",
    instructor: "Maximilian Schwarzmüller",
    category: "Mobile Development",
    level: "Intermediate",
    rating: 4.8,
    students: 72000,
    price: 44.99,
    duration: "38h",
    description:
      "Learn Flutter and Dart to build native iOS and Android apps with a single codebase.",
    image: "https://i.imgur.com/zSu7yvT.jpeg",
    isFeatured: true,
    bestseller: false,
    tags: ["Flutter", "Dart", "Cross-platform"],
    language: "English",
    subtitles: ["French", "German"],
    updatedAt: "2025-02-20",
    videoPreviewUrl: "https://youtu.be/sample9",
  },
  {
    id: 10,
    title: "AWS Certified Solutions Architect",
    instructor: "Stephane Maarek",
    category: "Cloud Computing",
    level: "Advanced",
    rating: 4.9,
    students: 95000,
    price: 64.99,
    duration: "32h",
    description:
      "Pass the AWS Certified Solutions Architect Associate exam with hands-on labs and practice tests.",
    image: "https://i.imgur.com/zSu7yvT.jpeg",
    isFeatured: true,
    bestseller: true,
    tags: ["AWS", "Cloud", "Certification"],
    language: "English",
    subtitles: ["Japanese", "Korean"],
    updatedAt: "2025-01-30",
    videoPreviewUrl: "https://youtu.be/sample10",
  },
];

const categoriesData = [
  {
    name: "Development",
    slug: "development",
    subcategories: [
      { name: "Web Development", slug: "web-development" },
      { name: "Mobile Development", slug: "mobile-development" },
      { name: "Game Development", slug: "game-development" },
      { name: "Database Design", slug: "database-design" },
      { name: "Software Testing", slug: "software-testing" },
    ],
  },
  {
    name: "IT Support",
    slug: "it-support",
    subcategories: [
      { name: "Network Administration", slug: "network-administration" },
      { name: "Cybersecurity", slug: "cybersecurity" },
      { name: "Cloud Computing", slug: "cloud-computing" },
      { name: "System Administration", slug: "system-administration" },
    ],
  },
  {
    name: "Data Science",
    slug: "data-science",
    subcategories: [
      { name: "Machine Learning", slug: "machine-learning" },
      { name: "Data Analysis", slug: "data-analysis" },
      { name: "Big Data", slug: "big-data" },
      { name: "Artificial Intelligence", slug: "artificial-intelligence" },
    ],
  },
  {
    name: "Design",
    slug: "design",
    subcategories: [
      { name: "UX/UI Design", slug: "ux-ui-design" },
      { name: "Graphic Design", slug: "graphic-design" },
      { name: "Web Design", slug: "web-design" },
      { name: "3D & Animation", slug: "3d-animation" },
    ],
  },
  {
    name: "Business",
    slug: "business",
    subcategories: [
      { name: "Entrepreneurship", slug: "entrepreneurship" },
      { name: "Marketing", slug: "marketing" },
      { name: "Finance", slug: "finance" },
      { name: "Project Management", slug: "project-management" },
    ],
  },
];

export default categoriesData;

export const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Software Developer",
    image: "https://business.appstate.edu/sites/default/files/styles/asu_news_full/public/asu_news/student-profile-javon-nathaniel.jpg?itok=-KyYkUKf",
    content:
      "LearnHub completely transformed my career. I went from knowing nothing about coding to landing a job as a full-stack developer in just 6 months.",
    rating: 5,
  },
  {
    id: 2,
    name: "Maria Garcia",
    role: "UX Designer",
    image: "https://www.law.uchicago.edu/sites/default/files/styles/extra_large/public/2018-03/theisen_tarra.jpg?itok=Olm_LKro",
    content:
      "The design courses on LearnHub are exceptional. The instructors are industry professionals who provide real-world insights that you can't get elsewhere.",
    rating: 5,
  },
  {
    id: 3,
    name: "David Kim",
    role: "Data Analyst",
    image: "https://publichealth.uga.edu/wp-content/uploads/2020/01/Thomas-Cameron_Student_Profile.jpg",
    content:
      "The roadmap feature helped me understand exactly what I needed to learn to transition into data science. Highly recommended for career changers!",
    rating: 4,
  },
];

export const howItWorks = [
  {
    id: 1,
    title: "Find Your Course",
    description:
      "Browse our extensive library of courses or use our personalized roadmaps to find the perfect learning path for your goals.",
    icon: Search,
  },
  {
    id: 2,
    title: "Learn at Your Pace",
    description:
      "Access course materials anytime, anywhere. Learn at your own pace with our flexible platform that adapts to your schedule.",
    icon: BookOpen,
  },
  {
    id: 3,
    title: "Earn Certificates",
    description:
      "Complete courses and earn certificates to showcase your new skills to employers and advance your career.",
    icon: Award,
  },
];

export const userRolesCards = [
  {
    role: "Students",
    icon: GraduationCap, // Lucide icon
    features: [
      "Learn at your own pace",
      "Track your progress",
      "Interact with instructors",
      "Earn verified certificates",
    ],
  },
  {
    role: "Lecturers",
    icon: "Presentation", // Lucide icon
    features: [
      "Upload courses easily",
      "Engage with students",
      "Track student performance",
      "Earn revenue from your expertise",
    ],
  },
  {
    role: "Admins",
    icon: "ShieldCheck", // Lucide icon
    features: [
      "Manage users and courses",
      "Access detailed analytics",
      "Oversee site operations",
      "Optimize platform functionality",
    ],
  },
];

export const whyTeach = [
  {
    icon: Globe2, // or use an icon component or image path
    title: "Reach millions of learners",
    description:
      "Connect with over 50 million students worldwide eager to learn from your expertise and experience.",
  },
  {
    icon: DollarSign,
    title: "Monetize your expertise",
    description:
      "Earn revenue through course sales, subscriptions, and our affiliate program. Our top instructors earn six figures annually.",
  },
  {
    icon: Lightbulb,
    title: "Create lasting impact",
    description:
      "Transform lives through education and build a legacy by sharing your knowledge with eager students around the globe.",
  },
];

export const courseSteps = [
  {
    step: 1,
    icon: PenBoxIcon,
    title: "Plan Your Course",
    description:
      "Define your target audience and outline your curriculum with our planning tools.",
  },
  {
    step: 2,
    icon: Video,
    title: "Create your content",
    description:
      "Record videos, create assignments, and design quizzes with our easy-to-use course builder.",
  },
  {
    step: 3,
    icon: Rocket,
    title: "Publish and promote",
    description:
      "Launch your course and leverage our marketing tools to reach your ideal students.",
  },

  {
    step: 4,
    icon: Rocket,
    title: "Earn and grow",
    description:
      "Get paid for your expertise and expand your course offerings based on student feedback..",
  },
];
