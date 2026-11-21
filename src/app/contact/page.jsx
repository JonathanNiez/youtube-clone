"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Contact() {
  const router = useRouter();

  return (
    <div
      className="flex flex-1 
        justify-center items-center"
    >
      <div
        className="flex flex-col bg-gray-300 border-gray-400
        py-4 px-6 
        rounded-lg shadow border"
      >
        <p className="font-bold text-2xl text-center">Contact</p>
        <p className="text-lg mb-4">Gmail: jonathan.niez@hcdc.edu.ph</p>
        <button
          onClick={() => router.back()}
          className="bg-blue-400 py-2 px-4 rounded-4xl shadow"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
