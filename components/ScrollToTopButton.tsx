"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setIsVisible(y > 300); // show after 300px
    };

    // Run once on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: 0 },
      ease: "power3.inOut",
    });
  };

  return (
    <button
      onClick={handleClick}
      className={`
        fixed bottom-10 right-10 z-[9999] w-12 h-12 rounded-full
        bg-mattblack text-white flex items-center justify-center
        shadow-xl backdrop-blur-xl border border-white/20
        hover:scale-110 transition-all duration-300 cursor-pointer
        ${
          isVisible
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none translate-y-4"
        }
      `}
    >
      <span className="text-2xl">↑</span>
    </button>
  );
}
