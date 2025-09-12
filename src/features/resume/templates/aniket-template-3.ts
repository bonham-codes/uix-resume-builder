const aniketSingleColumnTemplate = {
  name: 'Aniket Single Column',

  page: {
    padding: 40,
    background: '#ffffff',
    className: 'text-slate-900',
    fontFamily: 'Inter',
  },

  body: {
    id: 'body',
    type: 'container',
    className: 'flex flex-col gap-6',
    children: [
      //   HEADER
      {
        id: 'header',
        type: 'container',
        className: 'flex flex-col items-center text-center gap-2',
        children: [
          {
            id: 'name',
            type: 'text',
            pathWithFallback: { path: 'data.name', fallback: 'Your Name' },
            className: 'text-4xl font-bold tracking-wide text-emerald-700',
          },
          {
            id: 'title',
            type: 'text',
            pathWithFallback: { path: 'data.title', fallback: 'Your Title' },
            className: 'text-lg font-medium text-slate-600',
          },
          {
            id: 'contact',
            type: 'container',
            className: 'flex flex-row gap-3 flex-wrap justify-center text-sm text-slate-500 mt-1',
            children: [
              { id: 'phone', type: 'text', pathWithFallback: { path: 'data.contact.phone', fallback: 'Phone' } },
              { type: 'seperator', variant: 'pipe' },
              { id: 'email', type: 'link', pathWithFallback: { path: 'data.contact.email', fallback: 'Email' } },
              { type: 'seperator', variant: 'pipe' },
              {
                id: 'linkedin',
                type: 'link',
                pathWithFallback: { path: 'data.contact.linkedin', fallback: 'LinkedIn' },
              },
              { type: 'seperator', variant: 'pipe' },
              {
                id: 'location',
                type: 'text',
                pathWithFallback: { path: 'data.contact.location', fallback: 'Location' },
              },
            ],
          },
        ],
      },

      // SUMMARY
      {
        id: 'summary',
        type: 'container',
        className: 'flex flex-col',
        children: [
          {
            id: 'summary-heading',
            type: 'text',
            pathWithFallback: { path: 'data.summary.heading', fallback: 'Summary' },
            className: 'text-emerald-600 font-semibold text-base border-b border-emerald-200 pb-1',
          },
          {
            id: 'summary-text',
            type: 'text',
            pathWithFallback: { path: 'data.summary.text' },
            className: 'text-sm text-slate-700 text-justify mt-2 leading-relaxed',
          },
        ],
      },

      {
        id: 'skills',
        type: 'container',
        className: 'flex flex-col',
        children: [
          {
            id: 'skills-heading',
            type: 'text',
            pathWithFallback: { path: 'data.skills.heading', fallback: 'Skills' },
            className: 'text-emerald-600 font-semibold text-base border-b border-emerald-200 pb-1',
          },
          {
            id: 'skills-list',
            type: 'list',
            pathWithFallback: { path: 'data.skills.list' },
            className: 'flex flex-row gap-2 mt-2',
            transform: {
              variant: 'flatten',
              key: 'value',
            },
            presentation: [
              {
                type: 'text',
                className: 'px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium shadow-sm',
              },
            ],
          },
        ],
      },

      // EXPERIENCE
      {
        id: 'experience',
        type: 'container',
        className: 'flex flex-col',
        children: [
          {
            id: 'experience-heading',
            type: 'text',
            pathWithFallback: { path: 'data.experience.heading', fallback: 'Experience' },
            className: 'text-emerald-600 font-semibold text-base border-b border-emerald-200 pb-1',
          },
          {
            id: 'experience-list',
            type: 'list',
            pathWithFallback: { path: 'data.experience.list' },
            className: 'flex flex-col gap-4 mt-2',
            presentation: [
              {
                type: 'container',
                id: 'experience-item',
                className: 'flex flex-col',
                children: [
                  {
                    type: 'container',
                    className: 'flex flex-row justify-between items-center',
                    children: [
                      {
                        id: 'company',
                        type: 'text',
                        pathWithFallback: { path: 'data.company' },
                        className: 'text-sm font-semibold text-slate-800',
                      },
                      {
                        id: 'period',
                        type: 'text',
                        pathWithFallback: { path: 'data.period' },
                        className: 'text-xs text-slate-500',
                      },
                    ],
                  },
                  {
                    id: 'role',
                    type: 'text',
                    pathWithFallback: { path: 'data.role' },
                    className: 'text-xs italic text-slate-600',
                  },
                  {
                    id: 'bullets',
                    type: 'list',
                    pathWithFallback: { path: 'data.bullets' },
                    className: 'flex flex-col mt-1 gap-1',
                    presentation: [
                      {
                        type: 'text',
                        className:
                          'text-xs text-slate-700 text-justify before:content-["•"] before:mr-1 before:text-emerald-500',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },

      // EDUCATION
      {
        id: 'education',
        type: 'container',
        className: 'flex flex-col',
        children: [
          {
            id: 'education-heading',
            type: 'text',
            pathWithFallback: { path: 'data.education.heading', fallback: 'Education' },
            className: 'text-emerald-600 font-semibold text-base border-b border-emerald-200 pb-1',
          },
          {
            id: 'education-list',
            type: 'list',
            pathWithFallback: { path: 'data.education.list' },
            className: 'flex flex-col mt-2 gap-3',
            presentation: [
              {
                type: 'container',
                className: 'flex flex-col',
                children: [
                  {
                    id: 'school',
                    type: 'text',
                    pathWithFallback: { path: 'data.school' },
                    className: 'text-sm font-semibold text-slate-800',
                  },
                  {
                    id: 'degree',
                    type: 'text',
                    pathWithFallback: { path: 'data.degree' },
                    className: 'text-xs italic text-slate-600',
                  },
                  {
                    id: 'period',
                    type: 'text',
                    pathWithFallback: { path: 'data.period' },
                    className: 'text-xs text-slate-500',
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

export default aniketSingleColumnTemplate;
