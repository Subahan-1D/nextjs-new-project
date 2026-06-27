"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Products", href: "/products" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            NextApp
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-700 font-medium transition duration-300 hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className="rounded-full bg-blue-600 px-4  text-white font-medium transition hover:bg-blue-700 hover:scale-105"
            >
              Login
            </Link>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-gray-700 font-medium hover:text-blue-600 transition"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="bg-blue-600 text-white rounded-lg py-3 text-center hover:bg-blue-700 transition"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;