'use client';

import { useTemplateFormData, useTemplateFormSchema } from '@entities/resume';
import { camelToHumanString } from '@shared/lib/string';
import { FormPageBuilder, Sidebar } from '@widgets/form-page-builder';
import { FormPageBuilderProvider } from '@widgets/form-page-builder/models/ctx';
import { useEffect, useMemo, useState } from 'react';

export default function FormPage() {
  const { data: resumeData } = useTemplateFormData();
  const { data: schema } = useTemplateFormSchema();

  const [currentStep, setCurrentStep] = useState<string>('');

  const navs = useMemo(
    () =>
      Object.keys(resumeData ?? {})
        .map((key) => {
          if (key === 'templateId') return null;

          return {
            label: camelToHumanString(key),
            name: key,
          };
        })
        .filter(Boolean) ?? [],
    [schema, resumeData],
  );

  useEffect(() => {
    if (!schema) return;

    setCurrentStep(Object.keys(schema ?? {})[0] ?? '');
  }, [schema]);

  return (
    <FormPageBuilderProvider value={{ currentStep, setCurrentStep, navs }}>
      <div className="flex gap-6 py-4 pl-4 ">
        <Sidebar />

        <div className="relative flex bg-white rounded-tl-[36px] rounded-bl-[36px] w-full max-h-[calc(100vh-32px)] overflow-y-auto pt-5 px-5 gap-3">
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle, #ccc 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />

          <div className="relative flex w-full">
            <FormPageBuilder formSchema={schema ?? {}} defaultValues={resumeData ?? {}} />
          </div>
        </div>
      </div>
    </FormPageBuilderProvider>
  );
}
