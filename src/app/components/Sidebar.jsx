"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const sideBarItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Shorts",
      href: "/shorts",
    },
    {
      name: "Subscriptions",
      href: "/subscriptions",
    },
  ];

  return (
    <div className="relative w-16 shrink-0">
      <aside
        className={`bg-white absolute top-0 left-0 min-h-screen p-4 z-20 overflow-hidden
          transition-[width,box-shadow] duration-300 ease-in-out ${
            isOpen ? "w-64 shadow-lg" : "w-16"
          }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hover:cursor-pointer"
        >
          {isOpen ? "Close" : "Open"}
        </button>
        {isOpen && (
          <ul
            className={`mt-4 whitespace-nowrap transition-opacity duration-300 ${
              isOpen ? "opacity-100 delay-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {sideBarItems.map((item, index) => (
              <li
                key={index}
                className={`p-2 rounded-lg hover:bg-gray-100 hover:cursor-pointer
                 ${pathname === item.href ? "bg-gray-200" : ""}`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </aside>
    </div>
  );
}
