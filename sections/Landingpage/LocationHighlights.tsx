"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LocationHighlights() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    if (!section || !cards) return;

    // 🟦 Clip-path reveal animation for background box
    gsap.fromTo(
      section,
      {
        clipPath: "inset(10% 10% 10% 10% round 0px)",
      },
      {
        clipPath: "inset(0% 0% 0% 0% round 0px)",
        ease: "power3.out",
        duration: 4,
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
          end: "top top",
          scrub: true,
        },
      }
    );

    // 🟧 Fade + rise cards animation
    gsap.from(cards.querySelectorAll(".card-item"), {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.18,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cards,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full bg-[#F1EEE7] py-20 px-4 md:px-12 lg:px-34 relative overflow-hidden"
    >
      {/* Heading */}
      <h1 className="text-[28px] md:text-[34px] lg:text-[38px] font-semibold text-[#333] leading-snug max-w-5xl card-item">
        Strategically positioned in the heart of Officer South’s emerging
        industrial corridor.
      </h1>

      <div ref={cardsRef}>
        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-8 rounded-3xl shadow-sm min-h-[160px] flex items-start card-item">
            <p className="text-[#333] text-[16px] leading-relaxed">
              1.5km from the Monash Freeway
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm min-h-[160px] flex items-start card-item">
            <p className="text-[#333] text-[16px] leading-relaxed">
              Prime Cardinia Road access
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm min-h-[160px] flex items-start card-item">
            <p className="text-[#333] text-[16px] leading-relaxed">
              Surrounded by major growth & development
            </p>
          </div>
        </div>

        {/* Bottom two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm min-h-[160px] flex items-start gap-4 card-item">
            <div className="w-10 h-10 rounded-full border flex items-center justify-center">
              <span className="text-xl">◇</span>
            </div>
            <p className="text-[#333] text-[16px] leading-relaxed">
              Future connectivity via Thompsons Road extension
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm min-h-[160px] flex items-start card-item">
            <p className="text-[#333] text-[16px] leading-relaxed">
              Close to essential local amenities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
