'use client';

import { ResumeRenderer } from '@widgets/resume/renderer';
import { sampleDataAniket } from '@widgets/resume/sample-data-aniket';
import aniketTemplate from '@widgets/resume/templates/aniket';
import aniketTemplate2 from '@widgets/resume/templates/aniket-template-2';
import aniketTemplate3 from '@widgets/resume/templates/aniket-template-3';

import { Button } from '@shared/ui/components/button';

import { usePDF } from 'react-to-pdf';

export default function Home() {
  const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });

  return (
    <div className="min-h-screen w-full bg-zinc-100 flex items-start justify-center p-6">
      <div className="shadow-lg border border-zinc-200">
        <div ref={targetRef}>
          <ResumeRenderer template={aniketTemplate3} data={sampleDataAniket} />
        </div>
        <Button className="fixed bottom-4 left-1/2 -translate-x-1/2 z-10" onClick={() => toPDF()}>
          Download
        </Button>
      </div>
    </div>
  );
}
