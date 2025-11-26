import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-white text-white">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-section.png"
          alt="Warehouse"
          className="absolute inset-0 h-full w-full object-cover rounded-b-[80px]"
        />
        {/* <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-blue-900 to-gray-800 opacity-80" /> */}
      </div>

      <div className="absolute inset-0 z-0 bg-black/15 rounded-b-[80px] " />

      <div className="relative z-10 flex h-full flex-col px-6 md:px-12 lg:px-24  ">
        <header className="flex w-full items-center justify-between py-6 md:py-8">
          <div className="text-xl font-semibold tracking-wide md:text-2xl">
            Nexus Business Park
          </div>
          <button className="group flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-medium backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/50">
            Contact Us
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
        </header>

        {/* Main Content */}
        <div className="flex flex-1 flex-col justify-center pb-20 px-10">
          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Where Growth <br />
            Meets Opportunity
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-200 md:text-xl">
            Premium strata warehouses in the heart of Officer South's
            fastest-growing industrial precinct.
          </p>

          <div className="mt-10">
            <button className="group flex items-center gap-3 rounded-full border border-white px-8 py-3 text-base font-semibold transition-all hover:bg-white hover:text-black">
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
            </button>
          </div>
        </div>

        {/* Quote Icon (Bottom Right) */}
        <div className="absolute bottom-10 right-6 md:bottom-16 md:right-12 lg:right-24">
          <Image
            src="/hero-section-canva.svg"
            width={200}
            height={200}
            alt="hero-section-canva"
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
