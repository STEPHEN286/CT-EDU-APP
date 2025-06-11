import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "@/hooks/useUser";

const ProtectedRoute = () => {
  const { user, isAuthenticated, isLoading,  } = useUser();

  console.log("user", isAuthenticated);

  const isAuthReady = !isLoading && user !== undefined;

  if (!isAuthReady) {
    return <div>Loading...</div>;
  }
  // const isInitialLoading = isLoading && user === undefined;


  // if (!isAuthenticated ) {
  //   return <Navigate to="/lecture-auth-login" replace />;
  // } 

    return <Outlet />;
  

 

};

export default ProtectedRoute;