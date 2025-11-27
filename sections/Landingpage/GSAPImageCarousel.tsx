"use client";
import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";

interface ImageItem {
  id: number;
  src: string;
  alt: string;
}

const GSAPImageCarousel: React.FC = () => {
  const originalImages: ImageItem[] = [
    { id: 1, src: "/warehouse-1.png", alt: "Modern cityscape one" },
    { id: 2, src: "/warehouse-2.png", alt: "Modern cityscape two" },
    { id: 3, src: "/warehouse-3.png", alt: "Modern cityscape three" },
    { id: 4, src: "/warehouse-4.png", alt: "Modern cityscape four" },
    { id: 5, src: "/warehouse-5.png", alt: "Modern cityscape five" },
    { id: 6, src: "/warehouse-6.png", alt: "Modern cityscape six" },
  ];

  const VISIBLE_ITEMS = 2;
  const AUTO_SCROLL_INTERVAL = 3000;

  const images: ImageItem[] = [
    ...originalImages,
    ...originalImages.slice(0, VISIBLE_ITEMS),
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const trackRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useLayoutEffect(() => {
    if (!trackRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, {
        xPercent: "-=50",
        duration: 0.8,
        ease: "power3.inOut",
        onComplete: () => {
          if (activeIndex === originalImages.length - 1) {
            gsap.set(trackRef.current, { xPercent: 0 });
            setActiveIndex(0);
          }
        },
      });
    }, trackRef);

    return () => ctx.revert();
  }, [activeIndex, originalImages.length]);

  useEffect(() => {
    if (isHovered) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, AUTO_SCROLL_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col items-center py-12 px-4 md:px-0">
      <div
        className="max-w-7xl w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div ref={trackRef} className="flex w-full">
          {images.map((image: ImageItem, index: number) => (
            <div key={`${image.id}-${index}`} className="w-1/2 flex-shrink-0">
              <div className="p-4 h-[50vh]">
                <div className="bg-gray-100 rounded-[30px] overflow-hidden shadow-xl h-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {originalImages.map((_, index: number) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-3 w-3 rounded-full border border-gray-900 transition-colors duration-300 ${
              index === activeIndex ||
              index === activeIndex - originalImages.length
                ? "bg-gray-900"
                : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default GSAPImageCarousel;
