import { sleep } from '@/shared/lib/sleep';

import type { FormSchema, ResumeData } from '../types';
import { fetch } from '@shared/api';

const data = {
  personalDetails: {
    label: 'Personal Details',
    subTitle: 'Users who added phone number and email received 64% more positive feedback from recruiters.',
    heading: {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      placeholder: 'Enter your heading',
      required: true,
    },

    fullName: {
      name: 'fullName',
      type: 'text',
      label: 'Name',
      placeholder: 'Enter your name',
      required: true,
    },
    title: {
      name: 'title',
      type: 'text',
      label: 'Title',
      placeholder: 'Enter your title',
      required: true,
    },
    email: {
      name: 'email',
      type: 'email',
      label: 'Email',
      placeholder: 'Enter your email',
      required: true,
    },
    phone: {
      name: 'phone',
      type: 'tel',
      label: 'Phone',
      placeholder: 'Enter your phone number',
      required: true,
    },
    address: {
      name: 'address',
      type: 'text',
      label: 'Address',
      placeholder: 'Enter your address',
      required: true,
    },
    linkedin: {
      name: 'linkedin',
      type: 'url',
      label: 'LinkedIn',
      placeholder: 'Enter your LinkedIn profile URL',
      fluid: true,
      required: true,
    },
    github: {
      name: 'github',
      type: 'url',
      label: 'GitHub',
      placeholder: 'Enter your GitHub profile URL',
      fluid: true,
      required: true,
    },
  },
  professionalSummary: {
    label: 'Professional Summary',
    subTitle:
      'Write 2-4 short, energetic sentences about how great you are. Mention the role and what you did. What were the big achievements? Describe your motivation and list your skills.',
    heading: {
      name: 'heading',
      type: 'text',
      placeholder: 'Enter your heading',
      label: 'Heading',
      required: true,
      fluid: true,
    },
    summary: {
      name: 'summary',
      type: 'textarea',
      placeholder: 'Enter your summary',
      label: 'Summary',
      required: true,
      fluid: true,
    },
  },
  experience: {
    label: 'Experience',
    subTitle:
      'Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z).',
    title: {
      name: 'title',
      type: 'text',
      placeholder: 'Enter your heading',
      label: 'Title',
      required: true,
      fluid: true,
    },

    itemsType: 'draggable',

    collapsedState: {
      titleKey: 'company',
      subTitleKey: 'startDate',
    },

    company: {
      name: 'company',
      type: 'text',
      placeholder: 'Enter your company',
      required: true,
      label: 'Company',
    },

    position: {
      name: 'position',
      type: 'text',
      placeholder: 'Enter your position',
      required: true,
      label: 'Position',
    },

    location: {
      name: 'location',
      type: 'text',
      placeholder: 'Enter your location',
      required: true,
      label: 'Location',
    },

    startDate: {
      name: 'startDate',
      type: 'text',
      placeholder: 'Enter your start date',
      required: true,
      label: 'Start Date',
    },

    description: {
      name: 'description',
      type: 'textarea',
      placeholder: 'Enter your description',
      required: true,
      label: 'Description',
      fluid: true,
    },
  },
  // skills: {
  //   label: 'Skills',
  //   description: 'Enter your skills',
  //   heading: {
  //     name: 'heading',
  //     type: 'text',
  //     placeholder: 'Enter your heading',
  //     required: true,
  //   },
  //   items: {
  //     name: 'items',
  //     type: 'draggable',
  //   },
  //   skill: {
  //     name: 'skill',
  //     type: 'text',
  //     placeholder: 'Enter your skill',
  //     required: true,
  //   },
  // },
  education: {
    label: 'Education',
    subTitle:
      'A varied education on your resume sums up the value that your learnings and background will bring to job.',
    heading: {
      name: 'heading',
      type: 'text',
      placeholder: 'Enter your heading',
      label: 'Heading',
      required: true,
      fluid: true,
    },

    itemsType: 'draggable',

    fluid: true,
    collapsedState: {
      titleKey: 'degree',
      subTitleKey: 'startDate',
    },

    institution: {
      name: 'institution',
      type: 'text',
      placeholder: 'Enter your school',
      required: true,
      label: 'School',
    },

    degree: {
      name: 'degree',
      type: 'text',
      placeholder: 'Enter your degree',
      required: true,
      label: 'Degree',
    },

    startDate: {
      name: 'startDate',
      type: 'text',
      placeholder: 'Enter your start date',
      required: true,
      label: 'Start Date',
    },

    fieldOfStudy: {
      name: 'fieldOfStudy',
      type: 'text',
      placeholder: 'Enter your field of study',
      required: true,
      label: 'Field of Study',
    },

    grade: {
      name: 'grade',
      type: 'text',
      placeholder: 'Enter your grade',
      required: true,
      label: 'Grade',
    },
  },
};

export async function getResumeData(id: string): Promise<ResumeData> {
  const data = await fetch<ResumeData>(`resume/${id}`);

  if (data.personalDetails.items.length === 0) {
    data.personalDetails.items.push({
      id: 'pd-1',
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      title: 'Engineer',
      phone: '1234567890',
      address: '123 Main St, Anytown, USA',
      linkedin: 'https://www.linkedin.com/in/john-doe',
      github: '',
    });
  }

  // if (data.professionalSummary.items.length === 0) {
  //   data.professionalSummary.items.push({
  //     id: 'ps-1',
  //     summary: '',
  //   });
  // }

  data.professionalSummary = {
    id: 'professional-1',
    title: 'Professional Summary',
    items: [
      {
        id: 'ps-1',
        summary: 'I am a software engineer with 10 years of experience in the industry.',
      },
    ],
  };

  if (data.experience.items.length === 0) {
    data.experience.items.push({
      id: 'exp-1-1',
      company: 'Google',
      position: 'Software Engineer',
      location: 'San Francisco, CA',
      startDate: '',
      endDate: '2024-01-01',
      ongoing: true,
      link: 'https://www.google.com',
      description: 'qweqwe',
    });
  }

  if (data.skills.items.length === 0) {
    data.skills.items.push({
      id: 'skill-1',
      name: 'JavaScript',
      category: 'Programming Languages',
      level: 'Expert',
    });
  }

  if (data.education.items.length === 0) {
    data.education.items.push({
      id: 'edu-1',
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Harvard University',
      fieldOfStudy: 'Computer Science',
      startDate: '',
      endDate: '2024-01-01',
      grade: 'A',
      ongoing: true,
    });
  }

  return data;
}

export async function getResumeSchema(): Promise<FormSchema> {
  return data;
}

export async function getResumeTemplate(id: string): Promise<JSON> {
  const data = await fetch(`template/${id}`);

  return data.json();
}

export async function saveFormData<T extends keyof ResumeData>(type: T, data: ResumeData[T]): Promise<any> {
  // const response = await fetch('resume/save', {
  //   options: {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //   },
  // });
}
