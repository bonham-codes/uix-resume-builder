const aniketTemplate = {
  name: 'Aniket Classic',

  page: {
    width: 794,
    height: 1122,
    padding: 24,
    background: '#ffffff',
    className: 'text-neutral-900',
    fontFamily: 'sans-serif',
  },

  body: {
    id: 'body',
    type: 'container',
    className: 'flex flex-col gap-2',
    children: [
      {
        id: 'header-section',
        type: 'container',
        className: 'flex flex-col items-center justify-center w-full',
        children: [
          {
            id: 'name-text',
            type: 'text',
            pathWithFallback: { path: 'data.name', fallback: 'Your Name' },
            className: 'tracking-wide text-3xl text-center font-bold text-red-500',
          },

          {
            id: 'contact-section',
            type: 'container',
            className: 'flex flex-row gap-1 items-center',
            children: [
              {
                id: 'city-text',
                type: 'text',
                pathWithFallback: { path: 'data.contact.city', fallback: 'City' },
                variant: 'small',
                className: 'text-neutral-700 text-sm',
              },
              {
                type: 'seperator',
                variant: 'pipe',
                className: 'text-neutral-700 text-sm',
              },
              {
                id: 'phone-text',
                type: 'text',
                pathWithFallback: { path: 'data.contact.phone', fallback: 'Phone' },
                variant: 'small',
                className: 'text-neutral-700 text-sm',
              },
              {
                id: 'phone-seperator',
                type: 'seperator',
                variant: 'pipe',
                className: 'text-neutral-700 text-sm',
              },
              {
                id: 'email-link',
                type: 'link',
                pathWithFallback: { path: 'data.contact.email', fallback: 'Email' },
                href: 'mailto:aniket@gmail.com',
                className: 'text-neutral-700 text-sm',
              },
              {
                id: 'email-seperator',
                type: 'seperator',
                variant: 'pipe',
                className: 'text-neutral-700 text-sm',
              },
              {
                id: 'linkedin-text',
                type: 'link',
                pathWithFallback: { path: 'data.contact.linkedin', fallback: 'LinkedIn' },
                href: 'https://www.linkedin.com/in/aniket98/',
                className: 'text-neutral-700 text-sm',
              },
            ],
          },
        ],
      },

      {
        type: 'container',
        id: 'summary-section',
        className: 'flex flex-col mt-2',
        children: [
          {
            id: 'summary-heading',
            type: 'text',
            pathWithFallback: { path: 'data.summary.heading' },
            className: 'text-neutral-700 font-semibold text-sm',
          },
          { type: 'seperator', variant: 'line', className: 'my-1' },
          {
            id: 'summary-text',
            type: 'text',
            pathWithFallback: { path: 'data.summary.text' },
            variant: 'body',
            className: 'text-neutral-700 text-xs text-justify',
          },
        ],
      },

      {
        id: 'skills-section',
        type: 'container',
        className: 'flex flex-col mt-2',
        children: [
          {
            id: 'skills-heading',
            type: 'text',
            pathWithFallback: { path: 'data.skills.heading' },
            className: 'text-neutral-700 font-semibold text-sm',
          },
          { type: 'seperator', variant: 'line', className: 'my-1' },
          {
            type: 'list',
            id: 'skills',
            pathWithFallback: { path: 'data.skills.list' },
            className: 'flex flex-col gap-1',
            presentation: [
              {
                type: 'container',
                id: 'skill',
                className: 'flex flex-row gap-1',
                children: [
                  {
                    id: 'skill-label',
                    type: 'text',
                    pathWithFallback: { path: 'data.label' },
                    className: 'text-neutral-700 font-semibold text-xs',
                    suffix: ': ',
                  },
                  {
                    id: 'skill-value',
                    type: 'list',
                    className: 'flex flex-row',
                    pathWithFallback: { path: 'data.value' },
                    presentation: [
                      {
                        id: 'skill-value-item',
                        type: 'text',
                        className: 'text-neutral-700 text-xs whitespace-pre',
                        suffix: ', ',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },

      {
        id: 'experience-section',
        type: 'container',
        className: 'flex flex-col mt-2',
        children: [
          {
            id: 'experience-heading',
            type: 'text',
            pathWithFallback: { path: 'data.experience.heading' },
            className: 'text-neutral-700 font-semibold text-sm',
          },
          { type: 'seperator', variant: 'line', className: 'my-1' },
          {
            id: 'experience',
            type: 'list',
            pathWithFallback: { path: 'data.experience.list' },
            className: 'flex flex-col',
            presentation: [
              {
                type: 'container',
                id: 'experience-item',
                className: 'flex flex-row justify-between items-center',
                children: [
                  {
                    id: 'experience-company',
                    type: 'text',
                    pathWithFallback: { path: 'data.company' },
                    className: 'text-neutral-700 text-base font-medium',
                  },
                  {
                    id: 'experience-period',
                    type: 'text',
                    pathWithFallback: { path: 'data.period' },
                    className: 'text-neutral-700 text-xs',
                  },
                ],
              },
              {
                type: 'container',
                id: 'company-location-period',
                className: 'flex flex-row justify-between items-center',
                children: [
                  {
                    id: 'experience-role',
                    type: 'text',
                    pathWithFallback: { path: 'data.role' },
                    className: 'text-neutral-700 text-xs italic',
                  },
                  {
                    id: 'experience-location',
                    type: 'text',
                    pathWithFallback: { path: 'data.location' },
                    className: 'text-neutral-700 text-xs italic',
                  },
                ],
              },
              {
                id: 'experience-bullets',
                type: 'list',
                pathWithFallback: { path: 'data.bullets' },
                className: 'flex flex-col mb-4 mt-1.5 gap-0.5',
                presentation: [
                  { type: 'text', className: 'text-neutral-700 before:content-["•"] before:mr-1 text-xs text-justify' },
                ],
              },
            ],
          },
        ],
      },

      {
        id: 'education-section',
        type: 'container',
        className: 'flex flex-col mt-2',
        children: [
          {
            id: 'education-heading',
            type: 'text',
            pathWithFallback: { path: 'data.education.heading' },
            className: 'text-neutral-700 font-semibold text-sm',
          },
          { type: 'seperator', variant: 'line', className: 'my-1' },
          {
            id: 'education',
            type: 'list',
            pathWithFallback: { path: 'data.education.list' },
            className: 'flex flex-col',
            presentation: [
              {
                type: 'container',
                id: 'education-item',
                className: 'flex flex-row justify-between items-center',
                children: [
                  {
                    id: 'education-school',
                    type: 'text',
                    pathWithFallback: { path: 'data.school' },
                    className: 'text-neutral-700 text-base font-medium',
                  },
                  {
                    id: 'education-period',
                    type: 'text',
                    pathWithFallback: { path: 'data.period' },
                    className: 'text-neutral-700 text-xs',
                  },
                ],
              },
              {
                type: 'container',
                id: 'company-location-period',
                className: 'flex flex-row justify-between items-center',
                children: [
                  {
                    id: 'education-degree',
                    type: 'text',
                    pathWithFallback: { path: 'data.degree' },
                    className: 'text-neutral-700 text-xs italic',
                  },
                  {
                    id: 'education-grade',
                    type: 'text',
                    pathWithFallback: { path: 'data.grade' },
                    className: 'text-neutral-700 text-xs italic',
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

export default aniketTemplate;
