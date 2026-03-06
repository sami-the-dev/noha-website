"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "من أنا", href: "#about" },
  { label: "المؤهلات", href: "#qualifications" },
  { label: "المميزات", href: "#features" },
  { label: "الحلقات", href: "#classes" },
  { label: "الأسعار", href: "#pricing" },
  { label: "آراء أولياء الأمور", href: "#testimonials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D3B2E]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="site-container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#hero" className="flex flex-col leading-tight">
          <span className="text-[#E8C96A] font-bold text-lg font-display">
            نهى بدران
          </span>
          <span className="text-white/70 text-xs">معلمة قرآن كريم</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/85 hover:text-[#E8C96A] px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-white/10"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/201068413284"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ea855] text-white text-sm font-bold px-4 py-2 rounded-full transition-all duration-200 shadow-md"
        >
          <FaWhatsapp size={16} />
          تواصل معنا
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="فتح القائمة"
        >
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0D3B2E] border-t border-white/10 px-4 pb-4"
          >
            <nav className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-white/85 hover:text-[#E8C96A] px-3 py-2.5 rounded-md text-base font-medium transition-colors duration-200 hover:bg-white/10"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/201068413284"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 btn-whatsapp justify-center text-sm"
              >
                <FaWhatsapp size={16} />
                تواصل معنا على واتساب
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
