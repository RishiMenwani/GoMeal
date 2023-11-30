"use client";
import RightSidebar from "@/components/RightSidebar";
import Sidebar from "@/components/Sidebar";
import { getCsrfToken, useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data, status } = useSession();
  const csrf = getCsrfToken();
  console.log("__csrf", csrf);
  console.log("__data", data);
  console.log("__status", status);
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-6/12"></div>
      <div className="w-3/12 h-full relative bg-white">
        <RightSidebar />
      </div>
    </div>
  );
}
