"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

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
      return;
    }

    // Navigating to different page → store id first
    localStorage.setItem("scrollTo", id);
    router.push(targetPage);
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
    </header>
  );
};

export default Navbar;
