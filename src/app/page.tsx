"use client";

import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Sun, Moon, Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

const Portfolio = () => {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState("mobile");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const projects = [
    {
      id: 1,
      title: "Dating Mobile App Design",
      category: "mobile",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when lorem ipsum.",
      images: [
        "/api/placeholder/300/600",
        "/api/placeholder/300/600",
        "/api/placeholder/300/600",
      ],
    },
    {
      id: 2,
      title: "E-Commerce Mobile App Design",
      category: "mobile",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when lorem ipsum.",
      images: [
        "/api/placeholder/300/600",
        "/api/placeholder/300/600",
        "/api/placeholder/300/600",
      ],
    },
    {
      id: 3,
      title: "Fitness Mobile App Design",
      category: "mobile",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when lorem ipsum.",
      images: [
        "/api/placeholder/300/600",
        "/api/placeholder/300/600",
        "/api/placeholder/300/600",
      ],
    },
    {
      id: 4,
      title: "Modelling Mobile App Design",
      category: "mobile",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when lorem ipsum.",
      images: [
        "/api/placeholder/300/600",
        "/api/placeholder/300/600",
        "/api/placeholder/300/600",
      ],
    },
  ];

  const services = [
    {
      title: "VIDEO EDITING",
      description:
        "Saya bisa mengedit video, walaupun hasilnya ala kadar nya saja.",
      icon: "🎞️",
    },
    {
      title: "DESAINER",
      description: "Saya mampu membuat karya digital..... ( kalo dibayar )",
      icon: "🎴",
    },
    {
      title: "VIDEOGRAPHER & PHOTOGRAPHER",
      description: "Bisalah dikit dikit Fotoin/Videoin",
      icon: "🎥",
    },
    {
      title: "PROGRAMMING LANGUAGES",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry",
      icon: "💻",
    },
  ];

  const experiences = [
    { name: "blm", icon: "/api/placeholder/40/40" },
    { name: "blm", icon: "/api/placeholder/40/40" },
    { name: "blm", icon: "/api/placeholder/40/40" },
    { name: "blm", icon: "/api/placeholder/40/40" },
    { name: "blm", icon: "/api/placeholder/40/40" },
    { name: "blm", icon: "/api/placeholder/40/40" },
    { name: "blm", icon: "/api/placeholder/40/40" },

  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionId = section.getAttribute("id");

        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(sectionId || "");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-[#0A192F] text-white" : "bg-gray-50 text-white"
      }`}
    >
      {/* Animated Background Shapes */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 ${
          darkMode ? "bg-[#1A2942]" : "bg-white"
        } transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      ></div>

      {/* Hero Section */}
      <section id="utama" className="pt-56 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="animate-fade-in">
            <h1
              className={`text-3xl md:text-6xl font-bold mb-4 ${
                darkMode ? " text-white" : "text-blue-500"
              }`}
            >
              Aku Punya
            </h1>
            <h1 className={"text-4xl md:text-6xl font-bold mb-4"}>
              <span className="text-6xl md:text-8xl block mt-5 animate-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                SKILL <br />
                NANGGUNG <br />
                SEMUA<span className="text-blue-500">.</span>
              </span>
            </h1>
            <button className="mt-8 px-8 py-3 bg-blue-500 rounded-lg hover:pointer-events-none">
              Sedih Nyoooo
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="saya" className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group animate-fade-in">
            <div className="w-full aspect-square rounded-3xl overflow-hidden border-4 border-blue-500/20 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/p.JPG"
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
          <div>
            <h2
              className={`text-4xl font-bold mb-6 ${
                darkMode ? " text-white" : "text-blue-500"
              }`}
            >
              SIAPA AKU?
            </h2>
            <p className="text-gray-400 mb-8 text-2xl">
              Halo! Nama saya Adrian Adiputra.
              <br /> Saya lahir pada tanggal 27 Juni 2007. Saat ini, saya sedang
              menempuh pendidikan dan berfokus untuk mengembangkan diri di
              berbagai bidang yang saya minati, seperti [masukkan minat atau
              bidang studi Anda]. Saya selalu bersemangat untuk belajar hal-hal
              baru dan berusaha memberikan yang terbaik dalam setiap kesempatan
              yang ada.
            </p>
            <div className="flex gap-4">
              <Link href="/Resume">
                <button
                  className={`text-2xl px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors ${
                    darkMode ? "text-white" : "text-blue-500"
                  }`}
                >
                  LEBIH LENGKAP LAGI
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="skill" className="pt-36 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-2xl font-bold mb-12 ${
              darkMode ? " text-white" : "text-gray-600"
            }`}
          >
            SKILL
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#1A2942] p-6 rounded-2xl hover:scale-105 transition-transform"
              >
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="projek" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-2xl font-bold mb-12 ${
              darkMode ? " text-white" : "text-gray-600"
            }`}
          >
            PROJEK
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-8 gap-4">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="aspect-square rounded-xl bg-[#1A2942] p-4 flex items-center justify-center hover:scale-110 transition-transform"
              >
                <img
                  src={exp.icon}
                  alt={exp.name}
                  className="w-10 h-10 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 px-4 bg-[#1A2942] rounded-t-[3rem]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-12">KONTAK</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl mb-6">Sisipkan komentar </h3>
              <p className="text-gray-400 mb-8">
                bantu saya mengembangkan portofolio saya dengan mengirim kritik
                dan saran
              </p>
              <div className="space-y-4">
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-gray-400 hover:text-blue-400"
                >
                  <Phone size={20} />
                  +6283123132235
                </a>
                <a
                  href="adrianadiputra2720@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-blue-400"
                >
                  <Mail size={20} />
                  adrianadiputra2720@gmail.com
                </a>
                <p className="flex items-center gap-3 text-gray-400">
                  <MapPin size={20} />
                  Senin Sampai Minggu 24/1
                  <br />
                  10630, Jakarta
                </p>
              </div>
            </div>
            <div className="bg-[#0A192F] p-8 rounded-2xl">
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Nama"
                  className="w-full px-4 py-3 bg-[#1A2942] rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-[#1A2942] rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                />
                <textarea
                  placeholder="Pesan"
                  rows={4}
                  className="w-full px-4 py-3 bg-[#1A2942] rounded-lg focus:ring-2 focus:ring-blue-400 outline-none resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  Kirim <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
