"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState("");
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-gray-800 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-blue-500">
              Aditya.dev
            </h2>
            <p className="text-gray-400 mt-2 max-w-sm">
              MERN Stack & Laravel Developer building modern and scalable web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-amber-400 mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-white">Home</a>
              </li>
              <li>
                <a href="/projects" className="hover:text-white">Projects</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-amber-400 mb-3">Connect</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="https://github.com/branded1001" target="_blank" className="hover:text-white">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/aditya-mourya-85593035b/" target="_blank" className="hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:adiryamaurya1001@gmail.com" className="hover:text-white">
                  Email
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          © {year || ""} Aditya Mourya. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
