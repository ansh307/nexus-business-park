"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ContactPage = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header section (Fade + slight drop)
      gsap.fromTo(
        ".contact-header",
        {
          x: -40,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        }
      );

      // Back button (drops in)
      gsap.fromTo(
        ".contact-back-btn",
        {
          x: -40,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          delay: 0.1,
          ease: "power3.out",
        }
      );

      // Left-side cards sliding from the left
      gsap.fromTo(
        ".contact-cards-wrapper > div",
        {
          x: -120,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.3,
          stagger: 0.2,
          delay: 0.3,
          ease: "power4.out",
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={wrapperRef} className="section-dark w-full py-20 md:py-28">
      <div className="flex lg:flex-row flex-col gap-10 lg:gap-0 justify-between mx-auto px-6 md:px-8 lg:px-34">
        <div className="order-2 lg:order-1 space-y-6 contact-header opacity-0">
          {/* Brand Name */}
          <h2 className="text-5xl font-semibold tracking-tight text-light  md:text-4xl ">
            NEXUS BUSINESS PARK
          </h2>

          {/* Contact */}
          <div className="space-y-1 text-light/80 text-sm md:text-base">
            <p>Email: info@nexusbusinesspark.com.au</p>
            <p>Phone: +61 488 823 327</p>
          </div>

          {/* Physical Address */}
          <div className="space-y-1 text-light/90 text-sm md:text-base">
            <p className="font-semibold text-light">Physical Address:</p>
            <p>Officer South</p>
          </div>
        </div>

        {/* back button */}
        <div className="order-1 lg:order-2 h-fit flex  justify-end ">
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
      </div>

      {/* CONTACT FORM & DETAILS */}
      <div className="mx-auto px-6 md:px-8 lg:px-34 grid grid-cols-1 md:grid-cols-12 gap-16 mt-16 ">
        {/* LEFT COLUMN */}
        <div className="md:col-span-5 space-y-10 ">
          {/* SALE CONTACT CARDS */}
          <div className="space-y-4 contact-cards-wrapper ">
            <div className="bg-[#1a1a1a] p-5 rounded-xl text-light space-y-2">
              <p className="font-semibold text-lg">Nexus Business Park Sales</p>
              <img
                src="/sale-1.png"
                alt="Agent"
                className="w-32 h-32 object-cover rounded-full"
              />
              <p className="text-sm">Tim Cooney, CVA</p>
              <p className="text-sm">
                <span className="font-semibold">E: </span>
                <a href="mailto:tim.cooney@cva.melbourne">
                  tim.cooney@cva.melbourne
                </a>
              </p>
              <p className="text-sm">
                <span className="font-semibold">P: </span>0468 860 737
              </p>
            </div>

            {/* <div className="border-t border-gray-300/20" /> */}

            <div className="bg-[#1a1a1a] p-5 rounded-xl text-light space-y-2">
              <p className="font-semibold text-lg">Sales Enquiries</p>
              <p className="text-sm">General Sales Support</p>
              <p className="text-sm">E: sales@nexus.com.au</p>
              <p className="text-sm">P: +61 400 123 456</p>
            </div>

            {/* <div className="border-t border-gray-300/20" /> */}

            <div className="bg-[#1a1a1a] p-5 rounded-xl text-light space-y-2">
              <p className="font-semibold text-lg">Commercial Team</p>
              <p className="text-sm">E: commercial@nexus.com.au</p>
              <p className="text-sm">P: +61 411 555 987</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="md:col-span-7 space-y-8">
          {/* <p className="text-light  text-lg md:text-xl font-medium  mt-40">
            Make an Enquiry
          </p> */}

          <div className="space-y-10 ">
            {/* First Name */}
            <div>
              <label className="text-light text-sm">First Name *</label>
              <input
                type="text"
                placeholder="E.g. John"
                className="w-full border-b border-muted text-light  pr-5 py-3 outline-none mt-1"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-light text-sm">Email Address *</label>
              <input
                type="email"
                placeholder="E.g. john@doe.com"
                className="w-full border-b border-muted text-light  pr-5 py-3 outline-none mt-1"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-light text-sm">Phone *</label>
              <div className="flex gap-3 mt-1">
                <input
                  type="text"
                  placeholder="+61 412 345 678"
                  className="flex-1 border-b border-muted text-light  pr-5 py-3 outline-none"
                />
              </div>
            </div>

            {/* Timeline */}
            <div>
              <label className="text-light text-sm">
                What is your timeline to purchase? *
              </label>
              <select className="w-full border-b border-muted text-light  pr-5 py-3 outline-none mt-1">
                <option className="text-dark bg-light">0-3 months</option>
                <option className="text-dark bg-light">3-6 months</option>
                <option className="text-dark bg-light">6-12 months</option>
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className="text-light text-sm">
                What is your budget? *
              </label>
              <select className="w-full border-b border-muted text-light  pr-5 py-3 outline-none mt-1">
                <option className="text-dark bg-light">$500k–$600k</option>
                <option className="text-dark bg-light">$600k–$800k</option>
                <option className="text-dark bg-light">$800k–$1m</option>
              </select>
            </div>

            {/* Finance Secured */}
            <div>
              <label className="text-light text-sm">
                Do you have finance secured? *
              </label>
              <div className="flex items-center gap-6 mt-2 text-light">
                <label className="flex items-center gap-2">
                  <input type="radio" name="finance" className="" />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="finance" />
                  No
                </label>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-light text-sm">Message</label>
              <textarea
                rows={5}
                className="w-full border-b border-muted text-light  pr-5 py-3 outline-none mt-1 resize-none"
                placeholder="Type your message here..."
              ></textarea>
            </div>

            {/* Button */}
            <button className="mt-4 px-10 py-3 w-56 rounded-full border border-light text-light text-sm hover:bg-light hover:text-dark transition-all">
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
