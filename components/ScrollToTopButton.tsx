"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function ScrollToTopButton() {
  useEffect(() => {
    const btn = document.getElementById("scrollTopBtn") as HTMLButtonElement;

    if (!btn) return;

    // Start hidden
    gsap.set(btn, { autoAlpha: 0, pointerEvents: "none" });

    // Show when user scrolls down
    const trigger = ScrollTrigger.create({
      start: "top+=300 top", // show after 300px scroll
      onEnter: () => {
        gsap.to(btn, {
          autoAlpha: 1,
          duration: 0.4,
          ease: "power2.out",
          onStart: () => {
            btn.style.pointerEvents = "auto";
          },
        });
      },
      onLeaveBack: () => {
        gsap.to(btn, {
          autoAlpha: 0,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            btn.style.pointerEvents = "none";
          },
        });
      },
    });

    // Scroll to top on click
    const handleClick = () => {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: 0 },
        ease: "power3.inOut",
      });
    };

    btn.addEventListener("click", handleClick);

    return () => {
      btn.removeEventListener("click", handleClick);
      trigger.kill();
    };
  }, []);

  return (
    <button
      id="scrollTopBtn"
      className="
        fixed bottom-10 right-10 z-[9999] w-12 h-12 rounded-full
        bg-mattblack text-white flex items-center justify-center
        shadow-xl backdrop-blur-xl border border-white/20
        hover:scale-110 transition-all duration-300 cursor-pointer
        opacity-0 pointer-events-none
      "
    >
      <span className="text-2xl">↑</span>
    </button>
  );
}
