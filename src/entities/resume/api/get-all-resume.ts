import { useQuery } from '@tanstack/react-query';

export interface ResumeItem {
  id: string;
  createdAt: string;
  updatedAt: string;
  deleted_at: string | null;
  resumeId: string;
  sectionType: 'personal_info' | 'education' | 'skills' | 'experience' | 'projects' | 'certifications' | 'publications' | 'achievements' | 'interests';
  sectionId: string;
  rank: number;
}

export interface Resume {
  id: string;
  createdAt: string;
  updatedAt: string;
  deleted_at: string | null;
  userId: string;
  templateId: string | null;
  title: string;
  items: ResumeItem[];
  template: any | null; 
}

export type GetAllResumesResponse = Resume[];

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;


export const fetchAllResumes = async (userId: string): Promise<GetAllResumesResponse> => {
  if (!userId) {
    throw new Error('User ID is required');
  }

  const response = await fetch(`${BACKEND_URL}/resume/${userId}/getAll`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });

  if (!response.ok) {
    const errorData = await response.text();
    throw new Error(`Failed to fetch resumes: ${response.status} ${response.statusText} - ${errorData}`);
  }

  const data = await response.json();
  return data;
};

export const useGetAllResumes = (
  userId: string | null,
  options?: {
    enabled?: boolean;
    staleTime?: number;
    cacheTime?: number;
  }
) => {
  return useQuery({
    queryKey: ['resumes', userId],
    queryFn: () => fetchAllResumes(userId as string),
    enabled: !!userId && (options?.enabled ?? true),
    staleTime: options?.staleTime ?? 5 * 60 * 1000, 
  });
};
