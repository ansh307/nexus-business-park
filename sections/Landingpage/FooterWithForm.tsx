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
    <div className="font-sans w-full">
      {/* HERO BANNER */}
      <div className="relative h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] w-full bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2613&auto=format&fit=crop"
          alt="Aerial City View"
          className="w-full h-full object-cover opacity-60"
        />

        {/* RESPONSIVE FORM BLOCK */}
        <div className="absolute left-0 right-0 -bottom-60 sm:-bottom-56 md:-bottom-52 lg:-bottom-48 px-3 sm:px-4 z-10">
          <div
            className="
                        w-full 
                        max-w-full 
                        sm:max-w-[95%] 
                        md:max-w-4xl 
                        lg:max-w-4xl 
                        xl:max-w-5xl
                        mx-auto 
                        bg-white 
                        rounded-2xl 
                        shadow-2xl 
                        py-16 sm:py-20 md:py-24 lg:py-28
                        px-4 sm:px-6 md:px-10
                    "
          >
            {/* Title */}
            <h1
              className="
                            text-2xl 
                            sm:text-3xl 
                            md:text-4xl 
                            font-extrabold 
                            text-gray-900 
                            text-center 
                            mb-6 sm:mb-8
                        "
            >
              Contact Us
            </h1>

            {/* FORM */}
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {/* NAME */}
              <div className="flex flex-col space-y-1">
                <label className="text-gray-700 text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  className="border border-gray-300 px-4 py-3 rounded-lg text-sm focus:ring-2 focus:ring-orange-400 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              {/* EMAIL */}
              <div className="flex flex-col space-y-1">
                <label className="text-gray-700 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  className="border border-gray-300 px-4 py-3 rounded-lg text-sm focus:ring-2 focus:ring-orange-400 outline-none transition-all"
                  placeholder="Your email"
                />
              </div>

              {/* PHONE */}
              <div className="flex flex-col space-y-1">
                <label className="text-gray-700 text-sm font-medium">
                  Phone
                </label>
                <input
                  type="text"
                  className="border border-gray-300 px-4 py-3 rounded-lg text-sm focus:ring-2 focus:ring-orange-400 outline-none transition-all"
                  placeholder="Phone number"
                />
              </div>

              {/* SUBJECT */}
              <div className="flex flex-col space-y-1">
                <label className="text-gray-700 text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  className="border border-gray-300 px-4 py-3 rounded-lg text-sm focus:ring-2 focus:ring-orange-400 outline-none transition-all"
                  placeholder="What is this about?"
                />
              </div>

              {/* MESSAGE */}
              <div className="sm:col-span-2 flex flex-col space-y-1">
                <label className="text-gray-700 text-sm font-medium">
                  Message
                </label>
                <textarea
                  rows={8}
                  className="border border-gray-300 px-4 py-3 rounded-lg text-sm focus:ring-2 focus:ring-orange-400 outline-none transition-all resize-none"
                  placeholder="Write your message"
                ></textarea>
              </div>

              {/* BUTTON */}
              <div className="sm:col-span-2 flex justify-center mt-4">
                <button
                  type="submit"
                  className="
                                        bg-orange-500 
                                        text-white 
                                        text-base 
                                        font-semibold 
                                        px-10
                                        py-4 
                                        rounded-full 
                                        hover:bg-orange-600 
                                        transition-all 
                                        shadow-lg
                                        hover:shadow-xl
                                        transform
                                        hover:-translate-y-0.5
                                    "
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer
        className="
                bg-neutral-900 
                pt-[440px] sm:pt-[420px] md:pt-[400px] lg:pt-[360px] 
                pb-14 
                px-5 sm:px-6 md:px-12 
                w-full
            "
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          {/* LINKS GRID */}

          <div
            className="
                        grid 
                        grid-cols-2 
                        sm:grid-cols-3 
                        md:grid-cols-4 
                        gap-y-12 
                        gap-x-6 
                        mb-20 
                        text-sm
                    "
          >
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="text-gray-400 uppercase font-bold text-md mb-5">
                  {section.title}
                </h3>
                <ul className="space-y-3 text-gray-300">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* BOTTOM */}
          <div
            className="
                        flex 
                        flex-col 
                        sm:flex-row 
                        justify-between 
                        items-center 
                        border-t 
                        border-gray-800 
                        pt-6 
                        text-xs 
                        text-gray-500
                    "
          >
            <div className="mb-4 sm:mb-0 space-x-4">
              <span>© 2025 Image Property</span>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Sitemap
              </a>
            </div>

            <div className="flex space-x-5">
              <SocialIcon
                path={
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                }
              />
              <SocialIcon
                path={
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01 M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0z" />
                }
              />
              <SocialIcon
                path={
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
                }
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterWithForm;
