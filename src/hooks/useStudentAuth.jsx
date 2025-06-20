import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useStudent = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    
    const { data: student, isLoading, error, isSuccess } = useQuery({
      
      queryKey: ['student'],
      queryFn: () => {
        // Return the cached data or null if not available
        const cachedData = queryClient.getQueryData(['student']);
        return cachedData || null;
      },
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 30,
      refetchOnWindowFocus: false,
      refetchOnMount: true, // Changed to true to allow initial load
      retry: false,
      initialData: null, // Set initial data to null
    });
    
    console.log("cached data", student)
    const isAuthenticated = !!student && !!student.id;
    const isAuthReady = student !== undefined || isSuccess;
  
    const clearStudent = () => {
      queryClient.removeQueries(['student']);
      queryClient.removeQueries(['studentAuth']);
      navigate('/');
    };
  
    // Helper function to set user data (typically called after login)
    const setStudent = (studentData) => {
      console.log('Setting student data:', studentData); // Debug log
      queryClient.setQueryData(['student'], studentData);
      // Optionally invalidate to trigger a refetch
      // queryClient.invalidateQueries(['student']);
    };
  
    return {
      student,
      isAuthenticated,
      isLoading,
      isAuthReady,
      error,
      clearStudent,
      setStudent
    };
  };