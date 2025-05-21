import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import LandingPage from "./LandingPage";
import LoginPage from "./Auth";
import Search from "./Search";
import WishList from "./WishList";
import CartPage from "./CartPage";
import LecturePage from "./lecture/LecturePage";
import LecturesLayout from "./layout/LecturesLayout";

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
        path: "/auth-login",
        element: <LoginPage />,
      },
      {
        path: "/carts",
        element: <CartPage />,
      },
      {
        path: "/contact",
        element: <h1>Contact</h1>,
      },
      {
        path: "wishlist",
        element: <WishList />
      },
      // {
      //   path: "/teach-on-ct",
      //   element: <LecturePage />
      // }
    ]
  },
  {
    path: "teach-on-ct",
    element: <LecturesLayout />,
    children: [
      {index: true, element:<LecturePage />}
    ]
  },
  {
    path: "search",
    element: <Search />,
  },
]);

export default routers;
