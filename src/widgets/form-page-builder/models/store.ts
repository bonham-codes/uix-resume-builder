import { create } from 'zustand';

export const useFormDataStore = create<{
  formData: any;
  setFormData: (formData: any) => void;
}>((set) => ({
  formData: {},
  setFormData: (formData: any) => set({ formData }),
}));
