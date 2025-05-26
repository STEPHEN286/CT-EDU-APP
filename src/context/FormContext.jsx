import { FormProvider, useForm } from "react-hook-form";
import { createContext, useContext } from "react";

// Create a form context to share form state across steps
export const FormContext = createContext();

// Create a provider component
export function InstructorFormProvider({ children }) {
  const methods = useForm({
    defaultValues: {
      // Personal Info
      fullName: '',
      email: '',
      professionalTitle: '',
      fieldOfExpertise: '',
      bio: '',
      profilePhoto: null,
      
      // Teaching Experience
      yearsOfExperience: '',
      previousRoles: '',
      certifications: [],
      
      // Course Proposal
      courseTitle: '',
      courseDescription: '',
      targetAudience: '',
      prerequisites: '',
      
      // Video Agreement
      agreementAccepted: false
    }
  });

  return (
    <FormContext.Provider value={methods}>
      <FormProvider {...methods}>
        {children}
      </FormProvider>
    </FormContext.Provider>
  );
}

export function useInstructorForm() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useInstructorForm must be used within an InstructorFormProvider');
  }
  return context;
}