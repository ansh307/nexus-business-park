"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Prime Cardinia Road Position",
    description: "Only minutes to the Monash Freeway.",
  },
  {
    title: "Versatile Usage",
    description: "Ideal for business operations or storage.",
  },
  {
    title: "Dedicated Car Parking",
    description: "Each warehouse includes minimum 3 car parks.",
  },
  {
    title: "High-Growth Precinct",
    description:
      "Demand for industrial space in the South East is skyrocketing.",
  },
  {
    title: "Premium Architectural Design",
    description:
      "Modern façades, high internal clearance, high-quality finishes.",
  },
  {
    title: "Exclusive Development",
    description: "The only strata warehouses approved in this booming area.",
  },
];

export default function ABCParkInfo() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll(".wwa-content");

    items.forEach((item) => {
      const innerParts = item.querySelectorAll(".wwa-part");

      gsap.from(innerParts, {
        xPercent: -100,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  return (
    <div ref={sectionRef} className="w-full bg-white py-10 md:py-16">
      <div className=" mx-auto px-4 md:px-34 font-sans">
        {/* Header */}
        <div className="mb-10 md:mb-12">
          <p
            className="
              text-lg sm:text-xl md:text-[22px] lg:text-[24px] xl:text-[35px]
              text-gray-800/90 leading-normal font-geist-sans
            "
          >
            Nexus Business Park is the first and only premium strata warehouse
            development in this <span className="italic">high-growth</span>{" "}
            precinct, delivering exceptional{" "}
            <span className="italic">accessibility</span>, modern architectural
            design, and strong long-term potential.
          </p>
        </div>

        {/* Section Label */}
        <div className="mb-5 md:mb-10 mt-40">
          <h2 className="text-[11px] md:text-lg font-bold uppercase tracking-[0.25em] text-gray-500">
            Why Choose Us?
          </h2>
        </div>

        {/* Features Grid */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            gap-4 md:gap-5 lg:gap-6
          "
        >
          {features.map((f) => (
            <div
              key={f.title}
              className="
                rounded-xl pr-4 py-4 md:pr-5 md:py-5
                transition-all duration-200
              "
            >
              <div className="flex items-start gap-6">
                {/* Diamond Icon */}
                <div className="mt-1">
                  <div className="w-3.5 h-3.5 md:w-4 md:h-4 border-2 border-gray-400 rotate-45"></div>
                </div>

                {/* ANIMATED CONTENT */}
                <div className="overflow-hidden z-10 wwa-content">
                  <h3 className="wwa-part text-base md:text-[17px] font-semibold text-gray-900">
                    {f.title}
                  </h3>

                  <p className="wwa-part text-sm text-gray-600 mt-2 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
