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
        fullName: 'Arjun Kumar Singh',
        email: 'arjun.singh@email.com',
        title: 'Software Engineer',
        phone: '+91 9876543210',
        address: 'Sector 14, Gurugram, Haryana 122001',
        linkedin: 'https://linkedin.com/in/arjunkumar',
        github: 'https://github.com/arjunkumar',
      },
    ],
  },

  professionalSummary: {
    id: 'professional-1',
    title: 'Professional Summary',
    items: [
      {
        id: 'ps-1',
        summary:
          'Full-stack developer with 3+ years of experience building scalable web applications using React, Node.js, and modern cloud technologies. Passionate about clean code and user experience.',
      },
    ],
  },

  experience: {
    id: 'exp-1',
    title: 'Experience',
    items: [
      {
        id: 'exp-1-1',
        company: 'TechCorp India',
        position: 'Senior Frontend Developer',
        location: 'Gurugram, Haryana',
        startDate: '2022-06',
        endDate: '',
        ongoing: true,
        link: 'https://techcorp.com',
        description:
          'Led development of customer-facing React applications serving 100K+ users. Implemented responsive designs, optimized performance by 40%, and mentored junior developers. Built reusable component library used across 5+ projects.',
      },
      {
        id: 'exp-1-2',
        company: 'StartupXYZ',
        position: 'Full Stack Developer',
        location: 'Delhi, India',
        startDate: '2021-01',
        endDate: '2022-05',
        ongoing: false,
        link: 'https://startupxyz.com',
        description:
          'Developed end-to-end web applications using MERN stack. Built REST APIs handling 10K+ daily requests, implemented authentication systems, and integrated payment gateways. Worked in agile team of 8 developers.',
      },
      {
        id: 'exp-1-3',
        company: 'InfoSys Limited',
        position: 'Software Engineer Trainee',
        location: 'Bangalore, Karnataka',
        startDate: '2020-07',
        endDate: '2020-12',
        ongoing: false,
        link: 'https://infosys.com',
        description:
          '<ul><li>Completed comprehensive <strong>6-month training program</strong> in Java, Spring Boot, and Angular</li><li>Developed internal HR tools serving <strong>500+ employees</strong></li><li>Participated in daily code reviews and followed <em>enterprise coding standards</em></li><li>Learned software development lifecycle and <strong>Agile methodologies</strong></li><li>Achieved <em>Outstanding Performance</em> rating in final assessment</li></ul>',
      },
    ],
  },

  skills: {
    id: 'skills-1',
    title: 'Skills',
    items: [
      {
        id: 'skill-1',
        name: 'JavaScript',
        category: 'Programming Languages',
        level: 'Expert',
      },
      {
        id: 'skill-2',
        name: 'TypeScript',
        category: 'Programming Languages',
        level: 'Advanced',
      },
      {
        id: 'skill-3',
        name: 'Python',
        category: 'Programming Languages',
        level: 'Intermediate',
      },
      {
        id: 'skill-4',
        name: 'React',
        category: 'Frontend',
        level: 'Expert',
      },
      {
        id: 'skill-5',
        name: 'Next.js',
        category: 'Frontend',
        level: 'Advanced',
      },
      {
        id: 'skill-6',
        name: 'Vue.js',
        category: 'Frontend',
        level: 'Intermediate',
      },
      {
        id: 'skill-7',
        name: 'Node.js',
        category: 'Backend',
        level: 'Advanced',
      },
      {
        id: 'skill-8',
        name: 'Express.js',
        category: 'Backend',
        level: 'Advanced',
      },
      {
        id: 'skill-9',
        name: 'MongoDB',
        category: 'Database',
        level: 'Advanced',
      },
      {
        id: 'skill-10',
        name: 'PostgreSQL',
        category: 'Database',
        level: 'Intermediate',
      },
      {
        id: 'skill-11',
        name: 'AWS',
        category: 'Cloud',
        level: 'Intermediate',
      },
      {
        id: 'skill-12',
        name: 'Docker',
        category: 'DevOps',
        level: 'Intermediate',
      },
    ],
  },

  projects: {
    id: 'projects-1',
    title: 'Projects',
    items: [
      {
        id: 'proj-1',
        techStack: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
        startDate: '2023-03',
        endDate: '2023-06',
        ongoing: false,
        link: 'https://github.com/arjunkumar/ecommerce-app',
        description:
          'Full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration using Razorpay. Implemented admin dashboard for inventory management and order tracking.',
      },
      {
        id: 'proj-2',
        techStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
        startDate: '2023-08',
        endDate: '',
        ongoing: true,
        link: 'https://github.com/arjunkumar/task-manager',
        description:
          'Modern task management application with real-time collaboration features. Built with server-side rendering, optimistic updates, and responsive design. Currently adding team workspace functionality.',
      },
      {
        id: 'proj-3',
        techStack: ['React', 'Firebase', 'Chart.js', 'Material-UI'],
        startDate: '2022-11',
        endDate: '2023-01',
        ongoing: false,
        link: 'https://github.com/arjunkumar/expense-tracker',
        description:
          'Personal expense tracking app with data visualization and budget alerts. Features include category-wise spending analysis, monthly reports, and cloud sync across devices.',
      },
      {
        id: 'proj-4',
        techStack: ['Vue.js', 'Python', 'FastAPI', 'SQLite'],
        startDate: '2022-05',
        endDate: '2022-08',
        ongoing: false,
        link: 'https://github.com/arjunkumar/weather-dashboard',
        description:
          'Weather dashboard with location-based forecasts and historical data analysis. Integrated multiple weather APIs and implemented caching for improved performance.',
      },
    ],
  },

  education: {
    id: 'education-1',
    title: 'Education',
    items: [
      {
        id: 'edu-1',
        degree: 'Bachelor of Technology',
        institution: 'Delhi Technological University',
        fieldOfStudy: 'Computer Science Engineering',
        startDate: '2016-08',
        endDate: '2020-06',
        grade: '8.2 CGPA',
        ongoing: false,
      },
      {
        id: 'edu-2',
        degree: 'Senior Secondary',
        institution: 'DAV Public School',
        fieldOfStudy: 'Science (PCM)',
        startDate: '2014-04',
        endDate: '2016-03',
        grade: '92%',
        ongoing: false,
      },
    ],
  },
};

export async function getResumeData(): Promise<ResumeData> {
  await sleep(100);

  return resumeData;
}

export async function getResumeSchema(): Promise<FormSchema> {
  await sleep(100);

  return data;
}
