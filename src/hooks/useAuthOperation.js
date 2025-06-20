import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { BASE_URL } from "@/utils/constants";
import { useStudent } from "./useStudentAuth";

const postData = async (endpoint, data) => {
  
  try {
    const response = await axios.post(`${BASE_URL}/${endpoint}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { data: responseData, status, message } = response;
    return { data: responseData, status, message };
  } catch (error) {
    console.log("response on endpoint", error.response);
    throw new Error(error.response.data.message);
  }
};

const usePostData = (endpoint, navigateTo, isLoginData = false) => {
  const {setStudent} = useStudent()
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: (data) => postData(endpoint, data),
    onSuccess: (res) => {
      console.log("Success response:", res);
      
      if (res?.status === 200 && isLoginData) {
        
        setStudent (res.data.user)
        localStorage.setItem("sessionIdentifier", res.data.token)
        navigate(navigateTo, { replace: true });
      }
    
      if (res.data.redirectTo && res.status === 200) {
        sessionStorage.setItem("email", res.data.email);
        navigate(res.data.redirectTo, { replace: true });
      }
    },
    onError: (error) => {
      console.log("Mutation error:", error);
    },
  });

  return {
    mutate,
    isPending, 
    isError,
    error,
  };
};

const useResendEmail = () => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: (email) => postData("auth/resend-verification", { email }),
    onSuccess: () => {
      console.log("Verification email resent successfully");
    },
    onError: (error) => {
      console.log("Failed to resend verification email:", error);
    }
  });

  return {
    resendEmail: mutate,
    isResending: isPending,
    resendError: error,
    hasResendError: isError
  };
};

export { usePostData as default, useResendEmail };