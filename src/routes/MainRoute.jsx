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
import CategoryPage from "@/components/category/categories";
import path from "path";


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
]);

export default routers;