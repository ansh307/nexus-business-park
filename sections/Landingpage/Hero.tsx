"use client";
import Link from "next/link";
import gsap from "gsap";
import { useEffect, useRef } from "react";

import Navbar from "@/components/Navbar";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-title",
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          ease: "power4.out",
        }
      );

      gsap.fromTo(
        ".hero-nexus",
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          delay: 0.3,
          ease: "power4.out",
        }
      );

      gsap.fromTo(
        ".hero-enquiry-cta",
        {
          y: 0,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 2,
          delay: 1,
          ease: "power4.out",
        }
      );
    }, heroRef);

    return () => ctx.revert(); // cleanup on hot reload/unmount
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-[110vh] w-full overflow-hidden section-dark"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-section-new.png"
          alt="Warehouse"
          className="absolute inset-0 h-full w-full object-cover rounded-b-[80px]"
        />
        {/* <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-900 to-gray-800 opacity-80" /> */}
      </div>

      <div className="absolute inset-0 z-0 bg-black/15 rounded-b-[80px] " />

      <Navbar />
      <div className="relative z-10 flex h-full flex-col px-6 md:px-12 lg:px-24  ">
        {/* Main Content */}
        <div className="flex flex-1 flex-col items-center justify-center text-center  pb-20 px-10 ">
          <div className="leading-tight max-w-4xl   overflow-hidden">
            <h1 className="hero-title max-w-4xl text-5xl font-bold font-interTight-700  tracking-tight md:text-6xl lg:text-7xl opacity-0">
              Warehouse Architecture
            </h1>
          </div>
          <div className="leading-tight max-w-4xl overflow-hidden">
            <h1 className="hero-nexus text-5xl md:text-6xl lg:text-[100px] font-bold font-interTight-700  tracking-wide  opacity-0">
              NEXUS
            </h1>
          </div>

          {/* <p className="mt-6 max-w-2xl text-lg text-gray-200 md:text-xl">
            Premium strata warehouses in the heart of Officer South's
            fastest-growing industrial precinct.
          </p> */}

          <div className="hero-enquiry-cta mt-10 opacity-0">
            <Link
              href="/contact"
              className="group flex items-center gap-3 border border-light rounded-full  px-8 py-3 text-base font-semibold transition-all hover:bg-white hover:text-black"
            >
              Enquire Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
            </Link>
          </div>
        </div>

        {/* Quote Icon (Bottom Right) */}
        {/* <div className="absolute bottom-20 right-6 md:bottom-24 md:right-12 lg:right-24">
          <Image
            src="/hero-section-canva.svg"
            width={200}
            height={200}
            alt="hero-section-canva"
            className=""
          />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
