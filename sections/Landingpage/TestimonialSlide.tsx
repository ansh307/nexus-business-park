"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { testimonialsData } from "@/constants";

interface TestimonialSlideProps {
  quote: string;
  name: string;
  title: string;
  profileImg: string;
}

const TestimonialSlide = ({
  quote,
  name,
  title,
  profileImg,
}: TestimonialSlideProps) => {
  const renderQuote = (text: string) => {
    const parts = text.split("**");
    return parts.map((part, index) =>
      index % 2 === 1 ? (
        <strong key={index} className="font-semibold text-[#0D1B2A]">
          {part}
        </strong>
      ) : (
        part
      )
    );
  };

  return (
    <div className="w-full flex flex-col justify-center gap-8 md:min-h-[40vh] lg:min-h-[60vh] ">
      {/* Quote */}
      <div className="relative text-[#0D1B2A] px-2 sm:px-4">
        <span className="absolute -top-6 left-0 text-5xl sm:text-6xl md:text-7xl font-extrabold opacity-30">
          “
        </span>

        <p className="text-xl sm:text-2xl md:text-[32px] leading-snug sm:leading-snug md:leading-tight font-light mt-8 tracking-wide">
          {renderQuote(quote)}
        </p>

        <span className="absolute -bottom-6 right-0 text-5xl sm:text-6xl md:text-7xl font-extrabold opacity-30">
          ”
        </span>
      </div>

      {/* Profile */}
      <div className="flex items-center gap-4 mt-4">
        <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border border-black/20 shadow-lg">
          <Image
            src={profileImg}
            alt={name}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>

        <div>
          <p className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-wide text-[#0D1B2A]">
            {name}
          </p>
          <p className="text-xs sm:text-sm md:text-base text-[#374151]">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

const GSAPTestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(
      () => setActiveIndex((prev) => (prev + 1) % testimonialsData.length),
      4500
    );
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        xPercent: -(100 / testimonialsData.length) * activeIndex,
        duration: 0.7,
        ease: "power2.out",
      });
    });
    return () => ctx.revert();
  }, [activeIndex]);

  return (
    <div className="w-full py-16 bg-ivory">
      <div className=" mx-auto px-6 md:px-12 lg:px-34">
        <div className=" mx-auto">
          {/* Slides */}
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex"
              style={{ width: `${testimonialsData.length * 100}%` }}
            >
              {testimonialsData.map((t) => (
                <div
                  key={t.id}
                  className="px-4"
                  style={{ width: `${100 / testimonialsData.length}%` }}
                >
                  <TestimonialSlide {...t} />
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-10 space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 
                ${
                  index === activeIndex
                    ? "w-8 bg-mattblack"
                    : "w-2 bg-transparent border border-[#0D1B2A]"
                }
              `}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GSAPTestimonialCarousel;
