"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function Sidebar({ isOpen }) {
  const pathname = usePathname();

  const sideBarItems = [
    {
      name: "Home",
      icon: "/icons/home.svg",
      link: "/",
    },
    {
      name: "Shorts",
      link: "/shorts",
    },
    {
      name: "Subscriptions",
      link: "/subscriptions",
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
        {isOpen && (
          <ul
            className={`flex flex-col gap-2 mt-4 w-full whitespace-nowrap transition-opacity duration-300 ${
              isOpen ? "opacity-100 delay-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {sideBarItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className={`p-2 rounded-lg hover:bg-gray-100 hover:cursor-pointer
                 ${pathname === item.link ? "bg-gray-200" : ""}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </aside>
    </div>
  );
}
