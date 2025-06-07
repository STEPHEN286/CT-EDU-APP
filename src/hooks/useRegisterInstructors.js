import { BASE_URL } from "@/utils/constants"; 
import { useMutation } from "@tanstack/react-query"; 
import axios from "axios"; 
 
const postInstructorData = async (data) => { 
  try { 
    const formData = new FormData(); 
     
    // Properly handle all data types including Files and arrays
    for (const key in data) { 
      const value = data[key]; 
       
      if (value instanceof File) { 
        // Handle File objects 
        formData.append(key, value); 
      } else if (Array.isArray(value)) {
        // Handle arrays - append each item or as JSON string
        if (value.length > 0) {
          // Option 1: Append as JSON string
          formData.append(key, JSON.stringify(value));
          
          // Option 2: Append each item separately (uncomment if your API expects this)
          // value.forEach((item, index) => {
          //   formData.append(`${key}[${index}]`, String(item));
          // });
        } else {
          formData.append(key, '[]'); // Empty array
        }
      } else if (typeof value === 'object' && value !== null) {
        // Handle objects (convert to JSON string)
        formData.append(key, JSON.stringify(value));
      } else if (value !== null && value !== undefined) { 
        // Handle primitive values
        formData.append(key, String(value)); 
      } 
    } 
     
    // Log FormData contents for debugging 
    console.log("FormData contents:"); 
    for (let [key, value] of formData.entries()) { 
      console.log(key, value instanceof File ? `File: ${value.name}` : value); 
    } 
     
    const response = await axios.post( 
      `${BASE_URL}/submitapplicationapi.php`, 
      formData, 
      { 
        headers: { 
          "Content-Type": "multipart/form-data", 
        },
        timeout: 30000, // 30 second timeout for large file uploads
      } 
    ); 
     
    console.log("API Response:", response.data); 
    return response.data; 
  } catch (error) { 
    console.error("API Error:", error); 
    if (error.response) { 
      console.error("Error Response:", error.response.data); 
      console.error("Error Status:", error.response.status);
      console.error("Error Headers:", error.response.headers); 
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error setting up request:", error.message);
    }
    throw error; 
  } 
}; 
 
export const usePostInstructors = () => { 
  const { 
    mutate, 
    isPending, 
    isError, 
    error, 
    isSuccess,
    data
  } = useMutation({ 
    mutationFn: (data) => postInstructorData(data), 
    onSuccess: (response) => { 
      console.log("Success:", response); 
      // You might want to show a success message or redirect here 
    }, 
    onError: (error) => { 
      console.error("Mutation Error:", error); 
      // Handle error state 
    }, 
  }); 
 
  return { mutate, isError, error, isPending, isSuccess, data }; 
};