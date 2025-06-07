import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import LandingPage from "./LandingPage";

import Search from "./Search";
import WishList from "./WishList";
import CartPage from "./CartPage";
import LecturePage from "./lecture/LecturePage";
import LecturesLayout from "./layout/LecturesLayout";
import LectureAuth from "./lecture/LecturesAuth";
import AuthPage from "./Auth";
import { SignUpForm } from "@/components/signup-form";
import { LoginForm } from "@/components/login-form";
import RegisterInstructor from "./lecture/LecturesAuth";
import Profile from "./Profile";
import Roadmap from "@/components/Roadmap";
import CoursesPage from "@/components/courses/Courses";
import CourseDetailsPage from "@/components/course-detail/ProductDetails";
import CategoryPage from "@/components/category/Categories";
// import path from "path";


import { InstructorDashboardOverview } from "@/components/lecture-page-contents/lecture-dashboard/InstructorDashboardOverview";
import { ManageCourses } from "@/components/lecture-page-contents/lecture-dashboard/ManageCourses";
import CreateCourse  from "@/components/lecture-page-contents/lecture-dashboard/CreateCourse";
import { ManageStudents } from "@/components/lecture-page-contents/lecture-dashboard/ManageStudents";
import { ManageMessages } from "@/components/lecture-page-contents/lecture-dashboard/ManageMessages";

import { ManageAnnouncements } from "@/components/lecture-page-contents/lecture-dashboard/ManageAnnouncement";
import { InstructorDashboardLayout } from "./layout/InstructorDashboardLayout";
import VerifyEmail from "@/components/VerifyEmail";
import EmailVerification from "@/components/EmailVerification";
import QuizUploadPage from "@/components/lecture-page-contents/lecture-dashboard/Quiz";
import InstructorProfile  from "@/components/lecture-page-contents/lecture-dashboard/Setting";
import CourseEnrollmentPage from "./CourseEnrollmentPage";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
     
      {
        path: "courses",
        element: <CoursesPage />
      },
      
      {
        path: "enroll",
        element: <CourseEnrollmentPage />
      },

      {
        path: "course",
        element: <CourseDetailsPage />
      },
      {
        path: "carts",
        element: <CartPage />,
      },
      {
        path: "roadmap",
        element: <Roadmap />,
      },
      {
        path: "categories/:slug",
        element: <CategoryPage />,
        children:[
         { path: ":module", element: <CategoryPage />}
        ]
      },
      {
        path: "contact",
        element: <h1>Contact</h1>,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "wishlist",
        element: <WishList />
      },
    ]
  },
  {
    path: "auth",
    element: <AuthPage />,
    children: [
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "signup",
        element: <SignUpForm />,
      },
      {
        path: "verify-email",
        element: <EmailVerification />
      }
    ]
  },
  {
    path: "teach-on-ct",
    element: <LecturesLayout />,
    children: [
      {index: true, element:<LecturePage />},
      {path: "register-instructor", element: <RegisterInstructor />}
    ]
  },
  {
    path: "search",
    element: <Search />,
  },
  {
    path: "dashboard",
    element: <InstructorDashboardLayout />,
    children: [
      {
        index: true,
        element: <InstructorDashboardOverview />
      },
      {
        path: "my-courses",
        element: <ManageCourses />
      },
      {
        path: "create-course",
        element: <CreateCourse />
      },
      {
        path: "students",
        element: <ManageStudents />
      },
      {
        path: "messages",
        element: <ManageMessages />
      },
      {
        path: "quiz",
        element: <QuizUploadPage />
      },
      {
        path: "announcements",
        element: <ManageAnnouncements />
      },
      {
        path: "profile",
        element: <InstructorProfile />
      }
    ]
  }
]);

export default routers;