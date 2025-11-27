"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutABCPark = () => {
  const expectations = [
    "Architecturally designed, modern warehouse spaces",
    "High-clearance interiors suitable for multiple industries",
    "Excellent truck and vehicle access",
    "Secure, low-maintenance design",
    "Move-in-ready by late 2025",
    "Only 17 units — limited supply, increasing long-term value",
  ];

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    if (!section || !left || !right) return;

    // 🌟 Fade + Slide Left Items on Scroll
    gsap.from(left.querySelectorAll(".expect-item"), {
      opacity: 0,
      x: -40,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: left,
        start: "top 80%",
      },
    });

    // 🌟 Animate Heading & Paragraphs
    gsap.from(right.querySelectorAll(".right-animate"), {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: right,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-6 py-20 md:py-28 ">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start ">
        {/* LEFT SIDE — SCROLLS NATURALLY */}
        <div ref={leftRef} className="col-span-5 space-y-6 ">
          <div className="bg-brand p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 expect-item">
              What You Can Expect
            </h3>

            <div className="space-y-4 ">
              {expectations.map((text, index) => (
                <div key={index} className="flex items-start group expect-item">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 mr-4 group-hover:bg-brass transition-colors duration-300">
                    <svg
                      className="w-3.5 h-3.5 text-brass group-hover:text-white transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden lg:block col-span-1"></div>
        {/* RIGHT SIDE — STICKY */}
        <div ref={rightRef} className="col-span-5 lg:sticky lg:top-28 h-fit">
          <h2 className="right-animate text-3xl md:text-4xl lg:text-5xl font-light mb-8 text-light tracking-tight leading-tight">
            About <span className="font-semibold">Nexus Business Park</span>
          </h2>

          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <p className="right-animate">
              Nexus Business Park brings{" "}
              <strong className="text-brass">
                17 architecturally designed warehouses
              </strong>{" "}
              to Officer South, combining high-quality construction with a
              strategic position in Melbourne’s fastest-growing industrial
              pocket.
            </p>

            <p className="right-animate">
              With exceptional connectivity, strong surrounding growth, and
              limited warehouse availability, this is a rare chance to secure
              your place in a high-demand precinct.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutABCPark;
