"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RoundedCityImage = () => {
  const imgWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = imgWrapperRef.current;
    if (!element) return;

    gsap.fromTo(
      element,
      { scale: 0.75 },
      {
        scale: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top bottom", // when it enters viewport
          end: "top top", // when it reaches center
          scrub: true, // smooth scrubbing, super smooth
        },
      }
    );
  }, []);

  return (
    <div className="w-full max-w-[1350px]  mx-auto px-4 sm:px-6 md:px-12 py-6 md:py-12">
      <div
        ref={imgWrapperRef}
        className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh]
                   rounded-[20px] md:rounded-[30px] overflow-hidden shadow-2xl"
      >
        <img
          src="/warehouse-1.png"
          alt="Modern city buildings"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default RoundedCityImage;
