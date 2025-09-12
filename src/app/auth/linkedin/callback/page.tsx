import { Suspense } from "react";
import LinkedInCallbackClient from "./linkedin-callback-client";

export default function LinkedInCallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-screen">
          Loading...
        </div>
      }
    >
      <LinkedInCallbackClient />
    </Suspense>
  );
}