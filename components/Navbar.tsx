"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Scroll or navigate
  const scrollOrNavigate = (id: string, targetPage: string = "/") => {
    if (pathname === targetPage) {
      // Already on the page → just scroll
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
      setIsMenuOpen(false); // Close menu after navigation
      return;
    }

    // Navigating to different page → store id first
    localStorage.setItem("scrollTo", id);
    router.push(targetPage);
    setIsMenuOpen(false); // Close menu after navigation
  };

  const handleLinkClick = (action: () => void) => {
    action();
    setIsMenuOpen(false);
  };

  return (
    <header
      className="
        absolute top-0 left-0 w-full
        bg-transparent 
        flex items-center justify-between
        py-6 md:py-8
        px-6 md:px-12 lg:px-24
        z-30
      "
    >
      <button
        onClick={() => router.push("/")}
        className="text-xl font-light tracking-wide md:text-2xl uppercase"
      >
        Nexus
      </button>

      {/* Hamburger Icon for Mobile */}
      {isMobile ? (
        <>
          {/* Overlay */}
          {isMenuOpen && (
            <div
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            ></div>
          )}

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-50 text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>

          {/* Mobile Menu */}
          <nav
            className={`fixed top-0 right-0 h-full w-64 bg-black/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out z-50 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <ul className="flex flex-col items-start gap-8 uppercase text-white pt-24 px-8">
              <li>
                <button
                  onClick={() =>
                    handleLinkClick(() => router.push("/warehouses"))
                  }
                  className="cursor-pointer text-lg hover:text-gray-300 transition-colors"
                >
                  Warehouses
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollOrNavigate("brochure-section")}
                  className="cursor-pointer text-lg hover:text-gray-300 transition-colors"
                >
                  Brochure
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollOrNavigate("about-section")}
                  className="cursor-pointer text-lg hover:text-gray-300 transition-colors"
                >
                  About
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleLinkClick(() => router.push("/contact"))}
                  className="cursor-pointer text-lg hover:text-gray-300 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </>
      ) : (
        // Desktop Navigation
        <nav>
          <ul className="flex text-sm sm:text-base items-center gap-6 sm:gap-8 uppercase text-white">
            <li>
              <button
                onClick={() => router.push("/warehouses")}
                className="cursor-pointer"
              >
                Warehouses
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollOrNavigate("brochure-section")}
                className="cursor-pointer"
              >
                Brochure
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollOrNavigate("about-section")}
                className="cursor-pointer"
              >
                About
              </button>
            </li>

            <li>
              <button
                onClick={() => router.push("/contact")}
                className="cursor-pointer"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
