import React from "react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-center gap-2">
      <img
        src="https://sa.kapamilya.com/absnews/abscbnnews/media/2017/graphics/youtube-logo-2017.jpg"
        alt="YouTube"
        width={100}
      />
      <div className="text-sm border border-gray-300 rounded-full p-2">
        <input type="text" placeholder="Search" />
        <button className="hover:bg-gray-200">
          <span>S</span>
        </button>
      </div>
    </div>
  );
}
