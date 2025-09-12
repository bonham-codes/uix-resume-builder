import { Suspense } from "react";
import GoogleCallbackClient from "./google-callback-client";

export default function GoogleCallbackPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GoogleCallbackClient />
    </Suspense>
  );
}
