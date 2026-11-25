"use client";
import { Suspense, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function AppShell({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <div className="sticky top-0 z-30 h-16 bg-white px-4 flex items-center">
        <Navbar onMenuClick={() => setIsSidebarOpen((o) => !o)} />
      </div>
      <div className="flex">
        <Suspense
          fallback={<aside className="sticky top-16 h-[calc(100vh-4rem)] w-16" />}
        >
          <Sidebar isOpen={isSidebarOpen} />
        </Suspense>
        <main className="flex-1 min-w-0 p-4">{children}</main>
      </div>
    </>
  );
}
