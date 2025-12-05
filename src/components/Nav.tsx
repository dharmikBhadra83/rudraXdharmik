"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      title: "Product",
      items: [
        { label: "Real-time STT", href: "/product/real-time" },
        { label: "Batch STT", href: "/product/async-transcription" },
        { label: "Solaria Model", href: "/solaria" },
      ],
    },
    {
      title: "Solutions",
      items: [
        { label: "Customer Experience", href: "/use-cases/customer-experience" },
        { label: "Sales Enablement", href: "/use-cases/sales-enablement" },
        { label: "Meeting Assistants", href: "/use-cases/meeting-assistants" },
        { label: "Media", href: "/use-cases/media" },
      ],
    },
    {
      title: "Developers",
      items: [
        { label: "Playground", href: "https://app.gladia.io/signup" },
        { label: "Documentation", href: "https://docs.gladia.io/" },
        { label: "Discord", href: "https://discord.com/invite/UUd79ckzz9" },
        { label: "Status", href: "https://status.gladia.io/" },
      ],
    },
    {
      title: "Resources",
      items: [
        { label: "Blog", href: "/blog" },
        { label: "Library", href: "/library" },
        { label: "Whisper TCO Calculator", href: "/build-vs-buy-whisper" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About us", href: "/about-us" },
        { label: "Careers", href: "/careers" },
        { label: "Press", href: "/press" },
      ],
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "backdrop-blur-xl bg-black/40" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 lg:px-16 py-4">
        {/* LOGO */}
        <Link href="/" className="font-bold text-xl text-white">
          Gladia
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex gap-10 text-white">
          {navItems.map((menu) => (
            <div
              key={menu.title}
              className="relative"
              onMouseEnter={() => setOpenMenu(menu.title)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="hover:text-gray-300 transition">
                {menu.title}
              </button>

              <AnimatePresence>
                {openMenu === menu.title && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute left-0 mt-3 bg-[#0b0b0f] shadow-lg rounded-xl p-4 border border-white/10 min-w-[240px]"
                  >
                    {menu.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block p-2 rounded-md text-sm hover:bg-white/10"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="hidden lg:flex gap-4">
          <Link
            href="/demo-request"
            className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20"
          >
            Request a demo
          </Link>
          <Link
            href="/signup"
            className="px-5 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200"
          >
            Sign up
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden text-white text-3xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="lg:hidden bg-[#0b0b0f] text-white px-6 pb-6"
          >
            {navItems.map((menu) => (
              <div key={menu.title} className="border-b border-white/10 py-3">
                <button
                  onClick={() =>
                    setOpenMenu(openMenu === menu.title ? null : menu.title)
                  }
                  className="flex justify-between w-full text-left text-lg"
                >
                  {menu.title}
                  <span>{openMenu === menu.title ? "−" : "+"}</span>
                </button>

                <AnimatePresence>
                  {openMenu === menu.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col gap-2 mt-3 pl-2"
                    >
                      {menu.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block text-sm text-gray-300"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/demo-request"
                className="px-4 py-2 rounded-full bg-white/10 border border-white/20"
              >
                Request a demo
              </Link>
              <Link
                href="/signup"
                className="px-5 py-2 rounded-full bg-white text-black font-semibold"
              >
                Sign up
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
