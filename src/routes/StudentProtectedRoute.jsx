import { Navigate, Outlet } from "react-router-dom";
// import { useUser } from "@/hooks/useUser";
import { useStudent } from "@/hooks/useStudentAuth";

const StudentProtectedRoute = () => {
  const { student, isAuthenticated, isLoading,  } = useStudent();



  const isAuthReady = !isLoading && student !== undefined;

  if (!isAuthReady) {
    return <div>Loading...</div>;
  }



  // if (!isAuthenticated ) {
  //   return <Navigate to="/auth/login" replace />;
  // } 

    return <Outlet />;


};

export default StudentProtectedRoute;