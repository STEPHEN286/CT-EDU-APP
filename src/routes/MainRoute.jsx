import { createHashRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import LandingPage from "./LandingPage";

import Search from "./Search";
import WishList from "./WishList";
import CartPage from "./CartPage";
import LecturePage from "./lecture/LecturePage";
import LecturesLayout from "./layout/LecturesLayout";

import AuthPage from "./Auth";
import { SignUpForm } from "@/components/signup-form";
import { LoginForm } from "@/components/login-form";
import RegisterInstructor from "./lecture/LecturesAuth";

import Roadmap from "@/components/Roadmap";
import CoursesPage from "@/components/courses/Courses";
import CourseDetailsPage from "@/components/course-detail/ProductDetails";
import CategoryPage from "@/components/category/Categories";
// import path from "path";

import { InstructorDashboardOverview } from "@/components/lecture-page-contents/lecture-dashboard/InstructorDashboardOverview";
import { ManageCourses } from "@/components/lecture-page-contents/lecture-dashboard/ManageCourses";
import CreateCourse from "@/components/lecture-page-contents/lecture-dashboard/CreateCourse";
import { ManageStudents } from "@/components/lecture-page-contents/lecture-dashboard/ManageStudents";
import { ManageMessages } from "@/components/lecture-page-contents/lecture-dashboard/ManageMessages";

import { ManageAnnouncements } from "@/components/lecture-page-contents/lecture-dashboard/ManageAnnouncement";
import { InstructorDashboardLayout } from "./layout/InstructorDashboardLayout";

import EmailVerification from "@/components/EmailVerification";
import QuizUploadPage from "@/components/lecture-page-contents/lecture-dashboard/Quiz";
import InstructorProfile from "@/components/lecture-page-contents/lecture-dashboard/Setting";
import CourseEnrollmentPage from "./CourseEnrollmentPage";
import StudentDashboardLayout from "./layout/StudentDashboardLayout";
import { StudentOverview } from "@/components/student-dashboard/StudentProfile";
import { MyCoursesPage } from "@/components/student-dashboard/MyCourses";
import { ProgressPage } from "@/components/student-dashboard/MyProgress";
import { SettingsPage } from "@/components/student-dashboard/Settings";
import { LucideMessageSquareReply } from "lucide-react";
import { MessagesPage } from "@/components/student-dashboard/messages/MessagePage";
import Application from "@/components/lecture-page-contents/Application";
import ApplicationReview from "@/components/lecture-page-contents/auth/ApplicationUnderReview";
import QuestionAnswer from "@/components/student-dashboard/QuestionAnswer";
import BrowseCourse from "@/components/student-dashboard/BrowseCourse";
import ProtectedRoute from "./ProtectedRoute";
import LectureLogin from "@/components/lecture-page-contents/lecture-dashboard/lecture-auth/LectureLogin";

const routers = createHashRouter([
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
        element: <CoursesPage />,
      },

      {
        path: "enroll",
        element: <CourseEnrollmentPage />,
      },

      {
        path: "course",
        element: <CourseDetailsPage />,
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
        children: [{ path: ":module", element: <CategoryPage /> }],
      },
      {
        path: "contact",
        element: <h1>Contact</h1>,
      },

      {
        path: "wishlist",
        element: <WishList />,
      },
    ],
  },
  // auth student
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
        element: <EmailVerification />,
      },
    ],
  },
  {
    path: "teach-on-ct",
    element: <LecturesLayout />,
    children: [
      { index: true, element: <LecturePage /> },
      { path: "register-instructor", element: <RegisterInstructor /> },
      {path: "application-review", element: <ApplicationReview />}
    ],
  },
  // student dashboard
  {
    path: "profile",
    element: <StudentDashboardLayout />,
    children: [
      { index: true, element: <StudentOverview /> }, 
      {path: "my-course", element: <MyCoursesPage /> },
      {path: "my-progress", element: <ProgressPage /> },
      {path: "settings", element: <SettingsPage /> },
      {path: "messages", element: <MessagesPage /> },
      {path: "questions-answers", element: <QuestionAnswer /> },
      {path: "browse-c", element: <BrowseCourse /> },

  
    ],
  },
  {
    path: "search",
    element: <Search />,
  },
  // instructor dashboard
  {
    path: "/lecture-auth-login",
    element: <LectureLogin />,
  },

   
    {
      path: "/dashboard",
      element:<ProtectedRoute />,
      children: [
        {
          index: true,
          element: <InstructorDashboardOverview />,
        },
        {
          path: "my-courses",
          element: <ManageCourses />,
        },
        {
          path: "create-course",
          element: <CreateCourse />,
        },
        {
          path: "students",
          element: <ManageStudents />,
        },
        {
          path: "messages",
          element: <ManageMessages />,
        },
        {
          path: "quiz",
          element: <QuizUploadPage />,
        },
        {
          path: "announcements",
          element: <ManageAnnouncements />,
        },
        {
          path: "profile",
          element: <InstructorProfile />,
        },
      ]
    }
    
  
]);

export default routers;
