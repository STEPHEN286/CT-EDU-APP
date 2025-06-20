import { BASE_URL } from "@/utils/constants";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

// 
const postCourse = async (data) => {
  console.log("formData to send", data);
  const formData = new FormData();
  
  console.log("Sending formData:");
  for (let [key, value] of formData.entries()) {
    console.log(`${key}:`, value);
  }
  // Append top-level fields
  formData.append("title", data.title);
  formData.append("description", data.description ?? "");
  formData.append("category_id", data.category_id);
  formData.append("instructor_id", data.instructor_id);

  // Clean sections and prepare file field names
  const cleanSections = data.sections.map((section, sectionIndex) => {
    const lectures = section.lectures.map((lecture, lectureIndex) => {
      const fieldName = `file-${sectionIndex}-${lectureIndex}`;

      if (lecture.file instanceof File) {
        formData.append(fieldName, lecture.file); // ✅ append file
      }

      return {
        title: lecture.title,
        lecture_type: lecture.type,
        fileFieldName: fieldName,
      };
    });

    return {
      title: section.title,
      description: section.description ?? "",
      lectures,
    };
  });

  // Append cleaned JSON
  formData.append("sections", JSON.stringify(cleanSections)); 

  const response = await axios.post(`${BASE_URL}/courses/upload-course`, formData, {
    // timeout: 600000,
  });

  return response.data;
};



export const usePostCourseUpload = () => {
  const { mutate, isPending, isError, error, isSuccess, data } = useMutation({
    mutationFn: postCourse,
    onSuccess: (response) => {
      console.log(" Application submitted successfully:", response);
    },
    onError: (error) => {
      console.error(" Application submission failed:", error.message);
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