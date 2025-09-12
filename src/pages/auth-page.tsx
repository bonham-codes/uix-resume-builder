import AuthPage from '@widgets/auth-page';
import Image from 'next/image';
import React from 'react'

function Auth() {
  return (
<div className="w-full h-full">
      <Image
        src="images/landing-page-bg.svg"
        alt="Background"
        fill
        className="object-cover -z-10"
        priority
      />
      <div>
        <AuthPage />
        </div>  
        </div>
)}

export default Auth;