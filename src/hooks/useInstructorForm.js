import { FormContext } from "@/context/FormContext";
import { useContext } from "react";

export function useInstructorForm() {
    const context = useContext(FormContext);
    if (!context) {
      throw new Error('useInstructorForm must be used within an InstructorFormProvider');
    }
    return context;
  }