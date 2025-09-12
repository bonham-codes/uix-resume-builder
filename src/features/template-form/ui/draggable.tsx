import { cn } from '@shared/lib/cn';
import Image from 'next/image';
import { useState } from 'react';

export function Draggable({
  data,
  section,
  onChange,
  getItem,
}: {
  data: any;
  section: any;
  onChange: (data: any) => void;
  getItem: (section: any, data: any, onChange: (data: any) => void) => void;
}) {
  const [collapsed, setCollapsed] = useState<boolean[]>([]);

  return (
    <div className="flex flex-col gap-4 ">
      {data.map((item, i) => {
        const collapsedTitleValue = item[section.collapsedState?.titleKey];
        const collapsedSubTitleValue = item[section.collapsedState?.subTitleKey];

        console.log(collapsedTitleValue, collapsedSubTitleValue);

        return (
          <div
            key={i}
            className={cn(
              'relative text-sm text-[#0C1118] justify-center w-full border border-[#CCD4DF] rounded-[12px] bg-white transition-all duration-300',
              collapsed[i] && 'h-15 overflow-hidden',
            )}
          >
            <div className="flex items-center justify-between absolute top-1 right-1.5 w-7 h-7 cursor-pointer">
              <button
                type="button"
                onClick={() => {
                  const newCollapsed = [...collapsed];
                  newCollapsed[i] = !newCollapsed[i];
                  setCollapsed(newCollapsed);
                }}
              >
                <Image src="/images/cheveron-up.svg" alt="cheveron-up" width={24} height={25} />
              </button>
            </div>

            {!collapsed[i] ? (
              <div className="p-4 grid grid-cols-2 gap-y-1.5 gap-x-8">
                {Object.entries(item).map(([key, value]) => {
                  if (!section[key]) return null;

                  return (
                    <div
                      key={key}
                      className={cn(
                        'text-sm text-[#0C1118] font-semibold flex flex-col gap-2',
                        section[key]?.fluid && 'col-span-2',
                      )}
                    >
                      {section[key]?.label}
                      {getItem(section[key], value, (value) => {
                        console.log(value, data);
                        const newData = [...data];
                        newData[i][key] = value;

                        onChange(newData);
                      })}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="pl-4 pt-[11px] pb-[11px]">
                {collapsedTitleValue && (
                  <div className="text-sm text-[#0C1118] font-semibold">{collapsedTitleValue}</div>
                )}

                {collapsedSubTitleValue && (
                  <div className="text-sm font-normal text-[#000000]">{collapsedSubTitleValue}</div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
