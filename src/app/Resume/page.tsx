"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Sun, Moon } from "lucide-react";
import Navbar from "@/components/Navbar";

const ResumePage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-[#0A192F] text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Animated Background Shapes */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      {/* Content Wrapper */}
      <div className="pt-40 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-[#1A2942] shadow-lg rounded-lg transition-colors duration-300">
            <div className="p-8">
              {/* Header Section */}
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                {/* Profile Image */}
                <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-blue-500">
                  <img
                    src="/api/placeholder/200/200"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Basic Info */}
                <div className="flex-grow text-center md:text-left">
                  <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
                    Nama Lengkap
                  </h1>
                  <h2 className="text-2xl text-blue-500 mt-2">
                    Posisi / Jabatan
                  </h2>

                  {/* Contact Info */}
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <Mail className="w-5 h-5 text-blue-500" />
                      <span>email@example.com</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <Phone className="w-5 h-5 text-blue-500" />
                      <span>+62 123 4567 890</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                      <MapPin className="w-5 h-5 text-blue-500" />
                      <span>Kota, Provinsi</span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="mt-4 flex gap-4 justify-center md:justify-start">
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              {/* About Me Section */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white border-b-2 border-blue-500 pb-2">
                  Tentang Saya
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Tulis deskripsi singkat tentang diri Anda, pengalaman, dan
                  tujuan karir Anda di sini.
                </p>
              </div>

              {/* Education Section */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white border-b-2 border-blue-500 pb-2">
                  Pendidikan
                </h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                      Nama Universitas
                    </h4>
                    <p className="text-blue-500">Jurusan / Program Studi</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      2020 - 2024
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      IPK: 3.XX
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills Section */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white border-b-2 border-blue-500 pb-2">
                  Keahlian
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-600 text-blue-600 dark:text-white rounded-full">
                    React
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-600 text-blue-600 dark:text-white rounded-full">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-600 text-blue-600 dark:text-white rounded-full">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-600 text-blue-600 dark:text-white rounded-full">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-600 text-blue-600 dark:text-white rounded-full">
                    Tailwind CSS
                  </span>
                </div>
              </div>

              {/* Experience Section */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white border-b-2 border-blue-500 pb-2">
                  Pengalaman
                </h3>
                <div className="mt-4 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                      Posisi
                    </h4>
                    <p className="text-blue-500">Nama Perusahaan</p>
                    <p className="text-gray-600 dark:text-gray-300">
                      2022 - Sekarang
                    </p>
                    <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300">
                      <li>Deskripsi pencapaian dan tanggung jawab 1</li>
                      <li>Deskripsi pencapaian dan tanggung jawab 2</li>
                      <li>Deskripsi pencapaian dan tanggung jawab 3</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
