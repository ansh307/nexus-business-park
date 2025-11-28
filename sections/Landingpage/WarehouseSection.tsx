"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function WarehouseShowcase() {
  const topImageRef = useRef<HTMLDivElement | null>(null);
  const bottomImageRef = useRef<HTMLDivElement | null>(null);

  // GSAP Hover Effect
  useEffect(() => {
    const topEl = topImageRef.current;
    const bottomEl = bottomImageRef.current;

    if (!topEl || !bottomEl) return;

    // Helper function for hover animation
    const addHoverAnimation = (element: HTMLElement) => {
      const img = element.querySelector("img");
      if (!img) return;

      const tl = gsap.timeline({ paused: true });
      tl.to(img, {
        scale: 1.07,
        duration: 0.7,
        ease: "power3.out",
      });

      element.addEventListener("mouseenter", () => tl.play());
      element.addEventListener("mouseleave", () => tl.reverse());
    };

    addHoverAnimation(topEl);
    addHoverAnimation(bottomEl);
  }, []);

  return (
    <section className="md:px-12 lg:px-34 section-dark py-28">
      <div className="mx-auto flex flex-col gap-14">
        {/* Top Large Image */}
        <div
          ref={topImageRef}
          className="w-full rounded-[32px] overflow-hidden shadow-lg cursor-pointer"
        >
          <div className="relative w-full h-[250px] sm:h-[380px] md:h-[480px] lg:h-[400px]">
            <Image
              src="/warehouse-6-new.png"
              alt="Modern Warehouse Space"
              fill
              priority
              className="object-cover will-change-transform"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-8">
          {/* Left Text Box */}
          <div className="rounded-[32px] bg-brand p-10 min-h-[200px] sm:min-h-[260px] md:min-h-[420px] shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-slate leading-tight">
                Download Brochure
              </h3>

              <p className="text-slate mt-4 max-w-md">
                Get the complete Nexus Business Park brochure with detailed
                plans, specifications, amenities, and investment opportunities.
              </p>
            </div>

            {/* CTA BUTTON */}
            <a
              href="/Nexus-Business-Park-Brochure.pdf" // update your actual brochure link
              download
              className="mt-8 inline-flex items-center gap-3 w-fit rounded-full bg-mattblack text-light px-6 py-3 text-sm font-medium shadow hover:shadow-md transition-all"
            >
              <span>Download Brochure</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
            </a>
          </div>

          {/* Right Image */}
          <div
            ref={bottomImageRef}
            className="rounded-[32px] overflow-hidden shadow-lg cursor-pointer"
          >
            <div className="relative w-full h-[250px] sm:h-[320px] md:h-[440px] lg:h-[520px]">
              <Image
                src="/warehouse-3-new.png"
                alt="Warehouse Exterior"
                fill
                className="object-cover will-change-transform"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
