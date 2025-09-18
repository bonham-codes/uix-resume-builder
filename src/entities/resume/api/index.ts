import { sleep } from '@/shared/lib/sleep';

import type { FormSchema, ResumeData } from '../types';

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
    name: {
      name: 'name',
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
    description: {
      name: 'description',
      type: 'textarea',
      placeholder: 'Enter your summary',
      label: 'Description',
      required: true,
      fluid: true,
    },
  },
  experience: {
    label: 'Experience',
    subTitle:
      'Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z).',
    heading: {
      name: 'heading',
      type: 'text',
      placeholder: 'Enter your heading',
      label: 'Heading',
      required: true,
      fluid: true,
    },
    list: {
      name: 'list',
      type: 'draggable',
      fluid: true,
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

    list: {
      name: 'list',
      type: 'draggable',
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

      location: {
        name: 'location',
        type: 'text',
        placeholder: 'Enter your city',
        required: true,
        label: 'City',
      },

      fieldOfStudy: {
        name: 'fieldOfStudy',
        type: 'text',
        placeholder: 'Enter your field of study',
        required: true,
        label: 'Field of Study',
      },
    },
  },
};

const resumeData = {
  personalDetails: {
    id: 'personal-1',
    title: 'Personal Details',
    items: [
      {
        id: 'pd-1',
        fullName: '',
        email: '',
        title: '',
        phone: '',
        address: '',
        linkedin: '',
        github: '',
      },
    ],
  },

  professionalSummary: {
    id: 'professional-1',
    title: 'Professional Summary',
    items: [
      {
        id: 'ps-1',
        summary: '',
      },
    ],
  },

  experience: {
    id: 'exp-1',
    title: 'Experience',
    items: [
      {
        id: 'exp-1-1',
        company: '',
        position: '',
        location: '',
        startDate: '',
        endDate: '',
        ongoing: true,
        link: '',
        description: '',
      },
    ],
  },

  skills: {
    id: 'skills-1',
    title: 'Skills',
    items: [
      {
        id: 'skill-1',
        name: '',
        category: 'Programming Languages',
        level: 'Expert',
      },
    ],
  },

  education: {
    id: 'education-1',
    title: 'Education',
    items: [
      {
        id: 'edu-1',
        degree: '',
        institution: '',
        fieldOfStudy: '',
        startDate: '',
        endDate: '',
        grade: '',
        ongoing: false,
      },
    ],
  },
};

export async function getResumeData(id: string): Promise<ResumeData> {
  const data = await fetch(`http://localhost:3002/resume/${id}`);
  const json = await data.json();

  if (json) {
    if (json.personalDetails.items.length === 0) {
      json.personalDetails.items.push({
        id: 'pd-1',
        fullName: '',
        email: '',
        title: '',
        phone: '',
        address: '',
        linkedin: '',
        github: '',
      });
    }

    if (json.professionalSummary.items.length === 0) {
      json.professionalSummary.items.push({
        id: 'ps-1',
        summary: '',
      });
    }

    if (json.experience.items.length === 0) {
      json.experience.items.push({
        id: 'exp-1-1',
        company: '',
        position: '',
        location: '',
        startDate: '',
        endDate: '',
        ongoing: true,
        link: '',
        description: '',
      });
    }

    if (json.skills.items.length === 0) {
      json.skills.items.push({
        id: 'skill-1',
        name: '',
        category: 'Programming Languages',
        level: 'Expert',
      });
    }

    if (json.education.items.length === 0) {
      json.education.items.push({
        id: 'edu-1',
        degree: '',
        institution: '',
        fieldOfStudy: '',
        startDate: '',
        endDate: '',
        grade: '',
        ongoing: false,
      });
    }
  }

  console.log(data);

  return data.json();
}

export async function getResumeSchema(): Promise<FormSchema> {
  return data;
}

export async function getResumeTemplate(id: string): Promise<JSON> {
  const data = await fetch(`/template/${id}`);

  return data.json();
}
