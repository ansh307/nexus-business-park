"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { developmentOverviewSections } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

const DevelopmentOverview = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // IMAGE BLOCKS
      const imageBlocks = gsap.utils.toArray<HTMLElement>(".overview-image");

      imageBlocks.forEach((img) => {
        gsap.from(img, {
          opacity: 0,
          y: 80,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // TEXT WRAPPERS
      const textWrappers = gsap.utils.toArray<HTMLElement>(".overview-text");

      textWrappers.forEach((wrapper) => {
        const items = wrapper.querySelectorAll(".text-animate");

        gsap.from(items, {
          opacity: 0,
          y: 100,
          stagger: 0.12,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapper,
            start: "top 90%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white py-20 md:py-28 font-sans"
    >
      <div className="w-full mx-auto px-6 md:px-12 lg:px-34">
        {/* Section Heading */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-[11px] md:text-lg font-bold uppercase tracking-[0.25em] text-gray-500">
            Development Overview
          </h2>
        </div>

        <div className="flex flex-col gap-20 md:gap-32">
          {developmentOverviewSections.map((section, index) => (
            <div
              key={index}
              className={`overview-block flex flex-col ${
                section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-10 md:gap-16 lg:gap-24`}
            >
              {/* IMAGE SIDE */}
              <div className="w-full lg:w-1/2">
                <div
                  className={`overview-image relative aspect-[4/4] ${
                    section.reverse ? "ml-18" : "mr-18"
                  } overflow-hidden rounded-[30px] `}
                >
                  <Image
                    src={section.image}
                    alt={section.imageAlt}
                    fill
                    className={index === 2 ? "object-cover" : "object-fill"}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* TEXT SIDE */}
              <div
                className={`overview-text w-full lg:w-2/5 py-3 ${
                  section.reverse ? "mr-auto" : "ml-auto"
                }`}
              >
                <h3 className="text-animate text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 mb-6 leading-tight">
                  {section.title.split("—").map((part, i) => (
                    <span key={i}>
                      {i === 1 ? (
                        <>
                          <br />
                          &mdash;
                          <span className="font-semibold">{part}</span>
                        </>
                      ) : (
                        part
                      )}
                    </span>
                  ))}
                </h3>

                <p className="text-animate text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                  {section.description}
                </p>

                <button className="text-animate group inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900 transition-all hover:bg-gray-900 hover:text-white hover:border-gray-900">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentOverview;
