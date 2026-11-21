"use client";
import React, { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  return <div className={isOpen ? "w-64 bg-gray-100 p-4" : "w-16 bg-gray-100 p-4"}>Sidebar</div>;
}
