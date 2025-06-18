import { BASE_URL } from "@/utils/constants";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const postCourse = async (data) => {
  try {
    // const formData = new FormData();
    
    // Add all data to FormData
   

    const response = await axios.post(
      `${BASE_URL}/course-upload`,
      data,
      {
        // headers: { "Content-Type": "multipart/form-data" },
        // timeout: 30000,
      }
    );
    
    // Check if the response contains an error
    if (response.data.error) {
      throw new Error(response.data.error);
    }
    
    // Return success response
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

export const usePostCourseUpload = () => {
  const { mutate, isPending, isError, error, isSuccess, data } = useMutation({
    mutationFn: postCourse,
    onSuccess: (response) => {
      console.log("✅ Application submitted successfully:", response);
    },
    onError: (error) => {
      console.error("❌ Application submission failed:", error.message);
    },
  });

  return { 
    mutate, 
    isPending, 
    isError, 
    error, 
    isSuccess, 
    data,
    // Helper to get error message
    errorMessage: error?.message || null,
    // Helper to get success message
    successMessage: data?.success || null
  };
};