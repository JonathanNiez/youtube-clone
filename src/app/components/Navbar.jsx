import Link from "next/link";
import React from "react";

export default function Navbar({ onMenuClick }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <button onClick={onMenuClick} className="w-6 h-6 hover:cursor-pointer">
          <img src="/icons/menu.svg" alt="Menu" />
        </button>
        <Link href="/">
          <img
            src="https://sa.kapamilya.com/absnews/abscbnnews/media/2017/graphics/youtube-logo-2017.jpg"
            alt="YouTube"
            width={100}
          />
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex w-full text-sm border border-gray-300">
          <input type="text" placeholder="Search" className="p-2" />
          <button className="hover:bg-gray-200">
            <img src="/icons/search.svg" alt="Search" width={20} />
          </button>
        </div>
        <img
          src="/icons/mic.png"
          width={15}
          height={15}
          alt="mic"
          className="bg-gray-100 p-4 rounded-full text-center hover:bg-gray-200 cursor-pointer"
        />
        <div
          className="flex gap-2 items-center justify-center h-4 
        bg-gray-100 p-4 rounded-full text-center hover:bg-gray-200 cursor-pointer"
        >
          <img src={"/icons/plus.png"} width={15} height={15} />
          <span>Create</span>
        </div>
        <img
          src={"/icons/bell.svg"}
          alt="bell"
          className=" 
        rounded-full text-center hover:bg-gray-200 cursor-pointer"
          width={25}
          height={25}
        />
        <img
          src={"/images/pfp.jpg"}
          alt="profile"
          className="w-8 h-8 rounded-full hover:bg-gray-200 cursor-pointer"
        />
      </div>
    </div>
  );
}
