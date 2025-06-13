import axios from "axios";
// import {AUTH_BASE_URL} from "../utils/constants.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// import { useNavigate } from "react-router-dom";
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
    console.log("response on endpoint", response);
    return { data, status, message };
  } catch (error) {
    console.log("response on endpoint", error.response);
    throw new Error(error.response.data.message);
  }
};

const usePostData = (endpoint, navigateTo,) => {
   const queryClient = useQueryClient();
const {setStudent} =  useStudent()
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: (data) => postData(endpoint, data),
    onSuccess: (data) => {
      console.log("Login Success:", data);

      if (data.status === "success" && data.user) {
        setStudent(data.user);
        navigate(`${navigateTo}`, { replace: true });
      } else {
        throw new Error(data.message || "Login failed");
      }
    },
    onError: (error) => {
      console.log(error)
      queryClient.removeQueries(["user"]);
      queryClient.removeQueries(["auth"]);
    },

    retry: 3,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  
  });
  return { mutate, isPending, isError, error };
};

export default usePostData;
