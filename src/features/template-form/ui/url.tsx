import { cn } from '@shared/lib/cn';
import { Input } from '@shared/ui/components/input';
import { Popover, PopoverContent, PopoverTrigger } from '@shared/ui/popover';
import Image from 'next/image';

export const UrlInput = ({ data, onChange }: { data: string; onChange: (data: string) => void; section: any }) => {
  return (
    <div className="relative">
      <Input
        placeholder="Enter URL"
        className={cn(
          'border border-[#959DA8] ring-4 ring-[#f6f6f6] rounded-[8px]',
          'placeholder:text-[#DBCFD4] text-base text-[#0C1118]',
          'font-semibold focus:border-[#0059ED] focus:ring-[#CBE7FF] placeholder:text-[#CFD4DB]',
          'bg-[#FAFBFC]',
        )}
        defaultValue={data}
        onChange={(e) => onChange(e.target.value)}
      />

      <div className="absolute top-0 right-2 bottom-0 flex items-center justify-center text-muted-foreground">
        <Popover>
          <PopoverTrigger className="cursor-pointer">
            <Image src="/images/link.svg" alt="link" width={16} height={16} />
          </PopoverTrigger>
          <PopoverContent>
            <Input placeholder="Enter URL" />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
