"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link href="/" className="text-xl font-bold text-blue-500">
          Aditya.dev
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={
                  pathname === link.href
                    ? "text-blue-500 font-semibold"
                    : "text-gray-300 hover:text-white"
                }
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <ul className="flex flex-col gap-4 px-6 py-6">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={
                    pathname === link.href
                      ? "text-blue-500 font-semibold"
                      : "text-gray-300"
                  }
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
