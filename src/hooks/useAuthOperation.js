import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BASE_URL } from "@/utils/constants";
import { useNavigate } from "react-router-dom";
import { useStudent } from "./useStudentAuth";

const postData = async (endpoint, loginData) => {
  try {
    const response = await axios.post(`${BASE_URL}/${endpoint}`, loginData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { data, status, message } = response;
    // console.log("response on endpoint", response);
    return { data, status, message };
  } catch (error) {
    console.log("response on endpoint", error.response);
    throw new Error(error.response.data.message);
  }
};

const usePostData = (endpoint, navigateTo, isLoginData = false) => {
  const queryClient = useQueryClient();
  // const { setStudent } = useStudent();
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: (data) => postData(endpoint, data),
    onSuccess: (res) => {
      console.log("Success response:", res);
      



      
      if (res?.status === 200 && isLoginData) {
        sessionStorage.setItem("session", JSON.stringify(res.data));
    }
    
   
            
          
          
    navigate(navigateTo)
      // Adjust this based on your actual API response structure
      // Option 1: If your API returns { success: true, data: { user: {...} } }
      // if (res.status === 200 && isLoginData && res.data?.user) {
      //   console.log("Setting user data:", res.data.user);
      //   setStudent(res.data.user);
      // }
      
      // Option 2: If your API returns { data: { user: {...} }, status: 200 }
      // if (res.status === 200 && isLoginData && res.data?.user) {
      //   console.log("Setting user data:", res.data.user);
      //   setStudent(res.data.user);
      // }
      
      // Option 3: If the user data is directly in the response
      // if (isLoginData && res.user) {
      //   console.log("Setting user data:", res.user);
      //   setStudent(res.user);
      // }
      
      navigate(navigateTo, { replace: true });
    },
    onError: (error) => {
      console.log("Mutation error:", error);
      // queryClient.removeQueries(["student"]);
      // queryClient.removeQueries(["studentAuth"]);
    },
  });

  return {
    mutate,
    isPending,
    isError,
    error,
  };
};

export default usePostData;
