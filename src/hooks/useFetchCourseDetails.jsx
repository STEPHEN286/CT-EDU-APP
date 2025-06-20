import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "@/utils/constants";

// Minimal fetcher function
const fetchCourseDetails = async (courseId) => {
  const response = await axios.get(`${BASE_URL}/courses/course-details/${courseId}`);
  return response.data;
};

export const useFetchCourseDetails = (courseId) => {
  const query = useQuery({
    queryKey: ["course-details", courseId],
    queryFn: () => fetchCourseDetails(courseId),
    enabled: !!courseId,
    staleTime: 5 * 60 * 1000,
    cacheTime: 30 * 60 * 1000,
    onError: (err) => {
      console.error("useFetchCourseDetails → API Error:", err);
    },
  });

  return {
    courseDetails: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error?.message || null,
    refetch: query.refetch,
  };
};
