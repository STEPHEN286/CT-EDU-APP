import axios from "axios";
// import {AUTH_BASE_URL} from "../utils/constants.jsx";
import { useMutation } from "@tanstack/react-query";

// import { useNavigate } from "react-router-dom";
import { BASE_URL } from "@/utils/constants";
import { useNavigate } from "react-router-dom";


const postData = async(endpoint, loginData) => {
    try {
        const response = await axios.post(`${BASE_URL}/${endpoint}`, loginData, {
            headers: {
                "Content-Type": "application/json",
            },
    });

    const {data, status, message } = response
        console.log( "response on endpoint", response);
        return {data, status, message};
    } catch (error) {
        console.log( "response on endpoint", error.response);
        throw new Error(error.response.data.message);
      
    }
};


const usePostData = (endpoint, navigateTo, isLoginData=false) => {
    // const dispatch = useDispatch();
    const navigate = useNavigate()
   
    const {mutate, isPending, isError, error} = useMutation({
        mutationFn: (data) => postData(endpoint, data),
        onSuccess: (response) => {

        
            if (response?.status === 200 && isLoginData) {
                sessionStorage.setItem("session", JSON.stringify(response.data));
            }
            
           
                    
                  
                  
            navigate(navigateTo)
                
            }
            ,
            
            
        
        onError: (error) => {
            // console.log("❌ Error:",error.message );
            throw new Error(error.message);
        }
    });
    return {mutate, isPending, isError, error};
};

export default usePostData;


