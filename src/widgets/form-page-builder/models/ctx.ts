import { createContext, useContext } from 'react';

export const FormPageBuilderContext = createContext<{
  currentStep: string;
  setCurrentStep: React.Dispatch<React.SetStateAction<string>>;
  navs: { label: string; name: string }[];
}>({
  currentStep: '',
  setCurrentStep: () => {
    console.log('setCurrentStep');
  },
  navs: [],
});

export const FormPageBuilderProvider = FormPageBuilderContext.Provider;

export const useFormPageBuilder = () => {
  return useContext(FormPageBuilderContext);
};
