'use client';

import { ResumeRenderer } from '@widgets/resume/renderer';
import { sampleDataAniket } from '@widgets/resume/sample-data-aniket';
import aniketTemplate from '@widgets/resume/templates/aniket';
import aniketTemplate2 from '@widgets/resume/templates/aniket-template-2';
import aniketTemplate3 from '@widgets/resume/templates/aniket-template-3';
import aniketTemplate4 from '@widgets/resume/templates/aniket-template-4';

import { Button } from '@shared/ui/components/button';

import { useState } from 'react';
import { usePDF } from 'react-to-pdf';

const templates = [
  { name: 'Aniket Template', template: aniketTemplate },
  { name: 'Aniket Template 2', template: aniketTemplate2 },
  { name: 'Aniket Template 3', template: aniketTemplate3 },
  { name: 'Aniket Template 4', template: aniketTemplate4 },
];

export default function Home() {
  const [template, setTemplate] = useState(aniketTemplate4);
  const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });

  return (
    <div className="min-h-screen w-full bg-zinc-100 flex items-start justify-center p-6">
      <div className="shadow-lg border border-zinc-200">
        <div ref={targetRef}>
          <ResumeRenderer template={template} data={sampleDataAniket} />
        </div>

        <Button className="fixed top-4 right-4 z-10" onClick={() => toPDF()}>
          Download
        </Button>

        <div className="flex flex-row gap-2 fixed bottom-4 right-4">
          {templates.map((template) => (
            <Button key={template.name} onClick={() => setTemplate(template.template)}>
              {template.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
