import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export const useUser = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  
  const { data: user, isLoading, error , isSuccess} = useQuery({
    queryKey: ['instructor'],
    queryFn: () => {
      const cachedData = queryClient.getQueryData(['instructor']);
      return cachedData || null;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 30, // 30 minutes (replaces cacheTime)
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: false,
    // enabled: false, 
  });

  // Navigate to login if user is null/undefined
  // if (!user && !isLoading) {
  //   // navigate('/');
  // }

  const isAuthenticated = !!user && !!user.id;
  const isAuthReady = user !== undefined || isSuccess;
  const updateUser = (userData) => {
    queryClient.setQueryData(['instructor'], userData);
  };

  const clearUser = () => {
    queryClient.removeQueries(['instructor']);
    queryClient.removeQueries(['auth']);
    navigate('/');
  };

  // Helper function to set user data (typically called after login)
  const setUser = (userData) => {
    // console.log("set user", userData)
    queryClient.setQueryData(['instructor'], userData);
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    isAuthReady,
    error,
    updateUser,
    clearUser,
    setUser
  };
};