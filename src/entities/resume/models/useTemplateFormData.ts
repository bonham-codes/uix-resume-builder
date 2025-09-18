import { useFetch } from '@/shared/api/hooks/useFetch';

import { getResumeData, getResumeSchema } from '../api';
import type { FormSchema, ResumeData, TransformedResumeData } from '../types';

function transformPersonalDetails(data: ResumeData['personalDetails']): TransformedResumeData['personalDetails'] {
  return {
    name: data.items[0].fullName,
    title: data.items[0].title,
    email: data.items[0].email,
    phone: data.items[0].phone,
    address: data.items[0].address,
    linkedin: data.items[0].linkedin,
    github: data.items[0].github,
  };
}

function transformProfessionalSummary(
  data: ResumeData['professionalSummary'],
): TransformedResumeData['professionalSummary'] {
  return {
    heading: data.title,
    description: data.items[0].summary,
  };
}

function transformSkills(data: ResumeData['skills']): TransformedResumeData['skills'] {
  const list = data.items.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = { label: item.category, value: [] };
      }

      acc[item.category].value.push(item.name);

      return acc;
    },
    {} as Record<string, { label: string; value: string[] }>,
  );

  return {
    heading: data.title,
    list: Object.values(list),
  };
}

function transformExperience(data: ResumeData['experience']): TransformedResumeData['experience'] {
  return {
    heading: data.title,
    list: data.items,
  };
}

function transformEducation(data: ResumeData['education']): TransformedResumeData['education'] {
  return {
    heading: data.title,
    list: data.items,
  };
}

export function transformResumeData(data: ResumeData): TransformedResumeData {
  return {
    personalDetails: transformPersonalDetails(data.personalDetails),
    professionalSummary: transformProfessionalSummary(data.professionalSummary),
    skills: transformSkills(data.skills),
    experience: transformExperience(data.experience),
    education: transformEducation(data.education),
    templateId: data.templateId,
  };
}

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
  return useFetch<ResumeData, Error, TransformedResumeData>({
    queryKey: ['resume-data'],
    queryFn: () => getResumeData(id),
    select: (data) => {
      return transformResumeData(data);
    },
  });
}
