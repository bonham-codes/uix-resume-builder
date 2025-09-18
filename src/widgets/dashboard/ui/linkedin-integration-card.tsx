'use client';

import Image from 'next/image';

export default function LinkedinIntegrationCard() {
  return (
   <div className="relative w-full h-[248px] bg-[rgb(23,23,23)] rounded-[20px] overflow-hidden">

      <div className="absolute inset-0">
        <div 
          className="absolute -left-[150px] -top-[214px] w-[550px] h-[500px] rounded-full opacity-100 bg-[linear-gradient(136deg,rgba(37,122,255,1)_30%,rgba(23,23,23,1)_68%)] blur-[100px]"
        />
        
        <div className="absolute right-[-29px] -top-[7px] w-[344px] h-[266px] opacity-10 rotate-45">
          <Image
            src="/images/image-14.svg"
            alt="Background decoration"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="absolute -left-[21px] top-[150px] w-[238px] h-[246px] opacity-25 rounded-[12px]">
          <Image
            src="/images/resume-score-img.svg"
            alt="LinkedIn decoration"
            fill
            className="object-cover rounded-[12px]"
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
        <div className="flex flex-col items-center gap-7 max-w-[391px]">

          <div className="flex flex-col items-center gap-3 w-full">
            <h2 className="text-[rgb(240,247,255)] font-semibold text-4xl leading-tight tracking-tight text-center">
              Skip repetitive filling
            </h2>

            <p className="text-[rgb(204,212,223)] font-normal text-xl leading-relaxed tracking-tight text-center">
              Bring your details from LinkedIn and reuse them anytime on any resume template.
            </p>
          </div>

          <button className="flex items-center justify-center bg-[rgb(0,95,242)] text-white rounded-xl px-5 py-3 h-11 shadow-sm transition-all hover:bg-[rgb(0,81,217)]">
            <span className="text-lg font-semibold leading-[1.333em] tracking-tight">
              Auto-fill via Linkedin
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}