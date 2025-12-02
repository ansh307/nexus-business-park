"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { warehouseData } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

export default function WarehousesPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // HEADER fade + slight rise
      gsap.from(".warehouses-header", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // EACH warehouse block reveals on scroll
      gsap.utils.toArray(".overview-block").forEach((block: any) => {
        gsap.from(block, {
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: block,
            start: "top 85%",
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen w-full bg-mattblack text-light">
      <main className=" mx-auto px-6 md:px-12 lg:px-34 py-16 lg:py-28 space-y-36">
        {/* HEADER */}
        <section className="flex lg:flex-row flex-col gap-10 lg:gap-0 justify-between warehouses-header">
          <div className="order-2 lg:order-1 space-y-6 ">
            <p className="text-muted font-medium uppercase tracking-[0.25em] text-sm">
              Officer South · Industrial Precinct
            </p>

            <h1 className="text-5xl font-semibold tracking-tight">
              Nexus Business Park <br />
              <span className="text-muted">– 12 Premium Warehouses</span>
            </h1>

            <p className="text-muted max-w-2xl leading-relaxed">
              A modern collection of 12 warehouses designed for growing
              businesses. Featuring high-clearance storage, first-floor offices,
              secure roller access, and clean contemporary architecture.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-xl mt-14">
              <Stat label="Total Area" value="3913.4 m²" />
              <Stat label="Warehouses" value="12 Units" />
              <Stat label="Site Coverage" value="73.6%" />
            </div>
          </div>

          {/* back button */}
          <div className="order-1 lg:order-2 h-fit flex  justify-end">
            <Link
              href="/"
              className="inline-flex items-center justify-end gap-2 bg-[#1a1a1a] text-light px-5 py-3 rounded-full text-sm hover:bg-light hover:text-dark transition-all w-fit"
            >
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
                className="transition-transform group-hover:translate-x-1 rotate-180"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
              Back to Home
            </Link>
          </div>
        </section>

        {/* WAREHOUSE SECTIONS */}
        <div className="flex flex-col gap-20 md:gap-32 ">
          {warehouseData.map((item, index) => {
            const isReversed = index % 2 !== 0;
            const total = item.wh + item.office;

            return (
              <div
                key={item.id}
                className={`${
                  index === 0 ? "" : "overview-block"
                } flex flex-col ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-10 md:gap-16 lg:gap-24`}
              >
                {/* IMAGE SIDE */}
                <div className="w-full lg:w-1/2">
                  <div
                    className={`overview-image relative aspect-[4/4] ${
                      isReversed ? "sm:ml-18" : "sm:mr-18"
                    } overflow-hidden rounded-[30px]`}
                  >
                    <Image
                      src={item.imagePath}
                      alt={`Warehouse ${item.id}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* TEXT SIDE */}
                <div
                  className={`overview-text w-full lg:w-2/5 py-3 ${
                    isReversed ? "mr-auto" : "ml-auto"
                  }`}
                >
                  {/* HEADING */}
                  <h3 className="text-animate font-medium text-2xl md:text-3xl lg:text-4xl text-light mb-6 leading-tight">
                    Warehouse {item.id}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-animate text-muted text-base md:text-lg leading-relaxed mb-8">
                    {item.description}
                  </p>

                  {/* DETAILS */}
                  <div className="space-y-3 text-muted md:text-lg text-base leading-relaxed">
                    <p>• Warehouse Area: {item.wh} m²</p>
                    <p>• Office Area: {item.office} m²</p>
                    <p>• Total Area: {total.toFixed(1)} m²</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-muted text-xs uppercase tracking-wide">{label}</p>
      <p className="text-light text-lg font-medium">{value}</p>
    </div>
  );
}
