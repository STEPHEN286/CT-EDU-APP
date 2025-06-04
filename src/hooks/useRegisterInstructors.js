const { BASE_URL } = require("@/utils/constants")
const { useMutation } = require("@tanstack/react-query")
const { default: axios } = require("axios")

const postInstructorData = async () =>{
   try {
    const response = await axios.post (`${BASE_URL}/submitapplicationapi.php`, {
        headers: {
            "Content-Type": "application/json",
        },
})
response.data
   }catch(error){
     console.log(error)
   }
}


export const usePostInstructors =() =>  {
    const {mutate, isPending, isError, error} =  useMutation ({
            mutationFn: (data) => postInstructorData(data),
            onSuccess: (response)  => {
            console.log(response)
            }
            ,
            onError: (error) =>{
                console.log(error)
            }
        })

    return {mutate,isError, error}
}