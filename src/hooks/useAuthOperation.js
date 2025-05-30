import axios from "axios";
// import {AUTH_BASE_URL} from "../utils/constants.jsx";
import { useMutation } from "@tanstack/react-query";

// import { useNavigate } from "react-router-dom";
import { BASE_URL } from "@/utils/constants";


const postData = async(endpoint, loginData) => {
    try {
        const response = await axios.post(`${BASE_URL}/${endpoint}`, loginData, {
            headers: {
                "Content-Type": "application/json",
            },
    });

    const {data, status, } = response
        console.log( "response on endpoint", response);
        return {data, status};
    } catch (error) {
        throw new Error(error.response.data.error);
      
    }
};


const usePostData = (endpoint) => {
    // const dispatch = useDispatch();
    // const navigate = useNavigate()
   
    const {mutate, isPending, isError, error} = useMutation({
        mutationFn: (data) => postData(endpoint, data),
        onSuccess: (response) => {

        console.log(response)
            // if(response?.status === 200){
            //    const { session} = response.data;
              
            //     if ( session !== null) {
            //         localStorage.setItem("session",session.access_token);
            //       }
                  
                
            // }
            
            
            // navigate(navigateTo)
            // if (response.data.session === "null") {
            //     navigate(navigateTo)
            //     dispatch(toggleIsCreated());
            // }
        },
        onError: (error) => {
            // console.log("❌ Error:", error);
            throw new Error(error.response.data.error);
        }
    });
    return {mutate, isPending, isError, error};
};

export default usePostData;


