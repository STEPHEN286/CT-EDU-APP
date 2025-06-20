import { BASE_URL } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCourses = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/courses`);

    // Check if the response contains an error
    if (response.data.error) {
      throw new Error(response.data.error);
    }
     console.log("response", response.data)
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    
    // Handle different error types
    if (error.response?.data?.error) {
      throw new Error(error.response.data.error);
    } else if (error.message) {
      throw new Error(error.message);
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

export const useFetchCourses = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch
  } = useQuery({
    queryKey: ['courses'],
    queryFn: () => fetchCourses(),
    // enabled: !!courseId,
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    cacheTime: 30 * 60 * 1000, // Cache for 30 minutes
  });

  console.log('useFetchCourses hook data:', data);
  console.log('useFetchCourses hook error:', error);

  return {
    course: data,
    isLoading,
    isError,
    error: error?.message || null,
    refetch
  };
};
