"use client";
import { footerLinks, scrollTargets } from "@/constants";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
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
type NavTarget = {
  id?: string;
  page?: string;
};

const FooterWithForm = () => {
  const router = useRouter();
  const pathname = usePathname();
  const scrollOrNavigate = (id?: string, targetPage: string = "/") => {
    if (id && pathname === targetPage) {
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
      return;
    }

    if (id) localStorage.setItem("scrollTo", id);
    router.push(targetPage);
  };

  return (
    <section className="section-dark w-full py-20 md:pt-28 md:pb-20 border-t border-muted-top ">
      <div className=" mx-auto px-6 md:px-8 lg:px-34 grid grid-cols-1 md:grid-cols-12 gap-16">
        {/* LEFT COLUMN — BRAND + CONTACT + NEWSLETTER */}
        <div className="md:col-span-5 space-y-8">
          {/* Brand Name */}
          {/* <h2 className="text-light text-3xl md:text-4xl font-light tracking-wider">
            NEXUS BUSINESS PARK
          </h2> */}
          <Image
            src="/logo-2.png"
            alt="Company Logo"
            width={170}
            height={50}
            className="object-contain"
          />

          {/* Contact */}
          <div className="space-y-1 text-light/80 text-sm md:text-base">
            <p>Email: info@nexusbusinesspark.com.au</p>
            <p>Phone: +61 123 823 327</p>
          </div>

          {/* Newsletter */}
          {/* <div className="pt-6 space-y-4 max-w-md">
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
          </div> */}
        </div>

        <div className="md:col-span-5 md:col-start-7 grid grid-cols-2 md:grid-cols-2 gap-10">
          {footerLinks.map((group, index) => (
            <div className="space-y-4" key={index}>
              <p className="text-light font-semibold text-sm tracking-wide">
                {group.title}
              </p>

              <ul className="space-y-2 text-light/80 text-sm">
                {group.links.map((item, i) => {
                  const target: NavTarget = scrollTargets[item] ?? {
                    page: "/",
                  };

                  return (
                    <li key={i}>
                      <button
                        onClick={() =>
                          scrollOrNavigate(target.id, target.page || "/")
                        }
                        className="text-left hover:text-light transition cursor-pointer"
                      >
                        {item}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className=" mx-auto px-6 md:px-8 lg:px-34 mt-24 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Copyright */}
        <p className="text-light/60 text-xs">
          © 2025 Nexus Business Park · All Rights Reserved
        </p>

        {/* Social Icons */}
        {/* <div className="flex items-center gap-6 text-light">
          <button
            onClick={() => router.push("/contact")}
            className="text-light/70 text-sm cursor-pointer"
          >
            Connect with us
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default FooterWithForm;
