"use client";
import { fetchUserDetails } from "@entities/auth-page/api/auth-queries";
import { useGetAllResumes } from "@entities/resume/api/get-all-resume";
import { SidebarProvider } from "@shared/ui/sidebar";
import { useQuery } from "@tanstack/react-query";
import DashboardSidebar from "@widgets/dashboard/ui/dashboard-sidebar";
import WelcomeHeader from "@widgets/dashboard/ui/welcome-header";
import { Bell, Copy, MoreVertical, Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function DashboardLayout() {
  const [userId, setUserId] = useState<string | null>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem("userId");
    setUserId(id);
  }, []);

  const { data: user } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => fetchUserDetails(userId as string),
    enabled: !!userId,
  });

  const {
    data: resumes,
  } = useGetAllResumes(userId);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-screen bg-white">
        <DashboardSidebar />

        <div className="flex-1 flex flex-col min-w-0 m-3">
          <header className="flex justify-between items-center bg-[rgba(245,248,250,1)] p-4 rounded-3xl">
            <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-[30px] min-w-[309px] h-12">
              <Search className="flex-shrink-0 w-6 h-6 text-[rgb(149,157,168)]" />

              <input
                type="text"
                placeholder="search template"
                className="flex-1 border-none outline-none bg-transparent text-base text-[rgb(149,157,168)] leading-[1.375em] tracking-[-1.125%]"
              />
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center justify-center bg-white rounded-full w-[53px] h-[53px]">
                <Bell className="w-6 h-6 text-[rgb(49,60,66)]" />
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center bg-blue-200 rounded-full overflow-hidden h-[53px] w-[53px]">
                  <span className="text-xl font-bold text-gray-600">
                    {user?.firstName?.charAt(0)}
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-black leading-[1.375em] tracking-[-1.125%] text-base font-normal">
                    {user
                      ? `${user.firstName} ${user.lastName ?? ""}`
                      : "Loading..."}
                  </span>

                  <span className="text-[13px] font-normal leading-[1.385em] text-[rgb(149,157,168)]">
                    {user?.email ?? "Loading..."}
                  </span>
                </div>
              </div>
            </div>
          </header>

          <main className="flex bg-[rgb(245,248,250)] mt-3 rounded-[36px] overflow-hidden pb-4 h-full">
            <div className="flex-1">
              <div className="flex text-start w-full">
                <h1 className="text-[rgb(231,238,243)] font-semibold text-[90px] leading-tight -tracking-[3%] h-[77px] truncate mt-[-25px] ml-[-10px]">
                  YOUR RESUMES
                </h1>
              </div>

              <WelcomeHeader
                userName={
                  (user?.firstName ?? "") + " " + (user?.lastName ?? "")
                }
              />

              <div className="flex gap-6 mt-6 mx-4">
                <div className="w-[240px] h-[320px] flex items-center justify-center rounded-2xl border-2 border-dashed border-gray-400 cursor-pointer hover:border-purple-500 transition">
                  <div className="text-center">
                    <span className="text-3xl text-gray-500">+</span>
                    <p className="text-gray-600 font-medium mt-1">New resume</p>
                  </div>
                </div>

                {resumes?.map((resume, index) => (
                  <ResumeCard key={resume.id} resume={resume} index={index} />
                ))}
              </div>
            </div>

            <div></div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

interface ResumeCardProps {
  resume: {
    id: string;
    title: string;
    updatedAt: string;
    items: Array<{
      sectionType: string;
      rank: number;
    }>;
  };
  index: number;
}

function ResumeCard({ resume, index }: ResumeCardProps) {
  const [hovered, setHovered] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60)
    );

    if (diffInHours < 24) {
      return `edited ${diffInHours}h ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `edited ${diffInDays}d ago`;
    }
  };

  return (
    <div
      className="relative w-[240px] h-[320px] rounded-2xl bg-white shadow-sm border transition-all duration-300 overflow-hidden group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Resume Preview */}
      <div className="w-full h-[75%] bg-gradient-to-r from-slate-900 to-slate-100 rounded-t-2xl"></div>

      {/* Resume Info */}
      <div className="px-3 py-2 flex justify-between items-center">
        <div>
          <h3 className="font-medium text-sm">{resume.title}</h3>
          <p className="text-xs text-gray-500">
            {formatDate(resume.updatedAt)} · A4
          </p>
        </div>
        <MoreVertical className="w-5 h-5 text-gray-500" />
      </div>

      {hovered && (
        <div className="rounded-2xl absolute inset-0 bg-white/40 backdrop-blur-sm flex flex-col justify-center items-center gap-6 text-center transition-all duration-300">
          <button className="text-sm font-semibold text-purple-900 hover:underline flex items-center gap-1">
            VIEW RESUME →
          </button>

          <div className="w-12 h-[1px] bg-gray-300"></div>

          <button className="text-sm font-semibold text-purple-900 hover:underline flex items-center gap-1">
            DUPLICATE <Copy className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
