"use client";
import React from "react";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

export default function Navbar({
  darkMode,
  setDarkMode,
  activeSection,
  setActiveSection,
}: NavbarProps) {
  return (
    <nav
      className={`fixed top-0 w-full backdrop-blur-sm z-50 px-4 py-2 transition-colors duration-300 ${
        darkMode ? "bg-[#0A192F]/90" : "bg-white/90"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="text-3xl font-bold text-blue-500 animate-fade-in">
            ICIKIWIR
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {["UTAMA", "SAYA", "SKILL", "PROJEK", "KONTAK"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm transition-all duration-300 hover:text-blue-500 ${
                activeSection === item.toLowerCase()
                  ? "text-blue-500 scale-110"
                  : darkMode
                  ? "text-gray-300"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveSection(item.toLowerCase())}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Dark Mode Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
              darkMode
                ? "bg-gray-800 text-yellow-500"
                : "bg-gray-100 text-gray-600"
            }`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
