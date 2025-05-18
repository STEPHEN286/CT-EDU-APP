import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import LandingPage from "./LandingPage";
import LoginPage from "./Auth";
import Search from "./Search";
import WishList from "./WishList";
import CartPage from "./CartPage";

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
        Element: <WishList />
      }
    ]
  },
  {
    path: "search",
    element: <Search />,
  },
]);

export default routers;
