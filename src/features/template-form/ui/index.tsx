import { Input } from '@/shared/ui/components/input';

import type { FormSchema, FormField as IFormField } from '@entities/resume';
import { cn } from '@shared/lib/cn';
import { TiptapTextArea } from '@shared/ui/components/textarea';
import { Draggable } from './draggable';

export function TemplateForm({
  formSchema,
  values,
  onChange,
  currentStep = 'personalDetails',
}: {
  formSchema: FormSchema;
  values: any;
  onChange: (data: any) => void;
  currentStep: string;
}) {
  function getItem(section: IFormField, data: any, onChange: (data: any) => void) {
    switch (section.type) {
      case 'text':
      case 'email':
      case 'tel':
      case 'url': {
        return (
          <Input
            placeholder={section.placeholder}
            className={cn(
              'border border-[#959DA8] ring-4 ring-[#f6f6f6] rounded-[8px]',
              'placeholder:text-[#DBCFD4] text-base text-[#0C1118]',
              'font-semibold focus:border-[#0059ED] focus:ring-[#CBE7FF] placeholder:text-[#CFD4DB]',
              'bg-[#FAFBFC]',
            )}
            defaultValue={data}
            onChange={(e) => onChange(e.target.value)}
          />
        );
      }

      case 'textarea': {
        return (
          <TiptapTextArea
            defaultValue={data}
            placeholder={section.placeholder}
            className={cn(
              'border border-[#959DA8] ring-4 ring-[#f6f6f6] rounded-[8px]',
              'placeholder:text-[#DBCFD4] text-base text-[#0C1118]',
              'font-semibold focus:border-[#0059ED] focus:ring-[#CBE7FF] placeholder:text-[#CFD4DB]',
              'bg-[#FAFBFC]',
            )}
            onChange={(_value, html) => {
              onChange(html);
            }}
          />
        );
      }

      case 'draggable': {
        return <Draggable data={data} section={section} onChange={onChange} getItem={getItem} />;
      }
    }
  }

  const currentData = values?.[currentStep];
  const currentSchema = formSchema?.[currentStep];

  console.log(currentData);

  if (!currentSchema || !currentData) return null;

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="text-[20px] font-semibold text-gray-1000">
        {currentSchema?.label}
        <p className="text-[13px] font-normal text-[rgba(23, 23, 23, 1)]">{currentSchema?.subTitle}</p>
      </div>

      <form className="grid grid-cols-2 gap-4 w-full">
        {Object.entries(currentData).map(([key, value]) => {
          const section = currentSchema[key];

          return (
            <label
              key={key}
              className={cn('text-sm text-[#0C1118] font-semibold flex flex-col gap-2', section.fluid && 'col-span-2')}
              htmlFor={key}
            >
              {section.label}

              {getItem(section, value, (value) => {
                onChange({ ...values, [currentStep]: { ...currentData, [key]: value } });
              })}
            </label>
          );
        })}
      </form>
    </div>
  );
}
