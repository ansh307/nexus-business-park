"use client";
import { footerLinks } from "@/constants";
import React from "react";

const SocialIcon = ({ path }: { path: React.ReactNode }) => (
  <svg
    className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    {path}
  </svg>
);

const FooterWithForm = () => {
  return (
    <section className="section-dark w-full py-20 md:py-28">
      <div className=" mx-auto px-6 md:px-8 lg:px-34 grid grid-cols-1 md:grid-cols-12 gap-16">
        {/* LEFT COLUMN — BRAND + CONTACT + NEWSLETTER */}
        <div className="md:col-span-5 space-y-8">
          {/* Brand Name */}
          <h2 className="text-light text-3xl md:text-4xl font-light tracking-wider">
            NEXUS BUSINESS PARK
          </h2>

          {/* Contact */}
          <div className="space-y-1 text-light/80 text-sm md:text-base">
            <p>Email: info@nexusbusinesspark.com.au</p>
            <p>Phone: +61 488 823 327</p>
          </div>

          {/* Newsletter */}
          <div className="pt-6 space-y-4">
            <p className="text-light text-sm md:text-base">
              Subscribe to our Newsletter
            </p>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="First name*"
                className="w-full bg-light text-dark rounded-full px-5 py-3 outline-none"
              />

              <input
                type="email"
                placeholder="Email*"
                className="w-full bg-light text-dark rounded-full px-5 py-3 outline-none"
              />
            </div>

            <p className="text-muted text-xs max-w-sm">
              By submitting this form, you agree to receive communications from
              Nexus Business Park.
            </p>

            <button className="mt-4 px-8 py-2 rounded-full border border-light text-light text-sm hover:bg-light hover:text-dark transition-all">
              Submit
            </button>
          </div>
        </div>

        {/* RIGHT — NAVIGATION */}
        <div className="md:col-span-5 md:col-start-7 grid grid-cols-2 md:grid-cols-3 gap-10">
          <div className="space-y-3">
            <p className="text-light font-semibold text-sm tracking-wide">
              PROJECT
            </p>
            <ul className="space-y-2 text-light/80 text-sm">
              <li>Overview</li>
              <li>Warehouses</li>
              <li>Location</li>
              <li>Amenities</li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-light font-semibold text-sm tracking-wide">
              RESOURCES
            </p>
            <ul className="space-y-2 text-light/80 text-sm">
              <li>Brochure</li>
              <li>Floor Plans</li>
              <li>Construction Updates</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-light font-semibold text-sm tracking-wide">
              COMPANY
            </p>
            <ul className="space-y-2 text-light/80 text-sm">
              <li>Developer</li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>Privacy Policy</li>
              <li>Disclaimer</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className=" mx-auto px-6 md:px-8 lg:px-34 mt-16 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Copyright */}
        <p className="text-light/60 text-xs">
          © 2025 Nexus Business Park · All Rights Reserved
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-6 text-light">
          <p className="text-light/70 text-sm">Connect with us</p>

          <a href="#" className="hover:text-accent-brass transition">
            <i className="fa-brands fa-instagram text-xl"></i>
          </a>

          <a href="#" className="hover:text-accent-brass transition">
            <i className="fa-brands fa-facebook text-xl"></i>
          </a>

          <a href="#" className="hover:text-accent-brass transition">
            <i className="fa-brands fa-linkedin text-xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FooterWithForm;
