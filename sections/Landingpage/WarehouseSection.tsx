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
          <div className="rounded-[32px] bg-brand p-10 min-h-[200px] sm:min-h-[260px] md:min-h-[420px] shadow-md">
            <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold text-slate leading-tight">
              Affordable <br /> Warehouse Space
            </h3>
            <p className="text-slate mt-4">
              Discover our affordable warehouse space options. Whether you're
              looking for a warehouse to store your inventory or a warehouse to
              rent out, we have the perfect space for you.
            </p>
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
