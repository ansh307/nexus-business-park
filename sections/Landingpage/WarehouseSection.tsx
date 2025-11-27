"use client";

import Image from "next/image";

export default function WarehouseShowcase() {
  return (
    <section className="md:px-12 lg:px-34 section-dark py-28 ">
      <div className=" mx-auto flex flex-col gap-14">
        {/* Top Large Image */}
        <div className="w-full rounded-[32px] overflow-hidden shadow-lg">
          <div className="relative w-full h-[250px] sm:h-[380px] md:h-[480px] lg:h-[400px]">
            <Image
              src="/warehouse-6.png"
              alt="Modern Warehouse Space"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-8">
          {/* Left Text Box */}
          <div className="rounded-[32px] bg-brand p-10  items-center justify-center min-h-[200px] sm:min-h-[260px] md:min-h-[420px] shadow-md">
            <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold text-slate leading-tight">
              Affordable <br /> Warehouse Space
            </h3>
            <p className="text-slate mt-4 ">
              Discover our affordable warehouse space options. Whether you're
              looking for a warehouse to store your inventory or a warehouse to
              rent out, we have the perfect space for you.
            </p>
          </div>

          {/* Right Image */}
          <div className="rounded-[32px] overflow-hidden shadow-lg">
            <div className="relative w-full h-[250px] sm:h-[320px] md:h-[440px] lg:h-[520px]">
              <Image
                src="/warehouse-3.png"
                alt="Warehouse Exterior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
