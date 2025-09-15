import AuthPage from "@/widgets/auth-page";
import Image from "next/image";

export default function Home() {
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
  );
}
