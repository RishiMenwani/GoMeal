"use client";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import RightSidebar from "@/components/RightSidebar";

export default function Home() {
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
