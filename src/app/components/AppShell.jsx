"use client";
import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function AppShell({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <div className="sticky top-0 bg-white p-2 z-10">
        <Navbar onMenuClick={() => setIsSidebarOpen((o) => !o)} />
      </div>
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </>
  );
}
