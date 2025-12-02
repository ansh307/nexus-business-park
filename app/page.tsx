"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Hero from "@/sections/Landingpage/Hero";
import ABCParkInfo from "@/sections/Landingpage/ABCParkInfo";
import AboutABCPark from "@/sections/Landingpage/AboutABCPark";
import AffordableWarehouseSection from "@/sections/Landingpage/AffordableWarehouseSection";
import FeaturesSection from "@/sections/Landingpage/FeaturesSection";
import GSAPImageCarousel from "@/sections/Landingpage/GSAPImageCarousel";

import LocationHighlights from "@/sections/Landingpage/LocationHighlights";
import RoundedCityImage from "@/sections/Landingpage/RoundedCityImage";

import WarehouseShowcase from "@/sections/Landingpage/WarehouseSection";
import FooterWithForm from "@/sections/Landingpage/FooterWithForm";
import LimitedOpportunity from "@/sections/Landingpage/LimitedOpportunity";
import GSAPTestimonialCarousel from "@/sections/Landingpage/TestimonialSlide";
import DevelopmentOverview from "@/sections/Landingpage/DevelopmentOverview";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home() {
  const heroRef = useRef(null);
  const wrapperRef = useRef(null);
  const infoRef = useRef(null); // <-- NEW

  const testimonialWrapperRef = useRef(null);
  const testimonialRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const info = infoRef.current;
    const testimonial = testimonialWrapperRef.current;
    const footer = footerRef.current;
    // HERO SLIDES UP → REVEALS ABCParkInfo
    gsap.to(hero, {
      y: "-40vh", // amount hero moves up
      ease: "power2.out",
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // ABCParkInfo FADES IN FROM OPACITY 0 → 1
    gsap.fromTo(
      info,
      { opacity: 0 },
      {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "50% 50%",
          scrub: 1,
        },
      }
    );
  }, []);

  useEffect(() => {
    const id = localStorage.getItem("scrollTo");
    if (id) {
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 500);
      }
      localStorage.removeItem("scrollTo");
    }
  }, []);

  return (
    <main className="flex min-h-screen font-interBody-400 flex-col items-center justify-between">
      <div ref={wrapperRef} className="relative w-full overflow-hidden">
        {/* HERO */}
        <div ref={heroRef}>
          <Hero />
        </div>

        {/* ABC PARK INFO (slightly visible already) */}
        <div ref={infoRef} className="-mt-45 relative -z-10">
          <ABCParkInfo />
        </div>
      </div>
      <RoundedCityImage />
      <DevelopmentOverview />
      <AboutABCPark />
      {/* <GSAPImageCarousel /> */}
      {/* <FeaturesSection /> */}
      <LocationHighlights />
      {/* <RoundedCityImage />
      <AffordableWarehouseSection /> */}
      <WarehouseShowcase />
      {/* <LimitedOpportunity /> */}
      <GSAPTestimonialCarousel />

      {/* Scroll To Top Button */}
      <button
        id="scrollTopBtn"
        className="fixed bottom-10 right-10 z-[9999] w-12 h-12 rounded-full 
             bg-mattblack text-white 
             flex items-center justify-center shadow-xl 
             backdrop-blur-xl border border-white/20
             hover:scale-110 transition-all duration-300 cursor-pointer
             opacity-0 pointer-events-none"
      >
        <span className="text-2xl">↑</span>
      </button>
    </main>
  );
}
