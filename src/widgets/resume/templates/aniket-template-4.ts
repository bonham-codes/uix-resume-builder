const aniketTwoColumnTemplate = {
  name: 'Aniket Two Column',

  page: {
    padding: 0,
    background: '#ffffff',
    className: 'text-zinc-900 font-sans',
  },

  body: {
    id: 'body',
    type: 'container',
    className: 'grid grid-cols-3 min-h-screen',
    children: [
      // LEFT SIDEBAR
      {
        id: 'sidebar',
        type: 'container',
        className: 'col-span-1 bg-indigo-50 p-6 flex flex-col gap-6',
        children: [
          {
            id: 'profile',
            type: 'container',
            className: 'flex flex-col items-center text-center gap-2',
            children: [
              {
                id: 'name',
                type: 'text',
                pathWithFallback: { path: 'data.name', fallback: 'Your Name' },
                className: 'text-xl font-bold text-indigo-700',
              },
              {
                id: 'title',
                type: 'text',
                pathWithFallback: { path: 'data.title', fallback: 'Your Title' },
                className: 'text-sm font-medium text-zinc-600',
              },
            ],
          },

          //   // CONTACT
          {
            id: 'contact',
            type: 'container',
            className: 'flex flex-col gap-2 text-sm text-zinc-700',
            children: [
              { id: 'phone', type: 'text', pathWithFallback: { path: 'data.contact.phone', fallback: 'Phone' } },
              { id: 'email', type: 'link', pathWithFallback: { path: 'data.contact.email', fallback: 'Email' } },
              {
                id: 'linkedin',
                type: 'link',
                pathWithFallback: { path: 'data.contact.linkedin', fallback: 'LinkedIn' },
              },
              {
                id: 'location',
                type: 'text',
                pathWithFallback: { path: 'data.contact.location', fallback: 'Location' },
              },
            ],
          },

          //   // SKILLS
          {
            id: 'skills',
            type: 'container',
            className: 'flex flex-col gap-2',
            children: [
              {
                id: 'skills-heading',
                type: 'text',
                pathWithFallback: { path: 'data.skills.heading', fallback: 'Skills' },
                className:
                  'text-indigo-700 font-semibold text-sm uppercase tracking-wide border-b border-indigo-200 pb-1',
              },
              {
                id: 'skills-list',
                type: 'list',
                pathWithFallback: { path: 'data.skills.list' },
                className: 'flex flex-wrap gap-1',
                transform: { variant: 'flatten', key: 'value' },
                presentation: [
                  {
                    type: 'text',
                    className: 'px-2 py-0.5 bg-indigo-600 text-white rounded-md text-xs font-medium',
                  },
                ],
              },
            ],
          },

          //   // SUMMARY
          {
            id: 'summary',
            type: 'container',
            className: 'flex flex-col gap-2',
            children: [
              {
                id: 'summary-heading',
                type: 'text',
                pathWithFallback: { path: 'data.summary.heading', fallback: 'Summary' },
                className:
                  'text-indigo-700 font-semibold text-sm uppercase tracking-wide border-b border-indigo-200 pb-1',
              },
              {
                id: 'summary-text',
                type: 'text',
                pathWithFallback: { path: 'data.summary.text' },
                className: 'text-xs text-zinc-700 leading-relaxed text-justify',
              },
            ],
          },
        ],
      },

      // MAIN CONTENT
      {
        id: 'main',
        type: 'container',
        className: 'col-span-2 p-8 flex flex-col gap-8',
        children: [
          // EXPERIENCE
          {
            id: 'experience',
            type: 'container',
            className: 'flex flex-col gap-3',
            children: [
              {
                id: 'experience-heading',
                type: 'text',
                pathWithFallback: { path: 'data.experience.heading', fallback: 'Experience' },
                className: 'text-lg font-semibold text-indigo-700 border-b-2 border-indigo-300 pb-1',
              },
              {
                id: 'experience-list',
                type: 'list',
                pathWithFallback: { path: 'data.experience.list' },
                className: 'flex flex-col gap-6',
                presentation: [
                  {
                    type: 'container',
                    className: 'flex flex-col gap-1',
                    children: [
                      {
                        type: 'container',
                        className: 'flex justify-between items-center',
                        children: [
                          {
                            id: 'company',
                            type: 'text',
                            pathWithFallback: { path: 'data.company' },
                            className: 'text-base font-bold text-zinc-800',
                          },
                          {
                            id: 'period',
                            type: 'text',
                            pathWithFallback: { path: 'data.period' },
                            className: 'text-xs text-zinc-500 italic',
                          },
                        ],
                      },
                      {
                        id: 'role',
                        type: 'text',
                        pathWithFallback: { path: 'data.role' },
                        className: 'text-sm text-indigo-600 font-medium',
                      },
                      {
                        id: 'bullets',
                        type: 'list',
                        pathWithFallback: { path: 'data.bullets' },
                        className: 'flex flex-col gap-1 mt-1',
                        presentation: [
                          {
                            type: 'text',
                            className: "text-xs text-zinc-700 before:content-['▹'] before:text-indigo-500 before:mr-1",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },

          // PROJECTS
          //   {
          //     id: 'projects',
          //     type: 'container',
          //     className: 'flex flex-col gap-3',
          //     children: [
          //       {
          //         id: 'projects-heading',
          //         type: 'text',
          //         pathWithFallback: { path: 'data.projects.heading', fallback: 'Projects' },
          //         className: 'text-lg font-semibold text-indigo-700 border-b-2 border-indigo-300 pb-1',
          //       },
          //       {
          //         id: 'projects-list',
          //         type: 'list',
          //         pathWithFallback: { path: 'data.projects.list' },
          //         className: 'flex flex-col gap-4',
          //         presentation: [
          //           {
          //             type: 'container',
          //             className: 'flex flex-col gap-1',
          //             children: [
          //               {
          //                 id: 'title',
          //                 type: 'text',
          //                 pathWithFallback: { path: 'data.title' },
          //                 className: 'text-sm font-semibold text-zinc-800',
          //               },
          //               {
          //                 id: 'description',
          //                 type: 'text',
          //                 pathWithFallback: { path: 'data.description' },
          //                 className: 'text-xs text-zinc-600',
          //               },
          //               {
          //                 id: 'tech',
          //                 type: 'list',
          //                 pathWithFallback: { path: 'data.tech' },
          //                 className: 'flex flex-wrap gap-1',
          //                 presentation: [
          //                   {
          //                     type: 'text',
          //                     className: 'text-xs px-2 py-0.5 bg-zinc-100 text-zinc-700 rounded-md',
          //                   },
          //                 ],
          //               },
          //             ],
          //           },
          //         ],
          //       },
          //     ],
          //   },

          // EDUCATION
          {
            id: 'education',
            type: 'container',
            className: 'flex flex-col gap-3',
            children: [
              {
                id: 'education-heading',
                type: 'text',
                pathWithFallback: { path: 'data.education.heading', fallback: 'Education' },
                className: 'text-lg font-semibold text-indigo-700 border-b-2 border-indigo-300 pb-1',
              },
              {
                id: 'education-list',
                type: 'list',
                pathWithFallback: { path: 'data.education.list' },
                className: 'flex flex-col gap-4',
                presentation: [
                  {
                    type: 'container',
                    className: 'flex flex-col gap-1',
                    children: [
                      {
                        id: 'school',
                        type: 'text',
                        pathWithFallback: { path: 'data.school' },
                        className: 'text-sm font-semibold text-zinc-800',
                      },
                      {
                        id: 'degree',
                        type: 'text',
                        pathWithFallback: { path: 'data.degree' },
                        className: 'text-xs italic text-zinc-600',
                      },
                      {
                        id: 'period',
                        type: 'text',
                        pathWithFallback: { path: 'data.period' },
                        className: 'text-xs text-zinc-500',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};

export default aniketTwoColumnTemplate;
