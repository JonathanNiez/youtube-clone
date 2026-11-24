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
      icon: "/icons/shorts.svg",
      link: "/shorts",
    },
  ];

  const subscriptions = [
    {
      name: "Channel 1",
    },
    {
      name: "Channel 2",
    },
    {
      name: "Channel 3",
    },
  ];

  const youItems = [
    { name: "Your Channel", icon: "" },
    { name: "History", icon: "" },
    { name: "Playlists", icon: "" },
    { name: "Watch Later", icon: "" },
    { name: "Liked Videos", icon: "" },
    { name: "Your Videos", icon: "" },
    { name: "Downloads", icon: "" },
  ];

  return (
    <aside
      className={`sticky top-16 self-start h-[calc(100vh-4rem)] shrink-0 z-50
        overflow-x-hidden overflow-y-auto bg-white p-2
        transition-[width] duration-300 ease-in-out ${
          isOpen ? "w-60" : "w-16"
        }`}
    >
      <ul className="flex flex-col gap-1 whitespace-nowrap">
        {sideBarItems.map((item) => (
          <li key={item.link}>
            <Link
              href={item.link}
              className={`flex items-center justify-start gap-3 p-3 rounded-lg hover:bg-gray-100 ${
                pathname === item.link ? "bg-gray-200" : ""
              }`}
            >
              <img width="20" height="20" src={item.icon} alt={item.name} />
              {isOpen && <span>{item.name}</span>}
            </Link>
          </li>
        ))}
      </ul>

      <div className="my-4 border-t border-gray-400" />

      <div>
        <h3 className="font-semibold mb-2">Subscriptions</h3>

        <ul className="flex flex-col gap-1 whitespace-nowrap">
          {subscriptions.map((sub) => (
            <li key={sub.name}> 
              <a
                href="#"
                className={`flex items-center justify-start gap-3 p-3 rounded-lg hover:bg-gray-100`}
              >
                <img width="20" height="20" src={sub.icon} alt={sub.name} />
                {isOpen && <span>{sub.name}</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="my-4 border-t border-gray-400" />

      <div>
        <h3 className="font-semibold mb-2">You</h3>

        <ul className="flex flex-col gap-1 whitespace-nowrap">
          {youItems.map((item) => (
            <li key={item.name}>
              <a
                href="#"
                className={`flex items-center justify-start gap-3 p-3 rounded-lg hover:bg-gray-100`}
              >
                <img width="20" height="20" src={item.icon} alt={item.name} />
                {isOpen && <span>{item.name}</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="my-4 border-t border-gray-400" />

      <div>
        <h3 className="font-semibold mt-4 mb-2">Explore</h3>
      </div>
    </aside>
  );
}
