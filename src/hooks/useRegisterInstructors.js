import { BASE_URL } from "@/utils/constants";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const postInstructorData = async (data) => {
  try {
    const formData = new FormData();
    
    // Add all data to FormData
    Object.entries(data).forEach(([key, value]) => {
      if (value instanceof File) {
        formData.append(key, value);
      } else if (Array.isArray(value)) {
        // Handle arrays properly for PHP - convert to comma-separated values
        formData.append(key, value.join(','));
      } else if (typeof value === 'object' && value !== null) {
        formData.append(key, JSON.stringify(value));
      } else if (value != null) {
        formData.append(key, String(value));
      }
    });

    const response = await axios.post(
      `${BASE_URL}/submitapplicationapi.php`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
        timeout: 30000,
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

export const usePostInstructors = () => {
  const { mutate, isPending, isError, error, isSuccess, data } = useMutation({
    mutationFn: postInstructorData,
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