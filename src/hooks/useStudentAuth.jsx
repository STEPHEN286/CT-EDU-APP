import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export const useStudent = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  
  const { data: student, isLoading, error , isSuccess} = useQuery({
    queryKey: ['student'],
    queryFn: () => {
      return null;
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30, 
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
    // enabled: false, 
  });

  // Navigate to login if user is null/undefined
  // if (!user && !isLoading) {
  //   // navigate('/');
  // }

  const isAuthenticated = !!student && !!student.id;
  const isAuthReady = student !== undefined || isSuccess;
  const updateUser = (userData) => {
    queryClient.setQueryData(['student'], userData);
  };


  const clearStudent = () => {
    queryClient.removeQueries(['student']);
    queryClient.removeQueries(['studentAuth']);
    navigate('/');
  };


  // Helper function to set user data (typically called after login)
  const setStudent = (studentData) => {
    queryClient.setQueryData(['student'], studentData);
  };

  return {
    student,
    isAuthenticated,
    isLoading,
    isAuthReady,
    error,
    updateUser,
    clearStudent,
    setStudent
  };
};