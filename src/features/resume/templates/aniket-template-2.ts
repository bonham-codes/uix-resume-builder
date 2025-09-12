const aniketTwoColumnTemplate = {
  name: 'Aniket Two Column',

  page: {
    width: 794,
    height: 1122,
    padding: 24,
    background: '#ffffff',
    className: 'text-zinc-900',
    fontFamily: 'sans-serif',
  },

  body: {
    id: 'body',
    type: 'container',
    className: 'flex flex-col gap-4',
    children: [
      // Header Section
      {
        id: 'header-section',
        type: 'container',
        className: 'flex flex-col items-center justify-center w-full',
        children: [
          {
            id: 'name-text',
            type: 'text',
            pathWithFallback: { path: 'data.name', fallback: 'Your Name' },
            className: 'tracking-wide text-3xl text-center font-bold text-indigo-700',
          },
          {
            id: 'contact-section',
            type: 'container',
            className: 'flex flex-row gap-1 items-center flex-wrap justify-center text-sm text-zinc-600',
            children: [
              { id: 'city-text', type: 'text', pathWithFallback: { path: 'data.contact.city', fallback: 'City' } },
              { type: 'seperator', variant: 'pipe' },
              { id: 'phone-text', type: 'text', pathWithFallback: { path: 'data.contact.phone', fallback: 'Phone' } },
              { type: 'seperator', variant: 'pipe' },
              {
                id: 'email-link',
                type: 'link',
                pathWithFallback: { path: 'data.contact.email', fallback: 'Email' },
                href: 'mailto:aniket@gmail.com',
              },
              { type: 'seperator', variant: 'pipe' },
              {
                id: 'linkedin-text',
                type: 'link',
                pathWithFallback: { path: 'data.contact.linkedin', fallback: 'LinkedIn' },
                href: 'https://www.linkedin.com/in/aniket98/',
              },
            ],
          },
        ],
      },

      // Two Columns
      // {
      //   id: 'columns-section',
      //   type: 'container',
      //   className: 'flex flex-row gap-6 w-full',
      //   children: [
      //     // LEFT COLUMN
      //     {
      //       id: 'left-column',
      //       type: 'container',
      //       className: 'flex flex-col w-1/3 gap-4 bg-zinc-50 p-3 rounded-xl shadow-sm',
      //       children: [
      //         {
      //           id: 'summary-section',
      //           type: 'container',
      //           className: 'flex flex-col',
      //           children: [
      //             {
      //               id: 'summary-heading',
      //               type: 'text',
      //               pathWithFallback: { path: 'data.summary.heading' },
      //               className: 'text-indigo-600 font-semibold text-sm border-b border-indigo-200 pb-0.5',
      //             },
      //             {
      //               id: 'summary-text',
      //               type: 'text',
      //               pathWithFallback: { path: 'data.summary.text' },
      //               className: 'text-zinc-700 text-xs text-justify mt-1',
      //             },
      //           ],
      //         },

      //         {
      //           id: 'skills-section',
      //           type: 'container',
      //           className: 'flex flex-col',
      //           children: [
      //             {
      //               id: 'skills-heading',
      //               type: 'text',
      //               pathWithFallback: { path: 'data.skills.heading' },
      //               className: 'text-indigo-600 font-semibold text-sm border-b border-indigo-200 pb-0.5',
      //             },
      //             {
      //               type: 'list',
      //               id: 'skills',
      //               pathWithFallback: { path: 'data.skills.list' },
      //               className: 'flex flex-col gap-1 mt-1',
      //               presentation: [
      //                 {
      //                   type: 'container',
      //                   id: 'skill',
      //                   className: 'flex flex-row gap-1',
      //                   children: [
      //                     {
      //                       id: 'skill-value',
      //                       type: 'list',
      //                       className: 'flex flex-row flex-wrap gap-0.5',
      //                       pathWithFallback: { path: 'data.value' },
      //                       presentation: [
      //                         {
      //                           id: 'skill-value-item',
      //                           type: 'text',
      //                           className:
      //                             'text-zinc-700 text-xs whitespace-pre before:content-["•"] before:mr-1 before:text-indigo-500',
      //                         },
      //                       ],
      //                     },
      //                   ],
      //                 },
      //               ],
      //             },
      //           ],
      //         },

      //         {
      //           id: 'education-section',
      //           type: 'container',
      //           className: 'flex flex-col',
      //           children: [
      //             {
      //               id: 'education-heading',
      //               type: 'text',
      //               pathWithFallback: { path: 'data.education.heading' },
      //               className: 'text-indigo-600 font-semibold text-sm border-b border-indigo-200 pb-0.5',
      //             },
      //             {
      //               id: 'education',
      //               type: 'list',
      //               pathWithFallback: { path: 'data.education.list' },
      //               className: 'flex flex-col mt-1 gap-2',
      //               presentation: [
      //                 {
      //                   type: 'container',
      //                   id: 'education-item',
      //                   className: 'flex flex-col',
      //                   children: [
      //                     {
      //                       id: 'education-school',
      //                       type: 'text',
      //                       pathWithFallback: { path: 'data.school' },
      //                       className: 'text-zinc-800 text-sm font-medium',
      //                     },
      //                     {
      //                       id: 'education-degree',
      //                       type: 'text',
      //                       pathWithFallback: { path: 'data.degree' },
      //                       className: 'text-zinc-600 text-xs italic',
      //                     },
      //                     {
      //                       id: 'education-period',
      //                       type: 'text',
      //                       pathWithFallback: { path: 'data.period' },
      //                       className: 'text-zinc-500 text-xs',
      //                     },
      //                     {
      //                       id: 'education-grade',
      //                       type: 'text',
      //                       pathWithFallback: { path: 'data.grade' },
      //                       className: 'text-zinc-500 text-xs italic',
      //                     },
      //                   ],
      //                 },
      //               ],
      //             },
      //           ],
      //         },
      //       ],
      //     },

      //     // RIGHT COLUMN
      //     {
      //       id: 'right-column',
      //       type: 'container',
      //       className: 'flex flex-col w-2/3 gap-4',
      //       children: [
      //         {
      //           id: 'experience-section',
      //           type: 'container',
      //           className: 'flex flex-col',
      //           children: [
      //             {
      //               id: 'experience-heading',
      //               type: 'text',
      //               pathWithFallback: { path: 'data.experience.heading' },
      //               className: 'text-indigo-600 font-semibold text-sm border-b border-indigo-200 pb-0.5',
      //             },
      //             {
      //               id: 'experience',
      //               type: 'list',
      //               pathWithFallback: { path: 'data.experience.list' },
      //               className: 'flex flex-col mt-1',
      //               presentation: [
      //                 {
      //                   type: 'container',
      //                   id: 'experience-item',
      //                   className: 'flex flex-row justify-between items-center',
      //                   children: [
      //                     {
      //                       id: 'experience-company',
      //                       type: 'text',
      //                       pathWithFallback: { path: 'data.company' },
      //                       className: 'text-zinc-800 text-sm font-medium',
      //                     },
      //                     {
      //                       id: 'experience-period',
      //                       type: 'text',
      //                       pathWithFallback: { path: 'data.period' },
      //                       className: 'text-zinc-500 text-xs',
      //                     },
      //                   ],
      //                 },
      //                 {
      //                   type: 'container',
      //                   id: 'company-location-period',
      //                   className: 'flex flex-row justify-between items-center',
      //                   children: [
      //                     {
      //                       id: 'experience-role',
      //                       type: 'text',
      //                       pathWithFallback: { path: 'data.role' },
      //                       className: 'text-zinc-600 text-xs italic',
      //                     },
      //                     {
      //                       id: 'experience-location',
      //                       type: 'text',
      //                       pathWithFallback: { path: 'data.location' },
      //                       className: 'text-zinc-500 text-xs italic',
      //                     },
      //                   ],
      //                 },
      //                 {
      //                   id: 'experience-bullets',
      //                   type: 'list',
      //                   pathWithFallback: { path: 'data.bullets' },
      //                   className: 'flex flex-col mb-4 mt-1.5 gap-1',
      //                   presentation: [
      //                     {
      //                       type: 'text',
      //                       className:
      //                         'text-zinc-700 text-xs text-justify before:content-["▹"] before:mr-1 before:text-indigo-500',
      //                     },
      //                   ],
      //                 },
      //               ],
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },
    ],
  },
};

export default aniketTwoColumnTemplate;
