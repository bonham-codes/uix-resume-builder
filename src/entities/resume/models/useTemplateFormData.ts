import { useFetch } from '@/shared/api/hooks/useFetch';

import { getResumeData, getResumeSchema } from '../api';
import type { FormSchema, ResumeData } from '../types';

export function useTemplateFormSchema() {
  return useFetch<FormSchema, Error, FormSchema>({
    queryKey: ['resume-schema'],
    queryFn: getResumeSchema,
    select: (data) => {
      return data;
    },
  });
}

export function useTemplateFormData(id: string = 'e70de270-5e70-4ce7-8527-a66d17ca8b3a') {
  return useFetch<ResumeData, Error, ResumeData>({
    queryKey: ['resume-data'],
    queryFn: () => getResumeData(id),
  });
}
