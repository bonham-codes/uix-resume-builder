'use client';

import { LandingPage } from '@widgets/landing-page';

export default function Home() {
  return (
    // <div className="min-h-screen w-full bg-zinc-100 flex items-start justify-center p-6">
    //   <div className="shadow-lg border border-zinc-200">
    //     <div ref={targetRef}>
    //       <ResumeRenderer template={template} data={sampleDataAniket} />
    //     </div>

    //     <Button className="fixed top-4 right-4 z-10" onClick={() => toPDF()}>
    //       Download
    //     </Button>

    //     <div className="flex flex-row gap-2 fixed bottom-4 right-4">
    //       {templates.map((template) => (
    //         <Button key={template.name} onClick={() => setTemplate(template.template)}>
    //           {template.name}
    //         </Button>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <LandingPage />
  );
}
