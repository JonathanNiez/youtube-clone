"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function About() {
  const router = useRouter();

  return (
    <div
      className="flex flex-1 flex-col justify-center items-center
  bg-blue-200"
    >
      <div
        className="bg-blue-500 py-4 px-6 
      rounded-lg shadow border border-blue-600"
      >
        <p className="text-lg font-bold text-center">About</p>
        <img
          className="w-64 rounded-full shadow-lg"
          src="https://avatars.fastly.steamstatic.com/72e44af2e6e31debaa0cd0ca20d36ee7d6eeb4ba_full.jpg"
        />
      </div>
      <button
        onClick={() => router.back()}
        className="bg-blue-400 py-2 px-4 rounded-4xl shadow mt-4"
      >
        Back to Home
      </button>
    </div>
  );
}
