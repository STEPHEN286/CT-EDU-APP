import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "@/utils/constants";

const fetchCourses = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/categories/get-categories`, {
            headers: {
                "Content-Type": "application/json",
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

const fetchModules = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/modules`, {
            headers: {
                "Content-Type": "application/json",
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// GET COURSES
export function useFetchCoursesCategories() {
    const query = useQuery({
        queryKey: ["courseCategories"],
        queryFn: () => fetchCourses(),
        retry: 1,
        staleTime: 300000,
    });

    const { data, error, isLoading, isError } = query;
    if (isError) {
        console.error("Error fetching data:", error);
    }
    return { data, error, isLoading };
}


// GET MODULES

export function useFetchModules() {
    const query = useQuery({
        queryKey: ["modules"],
        queryFn: () => fetchModules(),
        retry: 1,
        staleTime: 300000,
    });

    const { data, error, isLoading, isError } = query;
    if (isError) {
        console.error("Error fetching modules:", error);
    }
    return { data, error, isLoading };
}

// POST course


// POST MODULE 


// POST COURSE HOOK


// POST MODULE HOOK
