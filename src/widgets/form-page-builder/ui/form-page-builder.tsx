import type { FormSchema } from '@entities/data-schema';
import { ResumeRenderer } from '@features/resume/renderer';
import { aniketSampleData } from '@features/resume/sample-data-aniket';
import aniketTemplate from '@features/resume/templates/aniket';
import { TemplateForm } from '@features/template-form';
import { Button } from '@shared/ui/button';
import { useEffect } from 'react';
import { useFormPageBuilder } from '../models/ctx';
import { useFormDataStore } from '../models/store';
import Image from 'next/image';

const width = 580;
export function FormPageBuilder({ formSchema, defaultValues }: { formSchema: FormSchema; defaultValues: any }) {
  const { currentStep, setCurrentStep } = useFormPageBuilder();

  const formData = useFormDataStore((state) => state.formData);
  const setFormData = useFormDataStore((state) => state.setFormData);

  useEffect(() => {
    useFormDataStore.setState({ formData: defaultValues ?? {} });
  }, [defaultValues]);

  // const currentStepSchema = formSchema.filter((item) => item.name === currentStep);
  // const nextStepIndex = formSchema.findIndex((item) => item.name === currentStep) + 1;

  const nextStepIndex = Object.keys(formSchema).findIndex((item) => item === currentStep) + 1;

  console.log(defaultValues);

  return (
    <>
      <div
        className="bg-white border-[3px] border-blue-800 outline-[3px] outline-blue-400 rounded-[18px] overflow-auto scroll-hidden w-full min-w-0 absolute top-0 left-0"
        style={{
          transformOrigin: 'top left',
          width: '794px',
          height: '1122px',
          transform: `scale(${width / 794})`,
        }}
      >
        <ResumeRenderer template={aniketTemplate} data={{ ...aniketSampleData, ...formData }} />
      </div>

      <div className="pl-8 flex-1 h-full max-h-[calc(100vh-32px)] overflow-y-auto pb-5" style={{ marginLeft: width }}>
        <div className="flex justify-end items-center gap-4">
          <div className="flex items-center gap-2">
            <Image src="/images/circle-alert.svg" alt="circle-alert" width={16} height={16} />
            <span className="text-[13px] font-regular text-[#E12121]">Sign In to save progress</span>
          </div>
          <Button className="border border-[#CBE7FF] bg-[#E9F4FF] text-[18px] font-semibold text-[#005FF2] h-12">
            Sign In
          </Button>
        </div>
        <div
          className="mt-6 mb-4"
          style={{
            background: 'linear-gradient(90deg, rgba(23, 23, 23, 0) 0%, #B8B8B8 51.09%)',
            height: '1px',
            width: '100%',
          }}
        />

        <TemplateForm
          formSchema={formSchema ?? {}}
          currentStep={currentStep}
          values={formData ?? {}}
          onChange={(formData) => setFormData(formData)}
        />

        <div className="mt-[20px] cursor-pointer z-100 relative ml-auto flex">
          <Button
            className="mt-auto ml-auto bg-[#E9F4FF] w-[247px] h-[48px] rounded-[8px] text-sm font-semibold text-[#005FF2] hover:bg-blue-700 hover:text-white border border-[#CBE7FF]"
            onClick={() => setCurrentStep(formSchema[nextStepIndex]?.name ?? '')}
          >
            Next: {formSchema[nextStepIndex]?.name}
          </Button>
        </div>
      </div>
    </>
  );
}
